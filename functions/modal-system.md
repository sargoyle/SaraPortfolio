# Modal System

## Purpose

Shared fullscreen modal behaviour for project details and photography viewer.

## Source Files

- `src/components/ModalShell.jsx`
- `src/components/ProjectDetailModal.jsx`
- `src/components/FullscreenImageModal.jsx`
- `src/App.jsx`
- `src/styles/global.css`

## User-Facing Behaviour

Modals open over the current page, can be closed, and support previous/next navigation where provided.

## Layout Rules

- Overlay uses `.fullscreen-overlay`.
- Content uses `.fullscreen-content`.
- Photography uses `variant="photo"`.

## Reusable Components

- `ModalShell` is the shared modal shell.
- `ProjectDetailModal` and `FullscreenImageModal` provide content-specific bodies.

## Data Rules

- Modal title is used as `aria-label`.
- Project images come from `images`, `image1`, `image2`, or `image`.

## Image Rules

- Photography fullscreen images use `.fullscreen-image`.
- Project details use `.project-image-container` and `.project-image` / `.poc-image`.

## Styling Rules

- Preserve dark overlay, glass panel, and purple glow.
- Modal should sit below fixed nav where applicable.

## Accessibility Rules

- Use `role="dialog"` and `aria-modal="true"`.
- Close button needs accessible label.
- Escape closes.
- ArrowLeft/ArrowRight navigate when handlers exist.
- Focus should restore to previous active element after close.

## Known Gaps / Defects

- Full keyboard-only QA remains incomplete in `docs/tasks.md`.

## Change Rules

- If `ModalShell` changes, test Photography, Crafter Dark, and AI POCs.

## Test Expectations

- Test Escape, click outside, close button, previous/next buttons, arrow keys, and nav click close.
