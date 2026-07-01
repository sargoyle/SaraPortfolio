# Sara's Lab List View

## Purpose

Displays Sara's Lab projects as a structured gallery of creative systems, tools, type experiments, games, and prototypes.

## Source Files

- `src/pages/Games.jsx`
- `src/components/LabProjectCard.jsx`
- `src/data/labProjects.js`
- `src/styles/global.css`

## User-Facing Behaviour

Visitors see four image-led project cards. Activating a card opens the project detail modal.

## Layout Rules

- Use `.lab-project-grid`.
- Cards must render in `order` from `labProjects`.
- Do not sort alphabetically.

## Reusable Components

- Every list item must use `LabProjectCard`.

## Data Rules

- Cards use `title`, `type`, `status`, `cardDescription`, `image`, and `link`.
- Button text is `Open project details` when a link exists, otherwise `View details`.

## Image Rules

- Use the project image when available.
- Use a styled title placeholder when image is empty or unavailable.

## Styling Rules

- Use dark glass cards, purple accents, and readable text hierarchy.
- Do not reuse AI POC card styling if it makes the section feel generic.

## Accessibility Rules

- Cards are keyboard-accessible buttons.
- Card buttons must have useful aria labels.

## Known Gaps / Defects

- Some final project images/screenshots are still pending.

## Change Rules

- Do not create one-off card markup for individual projects.
- Keep card content concise.

## Test Expectations

- Exactly four cards render.
- Card order is Alphabet Stitch, Batcave Font, Xanadu: The 9 Muses, The Door List.
- Each card shows title, type, status, short description, and action text.
- Missing image projects show a styled placeholder.
