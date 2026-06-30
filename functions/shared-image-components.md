# Shared Image Components

## Purpose

Defines how images and image fallbacks are handled across the site.

## Source Files

- `src/components/ImageWithFallback.jsx`
- `src/components/SquareImageFrame.jsx`
- `src/components/ProjectCard.jsx`
- `src/components/PhotoCard.jsx`
- `src/components/ProjectDetailModal.jsx`
- `src/components/FullscreenImageModal.jsx`
- `src/pages/Home.jsx`
- `src/pages/Games.jsx`
- `src/styles/global.css`

## User-Facing Behaviour

Images render where available; missing images show accessible placeholders.

## Layout Rules

- Image layout is controlled by the parent view or frame.
- The image component should not decide list/detail layout.

## Reusable Components

- `ImageWithFallback` is the shared fallback component.
- `SquareImageFrame` is the shared square contained image frame currently used by Crafter Dark listing cards.

## Data Rules

- Image paths should remain under `/images/...` from `public/images`.
- Alt text or fallback labels must identify the content.

## Image Rules

- Image borders should be applied to wrapper/frame components, not images.
- Images should not be stretched.
- Crop/contain behaviour must be intentional and documented.
- Square image handling should use one shared square frame pattern.

## Styling Rules

- Do not add image-specific styling by filename or project title.
- Keep fallback styling consistent with dark/purple theme.

## Accessibility Rules

- Fallback placeholders use `role="img"` and accessible labels.
- Decorative icons inside placeholders should be `aria-hidden`.

## Known Gaps / Defects

- No automated missing-asset check is wired into a script.

## Change Rules

- Check every view that uses `ImageWithFallback` before changing its API.
- If a new image frame pattern is created, document it here and add matching tasks.

## Test Expectations

- Test normal image rendering and missing image fallback.
- Test square, tall, and wide image behaviour where relevant.
