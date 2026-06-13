---
title: "Job is pending"
description: "Pending jobs may be waiting for priority, resources, fairshare, QoS/partition limits, maintenance, or dependencies."
category: "Troubleshooting"
section: "Jobs"
content_type: "troubleshooting"
audience: ["all users"]
tags: ["pending", "queue", "slurm"]
owner: "Mjolnir Documentation"
status: "current"
review_cycle: "6 months"
last_reviewed: "2026-06-13"
source_pages:
  - "Audit missing topic: Queue waiting times"
---

# Job is pending

Pending jobs may be waiting for priority, resources, fairshare, QoS/partition limits, maintenance, or dependencies.

Inspect the pending reason with Slurm commands before resubmitting.

If a job appears stuck because of invalid resource requests, adjust the request rather than repeatedly submitting duplicates.

## Source consolidation

- Audit missing topic: Queue waiting times

## Related pages

- [Submit your first job](../first-job/)
- [Slurm basics](../slurm-basics/)
- [Queue waiting times and pending reasons](../queue-waiting-times/)
- [Cannot log in](../cannot-login/)
- [Job failed or was killed](../job-failed/)
