# Phase 0004: Add Site Footer

## Intent

Add a simple footer component to the site layout with copyright information and navigation links. The footer provides standard site-wide content that appears on every page and completes the basic layout structure.

## Scope

### In Scope
- Create `Footer.astro` component in `src/components/`
- Include copyright line with current year (dynamic)
- Include link to GitHub profile (github.com/adamrdrew)
- Include link to blog page
- Style with Tailwind utility classes matching existing dark theme
- Add footer to `BaseLayout.astro` so it appears on all pages
- Keep layout simple: one line, horizontally arranged, muted text
- Verify build succeeds with `npm run build`

### Out of Scope
- Social media icons or images
- Multi-line footer with complex sections
- Additional footer navigation beyond the specified links
- Footer-specific styling beyond Tailwind utilities
- Newsletter signup or contact forms

## Constraints

### Laws
- **L03**: Footer is server-rendered Astro component, ships zero JavaScript (no interactivity needed)
- **L05**: BaseLayout remains a valid layout with `<slot />` for content
- **L07**: Use Tailwind utilities only, no scoped `<style>` tags
- **L09**: Footer.astro belongs in `src/components/`, not `src/pages/`
- **L12**: `astro check` and `astro build` must pass before completion

### Style
- Components should be dumb and composable - Footer receives no props, renders static content
- Use semantic HTML - `<footer>` element, not `<div>`
- Keep styles with Tailwind utilities matching existing theme colors
- Name component for purpose - Footer.astro (not SiteFooter, BottomNav, etc.)
- Prefer semantic HTML over div soup

## Acceptance Criteria

1. **Component created**
   - `src/components/Footer.astro` exists
   - Uses semantic `<footer>` element
   - Contains copyright with current year using JavaScript `new Date().getFullYear()`
   - Contains link to `https://github.com/adamrdrew`
   - Contains link to `/blog`
   - Uses only Tailwind utility classes for styling
   - No scoped `<style>` tags

2. **Styling matches theme**
   - Uses muted text color from Tailwind config (text-text-muted or text-text-secondary)
   - Uses background color consistent with site (optional, can match body background)
   - Horizontal layout with appropriate spacing
   - Links use hover states matching existing navigation

3. **Layout integration**
   - Footer added to `BaseLayout.astro` before closing `</body>`
   - Footer appears after `<main>` and `<slot />`
   - Footer appears on all pages that use BaseLayout (index, about, blog)

4. **Build verification**
   - `npm run build` succeeds without errors
   - `astro check` passes with no type errors
   - Footer renders correctly in browser on multiple pages
   - Copyright year displays correctly
   - Links are clickable and navigate correctly

## Risks / Notes

### Intentional Tradeoffs
- **Static content only**: Footer has no props because content is simple and site-wide. If footer needs to vary per page, this can be refactored later.
- **Minimal links**: Starting with just GitHub and Blog keeps footer simple. Additional links can be added as needed.
- **No upper border**: Following existing Navigation pattern which has bottom border, not adding redundant visual separation unless needed.

### Known Limitations
- Current year is calculated at build time, not client-side. For a static site this is acceptable; footer updates when site rebuilds.

### Deferred Work
- Social media icons (not requested)
- Multiple footer sections or columns (keep it simple for now)
- Back-to-top link (not needed for a portfolio site)
