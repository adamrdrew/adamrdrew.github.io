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

## Table of Contents

<!-- Populated by Surveyor -->
