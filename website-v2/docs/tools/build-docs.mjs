import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("website-v2/docs");
const CONTENT_ROOT = path.join(ROOT, "content");
const ASSETS_ROOT = path.join(ROOT, "assets");
const DATA_ROOT = path.join(ROOT, "data");
const TEMPLATES_ROOT = path.join(ROOT, "templates");

const today = "2026-06-13";

const categories = [
  ["getting-started", "Getting Started", "Orientation, first login, and first successful job."],
  ["accounts-access", "Accounts & Access", "Eligibility, user requests, VPN, SSH, and account maintenance."],
  ["storage", "Storage", "Project folders, transfer, backup, quotas, and cleanup."],
  ["slurm", "Slurm", "Scheduling concepts, partitions, QoS, fairshare, and resource requests."],
  ["job-submission", "Job Submission", "Batch, interactive, array, teaching, and transfer job examples."],
  ["monitoring-jobs", "Monitoring Jobs", "Queue inspection, accounting, cancellation, and utilization."],
  ["software", "Software", "Modules, Conda, software catalog, and software requests."],
  ["databases", "Databases", "Shared databases, requests, access, and catalog metadata."],
  ["gpu-computing", "GPU Computing", "GPU partition guidance, templates, CUDA, monitoring, and troubleshooting."],
  ["policies", "Policies", "Rules for access, usage, storage, maintenance, and support scope."],
  ["troubleshooting", "Troubleshooting", "Symptom-driven guides for login, jobs, software, and storage."],
  ["faq", "Frequently Asked Questions", "Short answers that link to canonical documentation."],
  ["administration", "Administration", "PI responsibilities, user administration, and documentation governance."],
  ["news-announcements", "News & Announcements", "Current announcements, release notes, and historical archive."]
];

const navGroups = {
  "getting-started": ["Overview", "First Steps", "Concepts"],
  "accounts-access": ["Account Requests", "Login", "Account Maintenance"],
  storage: ["Storage Overview", "Data Transfer", "Backup and Retention", "Storage Management"],
  slurm: ["Slurm Basics", "Scheduling", "Resource Requests", "Reference"],
  "job-submission": ["Job Types", "Examples", "Output"],
  "monitoring-jobs": ["Queue Monitoring", "Job Details", "Canceling Jobs", "Cluster Monitoring"],
  software: ["Software Overview", "Using Software", "Software Catalog", "Requests"],
  databases: ["Database Overview", "Using Databases", "Requests", "Database Catalog"],
  "gpu-computing": ["GPU Overview", "Running GPU Jobs", "Troubleshooting GPU Jobs"],
  policies: ["Access Policies", "Usage Policies", "Storage Policies", "Operations Policies"],
  troubleshooting: ["Login and Access", "Jobs", "Software", "Storage", "Support"],
  faq: ["Accounts", "VPN and SSH", "Storage", "Slurm", "Software", "Databases", "GPU", "Policies"],
  administration: ["PI Guidance", "User Administration", "Operational Administration"],
  "news-announcements": ["Current Announcements", "Changelog", "Archive"]
};

