# Project Laws

## Preamble

This document defines the non-negotiable invariants for adamrdrew.github.io, a personal website built with Astro and deployed to GitHub Pages. These laws are binding constraints that must hold across all Phases, implementations, and refactors. They are enforced during Overseer review and must be verified before any Phase can be marked GREEN/complete.

Laws are organized into three categories: Astro Framework Constraints, Build and Deployment Constraints, and Documentation Integration Requirements.

## Laws

### L01 — File-system routing is absolute
- **Rule:** Every `.astro` file in `src/pages/` MUST become a route. No router configuration, no overrides, no exceptions. Dynamic routes MUST use bracket syntax (e.g., `[slug].astro`). If a file exists in `src/pages/`, it is a page. If it doesn't exist there, it is not a page.
- **Rationale:** Astro's file-system routing is the foundational routing mechanism. Attempting to configure routes externally creates confusion and breaks the framework's core contract.
- **Enforcement:** Reviewer verifies that no router configuration exists and all intended routes have corresponding files in `src/pages/`. Verify no attempt to override routing behavior through configuration or middleware.
- **Scope:** All routing
- **Exceptions:** None

### L02 — Content collections require schema definition
- **Rule:** All content collections (e.g., blog posts, portfolio items) MUST be defined in `src/content/config.ts` with a Zod schema. Content directory structure MUST match collection names (e.g., `src/content/blog/` for a `blog` collection).
- **Rationale:** Astro will not process content collections without schema definition in this specific file. Type safety and content validation depend on this configuration.
- **Enforcement:** Reviewer verifies that `src/content/config.ts` exists and defines schemas for all content collections. Verify directory structure matches collection names. Confirm no content is stored outside the collections system.
- **Scope:** All Markdown/MDX content
- **Exceptions:** None

### L03 — Components are server-rendered by default and ship zero JavaScript
- **Rule:** Astro components (`.astro` files) MUST render to static HTML at build time and ship zero JavaScript to the browser by default. Client-side interactivity MUST use explicit opt-in via `client:` directives on framework components (React, Svelte, etc.). Astro components themselves cannot have client-side interactivity except through `<script>` tags or framework islands.
- **Rationale:** Astro's core value proposition is zero-JavaScript-by-default. Shipping unnecessary JavaScript defeats the framework's performance goals and violates user expectations.
- **Enforcement:** Reviewer verifies that `.astro` components do not contain client-side state management or event handlers (except in `<script>` tags). Verify framework components requiring interactivity use appropriate `client:` directives. Check build output to ensure no unexpected JavaScript is shipped.
- **Scope:** All components
- **Exceptions:** None

### L04 — Frontmatter fence is the server boundary
- **Rule:** Code above the frontmatter fence (`---`) in `.astro` files MUST run at build time only. This is where data fetching, component imports, and variable definitions occur. Code below the fence MUST be template markup. Runtime logic beyond simple expressions in curly braces `{}` is not permitted in templates. No stateful hooks, no event handlers in `.astro` file templates.
- **Rationale:** The frontmatter fence is Astro's explicit server/template boundary. Violating this boundary creates confusion about when code executes and breaks the build-time execution model.
- **Enforcement:** Reviewer verifies that all data fetching and logic occurs above the `---` fence. Verify template sections contain only markup and simple expressions. Check for attempts to use hooks or stateful logic in templates.
- **Scope:** All `.astro` files
- **Exceptions:** None

### L05 — Layouts are components, not magic
- **Rule:** Layouts MUST be regular Astro components that accept a `<slot />` for child content. They are applied by wrapping page content or specifying in Markdown frontmatter via the `layout` field. Layouts MUST include a `<slot />` or page content will not render.
- **Rationale:** Astro has no special layout system. Treating layouts as magic creates confusion and leads to missing `<slot />` errors where content silently disappears.
- **Enforcement:** Reviewer verifies all layout components include `<slot />`. Verify layouts are applied through wrapping or frontmatter, not through configuration. Check that page content renders correctly.
- **Scope:** All layouts
- **Exceptions:** None

