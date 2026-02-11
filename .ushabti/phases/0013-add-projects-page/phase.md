# Phase 0013: Add Projects Landing Page

## Intent

Add a `/projects` landing page that serves as an index for all project detail pages (Ushabti, Pharaoh, Hieroglyphs). This provides a single entry point for exploring Adam's open-source work.

## Scope

**In scope:**
- Create `src/pages/projects.astro` following existing page patterns
- Use `BaseLayout` for page structure
- Display card grid with entries for Ushabti, Pharaoh, and Hieroglyphs
- Each card includes project name, one-sentence description, and link to detail page
- Responsive layout (2 columns desktop, 1 column mobile)
- Subtle borders and hover effects matching site design language
- Tailwind utilities only (no scoped styles)
- Dark mode support via `dark:` variant utilities

**Out of scope:**
- Navigation menu changes (not adding link to projects page)
- New components (all markup inline in page file)
- Footer changes
- Modifying existing project detail pages
- Content collections or dynamic routing (static page with hardcoded project data)

## Constraints

### Relevant Laws
- **L01**: File-system routing — `src/pages/projects.astro` becomes `/projects` route
- **L03**: Server-rendered by default, ships zero JavaScript
- **L04**: Data and imports in frontmatter fence, HTML template below
- **L05**: Layout applied by wrapping content with `BaseLayout`
- **L07**: Use Tailwind utilities only, no scoped `<style>` tags
- **L09**: Page file correctly placed in `src/pages/`
- **L12**: `astro check` and `astro build` must pass

### Relevant Style Conventions
- **Semantic HTML**: Use `<article>` for cards, `<section>` for grid container
- **Components are dumb**: Since no component is being created, all markup is inline in page
- **Prefer static over dynamic**: Hardcoded project data is appropriate here (3 projects, unlikely to change frequently)
- **Dark mode patterns**: Pair all color utilities with `dark:` variants
- **Naming conventions**: CSS classes named for purpose, not appearance

### Existing Patterns to Follow
Review existing project pages (`ushabti.astro`, `pharaoh.astro`, `hieroglyphs.astro`) for:
- BaseLayout usage and title prop
- Tailwind class patterns for text, spacing, colors
- Dark mode color pairings (`text-text-primary dark:text-text-dark-primary`, etc.)
- Semantic HTML structure (`<article>`, `<section>`, `<h1>`, etc.)

## Acceptance Criteria

1. Page is accessible at `/projects` route
2. Page uses `BaseLayout` with appropriate title
3. Heading ("Projects") uses same styling as existing project detail pages
4. Introductory text mentions Adam's open-source projects
5. Card grid displays three project entries: Ushabti, Pharaoh, Hieroglyphs
6. Grid is responsive: 2 columns on `md` breakpoint and above, 1 column on mobile
7. Each card contains:
   - Project name as heading
   - One-sentence description
   - Link to detail page (`/ushabti`, `/pharaoh`, `/hieroglyphs`)
8. Cards have subtle borders and hover effects consistent with site design
9. All text and background colors have `dark:` variants for dark mode support
10. No scoped `<style>` tags exist in the file
11. `astro check` passes with no errors
12. `astro build` succeeds
13. Page renders correctly in both light and dark modes

## Risks / Notes

- **No navigation link added**: This phase intentionally does not add a link to the projects page in the site navigation. That can be handled in a future phase if desired.
- **Static content**: Project list is hardcoded. If more projects are added frequently, a content collection approach may be warranted in the future.
- **Card styling flexibility**: The "subtle borders and hover effects" acceptance criterion allows Builder discretion in matching the site's existing design language, since no explicit card component pattern exists yet.
