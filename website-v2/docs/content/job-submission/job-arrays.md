---
title: "Job arrays"
description: "Job arrays are useful when the same workflow should run across many inputs."
category: "Job Submission"
section: "Examples"
content_type: "guide"
audience: ["all users"]
tags: ["array", "batch"]
owner: "Mjolnir Documentation"
status: "current"
review_cycle: "6 months"
last_reviewed: "2026-06-13"
source_pages:
  - "ReadTheDocs: Submitting jobs"
---

# Job arrays

Job arrays are useful when the same workflow should run across many inputs.

Use the Slurm array task ID to select input files or parameter sets.

Throttle large arrays where appropriate so they do not overwhelm shared resources.

## Source consolidation

- ReadTheDocs: Submitting jobs

## Related pages

- [Submitting jobs with sbatch](../submitting-jobs/)
- [Interactive jobs with srun](../interactive-jobs/)
- [Job template library](../job-templates/)
