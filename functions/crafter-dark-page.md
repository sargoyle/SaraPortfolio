# Crafter Dark Page

## Purpose

Main page for Sara's cross-stitch pattern work.

## Source Files

- `src/pages/CrafterDark.jsx`
- `src/data/crafterProjects.js`
- `src/components/FilterBar.jsx`
- `src/components/CrafterDarkCard.jsx`
- `src/components/SquareImageFrame.jsx`
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
- `CrafterDarkCard` must use `SquareImageFrame` for every list thumbnail.
- Must use `ProjectDetailModal` for item detail.
- `ProjectCard` is shared elsewhere and must not be used for Crafter Dark listing cards unless it can guarantee the Crafter Dark thumbnail contract.

## Implementation Audit

Current implementation:

- `src/pages/CrafterDark.jsx` renders listing cards through `CrafterDarkCard`.
- `CrafterDarkCard` exists and renders each project as a keyboard-focusable button.
- `CrafterDarkCard` uses `SquareImageFrame` for the thumbnail image.
- `ProjectCard` is still a shared component for other project-style pages, including AI POCs, but is not used by Crafter Dark.
- Crafter Dark list thumbnail layout is controlled by `.square-image-frame`, `.square-image-frame::after`, and `.square-image-frame-image`.
- Shared detail modal image layout remains controlled by `.project-image-container`, `.project-image`, and Crafter detail overrides under `.crafter-page`.

Target implementation:

- Crafter Dark list cards must render through `CrafterDarkCard`.
- Every Crafter Dark thumbnail must render through `SquareImageFrame`.
- No Crafter Dark item should have one-off card or image markup.
- The square frame owns the border, aspect ratio, background, and overflow.
- The image must be contained inside the frame without cropping or stretching.

Gap:

- Closed for the listing-card refactor: source and function documentation now agree on `CrafterDarkCard` plus `SquareImageFrame`.
- Remaining gap: no automated visual regression check exists for Crafter Dark thumbnail consistency.

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
- No automated visual regression check exists for listing thumbnail consistency.

## Change Rules

- Update this file and relevant list/detail function file when changing Crafter Dark behaviour.
- Do not create custom markup for individual projects.

## Test Expectations

- Test all filters.
- Open several projects.
- Test Escape, previous/next buttons, arrow keys, and click outside.
