# Sara's Lab Page

## Purpose

Sara's Lab is for games, the future Batcave Font, creative tools, prototypes, and selected experimental work.

## Source Files

- `src/pages/Games.jsx`
- `src/data/games.js`
- `src/components/ImageWithFallback.jsx`
- `src/styles/global.css`

## User-Facing Behaviour

Currently shows game/project content for `9 Sisters - Xanadu` with images and description.

## Layout Rules

- Page heading is `Sara's Lab`.
- Current content uses `.game-content` and `.project-images`.
- Future major items should eventually have cards and/or detail views.

## Reusable Components

- Uses `ImageWithFallback`.
- Preferred future components: `ProjectCard`, `DetailImagePair`, or a dedicated Lab card/detail component.

## Data Rules

- Data source is `games`.
- Current fields include `id`, `title`, `subtitle`, `image1`, `image2`, and `description`.

## Image Rules

- Current images use shared project image containers.
- Missing game assets may show fallbacks.

## Styling Rules

- Do not let Sara's Lab become a dumping ground for weak AI POCs.
- Game projects should be presented as case studies where possible.

## Accessibility Rules

- Images need useful alt text.
- Future cards/details must remain keyboard accessible.

## Known Gaps / Defects

- Missing Games images are still blocked.
- Sara's Lab does not yet have a card grid or detail modal pattern.
- Batcave Font project card has not been added.

## Change Rules

- Keep the nav/page label aligned with current decision: `Sara's Lab`.
- Add new Lab items through data and reusable components.

## Test Expectations

- Verify page heading, image fallbacks, and description layout on desktop/mobile.
