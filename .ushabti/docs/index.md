# Project Documentation

> **Scaffold documentation** — This is minimal documentation created during project bootstrap. Run **Ushabti Surveyor** to generate comprehensive project documentation.

## Project Name

adamrdrew.github.io

## Description

Personal website for project portfolio, about me, and articles/posts built with Astro. Deployed to GitHub Pages via GitHub Actions.

## Styling Approach

The site uses **Tailwind CSS v3** for utility-first styling. All components and pages use Tailwind utility classes instead of custom CSS.

### Tailwind Configuration

- **File**: `tailwind.config.mjs`
- **Content paths**: Scans `.astro`, `.tsx`, `.ts`, `.jsx`, `.js`, `.md`, `.mdx` files in `src/`
- **Dark mode strategy**: `darkMode: 'media'` enables automatic theme detection via CSS `@media (prefers-color-scheme: dark)` queries
- **Typography**: System font stacks for sans and monospace

### Theme System

The site supports automatic light/dark mode switching based on the user's operating system preference. This is implemented using Tailwind's `media` dark mode strategy, which requires **zero JavaScript** and prevents flash of unstyled content (FOUC).

#### Color Palette

**Light Theme (default)**:
- Background colors: white, slate-50, slate-100
- Text colors: slate-900, slate-700, slate-500
- Accent colors: blue-600, violet-600, blue-700
- Border: slate-300

**Dark Theme** (applied via `dark:` utilities):
- Background colors: slate-900, slate-800, slate-700 (referenced as `background-dark-primary`, etc.)
- Text colors: slate-50, slate-300, slate-400 (referenced as `text-dark-primary`, etc.)
- Accent colors: blue-500, violet-500, blue-600 (referenced as `accent-dark-primary`, etc.)
- Border: slate-600 (referenced as `border-dark`)

#### How It Works

1. **CSS Media Queries**: Tailwind generates `@media (prefers-color-scheme: dark)` queries for all `dark:` variant utilities
2. **No JavaScript Required**: Theme detection happens entirely in CSS, aligned with **L03** (zero JavaScript by default)
3. **Automatic Switching**: Theme updates immediately when system preference changes, no page reload needed
4. **No FOUC**: Because detection is CSS-based, there is no flash of incorrect theme on page load

#### Component Implementation

All components use paired light/dark utilities:
- Light mode: `bg-background-primary text-text-primary`
- Dark mode: `dark:bg-background-dark-primary dark:text-text-dark-primary`

Every color utility that depends on theme has a corresponding `dark:` variant.

#### Why `media` Strategy

The `media` strategy was chosen over `class` strategy because:
- No JavaScript required for theme detection (aligns with **L03**)
- Respects user's system-wide preference automatically
- Prevents FOUC without inline scripts
- Simpler implementation (no toggle UI, no localStorage management)

This approach prioritizes respecting user preferences and shipping minimal JavaScript over providing manual theme override controls.

### Integration Configuration

Tailwind and React integrations are registered in `astro.config.mjs` (required by **L08**):

```javascript
integrations: [tailwind(), react()]
```

### Migration Rationale

Tailwind was adopted to:
1. Eliminate the need for custom CSS authoring
2. Provide a consistent design token system
3. Enable rapid UI development with utility classes
4. Maintain zero scoped `<style>` tags (per **L07**)

All pages and layouts use only Tailwind utilities. No scoped styles remain.

## Layout Components

### Footer Component

