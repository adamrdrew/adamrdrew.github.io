# Phase 0008: Update Homepage Bio

## Intent

Update the bio section on the home page to include additional information about Adam's GitHub profile (github.com/adamrdrew), his work on Claude Code plugins including Ushabti, and his interest in controlled, auditable AI code generation with human oversight. This expands the existing bio to better represent current work and interests.

## Scope

### In Scope
- Update bio paragraphs in `src/pages/index.astro` to include:
  - Reference to github.com/adamrdrew GitHub profile
  - Mention of Claude Code plugin development work
  - Specific mention of Ushabti plugin
  - Statement about interest in controlled, auditable AI code generation with human oversight
- Maintain existing bio structure (2-3 paragraphs)
- Keep existing semantic HTML and Tailwind styling approach
- Integrate new information naturally with existing Red Hat developer context
- Verify build succeeds with `npm run build`
- Verify type checking passes with `astro check`

### Out of Scope
- Adding links to external GitHub profile (footer already has this)
- Creating separate sections or components for different bio topics
- Adding images, icons, or visual elements
- Creating content collections for bio content
- Adding detailed project descriptions or work samples
- Restructuring the page layout or heading hierarchy
- Updating navigation or other site-wide elements

## Constraints

### Laws
- **L01**: File-system routing - `src/pages/index.astro` remains the home page route
- **L03**: Bio content is server-rendered, ships zero JavaScript
- **L04**: Content modifications are in the template section below the frontmatter fence
- **L07**: Use Tailwind utilities only, no scoped `<style>` tags
- **L09**: Modifying `src/pages/index.astro` which correctly exists in `src/pages/`
- **L12**: `astro check` and `astro build` must pass before completion
- **L14**: Scribe must consult `.ushabti/docs/` before planning (completed - docs reviewed)

### Style
- Pages are thin orchestrators - keep frontmatter minimal, content in template
- Prefer semantic HTML - maintain existing `<section>` and `<p>` structure
- Use Tailwind utilities matching existing theme (text-text-primary, text-text-secondary, dark mode variants)
- Keep consistent spacing and typography with existing bio
- Name for purpose, not appearance
- Markdown content is content only - this is template HTML, not Markdown

## Acceptance Criteria

1. **Bio content updated**
   - Bio mentions github.com/adamrdrew GitHub profile
   - Bio mentions Claude Code plugin development work
   - Bio specifically mentions Ushabti plugin by name
   - Bio states interest in controlled, auditable AI code generation with human oversight
   - Updated content integrates naturally with existing Red Hat developer context
   - Bio remains concise (2-3 paragraphs)

2. **Content quality**
   - Writing is professional and appropriate for a portfolio site
   - New information flows naturally from existing content
   - Tone is consistent with existing bio paragraphs
   - Technical terms (Claude Code, Ushabti) are used clearly and accurately

3. **HTML structure preserved**
   - Existing semantic HTML structure (`<section>`, `<p>`) maintained
   - Elements are properly nested and valid HTML5
   - No unnecessary wrapper elements added

4. **Styling unchanged**
   - Uses only Tailwind utility classes (no scoped `<style>` tags)
   - Text colors match existing theme (text-text-primary, text-text-secondary, dark mode variants)
   - Spacing consistent with existing layout
   - Responsive layout continues to work on mobile and desktop

5. **Build verification**
   - `npm run build` succeeds without errors
   - `astro check` passes with no type errors
   - Page renders correctly in browser with updated bio visible
   - No console errors in browser

6. **File changes minimal**
   - Only `src/pages/index.astro` modified (bio paragraph content)
   - No changes to BaseLayout, components, or other files
   - No new files created

7. **Documentation reconciliation**
   - Documentation does not require updates (this is a content change to the home page that doesn't affect documented systems or architecture)

## Risks / Notes

### Intentional Tradeoffs
- **No external links in bio text**: GitHub profile link already exists in footer. Adding links within bio paragraphs would create redundancy and add visual noise. Keep bio text clean.
- **No project details**: Bio mentions Ushabti but doesn't describe it in detail. This is appropriate for a concise bio. Detailed project information can live in a future Projects section.
- **Static content**: Bio remains hardcoded in the page template. This is appropriate for a personal portfolio site where bio updates are infrequent.

### Known Limitations
- Bio content requires code changes to update. This is acceptable for a personal portfolio site.
- No links to Claude Code or Ushabti documentation. If visitors want more information, they'll need to search or visit GitHub.

### Deferred Work
- Dedicated Projects page showcasing Ushabti and other work (not requested)
- Links to specific GitHub repositories or project documentation (not requested)
- Separate section for technical interests or specialties (keep bio simple)
- Blog posts about Claude Code plugin development (not requested)