const pages = [
  page("getting-started", "Overview", "what-is-mjolnir", "What is Mjolnir?", "guide", ["about", "overview", "cluster"], [
    "Mjolnir is the Globe Institute high-performance computing cluster for research workloads associated with the Mjolnir consortium.",
    "Use Mjolnir for batch computation, software environments, shared scientific databases, and data analysis that should run on compute nodes rather than on a laptop or login node.",
    "The new portal is the canonical documentation source. Freshdesk is reserved for tickets, ReadTheDocs is superseded by this portal, and website documentation summaries should link here."
  ], ["Freshdesk: About Mjølnir", "ReadTheDocs: What is Mjolnir?", "Main website: Home and About"]),
  page("getting-started", "Overview", "who-can-use-mjolnir", "Who can use Mjolnir?", "guide", ["eligibility", "pi", "collaborators"], [
    "Access is restricted to UCPH employees or external collaborators associated with participating principal investigators.",
    "New users should confirm PI/project affiliation before requesting access. External collaborators may need additional approval and KU identity prerequisites.",
    "If you are unsure whether you are eligible, ask your PI or submit a support ticket before starting a technical setup."
  ], ["Freshdesk: New user request", "Main website: PI area"]),
  page("getting-started", "First Steps", "new-user-checklist", "New user checklist", "guide", ["onboarding", "first login"], [
    "1. Confirm eligibility and PI/project affiliation.",
    "2. Request a Mjolnir account.",
    "3. Install and connect through KU VPN.",
    "4. SSH to mjolnirgate with your KU-ID.",
    "5. Review login node rules before running commands.",
    "6. Submit a small test Slurm job.",
    "7. Learn where your project folder and shared databases are located."
  ], ["Freshdesk: New user request", "Freshdesk: VPN access and login to Mjolnir"]),
  page("getting-started", "First Steps", "first-job", "Submit your first job", "guide", ["sbatch", "first job", "slurm"], [
    "Run computation through Slurm rather than directly on the login node.",
    "Create a small script, submit it with `sbatch`, then inspect the queue with `squeue` and the result files when the job completes.",
    "Start with conservative resources. Request only the CPUs, memory, runtime, and GPU resources you need."
  ], ["ReadTheDocs: Submitting jobs"]),
  page("getting-started", "Concepts", "login-vs-compute-nodes", "Login nodes vs compute nodes", "policy", ["login node", "compute node"], [
    "Use login nodes for editing, file movement, job submission, and light inspection.",
    "Do not run heavy computation on mjolnirgate or other login nodes. Heavy work must be submitted to Slurm.",
    "This rule protects every user by keeping the shared entrance node responsive."
  ], ["Freshdesk: VPN access and login to Mjolnir", "Policies: Login node policy"]),

  page("accounts-access", "Account Requests", "request-access", "Request access", "guide", ["new user", "account", "request"], [
    "Use the account request workflow when a new user needs access to Mjolnir.",
    "The request should identify the user, PI/project affiliation, contact email, and any collaborator status that affects eligibility.",
    "After approval, the user should follow the new user checklist and first-login instructions."
  ], ["Freshdesk: New user request", "ReadTheDocs: New user request"]),
  page("accounts-access", "Login", "vpn-ssh-access", "VPN and SSH access", "guide", ["vpn", "ssh", "mjolnirgate", "cisco anyconnect"], [
    "A KU VPN connection using Cisco AnyConnect is required before SSH login to Mjolnir.",
    "Connect to the KU VPN, open a terminal, and log in with `ssh <KU-ID>@mjolnirgate.unicph.domain`.",
    "Replace `<KU-ID>` with your own KU user ID. Your password is the password associated with your KU-ID.",
    "If VPN works but SSH login fails, create a support ticket. VPN client problems should go to KU-IT."
  ], ["Freshdesk: VPN access and login to Mjolnir", "ReadTheDocs: VPN access and login"]),
  page("accounts-access", "Login", "ssh-shortcuts-keys", "SSH shortcuts, keys, and GitHub", "guide", ["ssh", "keys", "github"], [
    "Use an SSH config entry to avoid retyping the full Mjolnir login command.",
    "SSH keys can also be used for GitHub operations from Mjolnir. Generate keys carefully and add only public keys to external services.",
    "Keep SSH credentials private. Never share private keys in tickets, chat, or documentation."
  ], ["Freshdesk: SSH shortcut", "Freshdesk: SSH Key connection to mjolnirgate", "Freshdesk: Connect personal GitHub account to Mjolnir"]),
  page("accounts-access", "Account Maintenance", "email-preferences", "Primary email and communication preferences", "guide", ["email", "communication"], [
    "Keep your primary email current so Mjolnir maintenance notices, policy changes, and action-required messages reach you.",
    "If your communication preference or primary address changes, use the account maintenance request workflow.",
    "This page supersedes the old short Freshdesk and ReadTheDocs articles on primary email changes."
  ], ["Freshdesk: Add/change primary email and change communication preference", "ReadTheDocs: Add/change primary email and change communication preference"]),

  page("storage", "Storage Overview", "project-folders", "Project folders", "guide", ["project folder", "storage"], [
    "Project folders are the primary home for project data on Mjolnir.",
    "Store shared project data in the correct project location rather than making duplicate copies in personal areas.",
    "Project ownership, cleanup, and long-term responsibility should be clear before large data sets are imported."
  ], ["Freshdesk: Personal project folder", "ReadTheDocs: Project/data folders"]),
  page("storage", "Data Transfer", "data-transfer", "Data transfer", "guide", ["rsync", "sftp", "filezilla", "putty", "filetransfer"], [
    "Use `rsync`, `scp`, `sftp`, FileZilla, or PuTTY depending on platform and workflow.",
    "Large transfers should be planned, verified with checksums where possible, and run in a way that does not overload login nodes.",
    "Use the filetransfer QoS only for data migration and transfer workflows where it is appropriate."
  ], ["Freshdesk: FileZilla and PuTTY", "Freshdesk: Using the filetransfer QoS for Data Transfers"]),
  page("storage", "Backup and Retention", "backup-snapshots", "Snapshot backup", "reference", ["backup", "snapshot", "retention"], [
    "Snapshots provide recovery points for supported storage locations.",
    "Snapshots are not a substitute for project-level data management, reproducibility, or external archiving where required.",
    "Document what is backed up, what is not backed up, and who to contact before assuming a deleted file can be recovered."
  ], ["Freshdesk: Snapshot backup", "ReadTheDocs: Backup"]),
  page("storage", "Storage Management", "storage-policy", "Storage cost, quota, and cleanup", "policy", ["quota", "cost", "cleanup"], [
    "Storage should be treated as a shared research resource with clear project ownership.",
    "Avoid duplicate database and data copies. Use shared repositories when available.",
    "Old Mjolnir1 migration notices are archived; current storage policy should live on this canonical page."
  ], ["Freshdesk archive: Mjolnir1 migration and storage cost emails"]),

  page("slurm", "Slurm Basics", "slurm-basics", "Slurm basics", "guide", ["slurm", "scheduler"], [
    "Slurm schedules computational work on Mjolnir. Users submit jobs, request resources, monitor state, and review accounting after completion.",
    "The most common commands are `sbatch`, `srun`, `squeue`, `scontrol`, `sacct`, and `scancel`.",
    "Use Slurm for computation. Login nodes are not compute nodes."
  ], ["ReadTheDocs: Submitting jobs", "ReadTheDocs: Monitoring Jobs"]),
  page("slurm", "Scheduling", "partitions-qos-fairshare", "Partitions, QoS, and fairshare", "reference", ["partition", "qos", "fairshare", "priority"], [
    "Partitions define where jobs can run. QoS defines scheduling behavior and limits. Fairshare influences priority based on usage.",
    "Current queue/QoS guidance supersedes the historical email announcements.",
    "Users should choose the narrowest suitable partition/QoS and request realistic resources to improve scheduling."
  ], ["Freshdesk: Normal QoS", "Freshdesk: CPU/GPU/Teaching partitions", "Freshdesk archive: QoS & Partition Limits"]),
  page("slurm", "Scheduling", "queue-waiting-times", "Queue waiting times and pending reasons", "troubleshooting", ["pending", "queue", "priority"], [
    "A pending job is not necessarily broken. It may be waiting for priority, resources, limits, or dependencies.",
    "Use `squeue` and `scontrol show job <jobid>` to inspect the reason.",
    "If many jobs wait unexpectedly, check fairshare, requested runtime, memory, partition, QoS, and maintenance announcements."
  ], ["Audit missing topic: Queue waiting times"]),
  page("slurm", "Resource Requests", "memory-allocation", "Memory allocation guide", "guide", ["memory", "oom", "mem"], [
    "Request enough memory for the job, but avoid over-requesting because it can increase waiting time.",
    "Use `--mem` for total memory per node or `--mem-per-cpu` when memory scales with CPU count.",
    "If a job is killed for memory, review logs and accounting before increasing the request."
  ], ["Audit missing topic: Memory allocation guide"]),
  page("slurm", "Scheduling", "lazyqueue", "Lazy queue and low-priority work", "reference", ["lazyqueue", "lazy", "low priority"], [
    "The lazy queue is intended for low-priority workloads that can wait longer in exchange for using otherwise idle resources.",
    "Use lazy scheduling for opportunistic work, exploratory batches, and jobs that are not time critical.",
    "This extracts durable guidance from the 2026 lazyqueue announcement."
  ], ["Freshdesk archive: 2026 - 05 - 19 - New low-priority lazyqueue available on Mjolnir"]),

  page("job-submission", "Job Types", "submitting-jobs", "Submitting jobs with sbatch", "guide", ["sbatch", "batch"], [
    "Create a shell script with `#SBATCH` resource requests and the commands your job should run.",
    "Submit it with `sbatch script.sh`. Slurm returns a job ID that you can use for monitoring and cancellation.",
    "Write output and error logs to predictable paths so failed jobs can be diagnosed."
  ], ["ReadTheDocs: Submitting jobs"]),
  page("job-submission", "Job Types", "interactive-jobs", "Interactive jobs with srun", "guide", ["srun", "interactive"], [
    "Use interactive jobs for short debugging sessions and software tests that require compute resources.",
    "Request only the resources and time needed for the interactive session.",
    "Do not use the login node as a substitute for an interactive compute allocation."
  ], ["ReadTheDocs: Submitting jobs"]),
  page("job-submission", "Examples", "job-arrays", "Job arrays", "guide", ["array", "batch"], [
    "Job arrays are useful when the same workflow should run across many inputs.",
    "Use the Slurm array task ID to select input files or parameter sets.",
    "Throttle large arrays where appropriate so they do not overwhelm shared resources."
  ], ["ReadTheDocs: Submitting jobs"]),
  page("job-submission", "Examples", "job-templates", "Job template library", "reference", ["templates", "examples"], [
    "Keep copy-paste job templates for common Mjolnir workloads in this section.",
    "Templates should include CPU, memory, runtime, log output, module loading, and expected input/output patterns.",
    "Every template should prefer safe defaults over maximum resource requests."
  ], ["Audit missing topic: Slurm examples library"]),

  page("monitoring-jobs", "Queue Monitoring", "monitoring-jobs", "Monitoring jobs", "guide", ["squeue", "scontrol", "sacct"], [
    "Use `squeue` to inspect queued/running jobs, `scontrol` for detailed job state, and `sacct` for completed job accounting.",
    "Monitoring helps distinguish normal waiting from resource mismatch, policy limits, or failed jobs.",
    "Keep the job ID from `sbatch`; it is the handle for later inspection."
  ], ["ReadTheDocs: Monitoring Jobs"]),
  page("monitoring-jobs", "Canceling Jobs", "canceling-jobs", "Canceling jobs", "guide", ["scancel", "cancel"], [
    "Use `scancel <jobid>` to cancel a specific job.",
    "Use caution when canceling multiple jobs or arrays. Confirm job IDs before acting.",
    "Cancel work that is no longer needed to free resources for other users."
  ], ["ReadTheDocs: Canceling Jobs"]),
  page("monitoring-jobs", "Cluster Monitoring", "cluster-utilization", "Cluster utilization and statistics", "reference", ["utilization", "statistics"], [
    "Cluster utilization and job statistics remain operational dashboards on the main website.",
    "The documentation portal should explain how to interpret those dashboards and link to the live pages.",
    "Historical usage pages should not replace live monitoring or job-specific Slurm commands."
  ], ["Main website: Current utilization", "Main website: Job statistics"]),

  page("software", "Software Overview", "modules-conda", "Modules and Conda environments", "guide", ["modules", "conda", "software"], [
    "Mjolnir provides software through environment modules and user-managed environments such as Conda.",
    "Use `module avail`, `module load`, and `module list` to discover and manage modules.",
    "Document software versions in job scripts to make analyses reproducible."
  ], ["ReadTheDocs: Software", "Main website: Software"]),
  page("software", "Software Catalog", "software-catalog", "Software catalog", "reference", ["catalog", "bioinformatics", "tools"], [
    "The software catalog should list installed tools, versions, module names, license notes, owners, and request paths.",
    "The catalog is future-proofed as structured JSON so it can be rendered as a searchable table.",
    "Bioinformatics software should be grouped and tagged for discovery."
  ], ["Audit missing topic: Bioinformatics software catalog"]),
  page("software", "Requests", "request-software", "Request software", "guide", ["request", "software"], [
    "Request new software when a required tool is not already available on Mjolnir.",
    "Include software name, version, URL, license information, research purpose, and urgency.",
    "Software request workflow supersedes old duplicated Freshdesk and ReadTheDocs request pages."
  ], ["Freshdesk: New software request", "ReadTheDocs: New software request"]),
  page("software", "Requests", "biorender", "BioRender access", "faq", ["biorender", "software"], [
    "BioRender is handled as a software/account access topic rather than a core HPC procedure.",
    "Users should follow the current request path for CEH or eligible group access.",
    "Keep this page short and link to the relevant request form or support path."
  ], ["Freshdesk: BioRender account for CEH members"]),

  page("databases", "Database Overview", "database-overview", "Shared database repository", "guide", ["databases", "shared repository"], [
    "Databases are centralized in shared locations to reduce duplicated storage and simplify updates.",
    "Users should use the shared database repository instead of maintaining private duplicate copies whenever possible.",
    "Database documentation should describe where databases live, how to cite or version them, and how to request additions."
  ], ["Freshdesk: Available databases", "Main website: Databases"]),
  page("databases", "Requests", "request-database", "Request a database", "guide", ["request", "database"], [
    "Request a new database when it is not already available in the shared repository.",
    "Provide the database name, source URL, version, expected size, update needs, and project use case.",
    "Requests should be reviewed for storage impact and shared value."
  ], ["Freshdesk: Request a new database"]),
  page("databases", "Requests", "shared-database-access", "Non-Mjolnir shared database access", "guide", ["database", "access"], [
    "Some shared databases may be useful to non-Mjolnir users on related KU Research IT-hosted systems.",
    "Access should be requested through the current approved workflow and must respect storage and permissions policy.",
    "This page consolidates Freshdesk access guidance and the Globe-wide database repository announcement."
  ], ["Freshdesk: Request access to shared databases as a non-mjolnir user", "Freshdesk archive: Globe-wide Database Repository"]),
  page("databases", "Database Catalog", "database-catalog", "Database catalog", "reference", ["catalog", "database"], [
    "The database catalog should list database name, version, location, update cadence, owner, and access notes.",
    "The catalog is future-proofed as structured JSON so it can become a searchable table.",
    "Entries should distinguish current databases from deprecated or archived database snapshots."
  ], ["Audit missing topic: Database catalog"]),

  page("gpu-computing", "GPU Overview", "gpu-overview", "GPU computing overview", "guide", ["gpu", "cuda", "gpuqueue"], [
    "Use GPU resources for workloads that are designed to benefit from GPU acceleration, such as machine learning or GPU-enabled bioinformatics tools.",
    "GPU jobs should request the GPU partition and only the number/type of GPUs needed.",
    "Check software/module compatibility before submitting large GPU workloads."
  ], ["Freshdesk: Using the GPU partition for GPU-Intensive Jobs"]),
  page("gpu-computing", "Running GPU Jobs", "gpu-job-template", "GPU job template", "guide", ["gpu", "sbatch", "cuda"], [
    "A GPU job template should include GPU resource requests, CPU/memory requests, runtime, module loading, and logging.",
    "Start with a small validation job before launching long GPU workloads.",
    "Monitor GPU utilization to ensure the job benefits from GPU resources."
  ], ["Audit missing topic: GPU usage guide"]),
  page("gpu-computing", "Troubleshooting GPU Jobs", "gpu-troubleshooting", "GPU troubleshooting", "troubleshooting", ["gpu", "cuda", "oom"], [
    "Common GPU issues include CUDA/module mismatch, GPU memory exhaustion, poor utilization, and long queue waits.",
    "Check loaded modules, requested GPU resources, application logs, and scheduler state.",
    "If the problem is reproducible and resource requests look correct, include the job ID and script in a support ticket."
  ], ["Audit missing topic: GPU usage guide"]),

  page("policies", "Usage Policies", "login-node-policy", "Login node policy", "policy", ["login node", "policy"], [
    "Login nodes are shared entry points for editing, moving data, and submitting jobs.",
    "Heavy computation must be submitted to Slurm. Running heavy workloads on login nodes can degrade service for all users.",
    "Repeated misuse should be handled through support and PI/project-owner escalation."
  ], ["Freshdesk: VPN access and login to Mjolnir"]),
  page("policies", "Operations Policies", "support-scope", "Support scope", "policy", ["support", "ku-it", "ticket"], [
    "Mjolnir support handles cluster access after VPN is working, Slurm/job issues, software/database requests, and storage/project folder questions.",
    "KU-IT handles KU VPN client issues and general KU identity problems.",
    "Users should include job IDs, commands, error messages, and relevant paths when opening tickets."
  ], ["Freshdesk: VPN access and login to Mjolnir", "Freshdesk: Discord server"]),
  page("policies", "Operations Policies", "maintenance-policy", "Maintenance and disruption policy", "policy", ["maintenance", "disruptions"], [
    "Current maintenance notices should live in News & Announcements and link to affected canonical docs.",
    "Disruptions should be visible from the portal and, where applicable, linked to live status or website pages.",
    "Past maintenance emails should move to archive after the event window closes."
  ], ["Freshdesk: Disruptions", "Main website: Disruptions", "Freshdesk archive: maintenance emails"]),

  page("troubleshooting", "Login and Access", "cannot-login", "Cannot log in", "troubleshooting", ["vpn", "ssh", "login"], [
    "First confirm that KU VPN is connected with the supported Cisco AnyConnect client.",
    "Then confirm the SSH command, KU-ID, network, and password. Try a clean terminal session before changing configuration.",
    "If VPN works but Mjolnir login fails, submit a Mjolnir support ticket. If VPN itself fails, contact KU-IT."
  ], ["Freshdesk: VPN access and login to Mjolnir"]),
  page("troubleshooting", "Jobs", "job-pending", "Job is pending", "troubleshooting", ["pending", "queue", "slurm"], [
    "Pending jobs may be waiting for priority, resources, fairshare, QoS/partition limits, maintenance, or dependencies.",
    "Inspect the pending reason with Slurm commands before resubmitting.",
    "If a job appears stuck because of invalid resource requests, adjust the request rather than repeatedly submitting duplicates."
  ], ["Audit missing topic: Queue waiting times"]),
  page("troubleshooting", "Jobs", "job-failed", "Job failed or was killed", "troubleshooting", ["failed", "oom", "exit code"], [
    "Check output and error files first. Then inspect completed job accounting with `sacct`.",
    "Common causes include missing modules, wrong paths, insufficient memory, exceeded runtime, and application errors.",
    "When opening a support ticket, include job ID, script, output/error logs, and the command used to submit the job."
  ], ["ReadTheDocs: Monitoring Jobs"]),
  page("troubleshooting", "Software", "perl-locale-warning", "Perl locale warning", "troubleshooting", ["perl", "locale"], [
    "The Perl locale warning usually indicates that shell locale variables reference a locale not configured in the environment.",
    "The issue is often cosmetic but can be confusing. Check locale variables and use a supported UTF-8 locale where possible.",
    "This page preserves the Freshdesk troubleshooting article in the new structure."
  ], ["Freshdesk: perl: warning: Setting locale failed error"]),

  page("faq", "Accounts", "accounts-faq", "Accounts FAQ", "faq", ["faq", "accounts"], [
    "Q: Who can request access? A: Users associated with participating PIs or approved collaborators.",
    "Q: Where do I request access? A: Use the account request workflow linked from Accounts & Access.",
    "Q: What if VPN fails? A: Contact KU-IT for VPN client issues; contact Mjolnir support if VPN works but SSH fails."
  ], ["Freshdesk: New user request", "Freshdesk: VPN access and login to Mjolnir"]),
  page("faq", "Slurm", "slurm-faq", "Slurm FAQ", "faq", ["faq", "slurm"], [
    "Q: Why is my job pending? A: Check pending reason, fairshare, resources, and partition/QoS limits.",
    "Q: Can I run computation on the login node? A: No, use Slurm.",
    "Q: How do I cancel a job? A: Use `scancel <jobid>`."
  ], ["ReadTheDocs: Monitoring Jobs", "ReadTheDocs: Canceling Jobs"]),
  page("faq", "Storage", "storage-software-faq", "Storage and software FAQ", "faq", ["faq", "storage", "software"], [
    "Q: Where should project data live? A: In the relevant project folder.",
    "Q: Are snapshots backups? A: Snapshots provide recovery points for supported locations but are not a complete data management plan.",
    "Q: How do I request software? A: Use the software request workflow and include version, source, license, and use case."
  ], ["Freshdesk: Snapshot backup", "Freshdesk: New software request"]),

  page("administration", "PI Guidance", "pi-responsibilities", "PI responsibilities", "policy", ["pi", "project owner"], [
    "PIs and project owners should understand who has access, what project data is stored, and who is responsible for cleanup and communication.",
    "Project ownership should be clear before adding users or importing large datasets.",
    "Administration guidance complements, but does not replace, technical user documentation."
  ], ["Main website: PI area"]),
  page("administration", "User Administration", "user-administration", "User administration", "guide", ["users", "administration"], [
    "User administration covers adding users, updating account details, changing communication preferences, and removing access when needed.",
    "Administrative workflows should have clear request paths and auditability.",
    "Avoid maintaining duplicate instructions in Freshdesk and the documentation portal."
  ], ["Freshdesk: Users category"]),
  page("administration", "Operational Administration", "content-governance", "Documentation governance", "reference", ["governance", "review"], [
    "Every page needs an owner, review date, status, and content type.",
    "Pages past review date should be reported by CI and reviewed before they become stale.",
    "Announcements that change behavior must link to updated canonical docs."
  ], ["Architecture: Governance"]),

  page("news-announcements", "Current Announcements", "current-announcements", "Current announcements", "announcement", ["news", "current"], [
    "Current announcements should contain only active user-facing notices.",
    "Once an event passes or a change becomes standard behavior, move the announcement into archive and update the canonical documentation page.",
    "This page is intentionally sparse until the portal is connected to a real announcement workflow."
  ], ["Freshdesk archives"]),
  page("news-announcements", "Changelog", "release-notes", "Release notes", "announcement", ["release notes", "changelog"], [
    "Release notes summarize documentation, policy, software, hardware, queue, and storage changes.",
    "Use release notes for durable summaries. Use archive pages for original email text and historical context.",
    "Each release note should link to the canonical page that changed."
  ], ["Migration strategy: News & Announcements"]),
  page("news-announcements", "Archive", "archive-index", "Historical archive", "archive", ["archive", "historical"], [
    "Historical maintenance emails, presentations, migration notices, and dated announcements are preserved here for traceability.",
    "Archive content is searchable, but current documentation should outrank it.",
    "The archive should be clearly labeled so users do not follow old procedures accidentally."
  ], ["Freshdesk: Mjolnir Archives: Presentations & Emails"])
];

