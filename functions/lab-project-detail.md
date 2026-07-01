# Lab Project Detail

## Purpose

Reusable detail body for Sara's Lab project modals.

## Source Files

- `src/components/LabProjectDetail.jsx`
- `src/components/LabProjectDetailModal.jsx`
- `src/data/labProjects.js`
- `src/styles/global.css`

## User-Facing Behaviour

Shows a richer project note with metadata, visual, blurb, previous/next controls, and optional external link.

## Layout Rules

- Header appears first.
- Desktop uses a clear project showcase layout with text/actions and media side by side where space allows.
- Mobile stacks content cleanly.
- Do not show a visible Focus section.

## Reusable Components

- Uses `ImageWithFallback`.
- Wrapped by `LabProjectDetailModal`.

## Data Rules

- Reads all relevant fields from the selected `labProjects` item.
- `focus` must be an array.
- `focus` is data-only for now and is not displayed.

## Image Rules

- Supports one main image now and can support screenshots later if extended.
- Empty image uses a styled title placeholder.
- Uses `detailMediaFit` and `detailMediaPosition` for controlled media display.

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
- Focus tags are not visibly rendered.
- External link only appears for Alphabet Stitch.
- Previous and next buttons move between projects.
