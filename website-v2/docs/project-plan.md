# Project Plan

## Current Site Observations

- The production site is a static Mobirise-generated Bootstrap website served from the repository root.
- Navigation, analytics, footer, and dependency blocks are duplicated across most HTML pages.
- Hardware, disruptions, PI area, and accounting content rely heavily on Airtable embeds or shared views.
- Support and account workflows are handled outside the repository through Freshdesk.
- Knowledgebase content points users to Freshdesk and legacy Read the Docs documentation.
- Production URLs include mixed casing, spaces, generated page names, and user-specific HTML files.

## Recommended Improvements

- Keep the v2 site fully isolated until launch readiness.
- Move shared navigation into one local source of truth during a later build phase.
- Model hardware, groups, statistics, announcements, and support paths as structured content.
- Reduce duplicate PI/user pages by moving repeated content into data-driven templates.
- Inventory every external integration before recreating or replacing it.
- Establish launch criteria before any root-level routing changes.

## Proposed Navigation

- Home
- Hardware
- Software
- Statistics
- Groups
- News
- Support
- About
- Access

## Migration Strategy

1. Keep production served from the repository root.
2. Build and test all new work inside `website-v2/`.
3. Use `docs/site-audit.md` and `website-v2/docs/content-map.md` to map production content to v2 sections.
4. Migrate one section at a time into placeholder pages and local data files.
5. Review dependencies and decide whether each external embed remains, changes, or becomes local content.
6. Validate v2 pages independently before planning production cutover.
7. Plan URL preservation, redirects, or GitHub Pages routing only after v2 content is ready.

## Risks

- Accidentally editing production HTML, CSS, JavaScript, or assets.
- Recreating external embeds without checking ownership, privacy, or availability.
- Losing production URLs that users or documentation already reference.
- Duplicating stale content from legacy pages into v2.
- Introducing analytics or support changes before stakeholders approve them.

## Opportunities

- Make the site easier to maintain through shared local CSS, JavaScript, and data.
- Improve discoverability by grouping current pages into a smaller navigation model.
- Make statistics and announcements clearer with structured JSON sources.
- Consolidate support, documentation, and onboarding paths.
- Review legacy content before migration instead of carrying every generated page forward.

## Decisions

- No production pages or production assets are modified during initial setup.
- `website-v2/` contains its own HTML, CSS, JavaScript, data, docs, and asset placeholders.
- Placeholder pages are intentionally light; content migration and redesign are separate future tasks.