const archiveItems = [
  ["2024-04-04 CEHall Section Meeting", "Presentation archive item from Freshdesk."],
  ["2024-03-27 Important Updates on Mjolnir Maintenance and System Changes", "Historical maintenance notice. Durable policy should be reflected in current docs."],
  ["2024-04-11 Reminder: Important Updates on Mjolnir Maintenance and System Changes", "Historical reminder notice."],
  ["2024-06-27 Summer Vacation Notice and Support Ticket Information", "Historical support availability notice."],
  ["2024-07-04 Scheduled Maintenance on Mjolnir", "Historical maintenance prewarning."],
  ["2025-01-15 Storage cost and closing of Mjolnir1", "Historical storage and migration communication."],
  ["2025-02-14 Data Migration and Storage Transition Updates", "Historical migration communication."],
  ["2025-02-24 Accelerating Data Migration from Mjolnir1", "Historical migration communication."],
  ["2025-02-28 Scheduled Maintenance and Important Changes", "Historical maintenance communication."],
  ["2025-03-03 QoS and Partition Limits", "Historical queue/QoS announcement; current rules live in Slurm docs."],
  ["2025-05-24 Software Location, System Expansion, and Storage Reporting", "Historical system update."],
  ["2026-05-19 New low-priority lazyqueue", "Announcement preserved; current durable guidance lives in Slurm / Lazy queue."]
].map(([title, description]) => page("news-announcements", "Archive", slug(title), title, "archive", ["archive"], [
  description,
  "This page is preserved as historical content. Do not treat it as current procedure unless linked from a current canonical page.",
  "Current operational guidance lives in the relevant category pages."
], ["Freshdesk archive"]));

