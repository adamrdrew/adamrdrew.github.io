# Phase 0002: Basic Site Setup

## Intent

Establish the core pages (About, Blog listing) and blog content infrastructure using Astro's content collections system. Create a simple navigation structure to link the home, about, and blog pages together.

This phase builds on the scaffolding from Phase 0001, transforming the single hello world page into a navigable site with multiple pages and a blog section. The About page introduces Adam and his work. The blog section provides a foundation for publishing articles and posts. Navigation connects everything together.

Without this phase, the site remains a single hello world page with no identity, no content structure, and no way to share information or writing.

## Scope

**In scope:**
- BaseLayout.astro with HTML shell, navigation component, and `<slot />` for child content
- Navigation with links to Home, About, and Blog pages
- src/pages/about.astro displaying Adam's bio (name, title, experience, interests, employer)
- src/content/config.ts defining the blog collection schema with required fields
- src/content/blog/ directory structure
- One sample blog post (.md file) with valid frontmatter demonstrating the schema
- src/pages/blog/index.astro to query and display all blog posts
- Verification that content collections work and quality gates pass

**Out of scope:**
- Comprehensive styling or design system (minimal acceptable styling only)
- Individual blog post detail pages (src/pages/blog/[slug].astro) — deferred to future phase
- Blog features like tags, categories, pagination, or search
- Additional portfolio sections (projects, talks, etc.)
- Contact form or social media integration
- GitHub Actions deployment workflow
- RSS feed or sitemap generation

## Constraints

**Laws:**
- **L01** — File-system routing requires .astro files in src/pages/ for each route
- **L02** — Content collections must be defined in src/content/config.ts with Zod schema
- **L05** — Layouts must include `<slot />` or content will not render
- **L09** — src/pages/ contains only pages, no helper components
- **L10** — Markdown content must be accessed through getCollection()/getEntry() API
- **L12** — astro check and astro build must pass before phase completion

**Style:**
- Components should be dumb and composable (props in, HTML out)
- Layouts compose through nesting, one layout per concern
- Pages are thin orchestrators (fetch data in frontmatter, pass to components)
- Prefer semantic HTML (`<article>`, `<section>`, `<nav>`, etc.)
- Content collection schemas are contracts enforced at build time
- Markdown content should be clean (no HTML, no component imports)
- Frontmatter is for data, not complex logic

## Acceptance Criteria

1. **BaseLayout exists and works**: src/layouts/BaseLayout.astro exists with complete HTML shell (`<html>`, `<head>`, `<body>`), includes `<slot />`, and has navigation with functional links to Home (`/`), About (`/about`), and Blog (`/blog`)

2. **About page complete**: src/pages/about.astro exists, uses BaseLayout, displays bio content including: Adam Drew as name, "senior software engineer" as title, "30+ years of experience" mentioned, key interests (agentic AI development, open source, developer tools) listed, Red Hat as current employer

3. **Content collection schema defined**: src/content/config.ts exists and exports a blog collection with Zod schema requiring `title` (string), `publishDate` (date), and `description` (string) fields

4. **Blog content directory initialized**: src/content/blog/ directory exists and contains at least one valid Markdown blog post (.md file) with frontmatter matching the schema

5. **Blog listing page functional**: src/pages/blog/index.astro exists, uses BaseLayout, queries blog posts using `getCollection('blog')`, displays all posts with their titles, dates, and descriptions in a list or grid

6. **Navigation works**: Clicking navigation links successfully navigates between Home, About, and Blog pages without errors

7. **Quality gates pass**: `astro check` completes with no errors, `astro build` succeeds and produces dist/ output

## Risks / Notes

- The index page (hello world) will be updated to use BaseLayout for consistency, but its content will remain minimal for now. A proper home page with featured content is deferred.
- This phase intentionally omits blog post detail pages. The blog listing will show posts but not link to individual post pages yet. That functionality will come in a future phase.
- Styling will be minimal and functional. A comprehensive design system and visual polish are out of scope.
- The sample blog post is placeholder content to verify the content collections system works. Real blog posts will be added separately.
