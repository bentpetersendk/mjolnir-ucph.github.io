# Mjolnir Documentation Migration Strategy

This document defines the migration architecture for moving from Freshdesk, ReadTheDocs, and website documentation into one new documentation portal. It does not migrate or rewrite content.

## Migration Goals

- Create one canonical documentation portal.
- Preserve useful current content.
- Remove duplicate user-facing pages.
- Archive historical communications.
- Keep support ticket workflows available.
- Avoid breaking old links where redirects are possible.
- Launch with enough content coverage that users can rely on the new portal.

## Source Systems

### Freshdesk

Role today:

- Most current support knowledge base.
- Contains short procedural articles.
- Contains archived email announcements and presentations.

Future role:

- Ticket intake and private support workflow only.
- Public articles should be migrated, archived, or redirected.

### ReadTheDocs

Role today:

- Long-form technical documentation, especially Slurm job submission and monitoring.
- Contains many duplicate or stub pages.

Future role:

- Retire or redirect after migration.
- Preserve Git/source history as migration evidence if useful.

### Main Website

Role today:

- Public overview.
- Hardware/software/database summaries.
- Statistics/utilization pages.
- PI pages.
- Knowledgebase links.

Future role:

- Public website and live dashboards.
- Documentation links point to the new portal.
- Avoid duplicating documentation content.

## Migration Phases

### Phase 0: Architecture and Governance

Status: current phase.

Outputs:

- Architecture document.
- Navigation map.
- Search strategy.
- Migration strategy.
- Content ownership model.
- Metadata requirements.

No content migration occurs in this phase.

### Phase 1: Content Triage

Use `docs/content-inventory.csv` and `docs/duplicate-content-report.csv` to label every source page:

- `migrate`: current useful content.
- `merge`: useful but duplicated.
- `archive`: historical only.
- `redirect`: old page should point to canonical page.
- `retire`: obsolete and not worth preserving publicly.
- `external`: should remain outside docs, such as support ticket forms.

Deliverables:

- Final migration tracker.
- Page owner assignment.
- Canonical destination for every source URL.

### Phase 2: Content Model Setup

Define:

- Markdown front matter schema.
- Category list.
- Content type list.
- Redirect map schema.
- Review workflow.
- Style guide.
- Page templates.

Deliverables:

- Content schema.
- Editorial workflow.
- Review checklist.

### Phase 3: Skeleton Portal

Create the portal structure without migrating article bodies.

Deliverables:

- Empty category landing pages.
- Navigation shell.
- Search shell.
- Page templates.
- Redirect map stub.

This phase still avoids content migration except placeholders required to test architecture.

### Phase 4: Priority Migration

Migrate and consolidate the highest-value current content first:

1. Getting Started and onboarding.
2. VPN/SSH/accounts.
3. Slurm basics, job submission, monitoring.
4. Storage and data transfer.
5. Software and databases.
6. Troubleshooting.
7. Policies.

Each migrated page must:

- Have one canonical destination.
- Include source references in front matter.
- Pass metadata validation.
- Have owner and review date.
- Be findable in search.

### Phase 5: Duplicate Consolidation

Resolve duplicate clusters:

- About/Mjolnir overview.
- VPN and SSH.
- Hardware.
- Databases.
- Storage and backup.
- Slurm and QoS.
- Account requests.
- Software requests.
- Support and Discord.

For each cluster:

- Choose canonical page.
- Merge durable content.
- Add redirects or link-forwarding.
- Archive or retire superseded pages.

### Phase 6: Archive Migration

Move historical emails, maintenance notices, presentations, and old migration notices into News & Announcements / Archive.

Archive rules:

- Preserve title and date.
- Mark `content_type: archive`.
- Mark `status: archive`.
- Add a banner that the page is historical.
- Link to current canonical documentation if the historical page references old behavior.
- Exclude from default task navigation.

### Phase 7: Redirects and Cutover

Before launch:

- Create redirect map from old URLs to new canonical pages.
- Update main website documentation links.
- Update Freshdesk public KB links or replace with a portal link.
- Add RTD retirement notice or redirects.
- Validate old high-traffic URLs manually.

Cutover requirements:

- Search index built.
- Link checks pass.
- Metadata validation passes.
- Support team has reviewed top workflows.
- Old pages have clear redirects or deprecation notices.

### Phase 8: Post-Launch Review

After launch:

