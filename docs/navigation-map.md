# Mjolnir Documentation Navigation Map

This document defines the proposed information architecture and navigation hierarchy for the new Mjolnir documentation portal. It is a planning artifact only.

## Navigation Rules

- Maximum depth in sidebar: three levels.
- Every category landing page includes overview, common tasks, and child links.
- Every article belongs to exactly one primary category.
- Articles may have multiple tags, but tags do not define navigation.
- FAQs should link to canonical guides, references, or policies.
- Historical announcements should not appear in task navigation.

## Top-Level Navigation

```text
Home
Getting Started
Accounts & Access
Storage
Slurm
Job Submission
Monitoring Jobs
Software
Databases
GPU Computing
Policies
Troubleshooting
Frequently Asked Questions
Administration
News & Announcements
Support
```

## Sidebar Structure

### Getting Started

- Overview
  - What is Mjolnir?
  - Who can use Mjolnir?
  - System overview
- First Steps
  - New user checklist
  - Request access
  - Connect for the first time
  - Submit your first job
- Concepts
  - Login nodes vs compute nodes
  - Projects and PI ownership
  - Where to get help

### Accounts & Access

- Account Requests
  - Eligibility
  - New user request
  - PI/project approval
  - External collaborators
- Login
  - KU VPN requirement
  - SSH to mjolnirgate
  - SSH config shortcut
  - SSH key authentication
- Account Maintenance
  - Primary email
  - Communication preferences
  - GitHub SSH setup
  - Account removal or change requests

### Storage

- Storage Overview
  - Project folders
  - Personal work areas
  - Shared data locations
- Data Transfer
  - Transfer overview
  - rsync and scp
  - sftp, FileZilla, and PuTTY
  - filetransfer QoS
  - Checksums and verification
- Backup and Retention
  - Snapshot backup
  - What is backed up
  - What is not backed up
- Storage Management
  - Quotas and usage
  - Storage cost model
  - Cleanup practices
  - Migrating old data

### Slurm

- Slurm Basics
  - What Slurm is
  - Partitions
  - QoS
  - Fairshare
  - Pending reasons
- Scheduling
  - Queue waiting times
  - Resource limits
  - Choosing partition and QoS
  - Lazy/low-priority jobs
- Resource Requests
  - CPU allocation
  - Memory allocation
  - Runtime limits
  - Job arrays
- Reference
  - Slurm command cheat sheet
  - Common sbatch options
  - Environment variables

### Job Submission

- Job Types
  - Batch jobs
  - Interactive jobs
  - Job arrays
  - Teaching jobs
- Examples
  - Minimal sbatch script
  - CPU job example
  - High-memory job example
  - Array job example
  - Data transfer job example
- Output
  - Standard output and error
  - Log files
  - Exit codes

### Monitoring Jobs

- Queue Monitoring
  - squeue basics
  - Pending jobs
  - Job priority
- Job Details
  - scontrol
  - sacct
  - Resource usage after completion
- Canceling Jobs
  - Cancel one job
  - Cancel multiple jobs
  - Cancel job arrays
- Cluster Monitoring
  - Node status
  - Current utilization
  - Utilization over time
  - Job usage statistics

### Software

- Software Overview
  - Modules
  - Conda environments
  - Software locations
- Using Software
  - Load and unload modules
  - List installed modules
  - Create Conda environments
  - Troubleshoot module errors
- Software Catalog
  - Bioinformatics software
  - Scientific tools
  - Version information
  - License notes
- Requests
  - New software request
  - Software installation digest
  - BioRender access

### Databases

- Database Overview
  - Shared database repository
  - Available databases
  - Database locations
- Using Databases
  - Find a database
  - Access shared databases
  - Use databases from jobs
- Requests
  - Request a new database
  - Request access as a non-Mjolnir user
- Database Catalog
  - Bioinformatics databases
  - Version and update status
  - Owner/contact

### GPU Computing

- GPU Overview
  - When to use GPUs
  - GPU partition
  - GPU limits
- Running GPU Jobs
  - Minimal GPU sbatch script
  - CUDA and modules
  - GPU memory
  - Monitoring GPU usage
- Troubleshooting GPU Jobs
  - Job waits too long
  - CUDA/module mismatch
  - Out of memory
  - Poor GPU utilization

### Policies

- Access Policies
  - Eligibility
  - Collaborator access
  - Account lifecycle
- Usage Policies
  - Login node policy
  - Compute node policy
  - Acceptable use
- Storage Policies
  - Project storage
  - Backup and retention
  - Cost and cleanup
- Operations Policies
  - Maintenance windows
  - Disruptions
  - Support scope
  - Software/database request policy

### Troubleshooting

- Login and Access
  - Cannot connect to VPN
  - Cannot SSH to Mjolnir
  - Permission denied
- Jobs
  - Job is pending
  - Job failed
  - Job was killed
  - Out of memory
  - Job output missing
- Software
  - Module not found
  - Conda environment issue
  - Perl locale warning
- Storage
  - Cannot access project folder
  - Disk quota or space issue
  - Slow file transfer
- Support
  - When to contact Mjolnir support
  - When to contact KU-IT
  - Discord server
  - Submit a ticket

### Frequently Asked Questions

- Accounts
- VPN and SSH
- Storage
- Slurm
- Jobs
- Software
- Databases
- GPU
- Policies

FAQ pages should answer briefly and link to the canonical page. They should not become duplicate documentation.

### Administration

- PI Guidance
  - PI responsibilities
  - Project membership
  - Storage responsibility
- User Administration
  - Adding users
  - Changing user details
  - Removing users
- Operational Administration
  - Communication templates
  - Review schedule
  - Content ownership

### News & Announcements

- Current Announcements
  - Current maintenance notices
  - Current changes users must act on
- Changelog
  - System changes
  - Queue/QoS changes
  - Storage changes
  - Software location changes
- Archive
  - Historical emails
  - Presentations
  - Migration notices
  - Past maintenance notices

## Breadcrumb Examples

```text
Home / Getting Started / First Steps / Submit your first job
Home / Accounts & Access / Login / SSH to mjolnirgate
Home / Storage / Data Transfer / filetransfer QoS
Home / Slurm / Scheduling / Fairshare
Home / Software / Requests / New software request
Home / Troubleshooting / Jobs / Job is pending
Home / News & Announcements / Archive / 2025 maintenance notices
```

## Homepage Task Links

The homepage should prioritize tasks over taxonomy:

- I am new to Mjolnir.
- I need an account.
- I cannot log in.
- I want to submit a job.
- My job is pending.
- My job failed.
- I need software.
- I need a database.
- I need GPU resources.
- I need to move data.
- I need help.

## Cross-Linking Rules

- Every guide links to its related troubleshooting page.
- Every troubleshooting page links back to the relevant guide.
- Every request page links to policy and support escalation.
- Every policy page links to affected guides.
- Every announcement that changes behavior links to the canonical updated page.
- Archive pages should be discoverable from News & Announcements, but not prominent in task navigation.
