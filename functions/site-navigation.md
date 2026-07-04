# Site Navigation

## Purpose

Primary fixed navigation for moving between portfolio sections.

## Source Files

- `src/components/Navigation.jsx`
- `src/App.jsx`
- `src/styles/global.css`

## User-Facing Behaviour

Visitors can switch between Home, Crafter Dark, Photography, and Sara's Lab. The active section is visually indicated.

## Layout Rules

- Navigation is fixed at the top.
- Desktop uses horizontal buttons.
- Top navigation is right-aligned with the page rather than centered.
- Mobile keeps horizontal scrolling nav with no wrapping into broken rows.

## Reusable Components

- `Navigation` is the single site navigation component.
- `App` owns current page state and passes `currentPage` and `onNavigate`.

## Data Rules

- Navigation IDs must match keys in `App.jsx` `pages`.
- The Games page is labelled `Sara's Lab` in navigation.
- AI POC source files and data are archived under `archive/ai-pocs`; `AI POCs` is not an active navigation item or registered page.

## Image Rules

No images are used.

## Styling Rules

- Use existing `.nav`, `.nav-container`, `.nav-btn`, and `.home-btn` styles.
- Active state must not rely only on colour; it also uses background, border, and glow.

## Accessibility Rules

- Nav uses `aria-label="Primary navigation"`.
- Active page uses `aria-current="page"`.
- Home icon button has an accessible label and screen-reader text.

## Known Gaps / Defects

No known gaps currently documented.

## Change Rules

- When adding a page, update `Navigation.jsx`, `App.jsx`, and this file together.
- Do not create per-page duplicate navigation.
- Archived sections must not be added back to navigation without a deliberate task and docs update.

## Test Expectations

- Test keyboard tab order through nav.
- Confirm active state follows section changes.
- Confirm the nav button group sits on the right side of the top bar on desktop.
- Confirm modal closes on navigation via `portfolio:navigate`.
