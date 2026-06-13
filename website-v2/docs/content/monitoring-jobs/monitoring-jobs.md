---
title: "Monitoring jobs"
description: "Use `squeue` to inspect queued/running jobs, `scontrol` for detailed job state, and `sacct` for completed job accounting."
category: "Monitoring Jobs"
section: "Queue Monitoring"
content_type: "guide"
audience: ["all users"]
tags: ["squeue", "scontrol", "sacct"]
owner: "Mjolnir Documentation"
status: "current"
review_cycle: "6 months"
last_reviewed: "2026-06-13"
source_pages:
  - "ReadTheDocs: Monitoring Jobs"
---

# Monitoring jobs

Use `squeue` to inspect queued/running jobs, `scontrol` for detailed job state, and `sacct` for completed job accounting.

Monitoring helps distinguish normal waiting from resource mismatch, policy limits, or failed jobs.

Keep the job ID from `sbatch`; it is the handle for later inspection.

## Source consolidation

- ReadTheDocs: Monitoring Jobs

## Related pages

- [Canceling jobs](../../monitoring-jobs/canceling-jobs/)
- [Cluster utilization and statistics](../../monitoring-jobs/cluster-utilization/)
