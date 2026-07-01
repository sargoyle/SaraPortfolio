# Crafter Dark Detail View

## Purpose

Displays selected cross-stitch projects in a fullscreen detail modal.

## Source Files

- `src/components/ProjectDetailModal.jsx`
- `src/components/ModalShell.jsx`
- `src/pages/CrafterDark.jsx`
- `src/data/crafterProjects.js`
- `src/styles/global.css`

## User-Facing Behaviour

Visitors see the project title, structured metadata, one or more images, and description. Previous/next controls move through the filtered project set.

## Layout Rules

- Two detail images use `.project-images` on desktop.
- Images stack on mobile.
- Detail content appears inside `.fullscreen-project`.

## Reusable Components

- Must use `ProjectDetailModal`.
- Must use `ModalShell`.
- Uses `ImageWithFallback`.

## Data Rules

- Images come from `images` when present, otherwise `image1`, `image2`, and `image`.
- Detail metadata must be generated from the same source data fields as the list card to prevent mismatched values.
- Category, size for 18 count, chart size, and number of colours are displayed as structured metadata.
- `sizeFor18Count`, `chartSize`, and `numberOfColours` are preferred over the legacy `size` string.
- Description displays from the project `description` field.

## Image Rules

- Detail images may use a different layout from list thumbnails.
- Generated/pattern image and stitched/preview image should be consistently sized.
- Current Crafter detail images use square `.project-image-container` panels with contained images.
- List thumbnail rules must not affect detail images unless intentionally shared.

## Styling Rules

- Preserve fullscreen glass panel, purple glow, and dark image backgrounds.

## Accessibility Rules

- Modal has `role="dialog"` and `aria-modal="true"`.
- Close button must have an aria label.
- Arrow navigation must work by keyboard and buttons.

## Known Gaps / Defects

- Some detail images are placeholders because final stitched images are in progress.

## Change Rules

- Do not apply Crafter list thumbnail classes inside the modal.
- Update this file if modal layout or image sizing changes.

## Test Expectations

- Open several Crafter Dark projects.
- Confirm detail view shows category, size for 18 count, chart size, colour count, and updated short description.
- Confirm detail view does not show stale `Pattern size varies` when structured metadata exists.
- Test Escape, outside click, previous/next buttons, ArrowLeft, and ArrowRight.
- Confirm images remain contained and square on desktop/mobile.
- Manual metadata checks should include Adam Ant Logo, Alien 3 Sulaco Egg, Blue Digital Bloom, Caligari Hallway, Fallout Pip-boy 3000, Hardware, Mr Handy Fudge, Purple Digital Bloom, Raven Film Strip, Solar Swirl, and Vortex.
