# Implementation Steps

## S001: Update home page text content

**Intent:** Replace "Hello World" with "Adam Drew" in both the page title and main heading to personalize the home page.

**Work:**
1. Open `src/pages/index.astro`
2. Change the `title` prop in `<BaseLayout title="Hello World">` to `<BaseLayout title="Adam Drew">`
3. Change the `<h1>` text content from "Hello World" to "Adam Drew"
4. Save the file

**Done when:**
- The `title` prop value is "Adam Drew"
- The `<h1>` text content is "Adam Drew"
- The file is saved
- Visual inspection in browser shows "Adam Drew" in both the browser tab title and page heading

## S002: Verify build and type checking

**Intent:** Ensure the changes don't break the build and pass all quality gates required by L12.

**Work:**
1. Run `npm run build` to verify the site builds successfully
2. Run `astro check` to verify no type errors exist
3. Verify the built site in the browser displays "Adam Drew" correctly

**Done when:**
- `npm run build` exits with code 0 (success)
- `astro check` reports no errors
- The built site displays "Adam Drew" in browser tab and heading
- No console errors appear in browser developer tools