const allPages = [...pages, ...archiveItems];

function page(category, section, slugValue, title, type, tags, paragraphs, sources) {
  return {
    category,
    section,
    slug: slugValue,
    title,
    type,
    tags,
    sources,
    status: type === "archive" ? "archive" : "current",
    owner: type === "policy" ? "Mjolnir Admin" : "Mjolnir Documentation",
    review: type === "archive" ? "none" : "6 months",
    description: paragraphs[0].replace(/^Q: /, "").slice(0, 150),
    body: paragraphs
  };
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function ensure(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function write(file, content) {
  ensure(path.dirname(file));
  fs.writeFileSync(file, content);
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
}

function mdInline(value) {
  return esc(value)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function markdownToHtml(markdown) {
  const lines = markdown.split(/\r?\n/);
  const out = [];
  let inList = false;
  let inCode = false;
  let codeLang = "";
  const closeList = () => {
    if (inList) {
      out.push("</ul>");
      inList = false;
    }
  };
  for (const line of lines) {
    if (line.startsWith("```")) {
      closeList();
      if (inCode) {
        out.push("</code></pre>");
        inCode = false;
      } else {
        codeLang = line.slice(3).trim();
        out.push(`<pre><code${codeLang ? ` class="language-${esc(codeLang)}"` : ""}>`);
        inCode = true;
      }
      continue;
    }
    if (inCode) {
      out.push(esc(line) + "\n");
      continue;
    }
    if (!line.trim()) {
      closeList();
      continue;
    }
    if (line.startsWith("# ")) {
      closeList();
      out.push(`<h1>${mdInline(line.slice(2))}</h1>`);
    } else if (line.startsWith("## ")) {
      closeList();
      out.push(`<h2>${mdInline(line.slice(3))}</h2>`);
    } else if (line.startsWith("### ")) {
      closeList();
      out.push(`<h3>${mdInline(line.slice(4))}</h3>`);
    } else if (line.startsWith("- ")) {
      if (!inList) {
        out.push("<ul>");
        inList = true;
      }
      out.push(`<li>${mdInline(line.slice(2))}</li>`);
    } else {
      closeList();
      out.push(`<p>${mdInline(line)}</p>`);
    }
  }
  closeList();
  if (inCode) out.push("</code></pre>");
  return out.join("\n");
}

function frontMatter(p) {
  const categoryName = categoryNameFor(p.category);
  return `---\ntitle: "${p.title}"\ndescription: "${p.description.replace(/"/g, '\\"')}"\ncategory: "${categoryName}"\nsection: "${p.section}"\ncontent_type: "${p.type}"\naudience: ["all users"]\ntags: [${p.tags.map((t) => `"${t}"`).join(", ")}]\nowner: "${p.owner}"\nstatus: "${p.status}"\nreview_cycle: "${p.review}"\nlast_reviewed: "${today}"\nsource_pages:\n${p.sources.map((s) => `  - "${s.replace(/"/g, '\\"')}"`).join("\n")}\n---\n\n`;
}

function markdownFor(p) {
  const related = relatedPages(p).slice(0, 5);
  return `${frontMatter(p)}# ${p.title}\n\n${p.body.join("\n\n")}\n\n## Source consolidation\n\n${p.sources.map((s) => `- ${s}`).join("\n")}\n\n## Related pages\n\n${related.map((r) => `- [${r.title}](../../${r.category}/${r.slug}/)`).join("\n") || "- None yet."}\n`;
}

function categoryNameFor(slugValue) {
  return categories.find(([id]) => id === slugValue)?.[1] || slugValue;
}

function categoryDescriptionFor(slugValue) {
  return categories.find(([id]) => id === slugValue)?.[2] || "";
}

function urlFor(p) {
  return `${relRootFor(p.category, p.slug)}${p.category}/${p.slug}/`;
}

function relatedPages(p) {
  return allPages
    .filter((candidate) => candidate !== p && (candidate.category === p.category || candidate.tags.some((tag) => p.tags.includes(tag))))
    .slice(0, 6);
}

function relRootFor(category = "", slugValue = "") {
  if (!category) return "";
  if (!slugValue) return "../";
  return "../../";
}

function shell({ title, description, content, category = "", slugValue = "", type = "page", status = "current", bodyClass = "" }) {
  const root = relRootFor(category, slugValue);
  const activeCategory = category || "";
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)} | Mjolnir Documentation</title>
  <meta name="description" content="${esc(description)}">
  <link rel="stylesheet" href="${root}assets/docs.css">
  <script defer src="${root}assets/docs.js"></script>
