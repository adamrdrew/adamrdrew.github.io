# Phase 0001: Project Scaffolding

## Intent

Establish the foundational Astro project structure with all dependencies installed, proper .gitignore configuration, and a minimal hello world page that passes all quality gates. This phase creates the baseline from which all future work will build.

This is the bootstrap phase. Without it, no features, layouts, or content can be implemented. The goal is to reach a state where `astro check` and `astro build` pass, and the site can be served locally.

## Scope

**In scope:**
- npm project initialization with package.json
- Astro installation and core dependencies
- astro.config.mjs configuration with correct site URL
- .gitignore with required exclusions
- src/ directory structure (pages/, components/, layouts/, lib/, styles/)
- public/ directory for static assets
- Single hello world page at src/pages/index.astro
- Verification that quality gates pass

**Out of scope:**
- Layout components (BaseLayout.astro will come in a future phase)
- Reusable UI components
- Styling or design tokens
- Content collections configuration
- GitHub Actions deployment workflow
- Multiple pages or routing

## Constraints

**Laws:**
- **L01** — File-system routing requires .astro files in src/pages/
- **L08** — astro.config.mjs must set site to https://adamrdrew.github.io
- **L09** — src/pages/ contains only pages
- **L12** — astro check and astro build must pass before completion
- **L13** — dist/ and node_modules/ must be in .gitignore

**Style:**
- Follow Astro conventional directory structure
- TypeScript for configuration files
- Prefer semantic HTML in pages

## Acceptance Criteria

1. **Dependencies installed**: package.json exists with Astro and required dependencies, node_modules/ populated
2. **Configuration correct**: astro.config.mjs exists with `site: 'https://adamrdrew.github.io'`
3. **Gitignore complete**: .gitignore includes `dist/` and `node_modules/`
4. **Directory structure**: src/pages/, src/components/, src/layouts/, src/lib/, src/styles/, and public/ directories exist
5. **Hello world page**: src/pages/index.astro exists and renders valid HTML with a hello world message
6. **Type checking passes**: `astro check` exits 0 with no errors
7. **Build succeeds**: `astro build` completes successfully and produces dist/ output
8. **Dev server works**: `npm run dev` serves the site at localhost without errors

## Risks / Notes

- This phase intentionally creates a minimal structure. The hello world page will not have a layout or styling — those come in future phases.
- We are not installing UI framework integrations (React, Tailwind, etc.) yet. Those will be added as needed in future phases.
- The site will not be deployable to GitHub Pages yet (no Actions workflow), but it will be locally servable.
