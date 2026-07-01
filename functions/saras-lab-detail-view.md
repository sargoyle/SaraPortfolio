# Sara's Lab Detail View

## Purpose

Displays a selected Sara's Lab project in a focused modal.

## Source Files

- `src/components/LabProjectDetailModal.jsx`
- `src/components/LabProjectDetail.jsx`
- `src/components/ModalShell.jsx`
- `src/data/labProjects.js`
- `src/styles/global.css`

## User-Facing Behaviour

Visitors open a project card and see the project title, type, status, subtitle, image or placeholder, blurb, focus areas, and external link when available.

## Layout Rules

- Detail content appears inside `ModalShell`.
- Use `.lab-project-detail`.
- Keep content concise and personal.
- Do not add corporate case-study headings like Problem, Solution, or Impact.

## Reusable Components

- Use `LabProjectDetailModal`.
- Use `LabProjectDetail`.

## Data Rules

- Detail view uses the same `labProjects` record as the card.
- Focus areas come from `project.focus`.
- External link appears only when `project.link` is non-empty.

## Image Rules

- Use `project.image` when present.
- Use a styled placeholder when absent or unavailable.
- Detail media should support screenshots added later.

## Styling Rules

- Preserve fullscreen glass panel, purple glow, and dark image backgrounds.
- Detail content should feel like a creative project note, not a CV case study.

## Accessibility Rules

- Modal has accessible dialog behaviour through `ModalShell`.
- Close button must be labelled.
- External links open in a new tab with `rel="noreferrer"`.

## Known Gaps / Defects

- Final screenshots may still be needed for some projects.

## Change Rules

- Keep detail metadata sourced from `labProjects`.
- Do not show empty external-link controls.

## Test Expectations

- Each project opens a detail view.
- Detail view shows title, type, status, subtitle, blurb, and focus list.
- Alphabet Stitch shows the external link.
- Batcave Font, Xanadu: The 9 Muses, and The Door List do not show empty external links.
- Escape and outside click close the modal.
