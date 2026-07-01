# Lab Project Detail

## Purpose

Reusable detail body for Sara's Lab project modals.

## Source Files

- `src/components/LabProjectDetail.jsx`
- `src/components/LabProjectDetailModal.jsx`
- `src/data/labProjects.js`
- `src/styles/global.css`

## User-Facing Behaviour

Shows a richer project note with metadata, visual, blurb, focus areas, and optional external link.

## Layout Rules

- Header appears first.
- Media appears before body text.
- Focus areas render as compact tags.

## Reusable Components

- Uses `ImageWithFallback`.
- Wrapped by `LabProjectDetailModal`.

## Data Rules

- Reads all relevant fields from the selected `labProjects` item.
- `focus` must be an array.

## Image Rules

- Supports one main image now and can support screenshots later if extended.
- Empty image uses a styled title placeholder.

## Styling Rules

- Keep tone and presentation creative, concise, and personal.

## Accessibility Rules

- Placeholder image has a useful accessible label.
- External link is omitted when unavailable.

## Known Gaps / Defects

- Multiple screenshots are not yet modeled.

## Change Rules

- If multiple screenshots are added, update this doc and the data model.

## Test Expectations

- Detail body renders correctly for all four current projects.
- Focus tags render for every project.
- External link only appears for Alphabet Stitch.
