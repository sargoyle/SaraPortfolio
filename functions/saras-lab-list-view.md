# Sara's Lab List View

## Purpose

Displays Sara's Lab projects as a structured gallery of creative systems, tools, type experiments, games, and prototypes.

## Source Files

- `src/pages/Games.jsx`
- `src/components/LabProjectCard.jsx`
- `src/data/labProjects.js`
- `src/styles/global.css`

## User-Facing Behaviour

Visitors see seven image-led project cards. Activating a card opens the project detail modal.

## Layout Rules

- Use `.lab-project-grid`.
- Cards must render in `order` from `labProjects`.
- Do not sort alphabetically.
- Cards should show type, title, status, short description, and action button.
- Cards should use a controlled media area and balanced spacing.

## Reusable Components

- Every list item must use `LabProjectCard`.

## Data Rules

- Cards use `title`, `type`, `status`, `cardDescription`, `image`, `imageAlt`, `link`, `cardActionLabel`, `actionLabel`, `mediaFit`, and `mediaPosition`.
- Button text uses `cardActionLabel` when present, then `actionLabel`, then `Open project` when a link exists, otherwise `View details`.

## Image Rules

- Use the project image when available.
- Apply `mediaFit` and `mediaPosition` to prevent awkward cropping.
- Default Lab card images should use `contain` so app screenshots, logo banners, and box art display consistently without being cut off.
- Lab card image elements should fill the media frame with `object-fit: contain`, so tall or wide images scale down inside the frame instead of cropping or overflowing.
- Use a styled title placeholder when image is empty or unavailable.
- Missing images must render a polished placeholder, not a blank block.

## Styling Rules

- Use dark glass cards, purple accents, and readable text hierarchy.
- Do not reuse AI POC card styling if it makes the section feel generic.
- Card media should look intentional and project-led.

## Accessibility Rules

- Cards are keyboard-accessible buttons.
- Card buttons must have useful aria labels.

## Known Gaps / Defects

- Some final project images/screenshots are still pending.

## Change Rules

- Do not create one-off card markup for individual projects.
- Keep card content concise.

## Test Expectations

- Exactly seven cards render.
- Card order is Alphabet Stitch, Batcave Font, Xanadu: The 9 Muses, The Door List, Tucked Away, Meeting Bingo, Commonwealth After Dark.
- Each card shows title, type, status, short description, and action text.
- Meeting Bingo shows Work in Progress status, the supplied interface image, and `View Details` action text.
- Commonwealth After Dark shows Passion Project status, the first Fallout screenshot, and `View Details` action text without adding a card-level external link.
- Missing image projects show a styled placeholder.
- Xanadu placeholder does not look broken.
- Card media looks intentional on desktop, tablet, and mobile.
