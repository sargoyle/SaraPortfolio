# Visual Design System

## Purpose

Documents the site's visual identity and reusable styling decisions.

## Source Files

- `src/styles/global.css`
- `src/components/ParticleBackground.jsx`
- All page and component files that use shared classes

## User-Facing Behaviour

The site feels dark, gothic, creative, purple-accented, glassy, and atmospheric.

## Layout Rules

- Pages use a constrained content area where appropriate.
- Cards and modals use glassmorphism surfaces.
- Animated background stays behind content.

## Reusable Components

- `ParticleBackground`
- Shared page/card/nav/filter/modal styles in `global.css`

## Data Rules

No direct data rules.

## Image Rules

- Images should support the creative work and remain inspectable.
- Do not hide portfolio work behind excessive visual effects.

## Styling Rules

- Core accent: `#7b3fe4`.
- Light purple: `#a78bfa`.
- Preserve dark background gradients.
- Avoid generic templates, beige palettes, or unrelated bright colours.
- Cards should keep modest border radius.

## Accessibility Rules

- Maintain contrast for text and controls.
- Visible focus states are required.
- Do not rely only on colour for active state.

## Known Gaps / Defects

- No formal visual regression tests exist.

## Change Rules

- Any major colour, typography, card, modal, or background change should update this file.
- Preserve Sara's creative gothic identity unless explicitly directed otherwise.

## Test Expectations

- Check page readability, focus states, card consistency, modal contrast, and image visibility.
