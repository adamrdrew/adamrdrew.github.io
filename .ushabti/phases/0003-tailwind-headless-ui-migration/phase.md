# Phase 0003: Migrate to Tailwind CSS + Headless UI

## Intent

Replace the current unstyled approach with Tailwind CSS and Headless UI to establish a modern, utility-first styling system with accessible component primitives. This migration provides the foundation for a professional developer portfolio appearance while maintaining Astro's zero-JavaScript-by-default philosophy where possible.

## Scope

### In Scope
- Install and configure Tailwind CSS with Astro integration
- Install and configure React integration for Headless UI components
- Install Headless UI React library
- Configure Tailwind to scan all relevant file types (.astro, .tsx, .ts)
- Define a developer portfolio color palette and design tokens in Tailwind config
- Migrate BaseLayout to use Tailwind utility classes
- Migrate all existing pages (index, about, blog/index) to Tailwind utilities
- Create a Navigation.tsx component using Headless UI for mobile-responsive navigation
- Wire Navigation component into BaseLayout as a React island
- Verify build succeeds with new dependencies and configuration

### Out of Scope
- Adding new pages or content
- Creating additional Headless UI components beyond Navigation
- Custom Tailwind plugins or complex theme extensions
- Removing existing content or changing site structure
- Performance optimization beyond what Tailwind provides by default

## Constraints

### Laws
- **L03**: Headless UI Navigation component must use explicit `client:load` directive since it requires interactivity
- **L07**: Tailwind utilities replace scoped styles; no `<style>` tags should remain in migrated components
- **L08**: Tailwind and React integrations must be registered in `astro.config.mjs`
- **L12**: `astro check` and `astro build` must pass before completion
- **L15**: Documentation in `.ushabti/docs` must be updated to reflect new styling approach

### Style
- Keep components dumb and composable - Navigation receives props, renders UI
- Prefer semantic HTML - migration should preserve existing semantic structure
- Ship minimal JavaScript - only Navigation needs client-side hydration
- Name components for purpose - Navigation.tsx, not MobileMenu.tsx

## Acceptance Criteria

1. **Dependencies installed**
   - `@astrojs/tailwind` integration installed and registered
   - `@astrojs/react` integration installed and registered
   - `@headlessui/react` installed
   - `react` and `react-dom` peer dependencies installed
   - All dependencies appear in `package.json`

2. **Tailwind configured**
   - `tailwind.config.mjs` exists with content paths for `.astro`, `.tsx`, `.ts` files
   - Color palette defined suitable for developer portfolio (dark theme preferred)
   - Typography configuration includes readable font choices

3. **Pages migrated**
   - BaseLayout uses Tailwind utilities, no scoped `<style>` tags
   - index.astro uses Tailwind utilities
   - about.astro uses Tailwind utilities
   - blog/index.astro uses Tailwind utilities
   - All pages preserve semantic HTML structure

4. **Navigation component**
   - `src/components/Navigation.tsx` exists
   - Uses Headless UI `Menu` or `Disclosure` component
   - Implements mobile-responsive behavior
   - Wired into BaseLayout with `client:load` directive

5. **Build verification**
   - `astro check` passes with no type errors
   - `astro build` succeeds and produces dist output
   - Site renders correctly in browser with Tailwind styles applied

6. **Documentation updated**
   - `.ushabti/docs/index.md` or new styling doc reflects Tailwind + Headless UI approach
   - Migration rationale documented

## Risks / Notes

### Intentional Tradeoffs
- **JavaScript for navigation**: While Astro prefers zero-JS, mobile navigation requires interactivity. Using Headless UI ensures accessibility and keeps the JS footprint minimal and purposeful.
- **React dependency**: Headless UI requires React, adding a framework dependency. This is acceptable because Headless UI provides battle-tested accessible primitives that would be complex to rebuild.
- **Tailwind bundle size**: Initial Tailwind CSS will be larger than zero CSS, but purging unused classes keeps production bundle minimal.

### Known Limitations
- Current documentation is minimal (scaffold only). This phase will update what exists but comprehensive docs require Surveyor.
- No existing CSS to remove - this is additive migration from unstyled baseline.

### Deferred Work
- Additional Headless UI components (modals, dropdowns, etc.) - not needed yet
- Advanced Tailwind customization - start with sensible defaults
- Dark mode toggle - can add later if needed
