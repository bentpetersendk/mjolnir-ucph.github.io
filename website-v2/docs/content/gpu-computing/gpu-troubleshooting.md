---
title: "GPU troubleshooting"
description: "Common GPU issues include CUDA/module mismatch, GPU memory exhaustion, poor utilization, and long queue waits."
category: "GPU Computing"
section: "Troubleshooting GPU Jobs"
content_type: "troubleshooting"
audience: ["all users"]
tags: ["gpu", "cuda", "oom"]
owner: "Mjolnir Documentation"
status: "current"
review_cycle: "6 months"
last_reviewed: "2026-06-13"
source_pages:
  - "Audit missing topic: GPU usage guide"
---

# GPU troubleshooting

Common GPU issues include CUDA/module mismatch, GPU memory exhaustion, poor utilization, and long queue waits.

Check loaded modules, requested GPU resources, application logs, and scheduler state.

If the problem is reproducible and resource requests look correct, include the job ID and script in a support ticket.

## Source consolidation

- Audit missing topic: GPU usage guide

## Related pages

- [Memory allocation guide](../memory-allocation/)
- [GPU computing overview](../gpu-overview/)
- [GPU job template](../gpu-job-template/)
- [Job failed or was killed](../job-failed/)
