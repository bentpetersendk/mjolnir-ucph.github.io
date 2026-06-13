# Mjolnir Knowledge Base Audit

Audit date: 2026-06-13

Scope: Freshdesk Knowledge Base, ReadTheDocs `latest`, and the public main website at `https://mjolnir-ucph.dk`. This is an analysis-only audit. No website implementation files were modified.

## Executive Summary

The Mjolnir documentation is split across three overlapping systems:

- Freshdesk is the most current support knowledge base. It contains 10 solution categories, 15 folders, and 40 discovered articles, including current operational articles and archived emails.
- ReadTheDocs contains 17 pages. It has the strongest long-form Slurm content, but several pages are placeholders or near-empty stubs that duplicate Freshdesk topics.
- The main website contains 38 crawlable pages. It mixes public overview content, hardware/software/database summaries, live/statistics pages, and PI profile pages.

The main modernization opportunity is to establish one canonical documentation source for operational guidance, then let Freshdesk and the website link into it rather than maintaining separate copies. Freshdesk should remain useful for support intake and short support articles, while historical email announcements should be moved into an archive/changelog section. ReadTheDocs should either become the canonical technical documentation or be replaced by a modern docs system with clear ownership, search, redirects, and freshness metadata.

## Full Sitemap

The full row-level sitemap is in `docs/content-inventory.csv`. Summary counts:

- Freshdesk: 40 articles, plus 10 categories and 15 folders.
- ReadTheDocs: 17 pages.
- Main website: 38 crawlable pages.

### Freshdesk Categories

- General
- Software/modules
- Computational jobs
- Databases
- VPN access and login
- Hardware
- Project folder and data
- Troubleshooting
- Users
- Mjolnir Archives: Presentations & Emails

### Freshdesk Folders

- About
- Software
- Queues and QoS
- Databases
- VPN access
- SSH
- Hardware
- Project/data folders
- Backup
- Data Transfer
- Perl
- Support
- Users
- Presentations
- Emails

### Freshdesk Articles

- About Mjølnir
- Connect personal GitHub account to Mjolnir
- New software request
- Software installation digest email
- BioRender account for CEH members
- Using the Normal QoS for General Compute Jobs
- Using the filetransfer QoS for Data Transfers
- Using the Teaching QoS for Educational Sessions
- Available databases
- Request a new database
- Request access to shared databases as a non-mjolnir user
- VPN access and login to Mjolnir
- SSH shortcut
- SSH Key connection to mjolnirgate
- Hardware
- Disruptions
- Personal project folder
- Snapshot backup
- FileZilla and PuTTY
- perl: warning: Setting locale failed error
- Discord server
- New user request
- Add/change primary email and change communication preference
- 2024-04-04 CEHall Section Meeting
- 2025-03-03 - New QoS & Partition Limits on Mjolnir: Optimized Resource Allocation for Faster Job Scheduling!
- 2025-02-28 - Scheduled Maintenance & Important Changes at Mjolnir from Monday and ahead
- 2025-02-24 - Urgent: Accelerating Data Migration from Mjolnir1
- 2025-01-15 - Happy new year, storage cost and the closing of Mjolnir1
- 2024-07-04 - Prewarning 1/2 - Scheduled Maintenance on Mjolnir - August 14, 2024
- New Globe-wide Database Repository Now Accessible to Globe KU-Research-IT-hosted compute systems
- 2024-06-27 - Summer Vacation Notice and Support Ticket Information
- 2024-01-09 - 2023 update and a 30 Seconds task to ensure your continued access to SLURM
- 2025-05- 24 - Mjolnir Update: New Software Location, System Expansion, and Storage Reporting
- 2025-02-14 - Important: Data Migration and Storage Transition Updates
- Using the CPU partition for General Compute Jobs
- Using the GPU partition for GPU-Intensive Jobs
- Using the Teaching partition for Educational Jobs
- 2026 - 05 - 19 - New low-priority lazyqueue available on Mjolnir
- 2024-03-27 - Important Updates on Mjolnir Maintenance and System Changes Effective 12 April 2024
- 2024-04-11 - REMINDER- Important Updates on Mjolnir Maintenance and System Changes

