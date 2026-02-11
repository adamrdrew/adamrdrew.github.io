# Phase 0009: Complete Blog System with Dynamic Routes and Enhanced Schema

## Intent

Complete the blog infrastructure by adding individual post pages, a dedicated blog post layout, and enhanced metadata schema. The goal is to create a convention-over-configuration blog system where adding a new markdown file in `src/content/blog/` automatically makes it available on the site with proper routing, layout, and metadata display.

This Phase builds on existing work (basic blog listing and content collection) to create a fully functional blog section.

## Scope

**In Scope:**
- Create dynamic route `src/pages/blog/[slug].astro` for individual blog posts using Astro's file-system routing
- Create `src/layouts/BlogPostLayout.astro` that wraps `BaseLayout` and provides post-specific structure (title, date, reading time, tags, content)
- Enhance blog schema in `src/content/config.ts` with additional fields: `tags`, `featured`, `excerpt` (optional)
- Add utility function `src/lib/calculateReadingTime.ts` for reading time estimation
- Create a second sample blog post to demonstrate the complete system
- Add blog post links to the listing page (`src/pages/blog/index.astro`)
- Document the blog system in `.ushabti/docs/index.md`

**Out of Scope:**
- RSS feed generation
- Tag-based filtering or tag archive pages
- Search functionality
- Related posts suggestions
- Comments system or social sharing buttons
- Pagination (not needed until post count grows significantly)

## Constraints

**Relevant Laws:**
- **L01**: File-system routing is absolute — `[slug].astro` in `src/pages/blog/` creates dynamic routes
- **L02**: Content collections require schema definition in `src/content/config.ts`
- **L03**: Components server-rendered by default, ship zero JavaScript
- **L04**: Frontmatter fence is the server boundary — all data fetching happens above `---`
- **L05**: Layouts are components that accept `<slot />`
- **L07**: Use Tailwind utilities, no scoped `<style>` tags
- **L10**: Markdown rendered through `<Content />` component from content collections API
- **L12**: `astro check` and `astro build` must pass before completion
- **L14**: Consult documentation before planning
- **L15**: Builder must update documentation when code changes affect documented systems

**Relevant Style:**
- Layouts compose through nesting (BlogPostLayout wraps BaseLayout)
- Pages are thin orchestrators (fetch data, pass to components)
- Prefer semantic HTML (`<article>`, `<header>`, `<time>`, etc.)
- Keep styles using Tailwind utilities only
- Markdown content is content only (no HTML or component imports)
- Frontmatter is for data, not complex logic
- Content schemas are contracts enforced at build time

## Acceptance Criteria

1. **Dynamic routing works**: Visiting `/blog/{slug}` renders the corresponding blog post from `src/content/blog/{slug}.md`
2. **BlogPostLayout exists**: Layout component displays post title, publish date, reading time, tags, and rendered markdown content
3. **Enhanced schema**: Blog collection schema includes `title`, `publishDate`, `description`, `tags` (array, default empty), `featured` (boolean, default false), `excerpt` (optional string)
4. **Reading time calculation**: Utility function `calculateReadingTime(text: string): number` exists and is used in blog post pages
5. **Links functional**: Blog listing page links to individual posts
6. **Sample content**: At least two blog posts exist demonstrating the system
7. **Quality gates pass**: `astro check` and `astro build` succeed without errors
8. **Documentation updated**: `.ushabti/docs/index.md` includes a "Blog System" section describing the content collection, schema, routing, and layout

## Risks / Notes

**Intentional simplifications:**
- No pagination on listing page (acceptable for small post counts)
- No tag archive pages (can be added in future phase if needed)
- No RSS feed (out of scope for now)

**Dependencies:**
- Builds on existing `src/content/blog/` collection and `src/pages/blog/index.astro`
- Uses existing `BaseLayout.astro` and Tailwind utilities

**Reading time calculation:**
- Uses simple word count heuristic (200 words per minute reading speed)
- Acceptable for estimation; does not need to be precise
