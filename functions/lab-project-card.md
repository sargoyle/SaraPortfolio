# Lab Project Card

## Purpose

Reusable card component for Sara's Lab list items.

## Source Files

- `src/components/LabProjectCard.jsx`
- `src/data/labProjects.js`
- `src/styles/global.css`

## User-Facing Behaviour

Shows project image or placeholder, type, title, status, short card description, and action text.

## Layout Rules

- Render as one keyboard-accessible button inside an article.
- Keep media above text.
- Keep action text aligned consistently at the bottom of the card content when card heights differ.

## Reusable Components

- Uses `ImageWithFallback`.

## Data Rules

- Reads `title`, `type`, `status`, `cardDescription`, `image`, `imageAlt`, `link`, `cardActionLabel`, `actionLabel`, `download`, `downloadLabel`, `mediaFit`, and `mediaPosition`.
- Uses `cardActionLabel` when present; otherwise uses `actionLabel`, `Open project` for linked projects, or `View details` for modal-only projects.
- Cards open the detail modal first; downloadable assets are exposed inside the detail view.

## Image Rules

- Render `project.image` if present.
- Use `mediaFit` and `mediaPosition` to control previews.
- Prefer `contain` for Lab card media unless a specific future asset is intentionally designed to crop.
- Render styled placeholder if image is empty or unavailable.

## Styling Rules

- Match portfolio glass card styling.
- Use purple accents sparingly.
- Cards should feel like a creative product/tool showcase, not a generic project grid.

## Accessibility Rules

- Button must have an aria label naming the project.
- Placeholder visuals must have accessible labels.

## Known Gaps / Defects

- Placeholder style may be replaced when final assets are supplied.

## Change Rules

- Do not add project-specific branches unless a real project type requires a new reusable pattern.

## Test Expectations

- Card is keyboard focusable.
- Card opens the matching detail view.
- Batcave Font card shows Live status.
- Batcave Font action still opens the detail view, where the font download is available.
- Tucked Away card shows In Progress status and View Details action text.
- Meeting Bingo card shows Work in Progress status and View Details action text.
- Commonwealth After Dark card shows Passion Project status and View Details action text.
- Broken or empty images do not show browser broken-image icons.
