# AI POCs Page

## Purpose

Archived documentation for the former AI proof-of-concept page.

## Source Files

- `archive/ai-pocs/AiPocs.jsx`
- `archive/ai-pocs/aiPocs.js`
- `archive/ai-pocs/ProjectCard.jsx`
- `src/components/ProjectDetailModal.jsx`
- `src/styles/global.css`

## User-Facing Behaviour

AI POCs are not shown in the active portfolio. The archived page can be restored later if Sara decides the section belongs in the live site again.

## Layout Rules

- The archived page previously used `.simple-grid`.
- The archived page previously used `ProjectCard`.

## Reusable Components

- Archived only; do not use in active pages.
- Must use `ProjectDetailModal`.

## Data Rules

- Archived data source is `aiPocs`.
- Expected fields include `id`, `title`, `description`, optional `summary`, image fields, and optional `links`.
- Card may show shorter `summary`; modal keeps full `description`.

## Image Rules

- AI POC cards previously used shared project card image behaviour.
- Detail images use `ProjectDetailModal` image handling.

## Styling Rules

- Keep AI POCs visually consistent with the portfolio.
- Do not let AI POCs dominate the Home page identity.

## Accessibility Rules

- Cards must be keyboard accessible.
- External links open in new tabs with safe rel attributes.

## Known Gaps / Defects

- Missing AI POC screenshots remain blocked if this section is restored.
- Some external AI POC links need manual confirmation if this section is restored.

## Change Rules

- Do not re-register AI POCs in navigation or `App.jsx` unless Sara explicitly asks for the section to return.
- Update `archive/ai-pocs/aiPocs.js` for archived content changes.

## Test Expectations

- Active-site checks should confirm no AI POCs nav item appears and no active page imports archived AI POC files.
- If restored, open each POC, test modal navigation, and verify links render when present.
