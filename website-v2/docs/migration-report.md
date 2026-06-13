# Mjolnir Documentation Migration Report

Generated: 2026-06-13

## Scope

All generated portal work lives inside `website-v2/docs/`. Existing website files outside this folder were not modified.

## Migration approach

The implementation creates canonical Markdown pages, renders static HTML, creates local search data, prepares Pagefind integration, and records redirects. Duplicate Freshdesk, ReadTheDocs, and website documentation topics are merged into one navigation structure.

## Consolidation summary

- **About Mjolnir:** Merged into Getting Started / What is Mjolnir.
- **VPN, login, SSH, GitHub keys:** Merged into Accounts & Access / VPN and SSH plus SSH shortcuts.
- **Hardware:** Reserved as future hardware reference and linked from live website dashboards.
- **Databases:** Split into database overview, request workflow, shared access, and catalog.
- **Storage, project folders, backup, data transfer:** Merged into Storage section.
- **Slurm, queues, QoS, partitions:** Merged into Slurm section with job submission and monitoring separated.
- **Software request, digest, BioRender:** Merged into Software section.
- **Troubleshooting articles:** Moved into symptom-based Troubleshooting section.
- **Historical emails and presentations:** Archived under News & Announcements / Historical archive.

## Content counts

- Canonical/current pages: 52
- Archived historical pages: 12
- Categories: 14

## Search

The portal includes Pagefind hooks and a generated fallback index at `data/search-index.json`. Run Pagefind against `website-v2/docs` to generate the production `pagefind/` assets.

## Redirect strategy

Redirect mappings are generated in `data/redirects.json`. True redirects should be configured during cutover where the source platform allows it; otherwise old pages should show a retirement notice linking to the new canonical page.

## Future-proofing

The portal includes data structures for navigation, redirects, hardware, software catalog, database catalog, release notes, and historical archives.
