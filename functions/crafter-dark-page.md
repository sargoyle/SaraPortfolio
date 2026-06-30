# Crafter Dark Page

## Purpose

Main page for Sara's cross-stitch pattern work.

## Source Files

- `src/pages/CrafterDark.jsx`
- `src/data/crafterProjects.js`
- `src/components/FilterBar.jsx`
- `src/components/ProjectCard.jsx`
- `src/components/ProjectDetailModal.jsx`
- `src/styles/global.css`

## User-Facing Behaviour

Visitors can browse cross-stitch pattern cards, filter by category, and open a fullscreen project detail view.

## Layout Rules

- Page uses `.page crafter-page`.
- Cards render inside `.simple-grid`.
- Filters appear above the grid.

## Reusable Components

- Must use `FilterBar`.
- Must use `CrafterDarkCard` for listing cards.
- Must use `ProjectDetailModal` for item detail.

## Data Rules

- Data source is `crafterProjects`.
- Required fields: `id`, `title`, `category`, `description`.
- Image fields are `image1`, `image2`, or `images`.
- Size should be shown when available.
- Current filters: `All`, `When Stitches Kaleid`, `Pop Culture Inspired`.

## Image Rules

- List thumbnails follow `crafter-dark-list-view.md`.
- Detail images follow `crafter-dark-detail-view.md`.
- Do not let list thumbnail CSS alter detail modal image layout.

## Styling Rules

- Preserve dark gothic, purple glassmorphism portfolio styling.

## Accessibility Rules

- Filter buttons must expose pressed state.
- Project cards must remain keyboard-focusable buttons.
- Modal must close by Escape and navigation events.

## Known Gaps / Defects

- Missing Fallout Timeline assets remain blocked.
- Some pattern sizes still need source confirmation.

## Change Rules

- Update this file and relevant list/detail function file when changing Crafter Dark behaviour.
- Do not create custom markup for individual projects.

## Test Expectations

- Test all filters.
- Open several projects.
- Test Escape, previous/next buttons, arrow keys, and click outside.
