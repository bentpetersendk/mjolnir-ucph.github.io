# Mjolnir Documentation Search Strategy

This document evaluates search architecture for the future Mjolnir documentation portal. It is a planning artifact only.

## Search Goal

Users need one search box that searches:

- Documentation
- FAQs
- Troubleshooting
- Policies
- Software documentation
- Database documentation
- GPU documentation
- Announcements and archives, with lower prominence

The search system must work on a static site hosted on GitHub Pages without a server.

## Recommendation

Use Pagefind as the default search engine.

Pagefind is the best fit because it runs after static site generation, outputs static search assets, and does not require a server component. It also supports metadata and filters, which are required for a good Mjolnir search experience.

Primary source notes:

- Pagefind documentation says it runs after the static generator and outputs a static search bundle.
- Pagefind documentation states it has no server component and the integration is baked into the static site.
- Pagefind supports metadata and filters through `data-pagefind-meta` and `data-pagefind-filter`.

Sources:

- https://pagefind.app/docs/
- https://pagefind.app/docs/metadata/
- https://pagefind.app/docs/filtering/

## Evaluation Matrix

| Tool | GitHub Pages compatible | Server required | Setup complexity | Filtering/metadata | External dependency | Recommendation |
| --- | --- | --- | --- | --- | --- | --- |
| Pagefind | Yes | No | Low to medium | Strong | No hosted service | Recommended |
| Lunr.js | Yes | No | Medium to high | Custom work required | No hosted service | Acceptable fallback |
| Algolia DocSearch | Yes for frontend | Hosted crawler/service | Medium | Strong | Yes | Not preferred |

## Pagefind

Strengths:

- Static output works with GitHub Pages.
- No runtime server.
- Index generated after build from rendered HTML.
- Prebuilt UI is available.
- Search API allows custom UI later.
- Metadata and filters support category/type/audience filtering.
- Good fit for a docs portal with dozens to hundreds of pages.

Limitations:

- Search index must be regenerated during each build.
- Search quality depends on rendered HTML structure and metadata discipline.
- Advanced analytics, typo tolerance, synonyms, and hosted dashboards are not as mature as Algolia.

Best use for Mjolnir:

- Use Pagefind for all public documentation search.
- Generate search filters from page metadata.
- Exclude archive pages from default ranking or mark them clearly.
- Boost titles, descriptions, tags, and FAQ questions.

## Lunr.js

Strengths:

- Fully client-side.
- Works on static sites.
- No hosted service.
- Flexible for custom indexing.

Limitations:

- Requires custom build scripts to generate and serialize indexes for larger sites.
- Requires more custom UI work.
- Filters and metadata ranking need custom implementation.
- Browser performance can suffer if indexes are too large or generated client-side.

Primary source notes:

- Lunr can be used in browsers.
- Lunr supports prebuilt serialized indexes for static sites, but that requires explicit index generation.

Sources:

- https://lunrjs.com/guides/getting_started.html
- https://lunrjs.com/guides/index_prebuilding.html

Best use for Mjolnir:

- Keep Lunr as a fallback if Pagefind is incompatible with the chosen static site generator.
- Do not choose Lunr first because Mjolnir needs filters, metadata, and low-maintenance operations.

## Algolia DocSearch

Strengths:

- Excellent hosted search experience.
- Strong ranking, typo tolerance, and autocomplete.
- Crawler and frontend library are designed for documentation.
- Good analytics and configuration tooling.

Limitations:

- Requires external hosted service and crawler.
- Free DocSearch program has eligibility and application workflow.
- Default crawls are scheduled, so updates may not be instant unless manually triggered.
- Adds vendor dependency and branding requirements.

Primary source notes:

- Algolia describes DocSearch as a crawler plus frontend library.
- Crawls are handled by Algolia Crawler and scheduled weekly by default.

Source:

- https://docsearch.algolia.com/docs/what-is-docsearch/

Best use for Mjolnir:

- Consider only if Pagefind search quality becomes inadequate or analytics are a hard requirement.
- Not recommended for the initial architecture because the stated preference is GitHub Pages compatible, static, and no server required.

## Search Information Design

### Search Box Placement

- Global header on every page.
- Homepage hero/search area.
- Troubleshooting landing page.
- FAQ landing page.
- Mobile full-screen search modal.

### Result Fields

Each result should show:

- Title
- Description or excerpt
- Category
- Content type
- Last reviewed date
- Status badge if not current
- Breadcrumb path

### Filters

Required filters:

- Category
- Content type
- Audience
- Status

Recommended category filter values:

- Getting Started
- Accounts & Access
- Storage
- Slurm
- Job Submission
- Monitoring Jobs
- Software
- Databases
- GPU Computing
- Policies
- Troubleshooting
- FAQ
- Administration
- News & Announcements

Recommended content type filter values:

- Guide
- Reference
- Policy
- Troubleshooting
- FAQ
- Announcement
- Archive

Recommended status filter values:

- Current
- Needs review
- Deprecated
- Archive

### Ranking Rules

Recommended ranking priority:

1. Exact title matches.
2. FAQ question matches.
3. Tags and synonyms.
4. Current guides, policies, and troubleshooting.
5. Reference pages.
6. Announcements.
7. Archive pages.

Archive pages should be searchable, but they should not outrank current guidance.

## Search Metadata

Every page should expose search metadata from front matter into rendered HTML:

```yaml
title: "Job is pending"
description: "How to understand why a Slurm job is waiting in the queue."
category: "Troubleshooting"
content_type: "troubleshooting"
audience: ["all users"]
tags: ["slurm", "pending", "queue", "priority", "fairshare"]
status: "current"
last_reviewed: "2026-06-13"
```

Recommended generated Pagefind fields:

- `title`
- `description`
- `category`
- `content_type`
- `audience`
- `tags`
- `status`
- `last_reviewed`

## Synonyms and Search Vocabulary

Search should account for user vocabulary:

- account, user, access, login
- VPN, Cisco AnyConnect, KU VPN
- SSH, mjolnirgate, login node
- queue, partition, QoS, priority, fairshare
- job, batch, sbatch, srun, interactive
- memory, RAM, OOM, out of memory
- GPU, CUDA, gpuqueue
- project folder, storage, data, backup, snapshot
- database, reference database, shared repository
- software, module, Conda, package

## No-Results Experience

If no results are found:

- Suggest common searches.
- Show support link.
- Show category shortcuts.
- Offer "submit a ticket" as the final path, not the first path.

Suggested no-result shortcuts:

- VPN and SSH access
- New user request
- Submit a job
- Pending jobs
- Request software
- Request database
- Storage and backup
- GPU jobs

## Analytics and Feedback

Initial static implementation:

- Track common failed searches only if privacy and hosting policy allow it.
- Add "Was this page helpful?" only if feedback has an owner and review workflow.

Future enhancement:

- If Pagefind lacks enough analytics, add privacy-conscious static analytics or consider Algolia later.

## Build Pipeline Requirements

The future implementation should:

- Build static HTML.
- Validate front matter.
- Generate redirects.
- Run link checks.
- Run Pagefind against built output.
- Publish generated search assets with the site.

No runtime server should be needed.
