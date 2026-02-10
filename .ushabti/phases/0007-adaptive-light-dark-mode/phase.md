# Phase 0007: Adaptive Light/Dark Mode

## Intent

Implement automatic light and dark mode support based on the user's system preference using the `prefers-color-scheme` media query. The site should automatically adapt to system theme changes without flash of unstyled content (FOUC).

Currently, the site uses a hardcoded dark theme via Tailwind CSS custom colors. This Phase adds a light theme and enables automatic switching based on the user's operating system color scheme preference.

This Phase exists now to improve accessibility and user experience by respecting user preferences, following modern web standards for adaptive theming.

## Scope

### In Scope
- Configure Tailwind CSS to use `media` strategy for dark mode detection
- Define light theme color palette in Tailwind config (extending existing dark palette)
- Update all components and layouts to use Tailwind dark mode utilities (`dark:` prefix)
- Ensure no FOUC by using Tailwind's automatic media query handling
- Verify theme switches correctly when system preference changes
- Update documentation to reflect theming approach

### Out of Scope
- Manual theme toggle (user override of system preference)
- Theme preference persistence via localStorage or cookies
- Theme transition animations
- Per-page or per-component theme overrides
- Custom color scheme beyond light/dark

## Constraints

### Relevant Laws
- **L03**: Components ship zero JavaScript by default. Tailwind's media query approach requires no JavaScript.
- **L04**: Frontmatter is server boundary. Theme detection happens client-side via CSS media queries.
- **L07**: Use Tailwind utilities, not scoped styles. Apply dark mode via `dark:` prefix utilities.
- **L08**: Configuration changes require updates to `tailwind.config.mjs`.
- **L12**: Must pass `astro check` and `astro build` quality gates.

### Relevant Style
- **Tailwind CSS is the styling system**: Use Tailwind's built-in `darkMode: 'media'` configuration
- **Prefer static over dynamic**: CSS media queries eliminate need for JavaScript
- **Semantic color tokens**: Maintain `bg-background-primary` naming, not `bg-slate-900`
- **Components are dumb**: No theme detection logic in components, only Tailwind classes

## Acceptance Criteria

1. `tailwind.config.mjs` sets `darkMode: 'media'`
2. Light theme colors defined in Tailwind config with semantic naming matching dark theme structure
3. All components (`Navigation.tsx`, `Footer.astro`) use `dark:` utilities for dark mode colors
4. All layouts (`BaseLayout.astro`) use `dark:` utilities for dark mode colors
5. All pages use `dark:` utilities where colors are applied
6. Site displays correctly in light mode when system preference is light
7. Site displays correctly in dark mode when system preference is dark
8. Theme changes immediately when system preference changes (no page reload needed)
9. No flash of unstyled content on page load
10. `astro check` passes without errors
11. `astro build` succeeds without errors
12. `.ushabti/docs/index.md` updated to document theming approach

## Risks / Notes

- **No JavaScript required**: Tailwind's `media` strategy uses pure CSS `@media (prefers-color-scheme: dark)` queries. This aligns perfectly with L03 (zero JavaScript by default).
- **Existing dark theme preserved**: Current dark theme colors can remain unchanged. Light theme colors are additive.
- **Systematic class updates**: Every Tailwind color utility in every component needs a `dark:` variant. This is mechanical but requires thoroughness.
- **Default theme**: Without `darkMode` configuration, Tailwind defaults to no dark mode support. The `media` strategy enables automatic detection.
- **FOUC prevention**: Because detection happens via CSS media queries (not JavaScript), there is no flash of unstyled content.
