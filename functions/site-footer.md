# Site Footer

## Purpose

Subtle global footer for site ownership and copyright.

## Source Files

- `src/components/Footer.jsx`
- `src/App.jsx`
- `src/styles/global.css`

## User-Facing Behaviour

Footer appears across the site with `© Sara Gillard 2026`.

## Layout Rules

- Footer appears after the active page content.
- Footer should sit directly below page content; page wrappers must not reserve an unnecessary full viewport height that creates empty scroll space.
- It should not compete with page content.

## Reusable Components

- `Footer` is the only footer component.

## Data Rules

- Use the copyright symbol, not the word "Copyright".
- Update the year if Sara requests it.

## Image Rules

No images are used.

## Styling Rules

- Keep subtle grey text and dark/purple visual alignment.

## Accessibility Rules

- Use semantic `<footer>`.

## Known Gaps / Defects

No known gaps currently documented.

## Change Rules

- Do not add contact, social links, or legal text without updating this file.

## Test Expectations

- Confirm footer appears on every section.
- Confirm short pages do not create a large empty gap before the footer.
- Confirm it remains readable on mobile.
