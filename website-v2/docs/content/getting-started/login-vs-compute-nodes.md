---
title: "Login nodes vs compute nodes"
description: "Use login nodes for editing, file movement, job submission, and light inspection."
category: "Getting Started"
section: "Concepts"
content_type: "policy"
audience: ["all users"]
tags: ["login node", "compute node"]
owner: "Mjolnir Admin"
status: "current"
review_cycle: "6 months"
last_reviewed: "2026-06-13"
source_pages:
  - "Freshdesk: VPN access and login to Mjolnir"
  - "Policies: Login node policy"
---

# Login nodes vs compute nodes

Use login nodes for editing, file movement, job submission, and light inspection.

Do not run heavy computation on mjolnirgate or other login nodes. Heavy work must be submitted to Slurm.

This rule protects every user by keeping the shared entrance node responsive.

## Source consolidation

- Freshdesk: VPN access and login to Mjolnir
- Policies: Login node policy

## Related pages

- [What is Mjolnir?](../../getting-started/what-is-mjolnir/)
- [Who can use Mjolnir?](../../getting-started/who-can-use-mjolnir/)
- [New user checklist](../../getting-started/new-user-checklist/)
- [Submit your first job](../../getting-started/first-job/)
- [Login node policy](../../policies/login-node-policy/)
