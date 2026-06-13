# Mjolnir Documentation Portal Manual

Last updated: 2026-06-13

This manual explains how to maintain, rebuild, verify, and integrate the Mjolnir documentation portal months from now.

The portal lives entirely inside:

```text
website-v2/docs/
```

The existing website outside `website-v2/docs/` is separate.

## What This Portal Is

The documentation portal is a static site that replaces the old public documentation spread across:

- Freshdesk Knowledge Base
- ReadTheDocs
- Documentation-like pages on the main Mjolnir website

It includes:

- Static HTML pages
- Markdown source content
- Pagefind search index
- Navigation data
- Redirect mapping data
- Software/database/hardware catalog placeholders
- Article templates
- Migration report

## Important Files And Folders

```text
website-v2/docs/index.html
```

Main documentation homepage.

```text
website-v2/docs/content/
```

Markdown source pages. Edit these when changing documentation content.

```text
website-v2/docs/tools/build-docs.mjs
```

Build script. It generates HTML pages, data files, templates, and the migration report from the page definitions inside the script.

```text
website-v2/docs/pagefind/
```

Generated Pagefind search assets. Rebuild after changing pages.

```text
website-v2/docs/data/navigation.json
```

Generated navigation map.

```text
website-v2/docs/data/redirects.json
```

Generated redirect/canonical mapping from old source topics to new pages.

```text
website-v2/docs/data/search-index.json
```

Fallback static search index. The portal uses Pagefind first and this JSON index as a fallback.

```text
website-v2/docs/migration-report.md
```

Summary of migration decisions and content counts.

```text
website-v2/docs/templates/
```

Markdown templates for new article, policy, and troubleshooting pages.

## How To Rebuild The Portal

Run these commands from the repository root:

```bash
node website-v2/docs/tools/build-docs.mjs
npx -y pagefind --site website-v2/docs --output-subdir pagefind
```

What they do:

- `build-docs.mjs` regenerates static HTML, Markdown, data files, templates, and migration report.
- `pagefind` regenerates the search index in `website-v2/docs/pagefind/`.

If `npx` asks to download Pagefind, allow it. Pagefind is the approved search solution.

## How To Preview Locally

Run:

```bash
python3 -m http.server 4173 --directory website-v2/docs
```

Open:

```text
http://127.0.0.1:4173/index.html
```

Stop the server with `Ctrl+C`.

## How To Verify After Rebuild

Run these checks from the repository root.

Check that the homepage responds:

```bash
curl -I http://127.0.0.1:4173/index.html
```

Check that Pagefind assets respond:

```bash
curl -I http://127.0.0.1:4173/pagefind/pagefind.js
```

Validate JSON data:

```bash
node -e "for (const f of ['navigation','redirects','search-index','software-catalog','database-catalog','hardware','release-notes']) JSON.parse(require('fs').readFileSync('website-v2/docs/data/'+f+'.json','utf8')); console.log('json ok')"
```

Check internal links:

```bash
node -e "const fs=require('fs'),path=require('path'); const root='website-v2/docs'; const files=[]; function walk(d){for(const f of fs.readdirSync(d)){const p=path.join(d,f); if(fs.statSync(p).isDirectory()) walk(p); else if(p.endsWith('.html')) files.push(p)}} walk(root); let bad=[]; for(const file of files){const html=fs.readFileSync(file,'utf8'); for(const m of html.matchAll(/href=\"([^\"]+)\"/g)){const href=m[1]; if(href.startsWith('http')||href.startsWith('#')||href.startsWith('mailto:')) continue; const target=path.normalize(path.join(path.dirname(file),href)); const check=href.endsWith('/')?path.join(target,'index.html'):target; if(!fs.existsSync(check)) bad.push(file+' -> '+href+' ('+check+')'); }} if(bad.length){console.error(bad.slice(0,20).join('\n')); process.exit(1)} console.log('internal links ok:',files.length,'html files')"
```

Expected current counts:

- 64 Markdown content files
- 79 generated HTML pages
- Pagefind index with 79 pages and 3 filters

The exact word count may change as content improves.

## How To Edit Existing Content

Important: the current build script contains the canonical page definitions. If you edit only generated Markdown or HTML, a later rebuild may overwrite your changes.

For durable edits:

1. Open:

```text
website-v2/docs/tools/build-docs.mjs
```

2. Find the relevant `page(...)` entry.

3. Edit title, tags, body text, source references, or category.

4. Rebuild:

```bash
node website-v2/docs/tools/build-docs.mjs
npx -y pagefind --site website-v2/docs --output-subdir pagefind
```

5. Preview and verify.

## How To Add A New Page

1. Open:

```text
website-v2/docs/tools/build-docs.mjs
```

2. Add a new `page(...)` entry to the `pages` array.

Example:

```js
page("slurm", "Reference", "new-slurm-topic", "New Slurm Topic", "guide", ["slurm", "example"], [
  "Short answer or summary.",
  "Main guidance.",
  "Common problem or next step."
], ["Source note or migration source"])
```

