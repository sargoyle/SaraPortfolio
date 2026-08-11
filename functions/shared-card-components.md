# Shared Card Components

## Purpose

Reusable card patterns for active project, craft, and photo listings.

## Source Files

- `src/components/CrafterDarkCard.jsx`
- `src/components/PhotoCard.jsx`
- `src/components/LabProjectCard.jsx`
- `src/components/CraftCard.jsx`
- `src/pages/CrafterDark.jsx`
- `src/pages/Photography.jsx`
- `src/pages/Games.jsx`
- `src/pages/Crafts.jsx`
- `src/styles/global.css`
- `archive/ai-pocs/ProjectCard.jsx`

## User-Facing Behaviour

Cards present portfolio items as clickable/focusable tiles that open modals or viewers.

## Layout Rules

- Sara's Lab cards use `LabProjectCard`.
- Crafts cards use `CraftCard`.
- Photo cards use `.photo-card.card-button`.
- Crafter Dark cards use `CrafterDarkCard`.

## Reusable Components

- `CrafterDarkCard` for Crafter Dark list items.
- `PhotoCard` for photography.
- `LabProjectCard` for Sara's Lab project cards.
- `CraftCard` for craft entries without titles.
- Preferred future component: `GalleryImageCard`.
- Archived AI POC content retains its old `ProjectCard` in `archive/ai-pocs`, but that component is not part of the active site.

## Data Rules

- `PhotoCard` expects `photo.title`, `photo.src`, and optional `photo.alt`.
- `LabProjectCard` expects lab project title, type, status, description, and optional media fields.
- `CraftCard` expects craft type, description, images, and hero image selection. It must not require a title or name.

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
- Legacy Sara's Lab game data is archived at `archive/legacy-games/games.js`; active Sara's Lab cards use `src/data/labProjects.js`.

## Change Rules

- Do not duplicate card templates in page files.
- If `CrafterDarkCard` changes, test Crafter Dark filters, thumbnails, and detail modal opening.
- If `LabProjectCard` changes, test Sara's Lab cards and detail opening.

## Test Expectations

- Test click and keyboard activation for CrafterDarkCard, LabProjectCard, and PhotoCard.
- Verify hover/focus styles remain usable.
