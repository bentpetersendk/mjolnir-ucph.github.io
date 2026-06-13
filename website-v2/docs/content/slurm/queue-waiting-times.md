---
title: "Queue waiting times and pending reasons"
description: "A pending job is not necessarily broken. It may be waiting for priority, resources, limits, or dependencies."
category: "Slurm"
section: "Scheduling"
content_type: "troubleshooting"
audience: ["all users"]
tags: ["pending", "queue", "priority"]
owner: "Mjolnir Documentation"
status: "current"
review_cycle: "6 months"
last_reviewed: "2026-06-13"
source_pages:
  - "Audit missing topic: Queue waiting times"
---

# Queue waiting times and pending reasons

A pending job is not necessarily broken. It may be waiting for priority, resources, limits, or dependencies.

Use `squeue` and `scontrol show job <jobid>` to inspect the reason.

If many jobs wait unexpectedly, check fairshare, requested runtime, memory, partition, QoS, and maintenance announcements.

## Source consolidation

- Audit missing topic: Queue waiting times

## Related pages

- [Slurm basics](../slurm-basics/)
- [Partitions, QoS, and fairshare](../partitions-qos-fairshare/)
- [Memory allocation guide](../memory-allocation/)
- [Lazy queue and low-priority work](../lazyqueue/)
- [Job is pending](../job-pending/)
