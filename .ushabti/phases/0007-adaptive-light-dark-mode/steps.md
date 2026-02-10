# Implementation Steps

## S001: Configure Tailwind dark mode strategy

**Intent**: Enable Tailwind's automatic dark mode detection via CSS media queries.

**Work**:
- Open `tailwind.config.mjs`
- Add `darkMode: 'media'` at the root configuration level (same level as `content` and `theme`)
- This enables Tailwind to generate `dark:` variant utilities that respond to `@media (prefers-color-scheme: dark)`

**Done when**:
- `tailwind.config.mjs` contains `darkMode: 'media'` in the exported configuration object
- Build succeeds without Tailwind configuration errors

---

## S002: Define light theme color palette

**Intent**: Create semantic light theme colors that mirror the existing dark theme structure.

**Work**:
- Open `tailwind.config.mjs`
- Modify the `theme.extend.colors` object to define light theme as default colors
- Move existing dark colors to a new structure that will be applied via `dark:` utilities
- Create light theme colors for:
  - `background.primary`, `background.secondary`, `background.tertiary` (light grays/whites)
  - `text.primary`, `text.secondary`, `text.muted` (dark grays/blacks)
  - `accent.primary`, `accent.secondary`, `accent.hover` (blues/violets that work on light)
  - `border` (medium gray)
- Ensure semantic names remain unchanged so existing components continue to reference `bg-background-primary`, etc.

**Done when**:
- Light theme colors defined in Tailwind config
- Dark theme colors remain accessible for `dark:` utilities
- Color palette is semantically complete (all tokens have light and dark variants)

---

## S003: Update BaseLayout with theme-aware utilities

**Intent**: Make the base layout adapt to system theme preference.

**Work**:
- Open `src/layouts/BaseLayout.astro`
- Update the `<body>` tag classes to include both light and dark variants:
  - Default (light mode): `bg-background-primary text-text-primary`
  - Dark mode: `dark:bg-background-primary dark:text-text-primary`
- Verify `font-sans` and `min-h-screen` classes remain unchanged
- Ensure the `<html>` tag does not have a `class="dark"` attribute (which would force dark mode)

**Done when**:
- `<body>` tag in `BaseLayout.astro` has both default and `dark:` color utilities
- No hardcoded theme class on `<html>` tag
- File saves successfully

---

## S004: Update Navigation component with dark mode utilities

**Intent**: Make the navigation component adapt to system theme preference.

**Work**:
- Open `src/components/Navigation.tsx`
- Identify all Tailwind color classes (backgrounds, text colors, borders, hover states)
- Add `dark:` variants for each color class:
  - Background colors: `dark:bg-*`
  - Text colors: `dark:text-*`
  - Border colors: `dark:border-*`
  - Hover states: `dark:hover:text-*`
- Ensure button states (open/closed menu) work in both themes

**Done when**:
- All color utilities in `Navigation.tsx` have `dark:` variants
- Component renders correctly in both light and dark modes
- No TypeScript errors introduced

---

## S005: Update Footer component with dark mode utilities

**Intent**: Make the footer component adapt to system theme preference.

**Work**:
- Open `src/components/Footer.astro`
- Identify all Tailwind color classes (backgrounds, text colors, borders, hover states)
- Add `dark:` variants for each color class:
  - Background colors: `dark:bg-*`
  - Text colors: `dark:text-*`
  - Border colors: `dark:border-*`
  - Hover states: `dark:hover:text-*`

**Done when**:
- All color utilities in `Footer.astro` have `dark:` variants
- Component renders correctly in both light and dark modes
- File saves successfully

---

## S006: Update all page components with dark mode utilities

**Intent**: Ensure all pages adapt to system theme preference.

**Work**:
- Identify all page files in `src/pages/`:
  - `index.astro`
  - `about.astro`
  - `blog.astro`
  - Any other page files
- For each page, identify color classes and add `dark:` variants
- Pay special attention to:
  - Heading colors
  - Link colors and hover states
  - Background colors on sections or cards
  - Border colors
  - Text muted/secondary colors

**Done when**:
- All page files have `dark:` variants for color utilities
- Pages render correctly in both light and dark modes
- No pages have hardcoded colors that don't adapt

---

## S007: Test theme switching

**Intent**: Verify the implementation works correctly in both themes and switches seamlessly.

**Work**:
- Run `astro dev` to start development server
- Test in browser with light mode system preference:
  - Verify light theme colors display correctly
  - Check all pages (home, about, blog)
  - Verify navigation and footer use light theme
- Switch operating system to dark mode preference
- Verify the site immediately switches to dark theme without page reload
- Check all pages again in dark mode
- Test theme switching back and forth several times
- Verify no flash of unstyled content on initial page load

**Done when**:
- Site displays correctly in light mode when system preference is light
- Site displays correctly in dark mode when system preference is dark
- Theme switches immediately when system preference changes
- No FOUC or flickering observed
- All interactive elements (navigation, links) work in both themes

---

## S008: Verify quality gates pass

**Intent**: Ensure the implementation meets project quality standards.

**Work**:
- Run `astro check` from project root
- Verify no TypeScript errors or warnings
- Run `astro build` from project root
- Verify build completes successfully
- Verify build output in `dist/` directory is generated
- Check for any console errors or warnings during build

**Done when**:
- `astro check` passes with no errors
- `astro build` succeeds with no errors
- Build output exists in `dist/`

---

## S009: Update documentation

**Intent**: Document the theming approach for future reference.

**Work**:
- Open `.ushabti/docs/index.md`
- Update the "Styling Approach" section to document:
  - Tailwind dark mode configuration (`darkMode: 'media'`)
  - Light and dark color palette definitions
  - How theme detection works (CSS media queries, no JavaScript)
  - How components use `dark:` utilities
  - That theme switching is automatic based on system preference
- Add a note about the decision to use `media` strategy instead of `class` strategy

**Done when**:
- Documentation section on theming is complete and accurate
- Reflects the implementation as built
- Explains both how it works technically and why this approach was chosen
