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

Visitors see one card per project with a square thumbnail, title, structured metadata, and truncated description. Clicking a card opens its detail modal.

## Layout Rules

- Every item must use the same `CrafterDarkCard` template.
- No item should use custom card markup.
- Grid uses `.simple-grid`.

## Reusable Components

- Current implementation uses `CrafterDarkCard`.
- Crafter thumbnails use `SquareImageFrame`.
- Thumbnail CSS uses `.square-image-frame` and `.square-image-frame-image`.
- `SquareImageFrame` renders a stable `div.square-image-frame > img.square-image-frame-image` DOM structure.

## Implementation Audit

Current implementation:

- `src/pages/CrafterDark.jsx` maps every filtered project to `CrafterDarkCard`.
- `CrafterDarkCard` exists and is dedicated to Crafter Dark list items.
- `ProjectCard` is shared with other pages and is not used by Crafter Dark.
- `CrafterDarkCard` passes `project.image1 || project.image` to `SquareImageFrame`.
- `.project-card-image-container` and `.project-card-image` still exist for shared `ProjectCard`, but they do not control Crafter Dark thumbnails.
- `ImageWithFallback` is intentionally not used inside `SquareImageFrame` because fallback wrappers can change thumbnail DOM structure.

Target implementation:

- Every Crafter Dark listing card uses `CrafterDarkCard`.
- Every Crafter Dark thumbnail uses `SquareImageFrame`.
- The frame, not the image, controls the square shape and visible border.
- The image remains fully visible inside the square frame.
- `.square-image-frame::after` is the single visible thumbnail border overlay.

Gap:

- Closed for component usage: Crafter Dark no longer relies on `ProjectCard`.
- Remaining gap: visual consistency is manually checked; no automated visual regression check exists yet.

## Required Component Contract

Crafter Dark listing view must use:

- `CrafterDarkCard`
- `SquareImageFrame`

Page usage:

```jsx
<CrafterDarkCard project={project} onOpen={setActiveProject} />
```

Inside `CrafterDarkCard`:

```jsx
<button type="button" className="crafter-dark-card card-button">
  <SquareImageFrame src={thumbnailSrc} alt={`${project.title} preview`} />
  <span className="crafter-dark-card-content">
    ...
  </span>
</button>
```

The card is a button rather than an article so click and keyboard activation share the same accessible control.

## Data Rules

- Card image source is `project.image1 || project.image`.
- Titles display visually.
- Category, size for 18 count, chart size, and number of colours display in the card meta.
- Crafter Dark list cards must use structured metadata fields rather than embedding all metadata into one combined text string.
- Descriptions are line-clamped by shared card styles.

## Image Rules

- Thumbnail frame must be one square `.square-image-frame` container.
- The thumbnail border belongs only to `.square-image-frame::after`.
- `.square-image-frame::after` must be used as the single visible border overlay for all Crafter Dark thumbnails.
- `.square-image-frame` must include a consistent inner inset/padding so images cannot visually touch or hide the frame border.
- Images use `.square-image-frame-image`.
- Images must be contained inside an inset content area, leaving a consistent visible frame/border gap on all four sides.
- Images must not be stretched.
- Do not apply borders to the image.
- Do not apply borders directly to `.square-image-frame`; the pseudo-element owns the visible border.
- Do not use extra nested thumbnail wrappers.
- Do not use `object-fit: cover` for Crafter Dark thumbnails.
- Do not set Crafter Dark thumbnail images to `width: 100%; height: 100%`.
- Tall, wide, square, black-background, white-background, transparent, and pixel-art images must use the same frame treatment.
- `SquareImageFrame` must render a stable DOM structure. It must not allow `ImageWithFallback` or any fallback wrapper to change the layout, border, image sizing, or frame dimensions.

## Explicit Anti-Rules

- Do not use shared `ProjectCard` for Crafter Dark if it cannot guarantee this thumbnail behaviour.
- Do not apply borders directly to `<img>`.
- Do not use `object-fit: cover`.
- Do not use different thumbnail markup for different projects.
- Do not rely on image background colour or dimensions to make the border visible.
- Do not create one-off fixes for individual cards.

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
- Confirm there is a visible inset between the image and frame border on the top, right, bottom, and left.
- Confirm list cards show category, 18 count size, chart size, colour count, and short description when present.
- Confirm no list card shows stale `Pattern size varies` when structured metadata exists.
- Confirm text below cards remains aligned.
- For multiple cards, inspect the rendered DOM and confirm the thumbnail structure and computed image/frame styles are identical.
- Manual metadata checks should include Adam Ant Logo, Alien 3 Sulaco Egg, Blue Digital Bloom, Caligari Hallway, Fallout Pip-boy 3000, Hardware, Mr Handy Fudge, Purple Digital Bloom, Raven Film Strip, Solar Swirl, and Vortex.
