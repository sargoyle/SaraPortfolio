# Lab Project Detail

## Purpose

Reusable detail body for Sara's Lab project modals.

## Source Files

- `src/components/LabProjectDetail.jsx`
- `src/components/LabProjectDetailModal.jsx`
- `src/data/labProjects.js`
- `src/styles/global.css`

## User-Facing Behaviour

Shows a richer project note with metadata, visual, blurb, shared fullscreen previous/next arrow controls, optional internal or external link, optional downloadable asset, and optional non-interactive status action.

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
- External project links open in a new tab with `rel="noopener noreferrer"`.
- Downloadable assets use `download` and `downloadLabel`; render as a normal anchor with the `download` attribute.
- Projects without links or downloads may show `actionLabel` as a static, non-clicking status-style control.

## Image Rules

- Supports one main image by default.
- Supports optional `gallery` arrays for multi-image project detail views.
- Gallery items require `src` and `alt`, and may include `title` and `caption`.
- Multi-image projects show one active image, captions for the selected image, and compact thumbnail selectors.
- Single-image projects must not show thumbnails or empty caption areas.
- Empty image uses a styled title placeholder.
- Uses `detailMediaFit` and `detailMediaPosition` for controlled media display.

## Styling Rules

- Keep tone and presentation creative, concise, and personal.

## Accessibility Rules

- Placeholder image has a useful accessible label.
- Project link is omitted when unavailable.
- Download link is omitted when unavailable.

## Known Gaps / Defects

No known gaps currently documented.

## Change Rules

- Keep gallery behaviour data-driven; do not hard-code a gallery for one project.

## Test Expectations

- Detail body renders correctly for all seven current projects.
- Focus tags are not visibly rendered.
- External link appears for Alphabet Stitch.
- Internal `/tucked-away` link appears for Tucked Away.
- Download link appears for Batcave Font.
- External link appears for Meeting Bingo as `Play Meeting Bingo`.
- Commonwealth After Dark renders three gallery images, thumbnail selection, image titles/captions, and a static `Passion Project` action.
- Shared previous/next arrow controls and ArrowLeft/ArrowRight move between projects.
