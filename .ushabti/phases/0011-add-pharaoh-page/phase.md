# Phase 0011: Add Pharaoh Project Page

## Intent

Add a new page at `src/pages/pharaoh.astro` to document the Pharaoh project, a headless job runner for the Ushabti development framework. The page should follow established patterns from `ushabti.astro` and integrate into site navigation.

## Scope

**In scope:**
- Create `src/pages/pharaoh.astro` with structured content about Pharaoh
- Follow existing markup patterns (BaseLayout, article structure, semantic HTML, Tailwind utilities)
- Explain what Pharaoh is, how it works, and how to access it
- Add "Pharaoh" link to navigation in `src/layouts/BaseLayout.astro` after "Ushabti"
- Verify build passes

**Out of scope:**
- Changes to other project pages
- Implementation of Pharaoh itself
- Additional navigation refactoring beyond adding one link

## Constraints

**Relevant Laws:**
- **L01**: File-system routing — `pharaoh.astro` in `src/pages/` creates `/pharaoh` route automatically
- **L03**: Astro components ship zero JavaScript by default (page is static)
- **L04**: Frontmatter for imports only, template is markup
- **L05**: BaseLayout provides page shell via `<slot />`
- **L07**: All styling via Tailwind utilities (no scoped styles)
- **L09**: Page file in `src/pages/` creates a public route
- **L12**: `npm run build` must pass before completion

**Relevant Style:**
- Components are dumb — pharaoh.astro receives no props, renders static content
- Pages are thin orchestrators — minimal frontmatter (just layout import)
- Prefer semantic HTML — use `<article>`, `<section>`, `<h1>`, `<h2>`, etc.
- Keep styles close to components — use inline Tailwind utilities
- Name for purpose — page named `pharaoh.astro` for `/pharaoh` route

## Acceptance Criteria

1. **Page exists**: `src/pages/pharaoh.astro` is created
2. **Routing works**: Page accessible at `/pharaoh` via file-system routing (L01)
3. **Uses BaseLayout**: Imports and wraps content in `<BaseLayout title="Pharaoh">`
4. **Follows markup patterns**: Uses same structure as `ushabti.astro`:
   - `<article class="space-y-8">` wrapper
   - `<h1>` with title and consistent sizing/spacing classes
   - Multiple `<section class="space-y-4">` blocks for content areas
   - Semantic HTML throughout
5. **Follows styling patterns**: All Tailwind classes match existing patterns:
   - Text sizes: `text-4xl md:text-5xl` for h1, `text-2xl md:text-3xl` for h2
   - Colors: `text-text-primary dark:text-text-dark-primary` for headings, `text-text-secondary dark:text-text-dark-secondary` for body
   - Spacing: `space-y-8` for article, `space-y-4` for sections
   - Accents: `text-accent-primary dark:text-accent-dark-primary` for emphasis
6. **Content includes**:
   - Heading: "Pharaoh"
   - Tagline describing it as a headless job runner
   - Description section: what Pharaoh does (watches dispatch directory, executes Ushabti loop, manages git/PRs, reports status via JSON)
   - How it works section: drop markdown file → Pharaoh executes → commits result → returns to idle
   - Links to GitHub and npx command: `github.com/adamrdrew/pharaoh` and `npx @adamrdrew/pharaoh serve`
7. **Navigation updated**: `src/layouts/BaseLayout.astro` navLinks array includes `{ href: '/pharaoh', label: 'Pharaoh' }` after Ushabti link
8. **Build passes**: `npm run build` completes without errors (L12)

## Risks / Notes

- This is a straightforward content page following well-established patterns
- Build verification is delegated to Builder step S003
- No complex logic or data fetching required
