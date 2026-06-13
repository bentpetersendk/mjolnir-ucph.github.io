# Mjolnir Knowledge Base Architecture

Architecture phase date: 2026-06-13

Scope: design a new single documentation portal that replaces the Freshdesk Knowledge Base, ReadTheDocs documentation, and documentation sections of the Mjolnir website. This document does not migrate or rewrite content.

## Executive Summary

Mjolnir should move to one static documentation portal hosted on GitHub Pages. The portal should become the canonical source for user-facing documentation, policy, troubleshooting, FAQs, software guidance, database guidance, and archived announcements.

Recommended platform architecture:

- Static site hosted on GitHub Pages.
- Markdown content files with structured front matter.
- A generated navigation model from a version-controlled navigation map.
- Pagefind for static search.
- GitHub Actions for build, link checks, search indexing, and metadata validation.
- Redirects or link-forwarding from old Freshdesk, ReadTheDocs, and website documentation URLs where possible.

Freshdesk should remain only for support ticket intake and private support workflows. ReadTheDocs should be retired or redirected after content migration. The main website should keep public marketing, live status/statistics, and governance pages, but all documentation links should point to the new portal.

## Design Principles

- One canonical answer per topic.
- Search first, navigation second, but both must be excellent.
- Every page has an owner, review date, category, and content type.
- Operational docs and historical announcements are separated.
- Short task pages should link to deeper reference pages.
- Search results must support filters for category, content type, audience, and freshness.
- The portal must work as a static site without a server.
- Old URLs must have a migration/redirect strategy before public cutover.

## Platform Model

### Recommended Site Type

Use a static documentation site generated from Markdown.

The architecture should be compatible with GitHub Pages and should not require a runtime server. A future implementation could use a static site generator such as Astro, Eleventy, Hugo, MkDocs, or Docusaurus, but the architecture should not depend on a hosted database or CMS.

### Source Repository Layout

Recommended conceptual layout:

```text
docs-portal/
  content/
    getting-started/
    accounts-access/
    storage/
    slurm/
    job-submission/
    monitoring-jobs/
    software/
    databases/
    gpu-computing/
    policies/
    troubleshooting/
    faq/
    administration/
    news-announcements/
  data/
    navigation.json
    redirects.json
    software-catalog.json
    database-catalog.json
    glossary.json
  assets/
  templates/
  scripts/
```

This is a proposed architecture only. No folders are created by this phase.

## Content Model

Every documentation page should be Markdown with structured front matter:

```yaml
---
title: "VPN and SSH access"
description: "How to connect to Mjolnir through KU VPN and SSH."
category: "Accounts & Access"
section: "VPN and SSH"
content_type: "guide"
audience: ["new users", "all users"]
tags: ["vpn", "ssh", "login", "mjolnirgate"]
owner: "Mjolnir Admin"
status: "current"
review_cycle: "6 months"
last_reviewed: "2026-06-13"
source_pages:
  - "Freshdesk: VPN access and login to Mjolnir"
redirect_from:
  - "/support/solutions/articles/154000127142-vpn-access-and-login-to-mjolnir"
---
```

Recommended content types:

- `guide`: user-facing task workflow.
- `reference`: stable technical reference.
- `policy`: rules, limits, responsibilities.
- `troubleshooting`: problem, diagnosis, resolution.
- `faq`: short question/answer.
- `announcement`: dated news item.
- `archive`: historical content retained for traceability.

## Metadata Strategy

Use front matter as the source of truth. Build-time validation should require:

- `title`
- `description`
- `category`
- `content_type`
- `owner`
- `status`
- `last_reviewed`
- `review_cycle`

Optional but strongly recommended:

- `audience`
- `tags`
- `applies_to`
- `related_pages`
- `source_pages`
- `redirect_from`
- `supersedes`
- `superseded_by`

Use JSON data files for structured reference collections that may be rendered into pages:

- Software catalog.
- Database catalog.
- Hardware inventory.
- Queue/QoS reference.
- Glossary.
- Redirect map.

## Versioning Strategy

Use Git as the primary versioning system for documentation history. Public versioning should be simple:

- `current`: the default user-facing documentation.
- `archive/YYYY/`: historical announcements and deprecated procedures.
- Optional future `legacy/`: only if Mjolnir needs to document old cluster behavior separately from the active system.

Do not expose many version branches unless there are simultaneously supported platform versions. Most users need a single current answer.

## Information Architecture

Primary categories:

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
- Frequently Asked Questions
- Administration
- News & Announcements

Category intent:

- Getting Started: orientation and first successful workflow.
- Accounts & Access: eligibility, accounts, VPN, SSH, GitHub, contact preferences.
- Storage: project folders, data transfer, backup, quota/cost policy, cleanup.
- Slurm: concepts, partitions, QoS, fairshare, scheduling, limits.
- Job Submission: examples, templates, batch arrays, interactive jobs.
- Monitoring Jobs: queue inspection, job accounting, node monitoring, statistics.
- Software: modules, Conda, installation requests, software catalog.
- Databases: available databases, requests, shared access, database catalog.
- GPU Computing: GPU queue, CUDA/modules, examples, monitoring, common errors.
- Policies: storage, login node, acceptable use, maintenance, support scope.
- Troubleshooting: symptom-driven problem solving.
- Frequently Asked Questions: short answers and quick redirects to canonical pages.
- Administration: PI/project-owner guidance and governance.
- News & Announcements: current news plus archive.

