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
- Close button belongs visually to the modal panel and should not sit at the far viewport edge.
- Sara's Lab positions the close button just outside the modal panel so it does not sit over the project card content.
- Modal controls should not be hidden behind or visually detached from the panel.

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
- Modal panel should feel connected to the current page via dimmed/blurred background.

## Accessibility Rules

- Use `role="dialog"` and `aria-modal="true"`.
- Close button needs accessible label.
- Close button icon must be visually centred inside the circular button.
- Close button placement should be consistent across detail views.
- Escape closes.
- ArrowLeft/ArrowRight navigate when handlers exist.
- Focus should restore to previous active element after close.

## Known Gaps / Defects

- Full keyboard-only QA remains incomplete in `docs/tasks.md`.

## Change Rules

- If `ModalShell` changes, test Photography, Crafter Dark, and AI POCs.

## Test Expectations

- Test Escape, click outside, close button, previous/next buttons, arrow keys, nav click close, and close button alignment for Photography, Crafter Dark, AI POCs, and Sara's Lab.
