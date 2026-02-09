# Project Style Guide

## Purpose

This style guide defines the coding conventions, architectural patterns, and development practices for adamrdrew.github.io. It governs *how* we build the site — not *what* must be true (those are laws). These conventions promote consistency, maintainability, and code clarity. All code contributions should follow this guide. During review, deviations from style should be flagged and corrected.

This guide is enforced during Overseer review and should be consulted during both planning (Scribe) and implementation (Builder).

---

## Project Structure

### Directory Layout

The project follows Astro's conventional structure:

```
/
├── src/
│   ├── components/     # Reusable UI components
│   ├── layouts/        # Page layouts with <slot />
│   ├── pages/          # File-system routed pages (L01, L09)
│   ├── content/        # Markdown/MDX content collections (L02)
│   │   ├── config.ts   # Collection schemas (required)
│   │   ├── blog/       # Blog post content
│   │   └── projects/   # Portfolio project content
│   ├── lib/            # Utility functions and shared logic
│   └── styles/         # Global styles and design tokens
├── public/             # Static assets (L06)
├── .ushabti/           # Ushabti system directory
└── astro.config.mjs    # Build configuration (L08)
```

### Module Organization

**Flat by default, nest by feature when warranted.**

For a small portfolio site, a flat `src/components/` directory is sufficient. However, if a page or feature has components used nowhere else, co-locate them:

- **Good:** `src/components/projects/project-name/UniqueComponent.astro`
- **Avoid:** Dumping all components into a single flat directory when the site grows beyond ~15 components
- **Don't over-organize:** Don't create nested directories for 3 components

Use judgment. Optimize for discoverability, not rigid hierarchy.

---

## Language & Tooling Conventions

### Languages

- **Astro** for pages, layouts, and components (`.astro` files)
- **TypeScript** for utilities and configuration
- **Markdown** for blog posts and content (via content collections)
- **MDX** used sparingly, only when richer layouts genuinely require component embedding

### Tooling

- **Astro CLI** for development (`astro dev`), builds (`astro build`), and type checking (`astro check`)
- **npm** for dependency management
- **Zod** for content collection schema validation (required by L02)
- **GitHub Actions** for CI/CD deployment to GitHub Pages

### Configuration

- All build configuration lives in `astro.config.mjs` (L08)
- Content collection schemas live in `src/content/config.ts` (L02)
- Do not create configuration files outside these locations

---

## Architectural Patterns

### Preferred

#### Components Should Be Dumb and Composable

A component receives props, renders HTML, and does nothing else. No data fetching. No conditional rendering based on URL or global state. No decisions about what content to show.

**Good:**
```astro
---
// ProjectCard.astro
interface Props {
  title: string;
  description: string;
  imageUrl: string;
}
const { title, description, imageUrl } = Astro.props;
---
<article class="project-card">
  <img src={imageUrl} alt={title} />
  <h2>{title}</h2>
  <p>{description}</p>
</article>
```

**Bad:**
```astro
---
// ProjectCard.astro - DON'T DO THIS
import { getCollection } from 'astro:content';
const projects = await getCollection('projects');
const featured = projects.filter(p => p.data.featured);
---
{featured.map(project => (
  <article>...</article>
))}
```

Pages query data. Components display it. This keeps components reusable and pages easy to reason about.

#### One Layout Per Concern, Composed Through Nesting

A `BaseLayout.astro` handles the HTML shell: `<html>`, `<head>`, meta tags, global styles, navigation, footer.

A `BlogPostLayout.astro` wraps `BaseLayout` and adds blog-specific structure: title, date, reading time, table of contents.

**Good:**
```astro
---
// BlogPostLayout.astro
import BaseLayout from './BaseLayout.astro';
interface Props {
  title: string;
  publishDate: Date;
  readingTime: number;
}
const { title, publishDate, readingTime } = Astro.props;
---
<BaseLayout title={title}>
  <article>
    <header>
      <h1>{title}</h1>
      <time>{publishDate.toLocaleDateString()}</time>
      <span>{readingTime} min read</span>
    </header>
    <slot />
  </article>
</BaseLayout>
```

**Bad:**
```astro
---
// MonolithLayout.astro - DON'T DO THIS
interface Props {
  isBlogPost?: boolean;
  isProject?: boolean;
  title: string;
  publishDate?: Date;
  // ... more optional fields
}
---
<html>
  <body>
    {isBlogPost && <div class="blog-header">...</div>}
    {isProject && <div class="project-header">...</div>}
    <slot />
  </body>
</html>
```

