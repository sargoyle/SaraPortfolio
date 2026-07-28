# Lab Project Detail

## Purpose

Reusable detail body for Sara's Lab project modals.

## Source Files

- `src/components/LabProjectDetail.jsx`
- `src/components/LabProjectDetailModal.jsx`
- `src/data/labProjects.js`
- `src/styles/global.css`

## User-Facing Behaviour

Shows a richer project note with metadata, visual, blurb, shared fullscreen previous/next arrow controls, optional internal or external link, and optional downloadable asset.

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
- Internal project links use same-tab anchors and may specify `linkLabel`.
- External project links open in a new tab with `rel="noreferrer"`.
- Downloadable assets use `download` and `downloadLabel`; render as a normal anchor with the `download` attribute.

## Image Rules

- Supports one main image now and can support screenshots later if extended.
- Empty image uses a styled title placeholder.
- Uses `detailMediaFit` and `detailMediaPosition` for controlled media display.

## Styling Rules

- Keep tone and presentation creative, concise, and personal.

## Accessibility Rules

- Placeholder image has a useful accessible label.
- Project link is omitted when unavailable.
- Download link is omitted when unavailable.

## Known Gaps / Defects

- Multiple screenshots are not yet modeled.

## Change Rules

- If multiple screenshots are added, update this doc and the data model.

## Test Expectations

- Detail body renders correctly for all five current projects.
- Focus tags are not visibly rendered.
- External link appears for Alphabet Stitch.
- Internal `/tucked-away` link appears for Tucked Away.
- Download link appears for Batcave Font.
- Shared previous/next arrow controls and ArrowLeft/ArrowRight move between projects.