</head>
<body class="${bodyClass}" data-doc-category="${esc(categoryNameFor(activeCategory))}" data-doc-type="${esc(type)}" data-doc-status="${esc(status)}" data-doc-title="${esc(title)}" data-doc-description="${esc(description)}" data-pagefind-filter="category[data-doc-category], type[data-doc-type], status[data-doc-status]" data-pagefind-meta="title[data-doc-title], description[data-doc-description]">
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <a class="brand" href="${root}index.html" aria-label="Mjolnir Documentation home">
      <span class="brand-mark">M</span>
      <span><strong>Mjolnir</strong><small>Documentation</small></span>
    </a>
    <button class="icon-button menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">☰</button>
    <div class="global-search" role="search">
      <input id="global-search" type="search" placeholder="Search docs, FAQs, policies, software..." autocomplete="off">
      <div id="search-results" class="search-results" aria-live="polite"></div>
    </div>
    <nav class="top-links" aria-label="Global">
      <a href="${root}news-announcements/current-announcements/">News</a>
      <a href="${root}troubleshooting/cannot-login/">Help</a>
      <a href="https://mjolnirucph-help.freshdesk.com/support/tickets/new">Support ticket</a>
    </nav>
  </header>
  <div class="layout">
    <aside class="sidebar" aria-label="Documentation navigation">
      ${sidebar(root, activeCategory)}
    </aside>
    <main id="main" class="content" data-pagefind-body>
      ${content}
    </main>
  </div>