Don't make one layout handle every case with conditionals. Nest layouts instead.

#### Pages Are Thin Orchestrators

A page file should mostly:
1. Fetch data in frontmatter
2. Pass data to components
3. Render

**Good:**
```astro
---
// src/pages/projects.astro
import { getCollection } from 'astro:content';
import BaseLayout from '../layouts/BaseLayout.astro';
import ProjectCard from '../components/ProjectCard.astro';

const projects = await getCollection('projects');
const sortedProjects = projects.sort((a, b) =>
  b.data.date.getTime() - a.data.date.getTime()
);
---
<BaseLayout title="Projects">
  <section>
    {sortedProjects.map(project => (
      <ProjectCard {...project.data} />
    ))}
  </section>
</BaseLayout>
```

If frontmatter is getting long (more than ~20 lines of logic), extract a utility function to `src/lib/`. If the template is deeply nested (more than 3-4 levels), extract a component.

#### Prefer Semantic HTML Over Div Soup

Use `<article>`, `<section>`, `<nav>`, `<aside>`, `<header>`, `<footer>`, `<main>`. This improves accessibility and makes templates self-documenting.

**Good:**
```html
<article class="project-card">
  <header>
    <h2>Project Title</h2>
  </header>
  <section>
    <p>Description...</p>
  </section>
</article>
```

**Bad:**
```html
<div class="card">
  <div class="card-header">
    <div class="title">Project Title</div>
  </div>
  <div class="card-body">
    <p>Description...</p>
  </div>
</div>
```

Semantic elements communicate structure and intent. They are not just accessibility checkboxes.

#### Keep Styles Close to Components

Use Astro's scoped `<style>` tags as the default. Styles in a component should affect only that component (L07).

**Good:**
```astro
---
// ProjectCard.astro
---
<article class="project-card">
  ...
</article>

<style>
  .project-card {
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 1.5rem;
  }
</style>
```

If the same styles appear in multiple components, extract shared **design tokens** (colors, spacing, typography) into a global CSS file or CSS custom properties. Do **not** extract structural or layout styles into a global stylesheet.

**Shared tokens (good):**
```css
/* src/styles/tokens.css */
:root {
  --color-primary: #2563eb;
  --spacing-md: 1.5rem;
  --font-heading: 'Inter', sans-serif;
}
```

**Shared layout styles (bad):**
```css
/* Don't do this */
.card {
  border: 1px solid var(--border-color);
  padding: var(--spacing-md);
}
```

Resist building a big global stylesheet. That path leads to specificity wars and unmaintainable CSS.

#### Markdown Content Should Be Content Only

Blog posts and portfolio content should be clean Markdown with frontmatter metadata. No HTML. No component imports. No layout hacks.

**Good:**
```md
---
title: "Building a Personal Site with Astro"
publishDate: 2026-02-09
tags: ["astro", "web-dev"]
---

# Building a Personal Site with Astro

Astro is a modern static site generator...
```

**Bad:**
```md
---
title: "Building a Personal Site with Astro"
---

<div class="custom-layout">

# Building a Personal Site with Astro

<CustomComponent />

</div>
```

Writing a blog post should feel like writing in a text editor, not coding. If richer layouts are needed, handle it in the rendering layer or use MDX sparingly.

#### Frontmatter Is for Data, Not Logic

Keep frontmatter scripts focused on:
- Imports
- Data fetching (queries)
- Simple variable assignment

**Good:**
```astro
---
import { getCollection } from 'astro:content';
import Layout from '../layouts/Layout.astro';

const posts = await getCollection('blog');
const featured = posts.filter(p => p.data.featured);
---
```

**Bad:**
```astro
---
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');
const featured = [];
for (const post of posts) {
  if (post.data.featured) {
    const tags = post.data.tags || [];
    const hasTag = tags.some(tag => tag === 'featured');
    if (hasTag) {
      featured.push({
        ...post,
        excerpt: post.data.description.slice(0, 100) + '...',
        readingTime: Math.ceil(post.body.split(' ').length / 200)
      });
    }
  }
}
featured.sort((a, b) => b.data.date - a.data.date);
---
```

If writing conditional logic, loops, or transformations spanning more than ~5 lines, extract a utility function to `src/lib/`. Frontmatter should read like a setup block, not a program.

#### Use Content Collection Schemas as Contracts

Define frontmatter fields strictly in `src/content/config.ts` (required by L02). Required fields are required. Optional fields have defaults.

**Good:**
```ts
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
```

