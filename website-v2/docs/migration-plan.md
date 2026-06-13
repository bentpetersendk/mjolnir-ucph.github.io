# Migration Plan

## Purpose

This document tracks how the existing production website can be migrated into the isolated `website-v2/` architecture without disrupting the live site.

## Guardrails

- Production files remain unchanged until a separate launch task explicitly permits routing changes.
- New assets, styles, scripts, data, and documentation live inside `website-v2/`.
- External integrations are inventoried before being recreated.
- Placeholder pages are acceptable until content ownership is confirmed.

## Phases

1. Establish the v2 folder structure and baseline documentation.
2. Map current production pages to proposed v2 sections.
3. Identify canonical content, duplicates, stale pages, and external dependencies.
4. Build data-driven section prototypes inside `website-v2/`.
5. Review stakeholders, support workflows, and analytics requirements.
6. Prepare a launch plan with URL strategy and rollback criteria.

## Initial Page Mapping

- `index.html` -> `website-v2/index.html`
- `Hardware.html` -> `website-v2/hardware.html`
- `software.html` -> `website-v2/software.html`
- `Usage_Statistics.html`, `current_cluster_utilization.html`, `cluster_utilization_over_time.html`, `job_statistics.html` -> `website-v2/statistics.html`
- PI/user pages and `PI_area.html` -> `website-v2/groups.html` and `website-v2/access.html`
- `knowledgebase.html`, Freshdesk links, and Read the Docs links -> `website-v2/support.html`
- `about.html` and `about_mjolnir.html` -> `website-v2/about.html`
- `disruptions.html` -> `website-v2/news.html`

## Open Questions

- Which production pages are still actively maintained?
- Which Airtable views should remain embedded, and which should become static or API-backed content?
- Which URL paths must be preserved at launch?
- Should analytics continue with the existing GA measurement ID or use a separate v2 measurement plan?
