---
title: "Submit your first job"
description: "Run computation through Slurm rather than directly on the login node."
category: "Getting Started"
section: "First Steps"
content_type: "guide"
audience: ["all users"]
tags: ["sbatch", "first job", "slurm"]
owner: "Mjolnir Documentation"
status: "current"
review_cycle: "6 months"
last_reviewed: "2026-06-13"
source_pages:
  - "ReadTheDocs: Submitting jobs"
---

# Submit your first job

Run computation through Slurm rather than directly on the login node.

Create a small script, submit it with `sbatch`, then inspect the queue with `squeue` and the result files when the job completes.

Start with conservative resources. Request only the CPUs, memory, runtime, and GPU resources you need.

## Source consolidation

- ReadTheDocs: Submitting jobs

## Related pages

- [What is Mjolnir?](../../getting-started/what-is-mjolnir/)
- [Who can use Mjolnir?](../../getting-started/who-can-use-mjolnir/)
- [New user checklist](../../getting-started/new-user-checklist/)
- [Login nodes vs compute nodes](../../getting-started/login-vs-compute-nodes/)
- [Slurm basics](../../slurm/slurm-basics/)
