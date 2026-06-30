# Responsive Layout

## Purpose

Documents responsive behaviour across the single-page portfolio.

## Source Files

- `src/styles/global.css`
- `src/App.jsx`
- All page components under `src/pages`

## User-Facing Behaviour

The site should remain usable on desktop, tablet, and mobile.

## Layout Rules

- Main pages use `.page` with top padding to clear fixed nav.
- Mobile breakpoint is currently `max-width: 768px`.
- Home stacks from two columns to one.
- Grids collapse to one column on mobile.
- Project detail images stack on mobile.
- Nav and filters horizontally scroll where needed.

## Reusable Components

- Uses shared page, grid, nav, filter, card, and modal classes.

## Data Rules

No direct data rules.

## Image Rules

- Image sizing must not cause horizontal overflow.
- Fixed-format UI elements need stable dimensions.

## Styling Rules

- Do not scale font size directly with viewport width.
- Avoid overlapping text/buttons on small screens.

## Accessibility Rules

- Horizontal scrolling controls must remain keyboard reachable.
- Focus outlines must remain visible at all sizes.

## Known Gaps / Defects

- Formal responsive QA at 390px, 768px, and 1280px remains open in `docs/tasks.md`.

## Change Rules

- Test desktop and mobile after any grid, nav, modal, card, or image change.

## Test Expectations

- Check 390px, 768px, and 1280px.
- Confirm no text overflow or incoherent overlap.
