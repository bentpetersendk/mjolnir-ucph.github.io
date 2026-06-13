---
title: "Memory allocation guide"
description: "Request enough memory for the job, but avoid over-requesting because it can increase waiting time."
category: "Slurm"
section: "Resource Requests"
content_type: "guide"
audience: ["all users"]
tags: ["memory", "oom", "mem"]
owner: "Mjolnir Documentation"
status: "current"
review_cycle: "6 months"
last_reviewed: "2026-06-13"
source_pages:
  - "Audit missing topic: Memory allocation guide"
---

# Memory allocation guide

Request enough memory for the job, but avoid over-requesting because it can increase waiting time.

Use `--mem` for total memory per node or `--mem-per-cpu` when memory scales with CPU count.

If a job is killed for memory, review logs and accounting before increasing the request.

## Source consolidation

- Audit missing topic: Memory allocation guide

## Related pages

- [Slurm basics](../slurm-basics/)
- [Partitions, QoS, and fairshare](../partitions-qos-fairshare/)
- [Queue waiting times and pending reasons](../queue-waiting-times/)
- [Lazy queue and low-priority work](../lazyqueue/)
- [GPU troubleshooting](../gpu-troubleshooting/)