- **File**: `src/components/Footer.astro`
- **Type**: Static server-rendered component (ships zero JavaScript)
- **Purpose**: Site-wide footer with copyright and navigation links
- **Integration**: Imported in `src/layouts/BaseLayout.astro`, appears on all pages
- **Key Features**:
  - Dynamic copyright year calculated in frontmatter via `new Date().getFullYear()`
  - External link to GitHub profile (https://github.com/adamrdrew)
  - Internal link to Blog (/blog)
  - Responsive horizontal layout: stacked on mobile (`flex-col`), side-by-side on tablet+ (`sm:flex-row`)
- **Styling**:
  - Uses only Tailwind utility classes (per **L07**)
  - Matches Navigation component patterns: `hover:text-accent-primary`, `transition-colors duration-200`
  - Dark theme colors: `bg-background-secondary`, `border-border`, `text-text-muted`
  - Semantic HTML: `<footer>` element
- **Relevant Laws**:
  - **L03**: Footer is server-rendered with no client directives, ships zero JavaScript
  - **L07**: No scoped `<style>` tags, uses only Tailwind utilities
  - **L09**: Correctly placed in `src/components/`, not `src/pages/`

## Interactive Components

The site uses **Headless UI React** for accessible interactive components. Currently implemented:

### Navigation Component

- **File**: `src/components/Navigation.tsx`
- **Library**: Headless UI `Disclosure` component
- **Purpose**: Mobile-responsive navigation with hamburger menu
- **Hydration**: Uses `client:load` directive (required by **L03**)
- **Behavior**:
  - Desktop: Horizontal navigation links visible on `md` breakpoint and above
  - Mobile: Hamburger menu button that toggles slide-down panel
- **Props**: Accepts `links` array of `{ href: string, label: string }`

### React Integration

The React integration (`@astrojs/react`) enables using React components as Astro islands. This is the minimal React footprint necessary for Headless UI components.

**Dependencies**:
- `@astrojs/react@4.4.2` (dev)
- `react@19.2.4` (dev)
- `react-dom@19.2.4` (dev)
- `@headlessui/react@2.2.9` (prod)

**Relevant Laws**:
- **L03**: Navigation component ships JavaScript because it requires client-side interactivity. The `client:load` directive is explicitly used.
- **L07**: No scoped styles exist. All styling uses Tailwind utilities or `className` in React components.
- **L08**: Tailwind and React integrations registered in `astro.config.mjs`.

## Blog System

The site includes a fully functional blog system using Astro's content collections API. Adding a new blog post is as simple as creating a Markdown file in `src/content/blog/`.

### Content Collection

**Location**: `src/content/blog/`

Blog posts are stored as Markdown files (`.md`) in the blog content collection. Each file's name becomes its URL slug (e.g., `welcome.md` → `/blog/welcome`).

### Schema

**Definition**: `src/content/config.ts`

The blog collection schema enforces the following frontmatter structure:

```typescript
{
  title: string;              // Required: Post title
  publishDate: Date;          // Required: Publication date (YYYY-MM-DD format)
  description: string;        // Required: Meta description and excerpt
  tags: string[];            // Optional: Array of tags (default: [])
  featured: boolean;         // Optional: Featured status (default: false)
  excerpt: string;           // Optional: Custom excerpt override
}
```

**Required fields** must be present in every post. **Optional fields** have defaults and can be omitted.

### Routing

**Dynamic route**: `src/pages/blog/[slug].astro`

Individual blog posts are accessible at `/blog/{slug}` URLs via Astro's file-system routing (**L01**). The `getStaticPaths()` function generates routes for all posts in the collection at build time.

**Listing page**: `src/pages/blog/index.astro`

Displays all posts sorted by publication date (newest first). Post titles link to individual post pages.

### Layout

**Component**: `src/layouts/BlogPostLayout.astro`

The blog post layout wraps `BaseLayout` and provides post-specific structure:
- Post title as `<h1>`
- Publication date formatted as "Month Day, Year"
- Reading time estimate (calculated from word count)
- Tags displayed as colored pills
- Markdown content rendered via `<Content />` component (**L10**)

**Props interface**:
```typescript
{
  title: string;
  publishDate: Date;
  readingTime: number;
  tags: string[];
  description: string;
}
```

The layout uses semantic HTML (`<article>`, `<header>`, `<time>`) and Tailwind utilities for styling (**L07**).

### Reading Time Calculation

**Utility**: `src/lib/calculateReadingTime.ts`

Estimates reading time based on word count using a 200 words per minute heuristic. Returns ceiling of minutes (e.g., 3.2 minutes → 4 minutes).

**Usage**:
```typescript
import calculateReadingTime from '../lib/calculateReadingTime';
const readingTime = calculateReadingTime(post.body);
```

### Adding a New Post

1. Create a new Markdown file in `src/content/blog/` with a URL-friendly name (e.g., `my-post.md`)
2. Add required frontmatter fields: `title`, `publishDate`, `description`
3. Optionally add `tags`, `featured`, or `excerpt`
4. Write content in clean Markdown (no HTML or component imports)
5. Build the site: the post automatically appears on `/blog` and is accessible at `/blog/my-post`

**Example**:
```markdown
---
title: "My First Post"
publishDate: 2026-02-10
description: "A short description of this post."
tags: ["example", "tutorial"]
featured: false
---

# My First Post

Content goes here...
```

### Relevant Laws

- **L01**: File-system routing — `[slug].astro` creates dynamic routes
- **L02**: Content collections require schema definition in `src/content/config.ts`
- **L10**: Markdown rendered through `<Content />` component from content collections API

### Future Enhancements

Out of scope for current implementation but possible future additions:
- RSS feed generation
- Tag archive pages
- Pagination for listing page
- Related posts suggestions

## Projects Section

The site includes a projects landing page that serves as an index for all project detail pages. This section showcases Adam's open-source work.

### Projects Landing Page

**File**: `src/pages/projects.astro`
**Route**: `/projects`

The projects landing page displays a card grid of all projects with links to individual detail pages. This provides a single entry point for exploring Adam's open-source work.

**Key Features**:
- Introductory text describing the projects section
- Responsive grid layout: single column on mobile, two columns on `md` breakpoint and above (`grid-cols-1 md:grid-cols-2`)
- Three project cards: Ushabti, Pharaoh, Hieroglyphs
- Each card contains:
  - Project name as `<h2>` heading
  - One-sentence description
  - "Learn more →" link to detail page

**Styling**:
- Uses only Tailwind utility classes (per **L07**)
- Cards have borders (`border-slate-300 dark:border-slate-600`) and hover effects (`hover:border-accent-primary`)
- All color utilities have corresponding `dark:` variants for dark mode support
- Semantic HTML: `<article>` for main container and individual cards, `<section>` for grid container

**Implementation Pattern**:
- Static page with hardcoded project data (three projects, unlikely to change frequently)
- Server-rendered with zero JavaScript (per **L03**)
- Uses `BaseLayout` with title "Projects"
- All markup inline in page file (no separate component)

### Project Detail Pages

The site includes three project detail pages that provide in-depth information about individual open-source projects.

#### Ushabti Project Page

**File**: `src/pages/ushabti.astro`
**Route**: `/ushabti`

Describes Ushabti, a disciplined development framework for AI-assisted code generation. The page includes:
- Project overview and description
- Key agents: Scribe, Builder, Overseer
- Link to GitHub repository (https://github.com/adamrdrew/ushabti)

#### Pharaoh Project Page

**File**: `src/pages/pharaoh.astro`
**Route**: `/pharaoh`

Describes Pharaoh, a headless job runner for Ushabti. The page follows the same structure and styling as the Ushabti page.

#### Hieroglyphs Project Page

**File**: `src/pages/hieroglyphs.astro`
**Route**: `/hieroglyphs`

Describes Hieroglyphs, a project management tool for indie developers. The page follows the same structure and styling as the other project detail pages.

### Common Project Page Pattern

All project detail pages follow a consistent structure:
- Use `BaseLayout` with project name as title
- Large heading with project name (`text-4xl md:text-5xl font-bold`)
- Multiple `<section>` elements with `space-y-4` spacing
- Semantic HTML: `<article>` for main content, `<section>` for logical sections, `<h2>` for subsection headings
- Text styling with `text-text-secondary dark:text-text-dark-secondary` for body text
- Accent-colored strong elements and links (`text-accent-primary dark:text-accent-dark-primary`)
- Inline `<code>` elements styled with `bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm`

**Styling Consistency**:
- All pages use only Tailwind utilities (per **L07**)
- Consistent heading sizes, spacing, and color pairings across all pages
- All color utilities have `dark:` variants for dark mode support

**Relevant Laws**:
- **L01**: File-system routing — each `.astro` file in `src/pages/` creates a route
- **L03**: All pages are server-rendered, ship zero JavaScript
- **L04**: Data and imports in frontmatter fence, HTML template below
- **L05**: Layout applied by wrapping content with `BaseLayout`
- **L07**: Use Tailwind utilities only, no scoped `<style>` tags
- **L09**: Page files correctly placed in `src/pages/`

### Adding a New Project

To add a new project to the site:

1. Create a new detail page: `src/pages/project-name.astro`
2. Follow the common project page pattern (semantic HTML structure, consistent heading styles, Tailwind utilities)
3. Add a new card to the projects landing page (`src/pages/projects.astro`) with project name, description, and link
4. Ensure all color utilities have corresponding `dark:` variants

Currently, the projects landing page uses hardcoded static content. If the number of projects grows significantly, consider migrating to a content collection approach similar to the blog system.

## Table of Contents

<!-- Populated by Surveyor -->