### ReadTheDocs Pages

- Welcome to Mjolnirs’s documentation!
- What is Mjolnir?
- VPN access and login
- Hardware
- Project/data folders
- Databases
- Backup
- Disruptions
- Submitting jobs
- Canceling Jobs
- Monitoring Jobs
- Software
- Software installation digest email
- New software request
- New user request
- Add/change primary email and change communication preference
- Tips & Tricks

### Main Website Pages

- `/`
- `/index.html`
- `/PI_area.html`
- `/about.html`
- `/Hardware.html`
- `/software.html`
- `/databases.html`
- `/Usage_Statistics.html`
- `/current_cluster_utilization.html`
- `/cluster_utilization_over_time.html`
- `/job_statistics.html`
- `/knowledgebase.html`
- `/disruptions.html`
- 26 PI profile pages: Anders Johannes Hansen, Antton Alberdi Estibaritz, Carsten Rahbek, Christopher James Barnes, David Bravo Nogues, Eline Lorenzen, Enrico Cappellini, Frido Welker, Hannes Schroeder, Hernan Eduardo Morales Villegas, Ida Hartvig, Jazmin Ramos Madrigal, Kristine Bohmann, Laurits Skov, Matthew James Collins, Michael Krabbe Borregaard, Morten Tange Olsen, Morten Tønsberg Limborg, Ostaizka Aizpurua Arrieta, Peter Andrew Hosner, Rute Andreia Rodrigues da Fonseca, Sandra Breum Andersen, Shyam Gopalakrishnan, Thomas Sicheritz-Ponten, Tom Gilbert.

## Content Classification

Classification is recorded per page in `docs/content-inventory.csv`. Overall distribution:

- Getting Started: overview/about/home pages.
- User Accounts: new user request, primary email, account access, PI pages.
- Login & VPN: VPN, SSH, SSH keys, GitHub SSH, FileZilla/PuTTY access.
- Storage: project folders, backup, data transfer, migration announcements.
- Slurm: QoS, partitions, queue behavior, cancellation, monitoring.
- Job Submission: RTD job submission guide and job statistics pages.
- Software: modules, conda, software requests, BioRender, digest emails.
- Databases: available databases, request workflows, shared repository access.
- Troubleshooting: disruptions, Perl locale warning, Discord/support tips.
- FAQ: website knowledgebase landing page and small support entries.
- Hardware: hardware specs and cluster utilization pages.
- Administration: PI/profile pages and governance-adjacent pages.
- Historical Content: maintenance notices, email archives, presentations, migration communications.

## Duplicate Detection

Detailed duplicate clusters are in `docs/duplicate-content-report.csv`.

Highest-priority duplicate/overlap areas:

- About/Mjolnir overview exists in Freshdesk, RTD, website home, and website about.
- VPN/login and SSH content exists in Freshdesk and RTD.
- Hardware exists in Freshdesk, RTD, and website.
- Databases exists in Freshdesk, RTD, website, and historical announcement form.
- Storage/project-folder/backup content is split between Freshdesk, RTD, and archive emails.
- Slurm material is divided between RTD command guides and Freshdesk queue/QoS articles.
- User onboarding and account maintenance are duplicated in Freshdesk and RTD.

Recommendations:

- Merge: all procedural operational docs into one canonical structure.
- Keep: website pages that serve public overview, live status, statistics, or PI/profile purposes.
- Archive: email announcements, meeting notes, one-off maintenance notices, and Mjolnir1 migration reminders after durable rules are extracted.

## Outdated Content

Likely outdated or time-sensitive content:

