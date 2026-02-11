# Steps

## S001: Create hieroglyphs.astro page

**Intent:** Create the Hieroglyphs page with structured content describing the project.

**Work:**
- Create `src/pages/hieroglyphs.astro`
- Import BaseLayout
- Use `<article class="space-y-8">` container
- Add h1 heading: "Hieroglyphs"
- Create section with tagline: "Plain-text project management for indie developers"
- Create section describing what Hieroglyphs is: native macOS SwiftUI app using filesystem-based markdown/YAML approach
- Create section describing key concepts: Projects contain cards (bugs, features, tasks with status/priority/type) and plans (bounded units of work)
- Create section with GitHub link: github.com/adamrdrew/hieroglyphs
- Follow exact markup patterns from `pharaoh.astro` and `ushabti.astro`:
  - Use `text-4xl md:text-5xl font-bold` for h1
  - Use `text-2xl md:text-3xl font-semibold` for h2
  - Use `text-lg` for tagline with strong accent
  - Use `text-text-secondary dark:text-text-dark-secondary` for body text
  - Use `list-disc list-inside space-y-2` for unordered lists
  - Use `<a>` with `text-accent-primary dark:text-accent-dark-primary hover:underline` for links

**Done when:** `src/pages/hieroglyphs.astro` exists with complete content following project page patterns.

## S002: Add Hieroglyphs to navigation

**Intent:** Make the Hieroglyphs page discoverable via site navigation.

**Work:**
- Edit `src/layouts/BaseLayout.astro`
- Add `{ href: '/hieroglyphs', label: 'Hieroglyphs' }` to the `navLinks` array
- Position it after the Pharaoh entry (index 5 in the array)

**Done when:** `navLinks` array includes Hieroglyphs entry after Pharaoh.

## S003: Verify build passes

**Intent:** Confirm the page builds correctly and no errors were introduced.

**Work:**
- Run `npm run build` in project root
- Verify build completes without errors
- Verify output confirms all pages processed successfully

**Done when:** Build passes cleanly with no errors or warnings.
