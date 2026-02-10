# Steps

## Step 1: Create Footer component

**File:** `src/components/Footer.astro`

**Actions:**
- Create new Astro component file
- Calculate current year in frontmatter using `new Date().getFullYear()`
- Use semantic `<footer>` element
- Create horizontal layout with copyright text and links
- Style with Tailwind utilities matching theme:
  - Muted text color (text-text-muted)
  - Appropriate padding and margins
  - Centered or left-aligned layout
  - Hover states for links matching Navigation component
- Include three pieces of content:
  1. Copyright with dynamic year: "© {year} Adam Drew"
  2. Link to GitHub: github.com/adamrdrew
  3. Link to Blog: /blog

**Acceptance:**
- Footer.astro exists in src/components/
- Uses only Tailwind classes, no `<style>` tags
- Content includes copyright, GitHub link, blog link
- Year is calculated dynamically in frontmatter

---

## Step 2: Add Footer to BaseLayout

**File:** `src/layouts/BaseLayout.astro`

**Actions:**
- Import Footer component at top of frontmatter
- Add `<Footer />` before closing `</body>` tag, after `</main>`
- Ensure footer appears site-wide on all pages using BaseLayout

**Acceptance:**
- Footer imported in BaseLayout
- Footer rendered after main content slot
- Footer appears before `</body>`

---

## Step 3: Verify build and visual appearance

**Actions:**
- Run `npm run build` and verify it succeeds
- Run `astro check` and verify no type errors
- Start dev server and visually verify footer on:
  - Index page (/)
  - About page (/about)
  - Blog index page (/blog)
- Verify copyright year is correct
- Verify GitHub link opens correct URL
- Verify Blog link navigates to /blog
- Verify styling matches dark theme and is readable

**Acceptance:**
- Build succeeds without errors
- Type checking passes
- Footer visible on all pages
- All links functional
- Styling consistent with site theme

---

## Step 4: Document Footer component

**File:** `.ushabti/docs/index.md`

**Actions:**
- Add Footer component to the documentation
- Create a "Layout Components" or "Static Components" section (or add to existing structure)
- Document Footer's purpose, location, and key characteristics:
  - File location: `src/components/Footer.astro`
  - Purpose: Site-wide footer with copyright and navigation links
  - Key features: Dynamic year calculation, GitHub and Blog links
  - Styling: Tailwind utilities matching Navigation patterns
  - Usage: Imported in BaseLayout.astro, appears on all pages
- Note that Footer is server-rendered (ships zero JavaScript per L03)
- Reference relevant laws (L03, L07, L09)

**Acceptance:**
- Documentation includes Footer component description
- Documentation explains Footer's role in the layout system
- Documentation is accurate and reflects the implemented code
- Documentation reconciliation requirement (L15-L17) is satisfied
