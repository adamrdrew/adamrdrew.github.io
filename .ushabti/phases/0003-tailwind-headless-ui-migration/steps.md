# Implementation Steps

## S001: Install Tailwind CSS dependencies

**Intent**: Add Tailwind CSS and its Astro integration to enable utility-first styling.

**Work**:
- Run `npm install -D tailwindcss @astrojs/tailwind`
- Verify packages appear in `package.json` devDependencies
- Do not configure yet - configuration comes in next step

**Done when**:
- `@astrojs/tailwind` and `tailwindcss` listed in `package.json` devDependencies
- `node_modules` contains the installed packages (verify with `ls node_modules/@astrojs/tailwind`)

---

## S002: Install React and Headless UI dependencies

**Intent**: Add React integration and Headless UI library to enable accessible interactive components.

**Work**:
- Run `npm install -D @astrojs/react react react-dom`
- Run `npm install @headlessui/react`
- Verify all packages appear in `package.json`
- Note: React and react-dom are peer dependencies of Headless UI
- Note: @astrojs/react is required for using React components in Astro

**Done when**:
- `@astrojs/react`, `react`, and `react-dom` listed in `package.json` devDependencies
- `@headlessui/react` listed in `package.json` dependencies
- Packages installed in `node_modules`

---

## S003: Configure integrations in astro.config.mjs

**Intent**: Register Tailwind and React integrations so Astro processes them correctly (L08).

**Work**:
- Import `tailwind` from `@astrojs/tailwind`
- Import `react` from `@astrojs/react`
- Add both integrations to the `integrations` array in `defineConfig()`
- Preserve existing `site` configuration
- Verify syntax is correct

**Done when**:
- `astro.config.mjs` imports both integrations
- Both integrations appear in `integrations: []` array
- File has no syntax errors
- Running `astro check` does not report configuration errors

---

## S004: Initialize Tailwind configuration

**Intent**: Create `tailwind.config.mjs` with appropriate content paths and theme customization.

**Work**:
- Create `tailwind.config.mjs` in project root
- Configure `content` array to scan: `./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}`
- Define `theme.extend` with developer portfolio color palette:
  - Dark background colors (e.g., slate-900, gray-900)
  - Accent colors suitable for CTAs and links
  - Text colors with good contrast
- Add font family configuration using system fonts or web-safe fonts
- Keep configuration simple - avoid complex customization at this stage

**Done when**:
- `tailwind.config.mjs` exists at project root
- Content paths include all relevant file extensions
- Color palette defined in `theme.extend.colors`
- Font configuration defined in `theme.extend.fontFamily`
- Configuration exports valid JavaScript module

---

## S005: Migrate BaseLayout to Tailwind utilities

**Intent**: Replace unstyled BaseLayout with Tailwind utility classes, establishing the visual foundation.

**Work**:
- Add Tailwind's base, components, and utilities (import statement not needed - integration handles this)
- Apply background color, text color, and font to `<body>`
- Style `<nav>` with flexbox layout, spacing, and responsive behavior
- Style navigation links with hover states and active states
- Style `<main>` with appropriate padding, max-width, and centering
- Remove any `<style>` tags if present
- Preserve semantic HTML structure
- Preserve all existing links and functionality

**Done when**:
- BaseLayout uses only Tailwind utility classes
- No `<style>` tags remain in the file
- Navigation is visually styled and responsive
- Main content area has appropriate spacing and constraints
- Semantic HTML structure unchanged

---

## S006: Migrate index page to Tailwind

**Intent**: Apply Tailwind utilities to the home page while preserving its simple "Hello World" content.

**Work**:
- Add utility classes to `<h1>` for sizing, weight, color, and spacing
- Ensure typography is readable and follows design tokens from Tailwind config
- No structural changes needed - page is already minimal

**Done when**:
- index.astro `<h1>` uses Tailwind utility classes
- Typography is styled consistently with the theme
- Page renders correctly with styled content

---

## S007: Migrate about page to Tailwind

**Intent**: Apply Tailwind utilities to the about page, styling the article, sections, headings, and lists.

**Work**:
- Style `<article>` with spacing and layout utilities
- Style `<h1>` and `<h2>` with typography utilities (size, weight, spacing)
- Style `<p>` tags with line height and spacing
- Style `<ul>` and `<li>` with appropriate list styling and spacing
- Ensure `<strong>` tags have appropriate font weight
- Preserve semantic structure - only add utility classes

**Done when**:
- about.astro uses Tailwind utilities throughout
- All text elements are styled consistently
- List formatting is clear and readable
- Semantic HTML structure unchanged

---

## S008: Migrate blog index page to Tailwind

**Intent**: Apply Tailwind utilities to the blog index page.

**Work**:
- Read `src/pages/blog/index.astro` to understand current structure
- Apply consistent typography and spacing utilities
- Match styling approach used in other pages
- Preserve any existing content structure

**Done when**:
- blog/index.astro uses Tailwind utilities
- Styling is consistent with other pages
- Page renders correctly

---

## S009: Create Navigation React component

**Intent**: Build a reusable, accessible navigation component using Headless UI.

**Work**:
- Create `src/components/Navigation.tsx`
- Import `Disclosure` from `@headlessui/react`
- Define props interface for navigation links (array of `{ href: string, label: string }`)
- Implement desktop navigation (visible on larger screens)
- Implement mobile navigation using Disclosure for hamburger menu
- Style with Tailwind utilities for responsive behavior
- Include hamburger icon (can use simple SVG or HTML entities)
- Ensure component is fully typed with TypeScript

**Done when**:
- `src/components/Navigation.tsx` exists
- Uses Headless UI `Disclosure` component
- Accepts navigation links as props
- Implements responsive mobile/desktop behavior
- Fully typed with TypeScript interfaces
- Styled with Tailwind utilities

---

## S010: Wire Navigation component into BaseLayout

**Intent**: Replace static nav in BaseLayout with the new React Navigation component (L03).

**Work**:
- Import Navigation component in BaseLayout
- Define navigation links array in frontmatter
- Replace existing `<nav>` block with `<Navigation>` component
- Add `client:load` directive to enable client-side interactivity
- Pass navigation links as props
- Verify component renders and functions correctly

**Done when**:
- BaseLayout imports Navigation from `../components/Navigation`
- Static `<nav>` replaced with `<Navigation client:load />`
- Navigation links passed as props
- Component renders in all pages using BaseLayout
- Mobile menu is interactive and toggles correctly

---

## S011: Verify build and type checking

**Intent**: Ensure all changes satisfy quality gates (L12).

**Work**:
- Run `astro check` and verify no type errors
- Run `astro build` and verify successful build
- Check build output in `dist/` directory
- Verify Tailwind CSS is generated and purged correctly
- Verify pages render in development mode (`astro dev`)

**Done when**:
- `astro check` exits with no errors
- `astro build` completes successfully
- `dist/` directory contains built site
- Pages render correctly with Tailwind styles
- Navigation component functions properly

---

## S012: Update documentation

**Intent**: Document the new styling approach in `.ushabti/docs` (L15, L17).

**Work**:
- Update `.ushabti/docs/index.md` or create styling-specific documentation
- Document that site now uses Tailwind CSS for styling
- Document that Headless UI React is used for accessible interactive components
- Document that React integration is configured for component islands
- Note the Navigation component as the primary example of React + Headless UI usage
- Reference relevant laws (L03, L07, L08)

**Done when**:
- Documentation reflects Tailwind CSS adoption
- Headless UI usage documented
- React integration purpose explained
- Documentation is accurate and complete
