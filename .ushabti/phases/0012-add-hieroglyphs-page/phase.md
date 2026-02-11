# Phase 0012: Add Hieroglyphs Page

## Intent

Add a dedicated page for the Hieroglyphs project at `src/pages/hieroglyphs.astro`. Hieroglyphs is a native macOS SwiftUI app for personal project management that uses a filesystem-based, plain-text approach with markdown files and YAML frontmatter. The page should describe the project's purpose, key concepts, and provide a link to the GitHub repository.

This page follows the established patterns from `ushabti.astro` and `pharaoh.astro` to maintain consistency across project pages.

## Scope

**In scope:**
- Create `src/pages/hieroglyphs.astro` with BaseLayout and structured content sections
- Add descriptive sections: tagline, what it is, key concepts, open source link
- Add "Hieroglyphs" link to `navLinks` array in `src/layouts/BaseLayout.astro` after Pharaoh
- Verify `npm run build` passes

**Out of scope:**
- Screenshots or images
- Interactive demos or widgets
- Download links or release information
- Documentation beyond basic project description

## Constraints

**Relevant Laws:**
- **L01**: File-system routing — `src/pages/hieroglyphs.astro` creates `/hieroglyphs` route automatically
- **L03**: Page is server-rendered, ships zero JavaScript by default
- **L07**: Use Tailwind utility classes only, no scoped `<style>` tags
- **L09**: Page file must be in `src/pages/`
- **L12**: Build must pass before phase completion

**Relevant Style:**
- Follow semantic HTML patterns (use `<article>`, `<section>`, `<h1>`, `<h2>`, etc.)
- Use Tailwind utilities matching `about.astro`, `ushabti.astro`, `pharaoh.astro` patterns
- Structure content with clear hierarchy: h1 for page title, h2 for section headings
- Use consistent spacing classes: `space-y-8` for article, `space-y-4` for sections
- Apply light/dark theme utilities: `text-text-primary dark:text-text-dark-primary`, etc.

## Acceptance Criteria

1. **Route exists**: `/hieroglyphs` is accessible via file-system routing
2. **Layout correct**: Page uses `BaseLayout` with `title="Hieroglyphs"`
3. **Content complete**: Includes tagline, description, key concepts, and GitHub link
4. **Markup patterns**: Uses same semantic HTML and Tailwind classes as other project pages
5. **Navigation updated**: "Hieroglyphs" link appears in navigation after "Pharaoh"
6. **Build passes**: `npm run build` completes without errors (L12)

## Risks / Notes

None identified. This is a straightforward content page following well-established patterns.
