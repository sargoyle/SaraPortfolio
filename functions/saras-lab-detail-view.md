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

Visitors open a project card and see the project title, type, status, subtitle, image or placeholder, blurb, previous/next controls, and external link when available.

## Layout Rules

- Detail content appears inside `ModalShell`.
- Use `.lab-project-detail`.
- Keep content concise and personal.
- Detail view must feel like a project showcase, not a content dump.
- Detail view uses a two-column desktop layout where practical and stacks on mobile.
- Do not add corporate case-study headings like Problem, Solution, or Impact.
- Do not show a visible `Focus` section.

## Reusable Components

- Use `LabProjectDetailModal`.
- Use `LabProjectDetail`.

## Data Rules

- Detail view uses the same `labProjects` record as the card.
- Focus areas may remain in data but are not displayed in the detail view.
- External link appears only when `project.link` is non-empty.

## Image Rules

- Use `project.image` when present.
- Apply `detailMediaFit` and `detailMediaPosition` when present.
- Use a styled placeholder when absent or unavailable.
- Detail media should support screenshots added later.

## Styling Rules

- Preserve fullscreen glass panel, purple glow, and dark image backgrounds.
- Detail content should feel like a creative project note, not a CV case study.

## Accessibility Rules

- Modal has accessible dialog behaviour through `ModalShell`.
- Close button must be labelled.
- Close button must align to the modal panel, not the far edge of the viewport.
- Previous/next buttons must move through manual project order.
- ArrowLeft and ArrowRight should navigate when handlers are available.
- External links open in a new tab with `rel="noreferrer"`.

## Known Gaps / Defects

- Final screenshots may still be needed for some projects.

## Change Rules

- Keep detail metadata sourced from `labProjects`.
- Do not show empty external-link controls.

## Test Expectations

- Each project opens a detail view.
- Detail view shows title, type, status, subtitle, image/preview, and blurb.
- No visible Focus header or focus tag list appears.
- Alphabet Stitch shows the external link.
- Batcave Font, Xanadu: The 9 Muses, and The Door List do not show empty external links.
- Previous and next controls work.
- Escape and outside click close the modal.
