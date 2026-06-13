---
title: "Submitting jobs with sbatch"
description: "Create a shell script with `#SBATCH` resource requests and the commands your job should run."
category: "Job Submission"
section: "Job Types"
content_type: "guide"
audience: ["all users"]
tags: ["sbatch", "batch"]
owner: "Mjolnir Documentation"
status: "current"
review_cycle: "6 months"
last_reviewed: "2026-06-13"
source_pages:
  - "ReadTheDocs: Submitting jobs"
---

# Submitting jobs with sbatch

Create a shell script with `#SBATCH` resource requests and the commands your job should run.

Submit it with `sbatch script.sh`. Slurm returns a job ID that you can use for monitoring and cancellation.

Write output and error logs to predictable paths so failed jobs can be diagnosed.

## Source consolidation

- ReadTheDocs: Submitting jobs

## Related pages

- [Submit your first job](../first-job/)
- [Interactive jobs with srun](../interactive-jobs/)
- [Job arrays](../job-arrays/)
- [Job template library](../job-templates/)
- [GPU job template](../gpu-job-template/)
