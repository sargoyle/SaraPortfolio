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

Visitors see a seven-project gallery and can open each project in a detail modal. Alphabet Stitch includes an external project link inside its detail view. Batcave Font is marked Live and includes a downloadable font file. Tucked Away links from its detail view to the public product page at `/tucked-away`. Meeting Bingo links to its public web app from the detail view. Commonwealth After Dark appears last and uses a three-image detail gallery with a non-interactive Passion Project action.

## Layout Rules

- Page heading is `Sara's Lab`.
- Page intro explains that the section holds systems, creative tools, type experiments, games, and prototypes.
- Intro copy should use an intentional readable width and should not wrap awkwardly on desktop.
- Intro copy may use the available desktop width; it should only wrap when the viewport is small enough to require it.
- Projects display in manual `order`, not alphabetical order.
- Current order is:
  1. Alphabet Stitch
  2. Batcave Font
  3. Xanadu: The 9 Muses
  4. The Door List
  5. Tucked Away
  6. Meeting Bingo
  7. Commonwealth After Dark

## Reusable Components

- List items use `LabProjectCard`.
- Detail views use `LabProjectDetailModal` and `LabProjectDetail`.
- Modal behaviour comes from `ModalShell`.

## Data Rules

- Data source is `labProjects`.
- Required fields are `id`, `title`, `type`, `status`, `link`, `subtitle`, `cardDescription`, `blurb`, `focus`, `image`, and `order`.
- Optional custom card action labels use `actionLabel`.
- Optional image alt overrides use `imageAlt`.
- Optional multi-image detail galleries use `gallery` with `src`, `alt`, `title`, and `caption`.
- Optional downloadable assets use `download` and `downloadLabel`.
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
- External links must use `target="_blank"` and `rel="noopener noreferrer"`.
- Internal project links must stay same-tab and must not use `target="_blank"`.

## Known Gaps / Defects

No known gaps currently documented.

## Change Rules

- Add or reorder Lab projects through `src/data/labProjects.js`.
- Update list/detail function docs when changing Lab card or modal behaviour.

## Test Expectations

- Sara's Lab renders exactly seven project cards.
- The old single Xanadu content is not rendered.
- Projects render in required manual order.
- Alphabet Stitch displays its external link in the detail view.
- Batcave Font displays as Live and offers the font download.
- Xanadu displays the uploaded Muses image rather than a placeholder.
- Tucked Away displays its cropped app image and links to `/tucked-away` from the detail view.
- Meeting Bingo uses the supplied app interface image, shows Work in Progress, and exposes `Play Meeting Bingo`.
- Commonwealth After Dark displays after Meeting Bingo, uses the first Fallout screenshot on its card, opens a three-image gallery in the detail view, and exposes a non-interactive `Passion Project` action.
- Projects without links do not show broken external-link buttons.
- Clicking each project opens the detail view.
- Detail view displays title, type, status, subtitle, blurb, and image/preview.
- Detail view does not show a visible Focus section.
- Keyboard access works for opening, closing, and previous/next navigation in detail views.
- Mobile layout stacks cleanly.
