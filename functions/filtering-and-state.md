# Filtering And State

## Purpose

Documents client-side state patterns for section navigation, category filtering, and modal item navigation.

## Source Files

- `src/App.jsx`
- `src/pages/CrafterDark.jsx`
- `src/pages/Photography.jsx`
- `src/components/FilterBar.jsx`

## User-Facing Behaviour

Visitors switch sections, filter Crafter Dark and Photography lists, and navigate modal items within the current filtered set.

## Layout Rules

- Filters appear above relevant grids.
- Mobile filters should remain horizontally usable.

## Reusable Components

- `FilterBar` for category filters.

## Data Rules

- Filters are string labels matched against item `category`.
- `itemCounts` should match the active data source.

## Image Rules

No direct image rules; filtered views inherit their page/list image rules.

## Styling Rules

- Active filter state uses `.filter-btn.active`.

## Accessibility Rules

- Filter buttons use `aria-pressed`.
- Navigation active state uses `aria-current`.

## Known Gaps / Defects

- Shareable URLs/deep links are not implemented.

## Change Rules

- Keep filter labels aligned with data categories.
- If routing is introduced, update navigation and modal close behaviour.

## Test Expectations

- Test each filter and confirm counts/items.
- Test modal previous/next within filtered result sets.