### L06 — Public assets are copied verbatim, processed assets are imported
- **Rule:** Assets in `public/` MUST be copied verbatim to build output without processing, hashing, or bundling. They MUST be referenced with absolute paths from root (e.g., `/images/photo.jpg`). Assets that should be processed and optimized MUST be imported from `src/` in component code.
- **Rationale:** Confusing `public/` and `src/` assets leads to missing optimizations or broken references after builds. The two systems serve different purposes and must not be mixed.
- **Enforcement:** Reviewer verifies that static assets are in `public/` and referenced with absolute paths. Verify assets requiring processing are imported from `src/`. Check build output to ensure assets are in expected locations.
- **Scope:** All static assets
- **Exceptions:** None

### L07 — Scoped styles don't leak, global styles don't scope
- **Rule:** CSS in `<style>` tags in `.astro` components MUST be scoped via generated class names and MUST NOT affect other components. Global styles MUST use `<style is:global>` or be imported as CSS files in layouts.
- **Rationale:** Astro's scoped styling is automatic but can be accidentally overridden. Global styles leaking into scoped components or scoped styles failing to apply creates layout bugs.
- **Enforcement:** Reviewer verifies scoped styles use plain `<style>` tags without `is:global`. Verify global styles use `is:global` directive or are imported in appropriate layouts. Check that styles apply only where intended.
- **Scope:** All CSS
- **Exceptions:** None

### L08 — astro.config.mjs is the single source of truth for build configuration
- **Rule:** All integrations (Tailwind, React, sitemap, etc.) MUST be registered in `astro.config.mjs`. The `site` URL MUST be set to `https://adamrdrew.github.io` for proper GitHub Pages deployment. No build configuration may exist outside this file.
- **Rationale:** Astro's build system reads only `astro.config.mjs`. Configuration elsewhere is ignored and creates false expectations about behavior.
- **Enforcement:** Reviewer verifies all integrations are registered in `astro.config.mjs`. Verify `site` is set to `https://adamrdrew.github.io`. Check for configuration files that should not exist.
- **Scope:** All build configuration
- **Exceptions:** None

### L09 — src/pages/ contains only pages
- **Rule:** Only page components may exist in `src/pages/`. Helper components, layouts, and partials MUST be placed in `src/components/` or `src/layouts/`. Anything in `src/pages/` becomes a route.
- **Rationale:** File-system routing means every file in `src/pages/` creates a public route. Non-page components in this directory create unintended public URLs.
- **Enforcement:** Reviewer verifies `src/pages/` contains only page components (files intended to be routes). Verify helper components and layouts are in appropriate directories outside `src/pages/`.
- **Scope:** `src/pages/` directory
- **Exceptions:** None

### L10 — Markdown content is rendered through content collections API
- **Rule:** Markdown/MDX content MUST be accessed through `getCollection()` and `getEntry()`. Rendering MUST use the `<Content />` component or `render()` function. Raw Markdown imports and manual parsing are forbidden.
- **Rationale:** The content collections API provides type safety, validation, and proper rendering. Bypassing it loses these guarantees and creates maintenance burden.
- **Enforcement:** Reviewer verifies content is queried using `getCollection()`/`getEntry()`. Verify rendering uses `<Content />` or `render()`. Check for raw `.md` imports or manual parsing code.
- **Scope:** All Markdown/MDX content
- **Exceptions:** None

### L11 — GitHub Pages base configuration
- **Rule:** For this user site (`adamrdrew.github.io`), the `base` configuration MUST remain at default (no `base` set). If this were a project site, `base` would need to be set to `'/project-name'`. This law documents the requirement for future reference.
- **Rationale:** GitHub Pages serves user sites from root but project sites from a subdirectory. Incorrect `base` configuration breaks all routing and asset references.
- **Enforcement:** Reviewer verifies `base` is not set in `astro.config.mjs` for this user site. If project structure changes to a project site, verify `base` is updated accordingly.
- **Scope:** `astro.config.mjs`
- **Exceptions:** None