## Page Templates

### Guide Template

- Title
- Short answer
- Prerequisites
- Steps
- Expected result
- Common problems
- Related pages
- Last reviewed metadata

### Reference Template

- Title
- Summary
- Reference table or command list
- Notes and constraints
- Examples
- Related pages
- Last reviewed metadata

### Policy Template

- Title
- Policy summary
- Who it applies to
- Rules
- Exceptions
- Contact/escalation path
- Effective date
- Last reviewed metadata

### Troubleshooting Template

- Symptom
- Likely causes
- Quick checks
- Resolution steps
- When to contact support
- Related pages

### FAQ Template

- Question
- Short answer
- Link to canonical guide/reference/policy

## User Experience Architecture

### Global Header

The header should include:

- Mjolnir Documentation home link.
- One global search box.
- Top-level category menu.
- Support/ticket link.
- Status/statistics link to the main website if those remain external.

### Sidebar

The sidebar should show:

- Current category.
- Section pages grouped by task.
- Current page highlighted.
- Optional "On this page" anchors for long pages.

### Breadcrumbs

Breadcrumb pattern:

```text
Home / Category / Section / Page
```

Examples:

- `Home / Accounts & Access / VPN and SSH / VPN and SSH access`
- `Home / Slurm / Scheduling / Fairshare and job priority`
- `Home / Troubleshooting / Jobs / Job is pending`

### Search Experience

Search should be available:

- In the global header.
- On the homepage.
- On mobile as a prominent first action.
- On troubleshooting and FAQ landing pages.

Search results should display:

- Page title.
- Category label.
- Content type label.
- Short excerpt with highlighted terms.
- Last reviewed date.
- Optional filters for category, type, audience, and status.

### Mobile Layout

Mobile behavior:

- Header collapses to logo, search button, and menu button.
- Search opens as a full-screen modal.
- Sidebar becomes an off-canvas navigation drawer.
- Breadcrumbs collapse to parent category plus current page.
- "On this page" anchors become a compact dropdown.

## Search Architecture

Use Pagefind as the default search engine.

Rationale:

- It runs after static site generation and produces a static search bundle.
- It does not require a server component.
- It supports metadata and filters, which are important for category/type/audience filtering.
- It is compatible with GitHub Pages because the generated assets are static.
- It avoids external service dependency and crawler approval workflows.

See `docs/search-strategy.md` for the search engine evaluation.

## Portal Home Page

The documentation home should be a functional docs dashboard, not a marketing page.

Recommended components:

- Large search input.
- "Start here" path for new users.
- Category grid with short labels.
- Common tasks:
  - Request access.
  - Connect with VPN/SSH.
  - Submit first job.
  - Check job status.
  - Request software.
  - Find databases.
  - Troubleshoot pending jobs.
- Current announcements.
- Link to support ticket form.

## Replacement Boundaries

### Freshdesk

Replace:

- Public knowledge base articles.
- FAQ-style support articles.
- Historical email article browsing.

Keep:

- Ticket intake.
- Private support workflow.
- User communications if needed.

### ReadTheDocs

Replace:

- All public Mjolnir documentation pages.
- RTD search.

Keep:

- Git history if useful.
- Source content as migration input.

### Main Website

Replace:

- Documentation pages such as hardware/software/database summaries if they are used as docs.
- Knowledgebase landing page.

Keep:

- Public overview.
- PI pages.
- Live utilization/statistics pages.
- Status/disruptions if those are operational dashboards.

## Governance

Minimum governance model:

- Every page has an owner.
- Every page has a review cycle.
- Pages past review date are reported by CI.
- Announcements expire into archive unless marked as current policy.
- Policies require explicit effective date and owner.
- Redirects are reviewed before cutover.

Recommended ownership:

- Mjolnir Admin: access, Slurm, storage, software/database requests, policies.
- Technical docs owner: navigation, style, templates, metadata.
- PI/project owners: administration-facing pages where needed.

## Success Criteria

The architecture is successful when:

- Users can search all documentation from one search box.
- Every current topic has one canonical page.
- Historical emails no longer appear as normal how-to results.
- Freshdesk and RTD duplication is removed or redirected.
- New users can reach first successful login and first successful job from the homepage.
- Support tickets for common issues decline because troubleshooting pages are findable.

## Source References

- Pagefind documentation: https://pagefind.app/docs/
- Lunr documentation: https://lunrjs.com/guides/getting_started.html
- Lunr prebuilt indexes: https://lunrjs.com/guides/index_prebuilding.html
- Algolia DocSearch documentation: https://docsearch.algolia.com/docs/what-is-docsearch/
