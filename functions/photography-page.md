# Photography Page

## Purpose

Visual gallery for Sara's photography and kaleidoscopic visual studies.

## Source Files

- `src/pages/Photography.jsx`
- `src/data/photos.js`
- `src/components/FilterBar.jsx`
- `src/components/PhotoCard.jsx`
- `src/components/FullscreenImageModal.jsx`
- `src/styles/global.css`

## User-Facing Behaviour

Visitors can filter the gallery and open images in a fullscreen viewer.

## Layout Rules

- Page uses `.page photo-page`.
- Gallery uses `.simple-grid photo-grid`.
- Filters appear above the grid.

## Reusable Components

- Must use `FilterBar`.
- Must use `PhotoCard`.
- Must use `FullscreenImageModal`.

## Data Rules

- Data source is `photos`.
- Required fields: `id`, `title`, `category`, `src`.
- Optional field: `alt`.
- Current filters: `All`, `Abstract Macro`, `When visions kaleid`.

## Image Rules

- List view follows `photography-list-view.md`.
- Detail view follows `photography-detail-view.md`.

## Styling Rules

- Preserve dark gallery styling and image-led presentation.

## Accessibility Rules

- Photo cards need accessible labels.
- Images need useful alt text.

## Known Gaps / Defects

No known gaps currently documented.

## Change Rules

- Do not reintroduce visible generic photo titles in the grid.
- Update this file if filter categories or gallery behaviour changes.

## Test Expectations

- Test filters and counts.
- Open images and navigate through filtered results.
