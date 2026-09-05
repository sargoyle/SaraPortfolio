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
- Archived portfolio sections live under `archive/`; archived code/data must not be imported by the active app unless a section is deliberately restored.
- Active Sara's Lab content lives in `src/data/labProjects.js`; legacy game-only data is archived under `archive/legacy-games`.
- Sara's Lab project routes use `/lab/<project-slug>` and static route HTML is generated from Lab project data for direct loads and route-specific metadata.
- Crafter Dark source PDFs/header documents are archived under `archive/crafter-dark-documents` and should not be served from `public`.
- Tucked Away is the standalone public product route; `/tucked-away` uses a Vercel rewrite to `tucked-away.html` for direct loads and route-specific metadata.

## Collaboration
- Every assistant response must begin with `Sara's Portfolio`.
- Read project documentation in `docs/` before work; treat `docs/masterplan.md` and `docs/tasks.md` as the source of truth.
- After completed tasks, update `docs/tasks.md` and report what was completed, how to test it, and the next step.

## Naming Conventions
- Photography assets live under `public/images/photography` and are referenced as `/images/photography/<filename>`.
- Crafter Dark images live directly under `public/images/crafter-dark` and are referenced as `/images/crafter-dark/<filename>`; do not use category subfolders.

## Design Patterns
- Read the relevant root `functions/*.md` file before changing a page, list/detail view, shared card, image pattern, modal, navigation, footer, or visual system; keep known gaps synced with `docs/tasks.md`.
- Optional photo metadata fields are `year`, `medium`, `description`, and `alt`; cards show compact metadata and fullscreen modals show fuller metadata.
- Photography cards and fullscreen image viewer display only the photo name, even when metadata exists in `src/data/photos.js`.
- AI POC cards may use concise `summary` text for previews while detail modals keep the full `description`.
- AI POC content is archived under `archive/ai-pocs` and must stay out of active navigation/page registry unless explicitly reintroduced.
- Home page positioning should centre Sara's creative practice on gothic cross-stitch, pattern-making, photography, games, and creative tools; AI/code are supporting tools, not the main identity.
- LinkedIn is the only public communication/connect link on the active site; do not add email, phone, contact forms, or additional social links unless Sara explicitly changes this decision.
- Tucked Away privacy-policy contact remains a visible placeholder until Sara supplies the dedicated support email.
