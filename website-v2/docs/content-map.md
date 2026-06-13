# Content Map

## Planned Sections

- Home: high-level Mjolnir overview and primary task links.
- Hardware: cluster hardware, storage, capacity, and inventory.
- Software: installed software, modules, environments, and software requests.
- Statistics: current utilization, historical utilization, and job usage.
- Groups: PI groups, affiliations, and group-specific context.
- News: announcements, disruptions, and maintenance notices.
- Support: help desk, documentation, support tickets, and community channels.
- About: service background, governance, and institutional context.
- Access: eligibility, onboarding, account requests, and policies.

## Data Sources

- `data/statistics.json`: placeholder for utilization and job metrics.
- `data/groups.json`: placeholder for PI groups and affiliations.
- `data/hardware.json`: placeholder for hardware and storage inventory.
- `data/announcements.json`: placeholder for news, disruptions, and service notices.

## Production Content Sources

- Home overview: `index.html`
- Hardware: `Hardware.html`
- Software: `software.html` and legacy generated software pages.
- Statistics: usage and cluster utilization pages.
- Groups and PI area: `PI_area.html` plus individual PI/user pages.
- Support and docs: `knowledgebase.html`, Freshdesk, Read the Docs, Discord.
- News and disruptions: `disruptions.html`.

## Decisions

- The v2 content map is intentionally section-based rather than filename-based.
- Legacy production filenames are treated as migration inputs, not as required v2 URL names.
- External service links must be reviewed before being copied into v2 pages.
