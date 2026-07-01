# Sara's Lab Page

## Purpose

Sara's Lab is the portfolio home and project showcase for creative systems, tools, type experiments, games, and prototypes that sit behind the finished work.

## Source Files

- `src/pages/Games.jsx`
- `src/data/labProjects.js`
- `src/components/LabProjectCard.jsx`
- `src/components/LabProjectDetailModal.jsx`
- `src/components/LabProjectDetail.jsx`
- `src/components/ModalShell.jsx`
- `src/styles/global.css`

## User-Facing Behaviour

Visitors see a four-project gallery and can open each project in a detail modal. Alphabet Stitch includes an external project link inside its detail view.

## Layout Rules

- Page heading is `Sara's Lab`.
- Page intro explains that the section holds systems, creative tools, type experiments, games, and prototypes.
- Intro copy should use an intentional readable width and should not wrap awkwardly on desktop.
- Projects display in manual `order`, not alphabetical order.
- Current order is:
  1. Alphabet Stitch
  2. Batcave Font
  3. Xanadu: The 9 Muses
  4. The Door List

## Reusable Components

- List items use `LabProjectCard`.
- Detail views use `LabProjectDetailModal` and `LabProjectDetail`.
- Modal behaviour comes from `ModalShell`.

## Data Rules

- Data source is `labProjects`.
- Required fields are `id`, `title`, `type`, `status`, `link`, `subtitle`, `cardDescription`, `blurb`, `focus`, `image`, and `order`.
- Do not add weak or unrelated AI POCs to Sara's Lab; this section is for selected creative systems, tools, type experiments, games, and prototypes.

## Image Rules

- Cards and details use `project.image` when present.
- Project media may specify `mediaFit`, `mediaPosition`, `detailMediaFit`, and `detailMediaPosition`.
- If no image exists, render a styled placeholder with the project title.
- Do not show broken image icons or empty media blocks.

## Styling Rules

- Preserve the dark gothic portfolio styling with purple accents and glass cards.
- The section should feel creative and project-led, not corporate.
- The section should feel like a polished portfolio/product showcase, not a generic AI POC grid.

## Accessibility Rules

- Project cards must be keyboard-accessible buttons.
- Detail modal must close by Escape, outside click, close button, and site navigation.
- Detail modal supports previous/next navigation through buttons and arrow keys.
- External links must use `target="_blank"` and `rel="noreferrer"`.

## Known Gaps / Defects

- Xanadu currently uses a styled placeholder until final image assets are available.
- Final screenshots may still be needed for all Lab projects.

## Change Rules

- Add or reorder Lab projects through `src/data/labProjects.js`.
- Update list/detail function docs when changing Lab card or modal behaviour.

## Test Expectations

- Sara's Lab renders exactly four project cards.
- The old single Xanadu content is not rendered.
- Projects render in required manual order.
- Alphabet Stitch displays its external link in the detail view.
- Projects without links do not show broken external-link buttons.
- Clicking each project opens the detail view.
- Detail view displays title, type, status, subtitle, blurb, and image/preview.
- Detail view does not show a visible Focus section.
- Keyboard access works for opening, closing, and previous/next navigation in detail views.
- Mobile layout stacks cleanly.
