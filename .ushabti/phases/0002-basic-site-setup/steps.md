# Implementation Steps

## S001: Create BaseLayout component

**Intent**: Establish a reusable layout component that provides the HTML shell, navigation, and structure for all pages. This is the foundation for consistent page structure across the site.

**Work**:
- Create src/layouts/BaseLayout.astro
- Add complete HTML structure: `<!DOCTYPE html>`, `<html lang="en">`, `<head>`, `<body>`
- Include `<meta charset="UTF-8">` and `<meta name="viewport">` tags
- Accept `title` prop for page titles
- Add `<slot />` in the body for child content
- Create a `<nav>` element with links to Home (`/`), About (`/about`), and Blog (`/blog`)
- Use semantic HTML (`<nav>`, `<main>`, etc.)

**Done when**: src/layouts/BaseLayout.astro exists with complete HTML structure, navigation with three links, and `<slot />` for content insertion.

---

## S002: Update index page to use BaseLayout

**Intent**: Convert the hello world page to use the new BaseLayout for consistency with future pages.

**Work**:
- Update src/pages/index.astro to import and use BaseLayout
- Remove duplicate HTML structure (html, head, body tags)
- Keep the hello world `<h1>` message for now
- Pass a title prop to BaseLayout

**Done when**: src/pages/index.astro uses BaseLayout, renders without errors, and navigation links are visible on the home page.

---

## S003: Create About page

**Intent**: Provide a page introducing Adam and his work, establishing the site's identity.

**Work**:
- Create src/pages/about.astro
- Import and use BaseLayout
- Add semantic HTML structure using `<article>` or `<section>`
- Include bio content:
  - Name: Adam Drew
  - Title: Senior software engineer
  - Experience: 30+ years
  - Key interests: agentic AI development, open source, developer tools
  - Current employer: Red Hat
- Pass appropriate title to BaseLayout

**Done when**: src/pages/about.astro exists, uses BaseLayout, displays all required bio content, and is accessible at `/about`.

---

## S004: Define blog content collection schema

**Intent**: Configure Astro's content collections system with a schema for blog posts, enabling type-safe content with validation.

**Work**:
- Create src/content/config.ts
- Import `defineCollection` and `z` from 'astro:content'
- Define a blog collection with Zod schema including:
  - `title`: required string
  - `publishDate`: required date
  - `description`: required string
- Export the collections object with the blog collection

**Done when**: src/content/config.ts exists, exports a blog collection with the specified schema, and Astro recognizes the content collection.

---

## S005: Create blog content directory and sample post

**Intent**: Initialize the blog content directory structure and create a sample post to verify the content collections system works.

**Work**:
- Create src/content/blog/ directory
- Create a sample blog post as a .md file (e.g., `welcome.md` or `first-post.md`)
- Add frontmatter with valid values matching the schema:
  - title (string)
  - publishDate (date in YYYY-MM-DD format)
  - description (string)
- Write sample Markdown content below the frontmatter (can be placeholder text)

**Done when**: src/content/blog/ directory exists with at least one .md file containing valid frontmatter and Markdown content.

---

## S006: Create blog listing page

**Intent**: Provide a page that displays all blog posts, demonstrating content collections API usage and establishing the blog section.

**Work**:
- Create src/pages/blog/index.astro
- Import and use BaseLayout
- Import `getCollection` from 'astro:content'
- In frontmatter, query all blog posts: `await getCollection('blog')`
- Sort posts by publishDate (newest first)
- In the template, map over posts and display each with:
  - Title
  - Date (formatted)
  - Description
- Use semantic HTML (`<article>` for each post)
- Pass appropriate title to BaseLayout

**Done when**: src/pages/blog/index.astro exists, uses BaseLayout, queries and displays all blog posts with titles, dates, and descriptions, and is accessible at `/blog`.

---

## S007: Verify navigation links

**Intent**: Ensure all navigation links work correctly and users can navigate between pages.

**Work**:
- Run `npm run dev` to start the development server
- Manually test navigation:
  - Click Home link from About and Blog pages
  - Click About link from Home and Blog pages
  - Click Blog link from Home and About pages
- Verify each page loads without errors
- Verify navigation is visible on all pages

**Done when**: All navigation links successfully navigate to their target pages without errors, and navigation is consistently visible across all pages.

---

## S008: Run quality gate checks

**Intent**: Verify the implementation meets Astro's type safety and build requirements before completion.

**Work**:
- Run `npm run check` (or `astro check`) and verify it passes with no errors
- Run `npm run build` (or `astro build`) and verify it completes successfully
- Verify dist/ directory is created with built output
- If errors occur, fix them and re-run checks

**Done when**: Both `astro check` and `astro build` complete successfully with no errors, and dist/ output is generated.
