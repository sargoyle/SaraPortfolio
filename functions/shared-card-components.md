# Shared Card Components

## Purpose

Reusable card patterns for project and photo listings.

## Source Files

- `src/components/ProjectCard.jsx`
- `src/components/CrafterDarkCard.jsx`
- `src/components/PhotoCard.jsx`
- `src/pages/CrafterDark.jsx`
- `src/pages/AiPocs.jsx`
- `src/pages/Photography.jsx`
- `src/styles/global.css`

## User-Facing Behaviour

Cards present portfolio items as clickable/focusable tiles that open modals or viewers.

## Layout Rules

- Project cards use `.project-item.card-button`.
- Photo cards use `.photo-card.card-button`.
- Crafter Dark cards use `CrafterDarkCard`.

## Reusable Components

- `ProjectCard` for project-like content.
- `CrafterDarkCard` for Crafter Dark list items.
- `PhotoCard` for photography.
- Preferred future component: `GalleryImageCard`.

## Data Rules

- `ProjectCard` expects `project.title`, image fields, optional `category`, `size`, `summary`, and `description`.
- `PhotoCard` expects `photo.title`, `photo.src`, and optional `photo.alt`.

## Image Rules

- Card image behaviour must come from documented shared classes or components.
- Crafter Dark thumbnail rules are special and documented separately.

## Styling Rules

- Avoid one-off card markup.
- Cards should keep consistent spacing, border radius, typography, hover, and focus behaviour.

## Accessibility Rules

- Cards are buttons.
- Button labels or inner text must identify what opens.
- Focus states must remain visible.

## Known Gaps / Defects

- No dedicated `GalleryImageCard` component exists yet.

## Change Rules

- Do not duplicate card templates in page files.
- If shared `ProjectCard` changes, test AI POCs.
- If `CrafterDarkCard` changes, test Crafter Dark filters, thumbnails, and detail modal opening.

## Test Expectations

- Test click and keyboard activation for ProjectCard and PhotoCard.
- Verify hover/focus styles remain usable.