If you create a blog post and forget a required field, the build fails immediately (L12). This is good. Treat the schema like an API contract for your content. Type safety at build time prevents runtime errors.

#### Prefer Static Over Dynamic

If you can solve something at build time, do it at build time. Every bit of work done during the build is work the user's browser doesn't have to do.

**Build-time (preferred):**
- Calculate reading times in frontmatter
- Generate navigation lists from the file system
- Build tag pages from content collections
- Pre-render all pages to static HTML

**Client-side (only when necessary):**
- Interactive UI (modals, dropdowns, search)
- Dynamic content that changes per user
- Real-time updates

Astro components are server-rendered by default and ship zero JavaScript (L03). This is the correct default. Only use `client:` directives on framework components when you genuinely need interactivity.

### Discouraged / Forbidden

#### Global State in Components

Astro components render once at build time (L03). They have no lifecycle, no hooks, no state. Do not attempt to use global variables or module-level state to share data between components.

**Forbidden:**
```astro
---
// DON'T DO THIS
let sharedCounter = 0; // This won't work as expected
---
```

Pass data through props. If you need shared logic, extract a utility function.

#### Router Configuration

Astro has no router to configure (L01). File-system routing is absolute. Do not attempt to override it.

**Forbidden:**
- Custom routing configuration files
- Middleware that changes routing behavior
- Libraries that replace Astro's routing

#### Manual Markdown Parsing

Do not import `.md` files directly or parse Markdown manually (L10). Use the content collections API.

**Forbidden:**
```ts
// DON'T DO THIS
import rawMarkdown from './post.md?raw';
```

**Required:**
```ts
import { getCollection, getEntry } from 'astro:content';
const post = await getEntry('blog', 'post-slug');
const { Content } = await post.render();
```

#### Layout Conditionals Instead of Composition

Do not create one layout with conditionals for every page type. Compose layouts through nesting instead.

**Discouraged:** `if (isBlogPost) { ... } else if (isProject) { ... }`

**Preferred:** `BlogPostLayout` wraps `BaseLayout`, `ProjectLayout` wraps `BaseLayout`

#### Client-Side Rendering Without Justification

Do not use `client:load` or other hydration directives without a clear reason. If a component doesn't need interactivity, don't ship JavaScript for it.

**Default:** Server-rendered Astro component (zero JS)
**Only if needed:** Framework component with `client:*` directive

---

## Naming Conventions

### Components

Use PascalCase. Name components for what they **are**, not how they **look**.

**Good:**
- `ProjectHighlight.astro`
- `BlogPostCard.astro`
- `NavigationMenu.astro`

**Bad:**
- `BigCardWithImage.astro`
- `BlueGradientBox.astro`
- `Section2.astro`

Visual design changes. Names based on appearance create confusion during redesigns. Names based on purpose remain accurate.

### CSS Classes

Use kebab-case. Follow the same principle: name for purpose, not appearance.

**Good:**
```css
.hero-section { }
.project-card { }
.site-navigation { }
```

**Bad:**
```css
.blue-gradient-box { }
.big-text { }
.section-2 { }
```

### Files and Directories

- **Pages:** `about.astro`, `projects.astro`, `blog/[slug].astro`
- **Layouts:** `BaseLayout.astro`, `BlogPostLayout.astro`
- **Components:** `ProjectCard.astro`, `TagList.astro`
- **Utilities:** `formatDate.ts`, `calculateReadingTime.ts`

Use PascalCase for components and layouts. Use camelCase for utility functions.

---

## Testing Strategy

### What Must Be Tested

At minimum:
- **Build succeeds:** `astro build` must pass (L12)
- **Type checking passes:** `astro check` must pass (L12)
- **Content validation works:** Intentionally break a content schema and verify build fails

### Manual Testing

For a portfolio site, manual testing is acceptable:
- Verify pages render correctly
- Check responsive layouts on mobile/tablet/desktop
- Test navigation and links
- Verify content displays as expected

### Where Tests Live

If unit tests are added (optional for a portfolio site):
- Place tests next to the code they test: `src/lib/formatDate.test.ts`
- Or in a `src/__tests__/` directory

### Acceptable Tradeoffs

For a personal portfolio site:
- Manual testing is sufficient
- Automated E2E tests are optional
- Focus testing effort on build-time validation (schemas, types)

If the site grows to include dynamic features or complex logic, revisit this strategy.

---

## Error Handling & Observability

### Build-Time Errors

Astro provides excellent build-time error messages. Use them.

