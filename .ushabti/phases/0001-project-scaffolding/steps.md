# Steps for Phase 0001: Project Scaffolding

## S001: Initialize npm project

**Intent**: Create package.json to manage dependencies and scripts.

**Work**:
- Run `npm init -y` to generate package.json
- Update package.json with correct project metadata (name, description, type: "module")
- Add npm scripts for dev, build, and check

**Done when**:
- package.json exists at project root
- package.json contains name, description, version, type, and scripts fields

---

## S002: Install Astro and dependencies

**Intent**: Install Astro framework and required dependencies for TypeScript support.

**Work**:
- Run `npm install astro @astrojs/check typescript`
- Verify dependencies are installed in package.json
- Verify node_modules/ directory is created

**Done when**:
- package.json includes astro, @astrojs/check, and typescript in dependencies
- node_modules/ directory exists and is populated
- `npx astro --version` prints a version number

---

## S003: Create astro.config.mjs

**Intent**: Configure Astro with the correct site URL for GitHub Pages deployment.

**Work**:
- Create astro.config.mjs at project root
- Set `site` to 'https://adamrdrew.github.io'
- Use minimal configuration (no integrations yet)

**Done when**:
- astro.config.mjs exists at project root
- File contains `export default defineConfig({ site: 'https://adamrdrew.github.io' })`
- File imports `defineConfig` from 'astro/config'

---

## S004: Create .gitignore

**Intent**: Prevent build artifacts and dependencies from being committed to git.

**Work**:
- Create .gitignore at project root
- Add `dist/`, `node_modules/`, and other common Astro exclusions
- Verify .gitignore follows Astro's recommended patterns

**Done when**:
- .gitignore exists at project root
- .gitignore includes `dist/` and `node_modules/`
- .gitignore includes common editor and OS files (.DS_Store, etc.)

---

## S005: Create src/ directory structure

**Intent**: Establish the conventional Astro directory layout for organizing code.

**Work**:
- Create src/pages/ directory (required for file-system routing)
- Create src/components/ directory (for future reusable components)
- Create src/layouts/ directory (for future page layouts)
- Create src/lib/ directory (for future utility functions)
- Create src/styles/ directory (for future global styles)

**Done when**:
- All five directories exist under src/
- Directories are empty (no placeholder files needed)

---

## S006: Create public/ directory

**Intent**: Establish location for static assets that are copied verbatim to build output.

**Work**:
- Create public/ directory at project root
- Add a placeholder file (e.g., favicon.svg or robots.txt) to demonstrate usage

**Done when**:
- public/ directory exists at project root
- Directory contains at least one file (even if placeholder)

---

## S007: Create hello world index page

**Intent**: Create a minimal page that demonstrates Astro is working and passes quality gates.

**Work**:
- Create src/pages/index.astro
- Add frontmatter fence with no logic
- Add minimal HTML with semantic structure (html, head, body)
- Include a hello world heading

**Done when**:
- src/pages/index.astro exists
- File contains valid Astro syntax with frontmatter fence
- File renders semantic HTML with a visible hello world message
- No TypeScript or build errors in the file

---

## S008: Verify quality gates pass

**Intent**: Confirm the project is correctly configured and passes all required quality checks.

**Work**:
- Run `astro check` and verify it exits 0 with no errors
- Run `astro build` and verify it completes successfully
- Verify dist/ directory is created with build output
- Run `npm run dev` and verify the site serves at localhost
- Visit localhost and verify hello world page renders

**Done when**:
- `astro check` exits 0
- `astro build` exits 0 and produces dist/
- `npm run dev` starts dev server without errors
- Browser shows hello world page at localhost