### L12 — Quality gates must pass before phase completion
- **Rule:** `astro check` and `astro build` MUST pass without errors before any Phase can be marked GREEN/complete. These are non-negotiable quality gates.
- **Rationale:** `astro check` verifies TypeScript types and component correctness. `astro build` verifies the site can actually be built for deployment. Failing these checks means the code is not shippable.
- **Enforcement:** Overseer MUST run `astro check` and `astro build` and verify both pass before marking a Phase GREEN. Any errors must be addressed before completion.
- **Scope:** All Phases
- **Exceptions:** None

### L13 — dist/ and node_modules/ must never be committed
- **Rule:** `dist/` and `node_modules/` MUST be listed in `.gitignore` and MUST NEVER be committed to the repository. GitHub Actions builds and deploys from `dist/` on CI.
- **Rationale:** Build artifacts and dependencies are generated, not source code. Committing them creates merge conflicts, bloats repository size, and creates deployment confusion.
- **Enforcement:** Reviewer verifies `dist/` and `node_modules/` are in `.gitignore`. Verify they are not present in git status or commit history. Check that GitHub Actions workflow builds from source.
- **Scope:** Git repository
- **Exceptions:** None

### L14 — Scribe must consult documentation before planning
- **Rule:** Scribe MUST read and consult `.ushabti/docs/` before creating any Phase plan. Understanding documented systems is a prerequisite to coherent planning.
- **Rationale:** Phase planning without understanding existing architecture leads to contradictory plans, duplicated work, and broken integration points.
- **Enforcement:** Overseer verifies that Scribe's phase plan demonstrates awareness of documented systems. Plans that contradict or ignore documented architecture indicate this law was violated.
- **Scope:** All Phase planning
- **Exceptions:** None

### L15 — Builder must use and maintain documentation
- **Rule:** Builder MUST consult `.ushabti/docs/` during implementation and MUST update documentation when code changes affect documented systems. Documentation is both a resource and a maintenance responsibility.
- **Rationale:** Implementation that ignores documentation creates drift between code and docs. Changes that affect documented systems without updating docs create stale documentation, which is worse than no documentation.
- **Enforcement:** Overseer verifies Builder consulted documentation during implementation. Overseer verifies that code changes affecting documented systems have corresponding documentation updates.
- **Scope:** All implementation work
- **Exceptions:** None

### L16 — Overseer must verify documentation reconciliation
- **Rule:** Overseer MUST verify that documentation is reconciled with code changes before declaring a Phase complete. Stale documentation is a defect that blocks Phase completion.
- **Rationale:** Documentation drift degrades project knowledge over time. Catching drift at Phase boundaries prevents cumulative decay.
- **Enforcement:** Overseer MUST explicitly check documentation accuracy as part of review. Documentation drift must be flagged as a YELLOW or RED issue depending on severity.
- **Scope:** All Phase reviews
- **Exceptions:** None

### L17 — Phase completion requires documentation reconciliation
- **Rule:** A Phase cannot be marked GREEN/complete until documentation is reconciled with the code work performed during that Phase. Documentation reconciliation is a completion criterion, not optional maintenance.
- **Rationale:** This law makes documentation reconciliation a blocking requirement, not a suggestion. Without it, documentation inevitably becomes stale.
- **Enforcement:** Overseer MUST verify documentation is current before marking GREEN. Phases with stale documentation cannot be complete.
- **Scope:** All Phase completions
- **Exceptions:** None

## Summary

This project has 17 laws organized into three categories:

**Astro Framework Constraints (L01-L11):** Non-negotiable invariants imposed by Astro's architecture, including file-system routing, content collections, server-first rendering, frontmatter boundaries, layouts, asset handling, styling, configuration, directory structure, content APIs, and GitHub Pages deployment configuration.

**Build and Deployment Constraints (L12-L13):** Quality gates and repository hygiene requirements ensuring the site is buildable and deployable.

**Documentation Integration Requirements (L14-L17):** Mandatory documentation consultation and maintenance requirements ensuring `.ushabti/docs/` remains accurate throughout the development lifecycle.

These laws are enforced during Overseer review and must be verified before any Phase can be marked GREEN/complete.