3. Make sure the category exists in `categories`.

4. Make sure the section exists in `navGroups`.

5. Rebuild:

```bash
node website-v2/docs/tools/build-docs.mjs
npx -y pagefind --site website-v2/docs --output-subdir pagefind
```

6. Preview and verify.

## How To Add A New Category

1. Add the category to `categories` in `build-docs.mjs`.

2. Add its sidebar sections to `navGroups`.

3. Add one or more `page(...)` entries using the new category slug.

4. Rebuild and verify.

Category slug examples:

```text
getting-started
accounts-access
storage
slurm
software
gpu-computing
```

Use lowercase slugs with hyphens.

## How Search Works

Search uses two layers:

1. Pagefind production search.
2. Local JSON fallback search.

The browser script loads:

```text
website-v2/docs/pagefind/pagefind.js
```

If Pagefind fails, it falls back to:

```text
website-v2/docs/data/search-index.json
```

Search filters are generated from HTML attributes:

- category
- type
- status

Rebuild Pagefind after every documentation change:

```bash
npx -y pagefind --site website-v2/docs --output-subdir pagefind
```

## How To Integrate With The Website

When approved, connect the main website to the docs portal.

If deploying `website-v2/` as the website root:

```text
docs/index.html
```

or:

```text
/docs/
```

Recommended website changes:

- Add a `Documentation` navigation link pointing to `/docs/`.
- Update old `Knowledgebase` links to `/docs/`.
- Update Software page documentation links to `/docs/software/`.
- Update Hardware documentation links to `/docs/getting-started/what-is-mjolnir/` or a future hardware reference page.
- Update Databases documentation links to `/docs/databases/`.
- Keep live utilization/statistics pages on the website, but link explanatory docs to `/docs/monitoring-jobs/cluster-utilization/`.
- Keep Freshdesk only for support tickets.

Recommended support link:

```text
https://mjolnirucph-help.freshdesk.com/support/tickets/new
```

## Redirect Strategy

Redirect mappings live here:

```text
website-v2/docs/data/redirects.json
```

Use this file during cutover to decide where old pages should point.

If a true redirect is possible, redirect the old URL to the new canonical page.

If a true redirect is not possible, edit the old page to say:

```text
This page has moved. The current documentation is here: [new URL].
```

Priority redirects:

- Old Freshdesk popular articles
- ReadTheDocs Slurm pages
- Website Knowledgebase page
- Website Software/Hardware/Databases documentation sections

## How To Update Catalogs

Catalog data lives in:

```text
website-v2/docs/data/software-catalog.json
website-v2/docs/data/database-catalog.json
website-v2/docs/data/hardware.json
website-v2/docs/data/release-notes.json
```

At the moment these are generated placeholders. If you manually edit them, be aware that `build-docs.mjs` will overwrite them.

For durable catalog edits, update the catalog definitions inside:

```text
website-v2/docs/tools/build-docs.mjs
```

Then rebuild.

## How To Publish Changes

After editing and rebuilding:

```bash
git status --short
git add website-v2/docs
git commit -m "Update documentation portal"
git push origin website-v2-setup
```

If you also changed architecture/planning docs under the top-level `docs/` folder, add those explicitly too.

## Troubleshooting

### Pagefind command fails with network error

The first run may need to download Pagefind from npm:

```bash
npx -y pagefind --site website-v2/docs --output-subdir pagefind
```

If the environment blocks network access, allow the command or run it in an environment with npm access.

### Search box shows fallback results only

Check that this file exists:

```text
website-v2/docs/pagefind/pagefind.js
```

Then rebuild Pagefind.

### Search does not work from a file opened directly in the browser

Use a local HTTP server:

```bash
python3 -m http.server 4173 --directory website-v2/docs
```

Pagefind browser modules are more reliable over HTTP than `file://`.

### A page edit disappeared

You probably edited generated Markdown or HTML directly and then rebuilt. Durable content currently lives in `build-docs.mjs`.

Edit the relevant `page(...)` entry in:

```text
website-v2/docs/tools/build-docs.mjs
```

Then rebuild.

### Links are broken after moving pages

Run the internal-link check from the verification section.

Also update:

```text
website-v2/docs/data/redirects.json
```

by changing the relevant page source mapping in `build-docs.mjs`.

## Current Build Notes

Current implementation commit:

```text
f69735f Build documentation portal
```

Current branch:

```text
website-v2-setup
```

Current portal URL when served locally:

```text
http://127.0.0.1:4173/index.html
```

Current production-style path after website integration:

```text
/docs/
```

## Future Improvements

Recommended next improvements:

- Move page definitions out of `build-docs.mjs` into separate Markdown files as the true source of truth.
- Add a CI workflow that runs the build, Pagefind, JSON validation, and internal-link check.
- Add real software, database, and hardware catalog entries.
- Replace placeholder archive summaries with reviewed historical records.
- Add URL redirects or retirement notices in Freshdesk and ReadTheDocs.
- Add a Documentation link in the main website navigation.
- Add a review-date report for stale pages.