</body>
</html>`;
}

function sidebar(root, activeCategory) {
  return `<nav>
    <a class="side-home" href="${root}index.html">Documentation Home</a>
    ${categories.map(([id, name]) => {
      const items = allPages.filter((p) => p.category === id && p.type !== "archive").slice(0, 6);
      return `<section class="side-section ${id === activeCategory ? "is-active" : ""}">
        <a class="side-title" href="${root}${id}/">${esc(name)}</a>
        <div class="side-items">${items.map((p) => `<a href="${root}${p.category}/${p.slug}/">${esc(p.title)}</a>`).join("")}</div>
      </section>`;
    }).join("")}
  </nav>`;
}

function breadcrumbs(root, parts) {
  return `<nav class="breadcrumbs" aria-label="Breadcrumbs"><a href="${root}index.html">Home</a>${parts.map((part) => ` <span>/</span> ${part.href ? `<a href="${root}${part.href}">${esc(part.label)}</a>` : `<span>${esc(part.label)}</span>`}`).join("")}</nav>`;
}

function articleHtml(p) {
  const root = relRootFor(p.category, p.slug);
  const md = markdownFor(p);
  const html = markdownToHtml(md.replace(/^---[\s\S]*?---\n\n/, ""));
  const related = relatedPages(p).slice(0, 4);
  const content = `
    ${breadcrumbs(root, [{ label: categoryNameFor(p.category), href: `${p.category}/` }, { label: p.title }])}
    <article class="doc-article">
      <div class="article-meta">
        <span>${esc(categoryNameFor(p.category))}</span>
        <span>${esc(p.type)}</span>
        <span>${esc(p.status)}</span>
        <span>Reviewed ${today}</span>
      </div>
      ${html}
      <section class="related">
        <h2>Related</h2>
        <div class="card-grid compact">${related.map((item) => card(item, root)).join("")}</div>
      </section>
    </article>`;
  return shell({ title: p.title, description: p.description, category: p.category, slugValue: p.slug, type: p.type, status: p.status, content });
}

function card(p, root = "") {
  return `<a class="card" href="${root}${p.category}/${p.slug}/"><span>${esc(categoryNameFor(p.category))}</span><strong>${esc(p.title)}</strong><p>${esc(p.description)}</p></a>`;
}

function categoryHtml(id, name, description) {
  const root = relRootFor(id);
  const items = allPages.filter((p) => p.category === id && p.type !== "archive");
  const groups = navGroups[id] || [];
  const content = `
    ${breadcrumbs(root, [{ label: name }])}
    <section class="category-hero">
      <p class="eyebrow">${esc(name)}</p>
      <h1>${esc(name)}</h1>
      <p>${esc(description)}</p>
    </section>
    ${groups.map((group) => {
      const groupPages = items.filter((p) => p.section === group);
      if (!groupPages.length) return "";
      return `<section class="doc-section"><h2>${esc(group)}</h2><div class="card-grid">${groupPages.map((item) => card(item, root)).join("")}</div></section>`;
    }).join("")}
    ${id === "news-announcements" ? `<section class="doc-section"><h2>Archive</h2><div class="card-grid">${archiveItems.map((item) => card(item, root)).join("")}</div></section>` : ""}`;
  return shell({ title: name, description, category: id, content });
}

function homepageHtml() {
  const common = [
    findPage("accounts-access", "request-access"),
    findPage("accounts-access", "vpn-ssh-access"),
    findPage("getting-started", "first-job"),
    findPage("troubleshooting", "job-pending"),
    findPage("software", "request-software"),
    findPage("databases", "request-database"),
    findPage("gpu-computing", "gpu-overview"),
    findPage("storage", "data-transfer")
  ];
  const content = `
    <section class="home-hero">
      <p class="eyebrow">Single documentation portal</p>
      <h1>Mjolnir Documentation</h1>
      <p>Search and browse one canonical source for accounts, access, storage, Slurm, jobs, software, databases, policies, troubleshooting, and announcements.</p>
      <div class="home-search" role="search"><input id="home-search" type="search" placeholder="Search all Mjolnir documentation..."></div>
    </section>
    <section class="doc-section">
      <h2>Common tasks</h2>
      <div class="card-grid">${common.map((item) => card(item, "")).join("")}</div>
    </section>
    <section class="doc-section">
      <h2>Categories</h2>
      <div class="category-grid">${categories.map(([id, name, description]) => `<a class="category-card" href="${id}/"><strong>${esc(name)}</strong><p>${esc(description)}</p></a>`).join("")}</div>
    </section>
    <section class="doc-section split">
      <div>
        <h2>Current announcements</h2>
        <p>Announcements now live in the docs portal and link back to canonical pages when they change behavior.</p>
        <a class="text-link" href="news-announcements/current-announcements/">View announcements</a>
      </div>
      <div>
        <h2>Need help?</h2>
        <p>Start with troubleshooting. If the issue remains, submit a support ticket with job IDs, commands, paths, and error messages.</p>
        <a class="text-link" href="troubleshooting/cannot-login/">Open troubleshooting</a>
      </div>
    </section>`;
  return shell({ title: "Home", description: "Mjolnir documentation portal", content, bodyClass: "home" });
}

function findPage(category, slugValue) {
  return allPages.find((p) => p.category === category && p.slug === slugValue);
}

function migrationReport() {
  const clusters = [
    ["About Mjolnir", "Merged into Getting Started / What is Mjolnir"],
    ["VPN, login, SSH, GitHub keys", "Merged into Accounts & Access / VPN and SSH plus SSH shortcuts"],
    ["Hardware", "Reserved as future hardware reference and linked from live website dashboards"],
    ["Databases", "Split into database overview, request workflow, shared access, and catalog"],
    ["Storage, project folders, backup, data transfer", "Merged into Storage section"],
    ["Slurm, queues, QoS, partitions", "Merged into Slurm section with job submission and monitoring separated"],
    ["Software request, digest, BioRender", "Merged into Software section"],
    ["Troubleshooting articles", "Moved into symptom-based Troubleshooting section"],
    ["Historical emails and presentations", "Archived under News & Announcements / Historical archive"]
  ];
  return `# Mjolnir Documentation Migration Report\n\nGenerated: ${today}\n\n## Scope\n\nAll generated portal work lives inside \`website-v2/docs/\`. Existing website files outside this folder were not modified.\n\n## Migration approach\n\nThe implementation creates canonical Markdown pages, renders static HTML, creates local search data, prepares Pagefind integration, and records redirects. Duplicate Freshdesk, ReadTheDocs, and website documentation topics are merged into one navigation structure.\n\n## Consolidation summary\n\n${clusters.map(([topic, action]) => `- **${topic}:** ${action}.`).join("\n")}\n\n## Content counts\n\n- Canonical/current pages: ${pages.length}\n- Archived historical pages: ${archiveItems.length}\n- Categories: ${categories.length}\n\n## Search\n\nThe portal includes Pagefind hooks and a generated fallback index at \`data/search-index.json\`. Run Pagefind against \`website-v2/docs\` to generate the production \`pagefind/\` assets.\n\n## Redirect strategy\n\nRedirect mappings are generated in \`data/redirects.json\`. True redirects should be configured during cutover where the source platform allows it; otherwise old pages should show a retirement notice linking to the new canonical page.\n\n## Future-proofing\n\nThe portal includes data structures for navigation, redirects, hardware, software catalog, database catalog, release notes, and historical archives.\n`;
}

