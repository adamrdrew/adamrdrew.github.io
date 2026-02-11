# Implementation Steps

## S001: Create ushabti.astro page with content

**Intent**: Create the Ushabti project page following the same markup patterns and Tailwind utility classes as `about.astro` to ensure visual and structural consistency.

**Work**:
- Create `src/pages/ushabti.astro`
- Import `BaseLayout` and wrap content in `<BaseLayout title="Ushabti">`
- Add main `<article>` container with `space-y-8` class
- Add `<h1>` heading with "Ushabti" using same classes as about page: `text-4xl md:text-5xl font-bold text-text-primary dark:text-text-dark-primary mb-8`
- Add tagline as paragraph with accent styling: "A disciplined development framework for AI-assisted code generation"
- Add section describing what Ushabti is: Claude Code plugin that enforces structured Scribe → Builder → Overseer loop, phases planned and implemented step by step, reviewed against project laws and style, tracked in plain text files
- Add section describing key agents:
  - **Scribe**: Plans phases with steps and acceptance criteria
  - **Builder**: Implements steps one at a time, updates progress
  - **Overseer**: Reviews against laws and style, approves or requests fixes
- Add section mentioning open source with link to `https://github.com/adamrdrew/ushabti`
- Use semantic HTML: `<section>`, `<p>`, `<ul>`, `<li>` as appropriate
- Apply consistent Tailwind classes from about page: `text-lg`, `text-text-secondary dark:text-text-dark-secondary`, `leading-relaxed`, `space-y-4`, `list-disc list-inside`, etc.
- Use `<strong>` tags with accent colors for emphasis: `font-semibold text-accent-primary dark:text-accent-dark-primary`

**Done when**:
- `src/pages/ushabti.astro` exists
- File imports and uses `BaseLayout` with title "Ushabti"
- Page includes all required content sections (heading, tagline, description, agents, GitHub link)
- Markup uses semantic HTML elements (`<article>`, `<section>`, `<h1>`, `<h2>`, `<p>`, `<ul>`, `<li>`, `<a>`)
- All Tailwind classes match patterns from `about.astro` for visual consistency
- Light and dark theme classes applied to all colored elements
- GitHub link is properly formatted external link (opens in same tab, href correct)

---

## S002: Add Ushabti link to navigation

**Intent**: Make the Ushabti page discoverable by adding it to the site navigation menu in BaseLayout.

**Work**:
- Edit `src/layouts/BaseLayout.astro`
- Locate the `navLinks` array in frontmatter
- Add new entry after "Blog": `{ href: '/ushabti', label: 'Ushabti' }`
- Verify array syntax is correct (trailing comma, proper formatting)

**Done when**:
- `BaseLayout.astro` navLinks array includes `{ href: '/ushabti', label: 'Ushabti' }` entry
- Entry is positioned after the "Blog" entry in the array
- No syntax errors in the array definition

---

## S003: Verify build succeeds

**Intent**: Ensure the new page integrates correctly with the site and all quality gates pass before declaring the Phase complete.

**Work**:
- Run `npm run build` to verify production build succeeds
- Verify build output includes `/ushabti/index.html`
- Manually check (via dev server or build output):
  - Page renders at `/ushabti`
  - Navigation includes "Ushabti" link
  - All content displays correctly
  - Links work (GitHub link)
  - Light and dark theme styles apply correctly

**Done when**:
- `npm run build` completes successfully with no errors
- Build output includes generated HTML for ushabti page
- Manual verification confirms:
  - Page accessible at `/ushabti`
  - Navigation link works
  - Content renders correctly
  - Theme switching works (light/dark)
  - GitHub link is functional
