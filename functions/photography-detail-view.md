# Photography Detail View

## Purpose

Fullscreen viewer for selected photography images.

## Source Files

- `src/components/FullscreenImageModal.jsx`
- `src/components/ModalShell.jsx`
- `src/pages/Photography.jsx`
- `src/styles/global.css`

## User-Facing Behaviour

Visitors see the selected image fullscreen with close and previous/next controls. Generic photo titles are not visually displayed.

## Layout Rules

- Viewer sits below the fixed nav.
- Image uses available viewport height without going under the nav.

## Reusable Components

- Must use `FullscreenImageModal`.
- Must use `ModalShell`.
- Must use `ImageWithFallback`.

## Data Rules

- Photo title remains available for modal `aria-label`, fallback text, and alt fallback.

## Image Rules

- Fullscreen image uses `object-fit: contain`.
- Do not display generic titles like "Abstract Macro 1" visually.

## Styling Rules

- Preserve fullscreen overlay and dark background.

## Accessibility Rules

- Modal must close on Escape.
- Previous/next controls need aria labels.
- Focus should restore after close.

## Known Gaps / Defects

No known gaps currently documented.

## Change Rules

- Do not add visible generic titles back into this view.

## Test Expectations

- Open a photo, use previous/next buttons, ArrowLeft/ArrowRight, Escape, and nav click close.