function writeAssets() {
  write(path.join(ASSETS_ROOT, "docs.css"), css);
  write(path.join(ASSETS_ROOT, "docs.js"), js);
}

function writeData() {
  const navigation = categories.map(([id, title, description]) => ({
    id,
    title,
    description,
    groups: (navGroups[id] || []).map((group) => ({
      title: group,
      pages: allPages.filter((p) => p.category === id && p.section === group).map((p) => ({
        title: p.title,
        path: `${p.category}/${p.slug}/`,
        type: p.type,
        status: p.status
      }))
    }))
  }));
  const redirects = allPages.flatMap((p) => p.sources.map((source) => ({
    source,
    destination: `${p.category}/${p.slug}/`,
    status: p.status,
    action: p.status === "archive" ? "archive" : "merge"
  })));
  const search = allPages.map((p) => ({
    title: p.title,
    description: p.description,
    category: categoryNameFor(p.category),
    categorySlug: p.category,
    type: p.type,
    status: p.status,
    tags: p.tags,
    url: `${p.category}/${p.slug}/`,
    body: p.body.join(" ")
  }));
  const softwareCatalog = [
    { name: "Environment Modules", category: "Core", path: "module avail", owner: "Mjolnir Admin", status: "current" },
    { name: "Conda", category: "Environment", path: "User-managed environments", owner: "User", status: "current" },
    { name: "BioRender", category: "External service", path: "Request-based access", owner: "Mjolnir Admin", status: "current" }
  ];
  const databaseCatalog = [
    { name: "Shared database repository", category: "Reference data", location: "Shared project database path", owner: "Mjolnir Admin", status: "current" }
  ];
  const hardware = [
    { name: "Mjolnir cluster", type: "HPC cluster", source: "Main website and Freshdesk Hardware", status: "needs detailed inventory migration" }
  ];
  write(path.join(DATA_ROOT, "navigation.json"), JSON.stringify(navigation, null, 2));
  write(path.join(DATA_ROOT, "redirects.json"), JSON.stringify(redirects, null, 2));
  write(path.join(DATA_ROOT, "search-index.json"), JSON.stringify(search, null, 2));
  write(path.join(DATA_ROOT, "software-catalog.json"), JSON.stringify(softwareCatalog, null, 2));
  write(path.join(DATA_ROOT, "database-catalog.json"), JSON.stringify(databaseCatalog, null, 2));
  write(path.join(DATA_ROOT, "hardware.json"), JSON.stringify(hardware, null, 2));
  write(path.join(DATA_ROOT, "release-notes.json"), JSON.stringify([{ date: today, title: "Documentation portal implementation", summary: "Initial canonical documentation portal structure created." }], null, 2));
}

function writeTemplates() {
  write(path.join(TEMPLATES_ROOT, "article-template.md"), `---\ntitle: ""\ndescription: ""\ncategory: ""\nsection: ""\ncontent_type: "guide"\naudience: ["all users"]\ntags: []\nowner: "Mjolnir Documentation"\nstatus: "current"\nreview_cycle: "6 months"\nlast_reviewed: "${today}"\nsource_pages: []\n---\n\n# Title\n\nShort answer.\n\n## Prerequisites\n\n- Requirement\n\n## Steps\n\n1. Step\n\n## Related pages\n\n- Link\n`);
  write(path.join(TEMPLATES_ROOT, "troubleshooting-template.md"), `---\ncontent_type: "troubleshooting"\nstatus: "current"\n---\n\n# Symptom\n\n## Likely causes\n\n## Quick checks\n\n## Resolution\n\n## When to contact support\n`);
  write(path.join(TEMPLATES_ROOT, "policy-template.md"), `---\ncontent_type: "policy"\nstatus: "current"\n---\n\n# Policy title\n\n## Summary\n\n## Applies to\n\n## Rules\n\n## Exceptions\n\n## Contact\n`);
}

function build() {
  ensure(CONTENT_ROOT);
  writeAssets();
  writeData();
  writeTemplates();
  write(path.join(ROOT, "index.html"), homepageHtml());
  for (const [id, name, description] of categories) {
    write(path.join(ROOT, id, "index.html"), categoryHtml(id, name, description));
  }
  for (const p of allPages) {
    const mdPath = path.join(CONTENT_ROOT, p.category, `${p.slug}.md`);
    write(mdPath, markdownFor(p));
    write(path.join(ROOT, p.category, p.slug, "index.html"), articleHtml(p));
  }
  write(path.join(ROOT, "migration-report.md"), migrationReport());
}

