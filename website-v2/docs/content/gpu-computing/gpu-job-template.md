---
title: "GPU job template"
description: "A GPU job template should include GPU resource requests, CPU/memory requests, runtime, module loading, and logging."
category: "GPU Computing"
section: "Running GPU Jobs"
content_type: "guide"
audience: ["all users"]
tags: ["gpu", "sbatch", "cuda"]
owner: "Mjolnir Documentation"
status: "current"
review_cycle: "6 months"
last_reviewed: "2026-06-13"
source_pages:
  - "Audit missing topic: GPU usage guide"
---

# GPU job template

A GPU job template should include GPU resource requests, CPU/memory requests, runtime, module loading, and logging.

Start with a small validation job before launching long GPU workloads.

Monitor GPU utilization to ensure the job benefits from GPU resources.

## Source consolidation

- Audit missing topic: GPU usage guide

## Related pages

- [Submit your first job](../first-job/)
- [Submitting jobs with sbatch](../submitting-jobs/)
- [GPU computing overview](../gpu-overview/)
- [GPU troubleshooting](../gpu-troubleshooting/)
