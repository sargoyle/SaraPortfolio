# Sara's Portfolio Design PRD

## Brand Direction

Sara's Portfolio should feel like a creative technology space: dark, luminous, experimental, and polished. The brand aesthetic combines glassmorphism, purple glow, dark gradients, and expressive visual work.

The design must preserve the prototype's personality. It should not become a generic white portfolio, corporate template, or overly minimal gallery.

Brand keywords:

- Dark
- Creative
- Experimental
- Polished
- Curious
- Atmospheric
- Technical
- Handmade

## Visual System

### Color Palette

Primary colors:

- Purple accent: `#7b3fe4`
- Light purple: `#A78BFA`
- White text: `#ffffff`
- Soft text: `#d1d5db`
- Muted text: `#9ca3af`

Background colors:

- Near black: `#050308`
- Deep navy black: `#0a0a15`
- Dark indigo black: `#0d0d1a`

Glass surfaces:

- Light glass: `rgba(255, 255, 255, 0.08)`
- Strong glass: `rgba(255, 255, 255, 0.12)`
- Glass border: `rgba(255, 255, 255, 0.15)`

Glow:

- Purple glow: `0 0 24px rgba(123, 63, 228, 0.45)`

### Typography

Use the system sans-serif stack:

```css
-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif
```

Typography principles:

- Large display type is reserved for page titles and the home title.
- Card text should be compact, readable, and scannable.
- Body copy should use generous line height.
- Avoid negative letter spacing.
- Avoid viewport-width-only font scaling.

### Layout

General page layout:

- Fixed top nav.
- Page content begins below nav.
- Desktop pages use generous spacing and max-width constraints where appropriate.
- Gallery pages use responsive CSS grid.
- Mobile pages collapse to single-column layouts.

Spacing principles:

- Use enough breathing room around hero and section titles.
- Keep card interiors consistent.
- Avoid nested card layouts.
- Modals should use the full viewport feel rather than small popups.

### Background

The background should combine:

- Dark gradient base.
- Animated particle canvas.
- Purple particle lines and points.

Requirements:

- Canvas must be decorative and non-interactive.
- Canvas must sit behind content.
- Animation must not block reading or interaction.
- On resize, canvas dimensions must update.

## Component Patterns

### Navigation

Pattern:

- Fixed top glass bar.
- Horizontal button group.
- Home button uses compact icon-style treatment.
- Active item has purple fill and glow.

Requirements:

- Always visible.
- Horizontally scrollable on small screens.
- Active state must not rely only on color. It should include background, border, and shadow changes.
- Use `aria-current="page"` for the active page.

### Filter Buttons

Pattern:

- Glass buttons with active purple state.
- Include item counts.
- Wrap on desktop when needed.
- Scroll horizontally on mobile.

Requirements:

- Use `aria-pressed`.
- Button labels must match category values exactly.
- Active state should be visually distinct.

### Project Cards

Pattern:

- Glassmorphism card.
- Optional preview image at top.
- Title, metadata, and description preview below.
- Hover lift and border highlight.

Requirements:

- Entire card should be keyboard-activatable.
- Preserve readable text hierarchy.
- Description preview can be truncated on cards.
- Detail modal contains full description.

### Photo Cards

Pattern:

- Square image tile.
- Overlay title at bottom with dark gradient.
- Hover zoom and lift.

Requirements:

- Entire photo tile should be keyboard-activatable.
- Missing images show fallback placeholder.
- Title overlay must remain readable.

### Modals

Pattern:

- Fullscreen dark overlay.
- Glassy modal content surface.
- Fixed close button.
- Fixed previous/next circular controls.
- Large imagery and detail content.

Requirements:

- Modal must be usable with mouse, touch, and keyboard.
- Close button must be labelled.
- Previous/next buttons must be labelled.
- Escape closes modal.
- Arrow keys navigate modal items.
- Clicking outside content closes modal.
- Modal content can scroll if long.

### Image Fallbacks

Pattern:

- Neutral dark glass placeholder.
- Purple accent text or icon.
- Meaningful accessible label.

Requirements:

- Missing images must not break layout.
- Fallbacks should preserve intended card or modal dimensions.
- Fallback text should be concise.

## Responsive Behavior

### Desktop

Target width: 1024px and above.

Expected behavior:

- Fixed nav centered within max width.
- Gallery grids show multiple columns.
- Project images in detail modals can show two columns.
- Game images show two columns.
- Home content centered.

### Tablet

Target width: 768px to 1023px.

Expected behavior:

- Gallery grids reduce column count naturally.
- Cards remain readable.
- Nav may begin horizontal scrolling if labels crowd.
- Modal content remains centered with scroll support.

### Mobile

Target width: below 768px.

Expected behavior:

- Nav scrolls horizontally.
- Gallery grids collapse to one column.
- Filter controls scroll horizontally.
- Project image grids collapse to one column.
- Modal padding is reduced.
- Text must not overflow buttons, cards, or modals.

## Accessibility Guidelines

### Keyboard

Required:

- All navigation buttons are keyboard-accessible.
- Filter buttons are keyboard-accessible.
- Cards are keyboard-accessible.
- Modal controls are keyboard-accessible.
- Escape closes modals.
- Arrow keys navigate within modals.
- Focus states are visible.
- Focus returns to the triggering element after modal close.

### Screen Readers

Required:

- Primary navigation has an accessible label.
- Active page uses `aria-current`.
- Filters use `aria-pressed`.
- Modals use `role="dialog"` and `aria-modal="true"`.
- Icon-only buttons have labels.
- Images have useful alt text.
- Decorative canvas uses `aria-hidden`.

### Color and Contrast

Required:

- Text must remain readable against glass backgrounds.
- Active state must not rely only on color.
- Links must be visually distinct from body text.
- Focus outlines must have sufficient contrast.

## Branding Requirements

Site name:

- Use `Sara's Portfolio`.

Primary content categories:

- Home
- Crafter Dark
- Photography
- Games
- AI POCs

Crafter Dark category labels:

- All
- When Stitches Kaleid
- Pop Culture Inspired

Photography category labels:

- All
- Abstract Macro
- When visions kaleid

Tone:

- Professional but creative.
- Confident without being corporate.
- Clear enough for first-time visitors.
- Atmospheric without hiding content.

## Design Non-Goals

Do not:

- Replace the design with a generic portfolio template.
- Remove the purple/dark/glass identity.
- Add decorative UI that competes with the portfolio work.
- Add a marketing-style landing page before the real portfolio.
- Hide the actual work behind vague hero copy.
- Use color alone for active or selected states.

