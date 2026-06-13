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

- Page background: `#f8fbff`
- Surface: `#ffffff`
- Text: `#141c3a`
- Muted text: `#667089`
- Primary cyan: `#00b8ff`
- Deep blue: `#10328f`
- Accent magenta: `#ff2bbd`
- Border: `#dce6f2`
- Radius: `6px` for navigation controls, `8px` for cards and notes.

## Decisions

- Use the Mjolnir hammer artwork as the palette reference: white base, deep blue structure, cyan primary glow, and magenta highlight accents.
- Avoid production CSS imports so v2 can evolve independently.
- Use semantic HTML first, then add behavior and richer components later.