- Review support tickets for repeated doc gaps.
- Review failed searches if analytics are available.
- Fix missing redirects.
- Review stale pages monthly for the first quarter.
- Move announcements into archive after their active window.

## Migration Priority

### Priority 1: Must Exist at Launch

- What is Mjolnir?
- Who can access Mjolnir?
- New user request.
- VPN and SSH access.
- SSH shortcut and keys.
- Login node rules.
- Submit first job.
- Slurm job submission examples.
- Monitor and cancel jobs.
- Partitions and QoS.
- Fairshare and pending reasons.
- Storage/project folders.
- Data transfer.
- Backup/snapshots.
- Software/modules.
- New software request.
- Databases and database requests.
- Support/contact/escalation.

### Priority 2: Strongly Recommended at Launch

- Memory allocation guide.
- GPU usage guide.
- Queue waiting time guide.
- Troubleshooting failed jobs.
- Troubleshooting pending jobs.
- Conda environments.
- Bioinformatics software catalog.
- Database catalog.
- Maintenance/status policy.

### Priority 3: Can Follow After Launch

- Full historical archive.
- Presentations.
- Expanded administration guidance.
- Advanced Slurm tuning.
- Full software version history.
- Search analytics improvements.

## Duplicate Cluster Actions

Use `docs/duplicate-content-report.csv` as the starting point.

Recommended actions:

- About Mjolnir: merge into Getting Started overview.
- VPN/Login/SSH: merge into Accounts & Access.
- Hardware: keep one reference page and link from main website.
- Databases: split into overview, catalog, request, non-Mjolnir access.
- Storage: merge project folders, backup, migration lessons, and data transfer.
- Slurm: combine RTD command guides with Freshdesk queue/QoS articles.
- GPU: create dedicated GPU Computing category.
- User/account requests: merge into Accounts & Access.
- Software request/digest: merge into Software.
- Support/Discord: merge into Support/Troubleshooting.
- Maintenance emails: archive after extracting durable policy.

## Redirect Strategy

Redirect map fields:

```json
{
  "source_url": "https://mjolnir-ucph.readthedocs.io/en/latest/vpn.html",
  "destination_path": "/accounts-access/vpn-ssh/",
  "type": "redirect",
  "reason": "merged",
  "source_system": "ReadTheDocs"
}
```

Redirect priorities:

1. Pages linked from main navigation.
2. Freshdesk popular articles.
3. RTD pages with technical content.
4. Website documentation pages.
5. Historical announcements.

If true redirects are not available in a source system, use a visible deprecation page with a canonical link.

## Content Freeze and Review

Before cutover:

- Freeze public changes in Freshdesk KB and RTD except critical fixes.
- Finish migration tracker.
- Have owners review migrated pages.
- Run link checks.
- Run search checks for common queries.
- Verify support/ticket links.

Suggested review queries:

- vpn
- ssh
- new user
- first job
- pending
- fairshare
- gpu
- memory
- software
- database
- project folder
- backup
- filetransfer
- discord

## Quality Gates

Every migrated page must pass:

- Has required metadata.
- Has one primary category.
- Has owner and review date.
- Has no duplicate canonical page.
- Links are valid.
- Search result title and excerpt are understandable.
- Related pages are included.
- Historical content is marked as archive.

## Risk Register

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Old links break | Users cannot find procedures | Redirect map and high-traffic URL testing |
| Duplicate pages survive | Users get conflicting answers | Canonical page per duplicate cluster |
| Archive pages outrank current docs | Users follow old procedures | Search ranking and archive status labels |
| Freshdesk and new portal drift | Conflicting support answers | Freshdesk KB retirement or redirect policy |
| Metadata is skipped | Search and governance degrade | CI validation |
| Search quality is weak | More support tickets | Test common queries before launch |
| Ownership is unclear | Docs become stale | Required owner and review cycle |

## Launch Readiness Checklist

- Navigation map approved.
- Search strategy approved.
- Migration tracker complete.
- Required launch pages migrated.
- Duplicate clusters resolved.
- Archive policy applied.
- Redirect map tested.
- Main website links updated.
- Freshdesk public KB retirement plan ready.
- RTD retirement plan ready.
- Search index generated.
- Link checks pass.
- Owners approve their sections.

## Non-Goals

This strategy does not:

- Rewrite articles.
- Create migrated content.
- Choose final visual design.
- Implement the static site.
- Decommission Freshdesk ticketing.
- Remove existing pages before redirects are ready.
