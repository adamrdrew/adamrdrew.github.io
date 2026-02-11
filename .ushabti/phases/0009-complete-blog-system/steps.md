# Implementation Steps

## S001: Create reading time utility function

**Intent**: Provide a reusable function to estimate reading time based on word count, following the style guideline of extracting utilities to `src/lib/`.

**Work**:
- Create `src/lib/calculateReadingTime.ts`
- Implement function that accepts text string and returns estimated reading time in minutes
- Use 200 words per minute as reading speed heuristic
- Export as default function

**Done when**:
- `src/lib/calculateReadingTime.ts` exists
- Function signature: `export default function calculateReadingTime(text: string): number`
- Function returns `Math.ceil(wordCount / 200)` where wordCount is calculated from input text

---

## S002: Enhance blog content collection schema

**Intent**: Add metadata fields to support tags, featured status, and optional excerpts while maintaining backward compatibility with existing posts.

**Work**:
- Edit `src/content/config.ts`
- Add `tags` field: `z.array(z.string()).default([])`
- Add `featured` field: `z.boolean().default(false)`
- Add `excerpt` field: `z.string().optional()`
- Keep existing required fields: `title`, `publishDate`, `description`

**Done when**:
- `src/content/config.ts` includes all new fields with correct types and defaults
- Existing blog post (`welcome.md`) still builds without modification (backward compatible)

---

## S003: Create BlogPostLayout component

**Intent**: Provide a dedicated layout for blog posts that wraps `BaseLayout` and displays post metadata (title, date, reading time, tags) and content.

**Work**:
- Create `src/layouts/BlogPostLayout.astro`
- Import and wrap `BaseLayout`
- Accept props: `title`, `publishDate`, `readingTime`, `tags`, `description` (for meta tags)
- Render post header with: title as `<h1>`, publish date as `<time>`, reading time estimate, tags as pills/badges
- Include `<slot />` for markdown content rendering
- Use Tailwind utilities for all styling
- Use semantic HTML: `<article>`, `<header>`, `<time>`
- Apply light/dark theme classes consistently

**Done when**:
- `src/layouts/BlogPostLayout.astro` exists
- Layout wraps `BaseLayout` correctly
- All required props are defined in TypeScript interface
- `<slot />` is present for content injection
- Styling uses only Tailwind utilities (no scoped `<style>` tags)
- Header displays title, date (formatted), reading time ("X min read"), and tags

---

## S004: Create dynamic blog post route

**Intent**: Enable individual blog posts to be accessible at `/blog/{slug}` URLs using Astro's file-system routing with dynamic parameters.

**Work**:
- Create `src/pages/blog/[slug].astro`
- Implement `getStaticPaths()` to generate paths from `getCollection('blog')`
- In page frontmatter: retrieve post via slug, render markdown using `.render()`, calculate reading time
- Use `BlogPostLayout` for rendering
- Pass all required props to layout: title, publishDate, readingTime, tags, description
- Render markdown content using `<Content />` component

**Done when**:
- `src/pages/blog/[slug].astro` exists
- `getStaticPaths()` returns array of paths with `params: { slug }` and `props: { entry }`
- Post content is retrieved correctly from props
- `calculateReadingTime()` is called with post body text
- `BlogPostLayout` is used with all required props
- Markdown content renders via `<Content />` component (required by L10)

---

## S005: Add links from listing page to individual posts

**Intent**: Make blog posts clickable from the listing page, completing the navigation flow from list to detail view.

**Work**:
- Edit `src/pages/blog/index.astro`
- Wrap post title in `<a>` tag linking to `/blog/${post.slug}`
- Apply hover styles consistent with site style (accent color, transition)
- Ensure semantic HTML structure is maintained

**Done when**:
- Post titles on `/blog` page are clickable links
- Links point to `/blog/{slug}` format
- Hover styles match existing navigation patterns (accent color, smooth transition)
- No broken links (verified after building)

---

## S006: Create second sample blog post

**Intent**: Demonstrate the blog system with multiple posts and showcase the enhanced schema (tags, featured status).

**Work**:
- Create `src/content/blog/astro-static-sites.md`
- Include frontmatter with: title, publishDate, description, tags (e.g., `["astro", "web-dev", "static-sites"]`), featured (true)
- Write markdown content (3-5 paragraphs about static site generation with Astro)
- Use clean markdown with headings, paragraphs, and lists (no HTML)

**Done when**:
- `src/content/blog/astro-static-sites.md` exists
- Frontmatter includes all required and optional fields
- Content demonstrates clean markdown authoring
- Post appears on blog listing page (sorted by date)
- Post is accessible at `/blog/astro-static-sites`

---

## S007: Update welcome.md with enhanced schema

**Intent**: Ensure existing blog post conforms to enhanced schema by adding new optional fields.

**Work**:
- Edit `src/content/blog/welcome.md`
- Add `tags` field to frontmatter (e.g., `["meta", "welcome"]`)
- Add `featured` field (false)
- Keep existing fields unchanged

**Done when**:
- `welcome.md` includes `tags` and `featured` fields in frontmatter
- Post still builds and renders correctly
- Changes demonstrate backward-compatible schema enhancement

---

## S008: Document blog system

**Intent**: Record the blog system architecture, conventions, and usage in project documentation for future reference and maintenance.

**Work**:
- Edit `.ushabti/docs/index.md`
- Add "Blog System" section after "Interactive Components"
- Document:
  - Content collection location (`src/content/blog/`)
  - Schema fields and their purposes
  - Dynamic routing (`[slug].astro`)
  - BlogPostLayout structure and props
  - Convention: add markdown file → automatic blog post
  - Reading time calculation utility
- Reference relevant laws (L01, L02, L10)

**Done when**:
- `.ushabti/docs/index.md` includes comprehensive "Blog System" section
- Documentation describes schema, routing, layout, and conventions
- Examples show how to add a new blog post
- References to relevant laws are included

---

## S009: Verify quality gates

**Intent**: Ensure the implementation meets all project quality requirements and laws before declaring the Phase complete.

**Work**:
- Run `astro check` and verify no TypeScript or component errors
- Run `astro build` and verify build succeeds
- Manually verify:
  - Blog listing page displays both posts sorted by date
  - Individual post pages render correctly with layout
  - Links work bidirectionally (list ↔ post)
  - Tags display correctly
  - Reading time displays correctly
  - Dark mode styles work on all blog pages

**Done when**:
- `astro check` exits with no errors
- `astro build` completes successfully
- Manual verification confirms all blog functionality works
- No broken links or rendering issues
- Light and dark themes work correctly on all blog pages

---

## S010: Correct BlogPostLayout documentation

**Intent**: Fix documentation drift identified during Overseer review. The documented Props interface includes a `description` field that doesn't exist in the actual implementation.

**Work**:
- Edit `.ushabti/docs/index.md` in the "Blog System > Layout > Props interface" section
- Remove `description: string;` from the Props interface code block
- Ensure the documented interface matches the actual implementation (title, publishDate, readingTime, tags only)

**Done when**:
- Documentation Props interface block shows only: `title: string`, `publishDate: Date`, `readingTime: number`, `tags: string[]`
- No reference to `description` field in BlogPostLayout Props documentation
- Documentation accurately reflects the code in `src/layouts/BlogPostLayout.astro`
