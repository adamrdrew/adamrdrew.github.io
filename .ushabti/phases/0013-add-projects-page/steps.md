# Steps

## S001: Create projects.astro page file

**Intent:** Establish the new page file with basic structure and imports.

**Work:**
- Create `src/pages/projects.astro`
- Add frontmatter fence with `BaseLayout` import
- Add page title in `<BaseLayout>` wrapper
- Add placeholder heading and intro text

**Done when:** File exists with valid Astro syntax (frontmatter fence, BaseLayout import, basic template structure).

---

## S002: Add introductory heading and text

**Intent:** Provide context about the projects section matching existing page patterns.

**Work:**
- Add `<h1>` with "Projects" title
- Follow heading styling from existing project pages (text size, font weight, colors, dark mode variants)
- Add brief introductory sentence about Adam's open-source projects
- Use `<article>` and `<section>` semantic structure
- Apply spacing utilities (`space-y-8`, etc.) matching existing pages

**Done when:** Heading and intro text render with styling consistent with `ushabti.astro`, `pharaoh.astro`, and `hieroglyphs.astro`.

---

## S003: Create card grid container

**Intent:** Establish responsive grid layout for project cards.

**Work:**
- Add `<section>` container for card grid
- Apply Tailwind grid utilities for responsive layout:
  - Single column on mobile (`grid grid-cols-1`)
  - Two columns on `md` breakpoint and above (`md:grid-cols-2`)
- Add gap utility for spacing between cards (`gap-6` or similar)
- Add appropriate margin/padding for container

**Done when:** Grid container exists with responsive column configuration verified through browser resize or dev tools.

---

## S004: Add Ushabti project card

**Intent:** Create first project card with name, description, and link.

**Work:**
- Add `<article>` element within grid
- Add project name as `<h2>` heading ("Ushabti")
- Add one-sentence description: "AI-driven development framework"
- Add link to `/ushabti` detail page
- Apply Tailwind utilities for:
  - Border (`border`, `border-slate-300`, `dark:border-slate-600`)
  - Padding (`p-6` or similar)
  - Border radius (`rounded-lg`)
  - Background (`bg-white`, `dark:bg-slate-800`)
  - Hover effects (`hover:border-accent-primary`, `transition-colors`, etc.)
- Ensure all color utilities have `dark:` variants

**Done when:** Ushabti card renders with border, padding, background, and hover effect. Link navigates to `/ushabti`.

---

## S005: Add Pharaoh and Hieroglyphs project cards

**Intent:** Complete the project grid with remaining two cards.

**Work:**
- Duplicate Ushabti card structure
- Update for Pharaoh:
  - Name: "Pharaoh"
  - Description: "Headless job runner for Ushabti"
  - Link: `/pharaoh`
- Update for Hieroglyphs:
  - Name: "Hieroglyphs"
  - Description: "Project management for indie devs"
  - Link: `/hieroglyphs`
- Ensure styling consistency across all three cards

**Done when:** All three project cards render in grid with consistent styling. All links navigate to correct detail pages.

---

## S006: Verify quality gates

**Intent:** Ensure build and type checking pass before marking phase complete.

**Work:**
- Run `astro check` and verify no TypeScript or component errors
- Run `astro build` and verify build succeeds
- Verify page renders at `/projects` route in dev mode
- Test responsive layout (desktop vs mobile breakpoint)
- Test dark mode rendering (light theme vs dark theme)
- Verify all links navigate correctly

**Done when:** `astro check` passes, `astro build` succeeds, and manual testing confirms correct rendering in light/dark modes and responsive breakpoints.

---

## S007: Update project documentation

**Intent:** Reconcile project documentation with new pages per L17 requirement.

**Work:**
- Update `.ushabti/docs/index.md` to document the projects landing page
- Add section describing the `/projects` route, its purpose, and structure
- Document the three project detail pages (`/ushabti`, `/pharaoh`, `/hieroglyphs`)
- Follow existing documentation patterns for page descriptions
- Include relevant law and style references where appropriate

**Done when:** Documentation includes sections for the projects landing page and project detail pages, accurately reflecting the implementation.