- **Schema violations:** If a content file is missing required fields, the build fails with a clear message. Fix the content.
- **Type errors:** If `astro check` reports type errors, fix them before proceeding.
- **Import errors:** If a component import is missing, the build fails. Fix the import.

Do not work around build errors. Fix the root cause.

### Logging

For build-time debugging, use `console.log()` in frontmatter. Logs appear during `astro dev` and `astro build`.

**Good:**
```astro
---
const posts = await getCollection('blog');
console.log(`Found ${posts.length} blog posts`);
---
```

Remove logs before committing unless they provide value during builds.

### Runtime Errors

Since the site is static and server-rendered:
- There is no server-side runtime (no API routes for this project)
- Client-side errors are unlikely (zero JavaScript by default)

If adding interactive components with JavaScript:
- Use `console.error()` for debugging
- Handle errors in `try/catch` blocks
- Provide fallback UI for error states

### Metrics / Tracing

Not applicable for a static portfolio site. If analytics are needed, use a third-party service (e.g., Plausible, Fathom).

---

## Performance & Resource Use

### Expectations

- **Page weight:** Target < 100kb per page (HTML + CSS + JS)
- **Time to Interactive (TTI):** < 1s on fast 3G
- **Lighthouse score:** 95+ for Performance, Accessibility, Best Practices, SEO

### Build Performance

Build times should remain under 10 seconds for a portfolio site. If builds become slow:
- Check for large images in `src/` that should be in `public/`
- Verify no unintended content processing
- Review integration configuration

### Asset Optimization

- **Images:** Use `public/` for static images, or import from `src/` for processing (L06)
- **Fonts:** Prefer system fonts or subset web fonts
- **CSS:** Scoped styles are automatically optimized. Global styles should be minimal
- **JavaScript:** Ship zero JS by default (L03). Only add when necessary

### Common Pitfalls

- **Shipping unnecessary JavaScript:** Use `client:` directives only when needed
- **Large images:** Optimize images before adding to `public/`
- **Global CSS bloat:** Keep global styles to design tokens only
- **Over-fetching content:** Query only the data you need in pages

---

## Review Checklist

Use this checklist during Overseer review. Every item should be verified before marking a Phase GREEN.

### Correctness
- [ ] `astro check` passes (L12)
- [ ] `astro build` succeeds (L12)
- [ ] All pages render without errors
- [ ] Content collections use schemas defined in `src/content/config.ts` (L02)

### Code Quality
- [ ] Components are dumb (props in, HTML out)
- [ ] Pages fetch data in frontmatter, not in components
- [ ] Layouts compose through nesting, not conditionals
- [ ] Frontmatter contains only imports, queries, and simple assignments
- [ ] Complex logic is extracted to `src/lib/` utilities

### Naming & Structure
- [ ] Components named for purpose, not appearance
- [ ] CSS classes named for purpose, not appearance
- [ ] Files organized by feature when appropriate
- [ ] No helper components in `src/pages/` (L09)

### Styling
- [ ] Scoped styles used by default
- [ ] Global styles limited to design tokens
- [ ] Semantic HTML used (`<article>`, `<section>`, etc.)

### Performance
- [ ] No unnecessary JavaScript shipped
- [ ] Assets in correct location (`public/` vs `src/`)
- [ ] Build output is optimized

### Content
- [ ] Markdown content is clean (no HTML or component imports)
- [ ] Frontmatter in content files matches schema

### Documentation
- [ ] Code changes affecting documented systems have corresponding doc updates (L15, L17)
- [ ] Documentation is accurate and reconciled (L16, L17)

### Laws Compliance
- [ ] All 17 laws verified (see `.ushabti/laws.md`)

If any item fails, the Phase cannot be marked GREEN. Address failures before completion.

---

## Summary

This style guide defines conventions for building adamrdrew.github.io with Astro. Key principles:

1. **Components are dumb and composable** — props in, HTML out
2. **Layouts compose through nesting** — one concern per layout
3. **Pages are thin orchestrators** — fetch data, pass to components
4. **Co-locate related things** — organize by feature when it makes sense
5. **Prefer semantic HTML** — self-documenting markup
6. **Keep styles scoped** — extract tokens, not layout
7. **Markdown is content only** — no HTML or components
8. **Frontmatter is for data** — extract complex logic
9. **Name for purpose** — not appearance
10. **Content schemas are contracts** — enforce at build time
11. **Prefer static over dynamic** — build time over runtime

These conventions are enforced during review and should guide all planning and implementation work.