const css = `
:root{--bg:#f7f9fb;--panel:#fff;--text:#17212b;--muted:#617080;--line:#d9e1e8;--brand:#145c5f;--brand-2:#7c3f18;--accent:#d99b2b;--code:#102a43;--shadow:0 12px 28px rgba(14,31,53,.08)}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--bg);color:var(--text);font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.55}a{color:inherit}.skip-link{position:absolute;left:-999px;top:0;background:#fff;padding:8px;z-index:10}.skip-link:focus{left:8px}.site-header{position:sticky;top:0;z-index:20;display:grid;grid-template-columns:auto auto minmax(220px,1fr) auto;gap:16px;align-items:center;padding:12px 22px;background:rgba(255,255,255,.94);border-bottom:1px solid var(--line);backdrop-filter:blur(12px)}.brand{display:flex;align-items:center;gap:10px;text-decoration:none}.brand-mark{display:grid;place-items:center;width:36px;height:36px;background:var(--brand);color:white;font-weight:800;border-radius:7px}.brand small{display:block;color:var(--muted);font-size:12px}.icon-button{border:1px solid var(--line);background:#fff;border-radius:7px;width:40px;height:40px;font-size:20px}.menu-toggle{display:none}.global-search{position:relative}.global-search input,.home-search input{width:100%;border:1px solid var(--line);border-radius:8px;padding:12px 14px;font-size:15px;background:#fff}.search-results{position:absolute;top:48px;left:0;right:0;max-height:70vh;overflow:auto;background:#fff;border:1px solid var(--line);border-radius:8px;box-shadow:var(--shadow);display:none}.search-results.is-open{display:block}.search-result{display:block;padding:12px 14px;text-decoration:none;border-bottom:1px solid var(--line)}.search-result:hover{background:#f1f6f6}.search-result span{display:block;color:var(--muted);font-size:12px}.top-links{display:flex;gap:14px;align-items:center;font-size:14px}.layout{display:grid;grid-template-columns:290px minmax(0,1fr);min-height:calc(100vh - 65px)}.sidebar{border-right:1px solid var(--line);background:#fff;padding:18px 14px;overflow:auto;position:sticky;top:65px;height:calc(100vh - 65px)}.side-home,.side-title,.side-items a{display:block;text-decoration:none;border-radius:7px}.side-home{padding:10px 12px;font-weight:700;background:#f1f6f6;margin-bottom:12px}.side-section{margin-bottom:8px}.side-title{padding:8px 12px;font-weight:700;color:#23313f}.side-section.is-active .side-title{background:#e6f1f0;color:var(--brand)}.side-items{display:none;padding-left:10px}.side-section.is-active .side-items{display:block}.side-items a{padding:6px 12px;color:var(--muted);font-size:14px}.side-items a:hover{background:#f4f7f9;color:var(--text)}.content{max-width:1180px;width:100%;padding:30px clamp(18px,4vw,56px)}.breadcrumbs{font-size:14px;color:var(--muted);margin-bottom:22px}.breadcrumbs a{color:var(--brand);text-decoration:none}.home-hero,.category-hero{background:linear-gradient(135deg,#eef7f6,#fff 58%,#fff6e5);border:1px solid var(--line);border-radius:8px;padding:clamp(28px,5vw,56px);box-shadow:var(--shadow)}.home-hero h1,.category-hero h1,.doc-article h1{font-size:clamp(34px,6vw,58px);line-height:1.05;margin:0 0 14px}.home-hero p,.category-hero p{max-width:760px;color:#405263;font-size:18px}.home-search{max-width:760px;margin-top:24px}.eyebrow{text-transform:uppercase;letter-spacing:.08em;font-size:12px;color:var(--brand);font-weight:800}.doc-section{margin-top:34px}.doc-section h2,.doc-article h2{font-size:26px;margin:0 0 16px}.card-grid,.category-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:14px}.card,.category-card{display:block;text-decoration:none;background:#fff;border:1px solid var(--line);border-radius:8px;padding:18px;box-shadow:0 4px 14px rgba(14,31,53,.04);min-height:145px}.card:hover,.category-card:hover{border-color:#93b8b7;transform:translateY(-1px)}.card span{display:inline-block;color:var(--brand);font-size:12px;font-weight:800;text-transform:uppercase}.card strong,.category-card strong{display:block;margin:6px 0 8px;font-size:18px}.card p,.category-card p{margin:0;color:var(--muted);font-size:14px}.compact{grid-template-columns:repeat(auto-fit,minmax(210px,1fr))}.split{display:grid;grid-template-columns:1fr 1fr;gap:16px}.split>div{background:#fff;border:1px solid var(--line);border-radius:8px;padding:22px}.text-link{color:var(--brand);font-weight:800}.doc-article{max-width:850px}.article-meta{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:18px}.article-meta span{background:#eef4f4;color:#234d50;border:1px solid #c9dfde;border-radius:999px;padding:5px 10px;font-size:12px;font-weight:700;text-transform:capitalize}.doc-article h1{margin-top:0}.doc-article p,.doc-article li{font-size:17px}.doc-article code{background:#eef2f4;color:var(--code);border-radius:5px;padding:2px 5px}.doc-article pre{background:#102a43;color:#f7fbff;padding:16px;border-radius:8px;overflow:auto}.related{margin-top:36px;padding-top:22px;border-top:1px solid var(--line)}
@media (max-width: 900px){.site-header{grid-template-columns:auto auto;gap:10px}.menu-toggle{display:block;justify-self:end}.global-search{grid-column:1/-1;order:3}.top-links{display:none}.layout{display:block}.sidebar{position:fixed;inset:65px auto 0 0;width:min(86vw,320px);transform:translateX(-100%);transition:.2s transform;box-shadow:var(--shadow);z-index:19}.sidebar.is-open{transform:translateX(0)}.content{padding:22px 16px}.split{grid-template-columns:1fr}.home-hero h1,.category-hero h1,.doc-article h1{font-size:36px}}
`;

const js = `
const searchInputs=[document.getElementById('global-search'),document.getElementById('home-search')].filter(Boolean);
const resultBox=document.getElementById('search-results');
let docsIndex=[];
let pagefind=null;
const base=rootPath();
fetch(base+'data/search-index.json').then(r=>r.json()).then(data=>{docsIndex=data}).catch(()=>{});
import(base+'pagefind/pagefind.js').then(mod=>{pagefind=mod}).catch(()=>{pagefind=null});
function score(item,q){const hay=[item.title,item.description,item.category,item.type,item.tags.join(' '),item.body].join(' ').toLowerCase();return q.split(/\\s+/).reduce((s,term)=>s+(item.title.toLowerCase().includes(term)?8:0)+(item.tags.join(' ').toLowerCase().includes(term)?4:0)+(hay.includes(term)?1:0),0)}
async function renderSearch(q){if(!resultBox)return;const query=q.trim().toLowerCase();if(query.length<2){resultBox.classList.remove('is-open');resultBox.innerHTML='';return}let hits=[];if(pagefind){try{const search=await pagefind.search(query,{filters:{type:['guide','reference','policy','troubleshooting','faq','announcement','archive']}});const resultData=await Promise.all(search.results.slice(0,8).map(r=>r.data()));hits=resultData.map(item=>({title:item.meta?.title||item.url,description:item.excerpt||'',category:item.filters?.category?.[0]||'Documentation',type:item.filters?.type?.[0]||'page',status:'current',url:item.url.replace(/^\\.\\//,'')}))}catch(error){hits=[]}}if(!hits.length){hits=docsIndex.map(item=>({...item,_score:score(item,query)})).filter(item=>item._score>0).sort((a,b)=>b._score-a._score || (a.status==='archive')-(b.status==='archive')).slice(0,8)}resultBox.innerHTML=hits.length?hits.map(item=>'<a class="search-result" href="'+normalizeUrl(item.url)+'"><strong>'+escapeHtml(item.title)+'</strong><span>'+escapeHtml(item.category)+' · '+escapeHtml(item.type)+' · '+escapeHtml(item.status||'current')+'</span><p>'+escapeHtml(stripMarks(item.description))+'</p></a>').join(''):'<div class="search-result"><strong>No results</strong><span>Try vpn, ssh, pending, gpu, software, database, storage, or slurm.</span></div>';resultBox.classList.add('is-open')}
function rootPath(){const script=document.currentScript?.src||document.querySelector('script[src$="assets/docs.js"]')?.src;if(script)return script.replace(/assets\\/docs\\.js.*$/,'');const marker='/docs/';const idx=location.pathname.indexOf(marker);return idx>=0?location.pathname.slice(0,idx+marker.length):'./'}
function normalizeUrl(url){if(/^https?:/.test(url))return url;if(url.startsWith('/'))return url;return base+url.replace(/^\\.\\//,'')}
function stripMarks(s){return String(s).replace(/<mark>|<\\/mark>/g,'')}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
searchInputs.forEach(input=>input.addEventListener('input',e=>{searchInputs.forEach(other=>{if(other!==e.target)other.value=e.target.value});renderSearch(e.target.value)}));
document.addEventListener('click',e=>{if(resultBox && !e.target.closest('.global-search') && !e.target.closest('.home-search'))resultBox.classList.remove('is-open')});
const toggle=document.querySelector('.menu-toggle');const sidebar=document.querySelector('.sidebar');if(toggle&&sidebar){toggle.addEventListener('click',()=>{const open=sidebar.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open))})}
`;

build();
