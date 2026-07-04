# AI POCs Detail View

## Purpose

Archived fullscreen detail modal behaviour for former AI POC projects.

## Source Files

- `src/components/ProjectDetailModal.jsx`
- `src/components/ModalShell.jsx`
- `archive/ai-pocs/AiPocs.jsx`
- `archive/ai-pocs/aiPocs.js`

## User-Facing Behaviour

AI POC details are not shown in the active site. If restored, visitors should see the project title, optional subtitle/category meta, optional external links, one or more images, and full description.

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

- If changing shared modal behaviour, check active Crafter Dark and Photography behaviour first; archived AI POCs only need retesting if restored.

## Test Expectations

- Active-site checks should confirm archived AI POC detail code is not imported.
- If restored, test modal close, previous/next, Escape, arrow keys, and external links.
