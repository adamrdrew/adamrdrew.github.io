# Phase 0008: Implementation Steps

## S001: Update bio paragraphs with new content

**Intent**: Modify the existing bio section in `src/pages/index.astro` to include information about GitHub profile, Claude Code plugin development including Ushabti, and interest in controlled, auditable AI code generation.

**Work**:
- Open `src/pages/index.astro`
- Locate the existing `<section>` element containing bio paragraphs (currently 2 paragraphs about Red Hat work and open source passion)
- Rewrite bio paragraphs to include:
  - Existing Red Hat developer context
  - Reference to github.com/adamrdrew GitHub profile
  - Work on Claude Code plugins, specifically mentioning Ushabti
  - Interest in controlled, auditable AI code generation with human oversight
- Maintain existing Tailwind utility classes on paragraph elements
- Keep 2-3 paragraphs total
- Ensure natural flow and professional tone

**Done when**:
- Bio paragraphs in `src/pages/index.astro` include all required information
- Content reads naturally and professionally
- Existing HTML structure (`<section>`, `<p>`) and Tailwind classes preserved
- File saved

## S002: Verify build and type checking

**Intent**: Confirm the updated bio doesn't introduce build errors or type checking issues.

**Work**:
- Run `npm run build` in project root
- Verify build completes successfully
- Run `astro check` to verify TypeScript types
- Verify no errors or warnings reported

**Done when**:
- `npm run build` exits with success code 0
- `astro check` reports no errors
- No warnings about the modified file

## S003: Verify rendering in browser

**Intent**: Confirm the updated bio displays correctly and maintains responsive layout.

**Work**:
- Start dev server with `npm run dev`
- Open home page in browser
- Verify bio content is visible and includes all new information
- Check typography and spacing match existing theme
- Test responsive layout on mobile viewport width
- Check browser console for errors
- Stop dev server

**Done when**:
- Updated bio visible on home page
- All new information present (GitHub, Claude Code plugins, Ushabti, AI code generation interest)
- No visual regressions (spacing, colors, typography consistent)
- Responsive layout works on mobile and desktop
- No console errors
