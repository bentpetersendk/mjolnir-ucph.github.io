# Design System

## Purpose

This file records the initial v2 styling decisions. It is not a finished visual identity; it is a baseline for safe parallel development.

## Principles

- Quiet, service-oriented interface suitable for an HPC support website.
- Clear navigation and readable typography before decorative styling.
- Local CSS only; no dependency on production stylesheets.
- Responsive layouts that work without a build step.
- Reusable patterns that can later become components or templates.

## Current Foundations

- `css/main.css`: base typography, colors, page background, containers, and element resets.
- `css/components.css`: shared header, navigation, hero, cards, notes, and footer.
- `css/pages.css`: page-specific shell and responsive adjustments.

## Initial Tokens

- Page background: `#f7f8fb`
- Surface: `#ffffff`
- Text: `#172033`
- Muted text: `#57657a`
- Link: `#2454a6`
- Border: `#dde3ed`
- Radius: `6px` for navigation controls, `8px` for cards and notes.

## Decisions

- Keep styling modest during setup because redesign is a later task.
- Avoid production CSS imports so v2 can evolve independently.
- Use semantic HTML first, then add behavior and richer components later.
