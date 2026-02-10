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
- **Color palette**: Dark theme developer portfolio colors defined in `theme.extend.colors`
  - Background colors: slate-900, slate-800, slate-700
  - Text colors: slate-50, slate-300, slate-400
  - Accent colors: blue-500, violet-500, blue-600
- **Typography**: System font stacks for sans and monospace

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
