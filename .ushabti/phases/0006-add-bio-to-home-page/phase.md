# Phase 0006: Add Bio to Home Page

## Intent

Add a professional bio section to the home page that introduces Adam Drew as a developer at Red Hat. This provides visitors with immediate context about his professional background and establishes the site's purpose as a portfolio for a Red Hat developer.

## Scope

### In Scope
- Add bio content to `src/pages/index.astro` below the existing `<h1>` heading
- Include information about Adam's role as a developer at Red Hat
- Use semantic HTML elements (`<section>`, `<p>`, etc.) for the bio content
- Style with Tailwind utility classes matching the existing dark theme
- Keep bio concise (2-3 paragraphs maximum)
- Verify build succeeds with `npm run build`
- Verify type checking passes with `astro check`

### Out of Scope
- Creating a separate dedicated About page
- Adding profile images, avatars, or photos
- Adding social media links beyond what's already in the footer
- Adding interactive elements or client-side JavaScript
- Creating content collections for bio content
- Adding detailed work history or resume content

## Constraints

### Laws
- **L01**: File-system routing - `src/pages/index.astro` remains the home page route
- **L03**: Bio content is server-rendered, ships zero JavaScript (no interactivity needed)
- **L04**: Content is added in the template section below the frontmatter fence
- **L07**: Use Tailwind utilities only, no scoped `<style>` tags
- **L09**: Modifying `src/pages/index.astro` which correctly exists in `src/pages/`
- **L12**: `astro check` and `astro build` must pass before completion

### Style
- Pages are thin orchestrators - keep frontmatter minimal, add content in template
- Prefer semantic HTML - use `<section>` for bio area, `<p>` for paragraphs
- Use Tailwind utilities matching existing theme colors (text-text-primary, text-text-secondary)
- Keep consistent spacing with existing heading using Tailwind margin utilities
- Name classes for purpose, not appearance

## Acceptance Criteria

1. **Bio content added**
   - Bio section appears below the "Adam Drew" heading on the home page
   - Content mentions Adam Drew's role as a developer at Red Hat
   - Bio is concise (2-3 paragraphs maximum)
   - Content is professional and appropriate for a portfolio site

2. **Semantic HTML structure**
   - Bio uses semantic HTML elements (`<section>`, `<p>`, etc.)
   - Elements are properly nested and valid HTML5
   - No div soup or unnecessary wrapper elements

3. **Styling matches theme**
   - Uses only Tailwind utility classes (no scoped `<style>` tags)
   - Text colors match existing theme (text-text-primary or text-text-secondary)
   - Spacing is consistent with the existing heading (appropriate margin/padding)
   - Responsive layout works on mobile and desktop viewports

4. **Build verification**
   - `npm run build` succeeds without errors
   - `astro check` passes with no type errors
   - Page renders correctly in browser with bio visible
   - No console errors in browser

5. **File structure unchanged**
   - Only `src/pages/index.astro` was modified
   - No new components or files created
   - BaseLayout integration remains unchanged

6. **Documentation reconciliation**
   - Documentation does not require updates (this is a content change to the home page that doesn't affect documented systems or architecture)

## Risks / Notes

### Intentional Tradeoffs
- **Static content**: Bio is hardcoded in the page template rather than pulled from a content collection. This is appropriate for a single, unchanging bio. If multiple bios or dynamic content are needed later, this can be refactored.
- **No About page**: Adding bio directly to home page rather than creating a separate About page keeps the site simple and gives visitors immediate context. A dedicated About page can be added later if needed.
- **Minimal content**: Keeping bio to 2-3 paragraphs maintains focus on the portfolio itself. Detailed work history can be added later if needed.

### Known Limitations
- Bio content is static and requires code changes to update. This is acceptable for a personal portfolio site where bio updates are infrequent.

### Deferred Work
- Dedicated About page with detailed work history (not requested)
- Profile images or avatars (not requested)
- Links to projects or blog posts within bio text (keep it simple for now)
- Animated or interactive bio elements (not needed)
