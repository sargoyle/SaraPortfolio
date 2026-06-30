# AI POCs Detail View

## Purpose

Fullscreen detail modal for AI POC projects.

## Source Files

- `src/components/ProjectDetailModal.jsx`
- `src/components/ModalShell.jsx`
- `src/pages/AiPocs.jsx`
- `src/data/aiPocs.js`

## User-Facing Behaviour

Visitors see the project title, optional subtitle/category meta, optional external links, one or more images, and full description.

## Layout Rules

- Uses the same `ProjectDetailModal` component as Crafter Dark.
- Single-image POCs use `.poc-image-container`.
- Multiple-image POCs use `.project-images`.

## Reusable Components

- Must use `ProjectDetailModal`.
- Must use `ModalShell`.

## Data Rules

- Links use `{ label, url }`.
- Images can be `images`, `image1`, `image2`, or `image`.

## Image Rules

- Images should be contained, not distorted.
- Missing images must show fallbacks.

## Styling Rules

- Keep dark fullscreen modal styling.

## Accessibility Rules

- Modal keyboard rules are inherited from `ModalShell`.
- External links need clear labels.

## Known Gaps / Defects

- External links require manual verification where automated checks are blocked.

## Change Rules

- If changing shared modal behaviour, check Crafter Dark and AI POCs together.

## Test Expectations

- Test modal close, previous/next, Escape, arrow keys, and external links.
