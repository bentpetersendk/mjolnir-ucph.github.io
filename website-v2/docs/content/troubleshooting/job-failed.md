---
title: "Job failed or was killed"
description: "Check output and error files first. Then inspect completed job accounting with `sacct`."
category: "Troubleshooting"
section: "Jobs"
content_type: "troubleshooting"
audience: ["all users"]
tags: ["failed", "oom", "exit code"]
owner: "Mjolnir Documentation"
status: "current"
review_cycle: "6 months"
last_reviewed: "2026-06-13"
source_pages:
  - "ReadTheDocs: Monitoring Jobs"
---

# Job failed or was killed

Check output and error files first. Then inspect completed job accounting with `sacct`.

Common causes include missing modules, wrong paths, insufficient memory, exceeded runtime, and application errors.

When opening a support ticket, include job ID, script, output/error logs, and the command used to submit the job.

## Source consolidation

- ReadTheDocs: Monitoring Jobs

## Related pages

- [Memory allocation guide](../../slurm/memory-allocation/)
- [GPU troubleshooting](../../gpu-computing/gpu-troubleshooting/)
- [Cannot log in](../../troubleshooting/cannot-login/)
- [Job is pending](../../troubleshooting/job-pending/)
- [Perl locale warning](../../troubleshooting/perl-locale-warning/)
