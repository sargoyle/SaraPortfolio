# Photography List View

## Purpose

Displays photography as a visual grid.

## Source Files

- `src/components/PhotoCard.jsx`
- `src/pages/Photography.jsx`
- `src/data/photos.js`
- `src/styles/global.css`

## User-Facing Behaviour

Visitors see image tiles only; generic titles like "Abstract Macro 1" are not displayed visually.

## Layout Rules

- Photo cards are square.
- Grid uses `.photo-grid`.
- Cards should remain image-led and uncluttered.

## Reusable Components

- Must use `PhotoCard`.
- Must use `ImageWithFallback`.

## Data Rules

- Titles remain in data for accessible labels and internal navigation.
- Categories drive filters.

## Image Rules

- Photo grid images use `object-fit: cover`.
- This cropping is intentional for the gallery.
- Do not apply Crafter Dark thumbnail rules here.

## Styling Rules

- Keep hover/focus states consistent with card buttons.

## Accessibility Rules

- Button `aria-label` should identify the opened photo.
- Image `alt` should use `photo.alt` or title fallback.

## Known Gaps / Defects

No known gaps currently documented.

## Change Rules

- Do not display generic titles visually unless Sara explicitly requests captions.

## Test Expectations

- Check grid at desktop and mobile sizes.
- Confirm no visible titles render in cards.
