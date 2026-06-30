# Home Page

## Purpose

The Home page is Sara's personal creative portfolio landing page. It is not a professional CV; LinkedIn covers work history. The page should centre creative practice, especially cross-stitch pattern-making, photography, games, and creative tools. AI and code may be mentioned as tools, but they should not dominate the site identity.

## Source Files

- `src/pages/Home.jsx`
- `src/components/ImageWithFallback.jsx`
- `src/styles/global.css`
- `public/images/about/profile.jpg`

## User-Facing Behaviour

Visitors see Sara's portfolio title, subtitle, profile image, LinkedIn link, short intro, About Sara copy, and Behind the Work copy.

## Layout Rules

- Desktop uses a balanced two-column layout.
- Left column contains the profile image, LinkedIn button, and short intro.
- Right column contains heading, subtitle, About Sara, and Behind the Work.
- Mobile stacks in this order: heading, subtitle, photo, LinkedIn button, intro, About Sara, Behind the Work.

## Reusable Components

- Must use `ImageWithFallback` for the profile image.
- Uses shared `.page`, `.section-title`, link, focus, and responsive layout styles from `global.css`.

## Data Rules

- The profile image path is `/images/about/profile.jpg`.
- LinkedIn URL is currently `https://www.linkedin.com/in/sara-gillard-ppm-consultant/`.
- Copy should stay grounded, human, and creative. Avoid generic AI marketing phrasing.

## Image Rules

- Profile image is circular and uses `object-fit: cover`.
- Missing profile image must show a graceful fallback.

## Styling Rules

- Preserve dark gothic theme, purple glow, and constellation-style background.
- Do not introduce a CV-style layout or generic landing page hero.

## Accessibility Rules

- Profile image needs useful alt text.
- LinkedIn link must be keyboard accessible and open safely with `rel="noreferrer"`.
- Visible focus states must remain.

## Known Gaps / Defects

- LinkedIn URL needs final manual confirmation because automated checks were blocked by LinkedIn.

## Change Rules

- Update this file when changing Home copy, layout, LinkedIn behaviour, profile image behaviour, or brand positioning.
- Do not move Home toward a professional CV unless that direction is explicitly approved.

## Test Expectations

- Check desktop and mobile layout.
- Verify profile fallback still works.
- Verify LinkedIn link is visible, keyboard focusable, and opens in a new tab.
