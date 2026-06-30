# Crafter Dark List View

## Purpose

Displays cross-stitch pattern cards in the grouped/listing grid.

## Source Files

- `src/pages/CrafterDark.jsx`
- `src/components/CrafterDarkCard.jsx`
- `src/components/SquareImageFrame.jsx`
- `src/data/crafterProjects.js`
- `src/styles/global.css`

## User-Facing Behaviour

Visitors see one card per project with a square thumbnail, title, category/size meta, and truncated description. Clicking a card opens its detail modal.

## Layout Rules

- Every item must use the same `CrafterDarkCard` template.
- No item should use custom card markup.
- Grid uses `.simple-grid`.

## Reusable Components

- Current implementation uses `CrafterDarkCard`.
- Crafter thumbnails use `SquareImageFrame`.
- Thumbnail CSS uses `.square-image-frame` and `.square-image-frame-image`.

## Data Rules

- Card image source is `project.image1 || project.image`.
- Titles display visually.
- Category and size display in the card meta.
- Descriptions are line-clamped by shared card styles.

## Image Rules

- Thumbnail frame must be one square `.square-image-frame` container.
- The thumbnail border belongs only to `.square-image-frame`.
- Images use `.square-image-frame-image`.
- Images must be contained, not cropped.
- Images must not be stretched.
- Do not apply borders to the image.
- Do not use extra nested thumbnail wrappers.
- Do not use `object-fit: cover` for Crafter Dark thumbnails.

## Styling Rules

- Thumbnail CSS must stay scoped to `.square-image-frame` and its child classes.
- Keep existing card spacing, text hierarchy, glass background, hover/focus behaviour.
- Do not add image-specific styling by project title, category, orientation, or file type.

## Accessibility Rules

- Cards are buttons and must remain keyboard accessible.
- Thumbnail alt text should use project title plus preview context.
- Fallback placeholder must have an accessible image label.

## Known Gaps / Defects

- No automated visual regression check exists for thumbnail consistency.

## Change Rules

- Do not create one-off card or image markup for any Crafter Dark item.
- If thumbnail behaviour changes, update all documentation and run the named-card checks.
- Keep Crafter Dark list cards on `CrafterDarkCard` and `SquareImageFrame`.

## Test Expectations

- Verify Cooper Eyes, Grey, Xeno, Moth Man, Gecko, Adam Ant Logo, Limbo Graveyard, Predator 2, Twin Peaks Owl, Fallout Pip-Boy Grid, Twin Peaks Socket, X-Files Aliens, HAL 9000, and Mr Handy Fudge.
- Confirm each has exactly one `.square-image-frame`.
- Confirm image fits inside the square and has no image border.
- Confirm text below cards remains aligned.
