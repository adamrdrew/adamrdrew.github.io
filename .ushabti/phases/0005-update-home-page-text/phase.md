# Phase 0005: Update Home Page Text

## Intent

Update the home page to display "Adam Drew" instead of "Hello World" as the primary heading and page title. This personalizes the landing page with the site owner's name, establishing a clearer identity for the portfolio site.

## Scope

### In Scope
- Change the `title` prop passed to `BaseLayout` from "Hello World" to "Adam Drew"
- Change the `<h1>` text content from "Hello World" to "Adam Drew"
- Verify build succeeds with `npm run build`
- Verify type checking passes with `astro check`

### Out of Scope
- Any styling changes to the heading
- Adding additional content or sections to the home page
- Modifying layout structure or component hierarchy
- Changes to other pages

## Constraints

### Laws
- **L01**: File-system routing - `src/pages/index.astro` is the home page route
- **L09**: The file being modified (`src/pages/index.astro`) correctly exists in `src/pages/`
- **L12**: `astro check` and `astro build` must pass before completion

### Style
- Pages are thin orchestrators - the home page maintains this pattern
- Prefer semantic HTML - existing `<h1>` tag is appropriate for the main heading
- Keep frontmatter focused on data - no additional logic needed for this change

## Acceptance Criteria

1. **Text updated correctly**
   - The page title in the browser tab displays "Adam Drew"
   - The main `<h1>` heading on the page displays "Adam Drew"
   - No other text changes were made unintentionally

2. **File structure unchanged**
   - Only `src/pages/index.astro` was modified
   - Component structure and Tailwind classes remain unchanged
   - Layout integration with `BaseLayout` remains unchanged

3. **Build verification**
   - `npm run build` succeeds without errors
   - `astro check` passes with no type errors
   - Page renders correctly in browser with new text visible

4. **Documentation reconciliation**
   - Documentation does not require updates (this is a simple content change that doesn't affect documented systems)

## Risks / Notes

### Intentional Tradeoffs
- **Minimal change scope**: This phase only updates text content, not styling or layout. The existing Tailwind classes and structure are sufficient for displaying the new text.

### Known Limitations
- None. This is a straightforward text replacement with no technical complexity.

### Deferred Work
- Adding additional content to the home page (bio, project highlights, etc.) - this can be addressed in future phases as needed
