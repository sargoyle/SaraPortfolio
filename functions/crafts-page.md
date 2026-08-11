# Crafts Page

## Purpose

Reusable portfolio section for handmade craft pieces.

## Source Files

- `src/pages/Crafts.jsx`
- `src/data/crafts.js`
- `src/components/CraftCard.jsx`
- `src/components/CraftDetail.jsx`
- `src/components/CraftDetailModal.jsx`
- `src/styles/global.css`

## User-Facing Behaviour

Visitors see craft entries in a responsive card grid. Selecting `View Details` opens a modal detail view with craft type, description, and the supplied image gallery.

## Layout Rules

- Page heading is `Crafts`.
- Cards use the same dark glassmorphism portfolio treatment as the rest of the site.
- Cards do not render a title or reserve empty title space.
- Detail view uses the shared fullscreen modal pattern.
- One reusable detail component must adapt to one, two, or multiple images.
- Detail view is image-led: craft type and description sit in a compact header above the gallery.
- Detail view must not reserve a separate left text column.
- Visible per-image captions are not displayed in craft detail views; keep captions available in data only if useful for future use.

## Data Rules

- Craft entries do not have a required `title`, `name`, or equivalent field.
- `type` is the primary visible label.
- `description` is used on the card and detail view unless a future task deliberately adds separate summary fields.
- `heroImageId` selects the card/default detail image.
- Each image supports `id`, `src`, `alt`, and optional `caption`.

## Image Rules

- Public craft assets live under `/public/images/crafts`.
- Card images may crop intentionally for a cohesive grid.
- Detail images must preserve natural proportions with contained presentation.
- Detail images should use most of the modal width and constrain height with `max-height` so normal desktop entries fit without unnecessary internal scrolling.
- Gallery order must come from the data array, not upload order.

## Accessibility Rules

- Craft cards are buttons with meaningful accessible labels.
- Detail modals use shared dialog semantics.
- Gallery thumbnails expose selected state with `aria-pressed`.
- Images need useful alt text that describes the image rather than repeating captions.

## Test Expectations

- Confirm Crafts appears after Sara's Lab in primary navigation.
- Confirm the first craft entry has no visible title.
- Confirm the first craft gallery order is Monster, Cuttlefish, Bat.
- Confirm craft detail view shows type and description above the gallery.
- Confirm craft detail view does not show visible image captions.
- Confirm Escape closes the detail view.
- Confirm gallery thumbnails are keyboard reachable and selectable.
- Confirm card and detail images do not stretch on desktop, tablet, or mobile.
