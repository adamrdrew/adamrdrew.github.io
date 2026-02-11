# Steps

## S001: Create pharaoh.astro page

**Intent:** Create the Pharaoh project page with structured content following established patterns.

**Work:**
- Create `src/pages/pharaoh.astro`
- Import BaseLayout from `'../layouts/BaseLayout.astro'`
- Wrap content in `<BaseLayout title="Pharaoh">`
- Use `<article class="space-y-8">` as outer wrapper
- Add h1 heading: "Pharaoh" with classes `text-4xl md:text-5xl font-bold text-text-primary dark:text-text-dark-primary mb-8`
- Create first section with tagline emphasizing it's a headless job runner for AI-assisted development
- Create second section explaining what Pharaoh does:
  - Watches dispatch directory for markdown files
  - Executes work through Ushabti agent loop (Scribe plans, Builder implements, Overseer reviews)
  - Manages git branching and pull requests
  - Reports status via JSON file on disk
  - Runs unattended with no human in the loop
- Create third section on how it works:
  - Drop markdown file with phase prompt into dispatch directory
  - Pharaoh picks it up and runs full development cycle
  - Commits the result
  - Returns to idle
- Create fourth section with GitHub link and npx command:
  - Link to `https://github.com/adamrdrew/pharaoh`
  - Installation command: `npx @adamrdrew/pharaoh serve`
- Match all Tailwind classes to patterns from `ushabti.astro` (section spacing, text colors, heading sizes, accent colors for emphasis/links)

**Done when:**
- File exists at `src/pages/pharaoh.astro`
- Content is complete with all sections
- All Tailwind classes match established patterns
- Semantic HTML used throughout

## S002: Add Pharaoh link to navigation

**Intent:** Make the Pharaoh page accessible from site navigation.

**Work:**
- Edit `src/layouts/BaseLayout.astro`
- Locate the `navLinks` array (currently lines 11-16)
- Add `{ href: '/pharaoh', label: 'Pharaoh' }` as the last item after the Ushabti link

**Done when:**
- `navLinks` array includes Pharaoh entry
- Entry is positioned after Ushabti link

## S003: Verify build passes

**Intent:** Confirm the site builds successfully with the new page and navigation changes.

**Work:**
- Run `npm run build` in project root
- Verify build completes without errors
- Verify no TypeScript errors
- Verify no routing conflicts

**Done when:**
- `npm run build` exits with code 0
- No errors in build output
- Build completes successfully
