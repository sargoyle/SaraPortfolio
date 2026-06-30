# AI POCs Page

## Purpose

Displays AI proof-of-concept projects as portfolio items, while keeping AI secondary to Sara's broader creative practice.

## Source Files

- `src/pages/AiPocs.jsx`
- `src/data/aiPocs.js`
- `src/components/ProjectCard.jsx`
- `src/components/ProjectDetailModal.jsx`
- `src/styles/global.css`

## User-Facing Behaviour

Visitors see a grid of AI POC cards and can open detail modals with images, full descriptions, and optional external links.

## Layout Rules

- Uses `.simple-grid`.
- Cards use shared `ProjectCard`.

## Reusable Components

- Must use `ProjectCard`.
- Must use `ProjectDetailModal`.

## Data Rules

- Data source is `aiPocs`.
- Expected fields include `id`, `title`, `description`, optional `summary`, image fields, and optional `links`.
- Card may show shorter `summary`; modal keeps full `description`.

## Image Rules

- AI POC cards currently use shared project card image behaviour.
- Detail images use `ProjectDetailModal` image handling.

## Styling Rules

- Keep AI POCs visually consistent with the portfolio.
- Do not let AI POCs dominate the Home page identity.

## Accessibility Rules

- Cards must be keyboard accessible.
- External links open in new tabs with safe rel attributes.

## Known Gaps / Defects

- Missing AI POC screenshots remain blocked.
- Some external AI POC links need manual confirmation.

## Change Rules

- Do not create one-off AI POC cards.
- Update `aiPocs.js` for content changes.

## Test Expectations

- Open each POC, test modal navigation, verify links render when present.
