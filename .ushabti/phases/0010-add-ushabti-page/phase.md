# Phase 0010: Add Ushabti Project Page

## Intent

Add a dedicated page to showcase the Ushabti development framework. The page explains what Ushabti is (a Claude Code plugin enforcing structured agent-driven development), describes the key agents (Scribe, Builder, Overseer), and links to the GitHub repository. This page follows existing site conventions and is accessible via site navigation.

## Scope

**In Scope:**
- Create `src/pages/ushabti.astro` with content describing the Ushabti framework
- Follow `about.astro` patterns for markup and styling (BaseLayout, semantic HTML, Tailwind utilities, light/dark theme support)
- Include sections: heading, tagline, description of framework, key agents, GitHub link
- Add "Ushabti" link to navLinks array in `src/layouts/BaseLayout.astro` after "Blog"
- Verify build passes with `npm run build`

**Out of Scope:**
- Interactive features (demos, try-it-now)
- Dynamic content (live stats, recent phases)
- Screenshots or visual diagrams
- Detailed API documentation or tutorial content
- Other Ushabti-related pages (docs, changelog, etc.)

## Constraints

**Relevant Laws:**
- **L01**: File-system routing is absolute — `src/pages/ushabti.astro` creates `/ushabti` route
- **L03**: Components server-rendered by default, ship zero JavaScript
- **L04**: Frontmatter fence is server boundary — no runtime logic in template
- **L05**: Layouts are components with `<slot />`
- **L07**: Use Tailwind utilities, no scoped `<style>` tags
- **L09**: Only pages in `src/pages/`
- **L12**: `astro check` and `astro build` must pass before completion

**Relevant Style:**
- Pages are thin orchestrators (minimal frontmatter, mostly markup)
- Use semantic HTML (`<article>`, `<section>`, `<header>`)
- Follow naming conventions: kebab-case for CSS classes, purpose over appearance
- Keep styling to Tailwind utilities only
- Maintain consistency with existing pages (`about.astro` as reference)

## Acceptance Criteria

1. **Page exists and renders**: `src/pages/ushabti.astro` exists and is accessible at `/ushabti`
2. **Uses BaseLayout**: Page wraps content in `<BaseLayout title="Ushabti">`
3. **Content structure**: Page includes:
   - Main heading: "Ushabti"
   - Tagline/subtitle describing the framework
   - Description section explaining what Ushabti is (Claude Code plugin, structured Scribe → Builder → Overseer loop, plain text files)
   - Section describing key agents (Scribe: plans phases; Builder: implements steps; Overseer: reviews against laws)
   - Section mentioning open source status with link to github.com/adamrdrew/ushabti
4. **Markup matches patterns**: Uses same Tailwind classes and semantic HTML as `about.astro` (headings, paragraphs, lists, sections with proper spacing)
5. **Theme support**: Light and dark theme classes applied consistently (`text-text-primary dark:text-text-dark-primary`, etc.)
6. **Navigation link added**: `{ href: '/ushabti', label: 'Ushabti' }` exists in `BaseLayout.astro` navLinks array after "Blog" entry
7. **Build succeeds**: `npm run build` completes without errors

## Risks / Notes

**Intentional simplifications:**
- Static content only, no interactivity (aligns with L03)
- No visual assets or diagrams (can be added in future phase if needed)
- Brief content focused on core concepts (not comprehensive documentation)

**Content source:**
- User-provided description in PHASE_PROMPT provides key talking points
- Keep tone informative but concise

**Pattern consistency:**
- Direct reference to `about.astro` ensures visual and structural consistency
- Reuse exact Tailwind class patterns for headings, paragraphs, spacing