- 2024 and 2025 maintenance emails are historical and should not appear as current guidance.
- Mjolnir1 migration and closing notices should be archived unless there are still active deadlines or billing consequences.
- RTD pages with 12-18 words are likely stubs and should not be treated as complete documentation.
- `http://www.mjolnir-ucph.dk/` appears in at least one archive article and should be normalized to HTTPS.
- Freshdesk article links include external forms and KU pages that should be periodically link-checked: Airtable request forms, KU VPN guidance, KU-IT contact pages, GitHub SSH docs, Discord invite, and RTD links.
- The 2026 lazyqueue announcement is current-ish policy content, but it lives as an email archive article; extract it into canonical Slurm/QoS docs.
- Main website root and `/index.html` are exact duplicate URLs; future work should canonicalize.

## Missing Documentation

Priority gaps:

- Fairshare explanation: how priority is calculated, what users can influence, and why jobs wait.
- Queue waiting times: how to interpret pending reasons and realistic queue expectations.
- Resource booking best practices: choosing CPU, GPU, teaching, filetransfer, lazy, and normal QoS.
- Memory allocation guide: `--mem`, `--mem-per-cpu`, OOM diagnosis, and right-sizing.
- Bioinformatics software catalog: searchable package/module list, versions, owners, and request path.
- GPU usage guide: CUDA/modules, GPU partition limits, examples, monitoring, and common failure modes.
- Slurm examples library: copy-paste templates for common workloads.
- Data transfer guide: rsync, sftp, FileZilla/PuTTY, checksums, large transfers, and filetransfer QoS.
- Storage policy: quotas/cost model, project ownership, cleanup expectations, snapshots, retention.
- Onboarding path: eligibility, PI approval, KU-ID/VPN prerequisites, first login, first job.
- Troubleshooting index: failed jobs, pending jobs, locale errors, module errors, permission errors, VPN/login failures.
- Contact/escalation matrix: what Mjolnir support handles vs KU-IT vs PI/project owner.
- Maintenance/status model: where to check incidents, how announcements are archived, and what users must do after maintenance.

## Searchability Assessment

Freshdesk search:

- Strengths: visible search on the support home and knowledge base pages; can search articles and popular articles.
- Limitations: search is siloed to Freshdesk content and does not search RTD or the main website; archived emails appear alongside user-facing help articles; folder structure creates many short articles with overlapping titles; search relevance is constrained by Freshdesk indexing and article metadata.

ReadTheDocs search:

- Strengths: Sphinx/RTD search is available and works well for long-form technical docs such as Slurm commands.
- Limitations: it searches only RTD; many pages are stubs or duplicates, which produces weak results; it does not know about Freshdesk current policy articles or main website status pages; there is no unified result ranking across all Mjolnir properties.

## Proposed Future Structure

Recommended architecture:

- Start Here
  - What is Mjolnir?
  - Who can get access?
  - First login checklist
  - First Slurm job
- Accounts & Access
  - New user request
  - VPN and SSH
  - SSH keys and GitHub
  - Email/communication preferences
- Working on Mjolnir
  - Login node rules
  - Modules and software
  - Conda environments
  - Databases
  - Storage and backups
  - Data transfer
- Slurm & Jobs
  - Slurm basics
  - Job submission examples
  - Partitions, QoS, fairshare
  - CPU jobs
  - GPU jobs
  - Teaching jobs
  - Lazy/low-priority jobs
  - Monitoring and canceling jobs
  - Troubleshooting jobs
- Policies
  - Storage policy
  - Software/database request policy
  - Maintenance policy
  - Acceptable use/login node policy
- Troubleshooting
  - Login/VPN issues
  - Pending jobs
  - Failed jobs
  - Module/software issues
  - Perl locale warning
  - Data access/permissions
- Reference
  - Hardware
  - Software catalog
  - Database catalog
  - Slurm command cheat sheet
  - Forms and support links
- Archive
  - Maintenance emails
  - Migration notices
  - Presentations
  - Historical announcements

Governance recommendations:

- Assign one canonical owner per doc section.
- Add `last reviewed` and `applies to` metadata to operational pages.
- Use redirects from old Freshdesk/RTD URLs where possible.
- Keep announcement emails as dated archive/changelog entries, not task documentation.
- Run scheduled link checks and stale-content reports.
- Build or configure unified search that indexes canonical docs, support articles, and website status pages.
