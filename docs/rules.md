# Project Rules & Decisions

This file is the single source of truth for all project-wide decisions. Update it immediately when any decision is made.

## How to use this file
- Every architecture choice, naming convention, or design pattern we agree on goes here
- Every business rule or constraint gets documented here
- If a decision overrides a previous one, update the entry (don't duplicate)
- Group entries by category for easy scanning

## Categories to track:
- **Architecture** — Tech stack choices, folder structure, state management approach
- **Naming Conventions** — Component names, file names, database columns, API routes
- **Design Patterns** — Reusable patterns, component composition rules, styling approach
- **Business Logic** — Validation rules, access control, feature flags, pricing logic
- **Integrations** — Third-party services, API keys needed, webhook configurations

Keep entries concise. One line per decision when possible.

## Architecture
- Use a static React/Vite app with file-based data in `src/data`; no database or CMS for the current release.
- Photography metadata is maintained in `src/data/photos.js` and can be bootstrapped from uploaded files with `npm run sync:photos`.

## Collaboration
- Every assistant response must begin with `Sara's Portfolio`.
- Read project documentation in `docs/` before work; treat `docs/masterplan.md` and `docs/tasks.md` as the source of truth.
- After completed tasks, update `docs/tasks.md` and report what was completed, how to test it, and the next step.

## Naming Conventions
- Photography assets live under `public/images/photography` and are referenced as `/images/photography/<filename>`.

## Design Patterns
- Optional photo metadata fields are `year`, `medium`, `description`, and `alt`; cards show compact metadata and fullscreen modals show fuller metadata.
- Photography cards and fullscreen image viewer display only the photo name, even when metadata exists in `src/data/photos.js`.
- AI POC cards may use concise `summary` text for previews while detail modals keep the full `description`.
