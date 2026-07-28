# Tucked Away Page

## Purpose

Tucked Away is a public product marketing page and privacy-policy page for Sara's local-first Android video catalogue app.

## Source Files

- `src/pages/TuckedAway.jsx`
- `src/App.jsx`
- `tucked-away.html`
- `vercel.json`
- `public/sitemap.xml`
- `src/styles/global.css`
- `scripts/validate-site.mjs`

## Routes

- Public page: `/tucked-away`
- Privacy anchor: `/tucked-away#privacy`
- Vercel rewrites `/tucked-away` to `tucked-away.html` so direct visits and social crawlers receive page-specific metadata.
- The privacy section uses `scroll-margin-top` so anchor navigation does not hide the heading.

## Content Rules

- The page must explain the product, problem, benefits, how it works, use cases, features, screenshot placeholders, privacy summary, full privacy policy, and release status.
- Do not claim Google Play availability until a real URL is provided.
- Do not claim cloud sync, iPhone support, AI metadata generation, video upload, video copying, source video editing, or backup of video files.
- Keep the support email and publication date placeholders visible until Sara supplies final values.
- Use Australian English.

## Image Rules

- Tucked Away screenshots are expected under `public/images/tucked-away`.
- Missing images must render deliberate placeholders, not broken image icons.
- Future expected assets:
  - `tucked-away-logo.png`
  - `tucked-away-catalogue.jpg`
  - `tucked-away-history.jpg`
  - `tucked-away-metadata.jpg`
  - `tucked-away-active-filter.jpg`
  - `tucked-away-sort.jpg`
  - `tucked-away-setup-step-1.jpg`
  - `tucked-away-setup-step-2.jpg`
  - `tucked-away-social-card.png`
  - `google-play-badge.png`
- Current image paths are centralised in `tuckedAwayImages` inside `src/pages/TuckedAway.jsx`.
- Use the shared `TuckedAwayImageSlot` for logo, hero, process, gallery, thumbnail and placeholder image states.
- The hero catalogue screenshot should keep a natural phone/app screenshot ratio and should not be forced into a square frame.
- The screenshot frame owns borders, padding and background; the image itself must remain borderless and use `object-fit: contain`.
- Process screenshots are selected from the three How it works steps. The first step is selected by default.
- Screenshot gallery previews use one main image plus compact selector buttons. Do not reintroduce the old duplicate six-image grid.
- Missing images must keep deliberate placeholders with accessible labels.

## Layout Rules

- The page is organised as five desktop content beats: hero/catalogue, why/use-cases/benefits, how/features/screenshots, privacy policy, and closing/footer.
- Use the shared page width: `max-width` around `1240px`, centred with responsive inline padding.
- Keep a compact header. Do not let it consume a full hero-like row.
- Hero layout is two columns on desktop: logo, heading, copy and buttons on the left; catalogue screenshot on the right.
- Why Tucked Away uses a two-column layout with explanation copy on the left and the three benefits on the right. The old before/after filename panel must not render.
- Use cases sit directly beneath Why Tucked Away in a compact wrapping card row.
- How it works uses three compact process steps in a horizontal row on desktop. Do not render a large process screenshot beside the steps.
- Features and Screenshots share one editorial split below the process steps: the feature list sits left and the main screenshot showcase with selectors sits right.
- The visible feature heading is `Tucked Away focuses on useful information and clear actions rather than large thumbnails.` Do not restore `Built around the way you use your videos`.
- Privacy remains fully visible and readable. The summary and full policy use the same outer width; the four introductory privacy paragraphs stay together before the subsection grid.
- Cards must size to their content and should not use large fixed `min-height` values.
- Tucked Away sections must not use `100vh` or other viewport-height layouts.
- Preserve approved copy exactly unless Sara supplies replacement wording.

## Metadata Rules

- Static metadata for `/tucked-away` lives in `tucked-away.html`.
- Client-side metadata is also set by `TuckedAway.jsx` for in-app navigation.
- Page title: `Tucked Away | Organise videos stored on your Android device`.
- Page description: `Tucked Away is a private Android app for organising, searching, rating and revisiting videos stored on your phone or SD card.`
- Social title: `Tucked Away`.
- Social description: `Turn a folder full of videos into a private, searchable library organised your way.`

## Accessibility Rules

- Use one `h1` and logical section headings.
- Use semantic links for section navigation.
- Disabled release status must not be a fake link.
- Placeholders need accessible labels.
- Anchor navigation must remain keyboard-accessible.

## Test Expectations

- `/tucked-away` opens directly and refreshes.
- `/tucked-away#privacy` opens directly and reaches the Privacy policy section.
- Section navigation anchors work.
- `Back to Sara's Lab` returns to the active Sara's Lab section.
- The exact four introductory privacy paragraphs render.
- Google Play controls are non-clicking until a real URL exists.
- Missing screenshots show placeholders.
- Sitemap includes `/tucked-away`.
- Metadata for Tucked Away does not include old role-led positioning.
- Supplied logo and screenshot assets are used where available.
- Missing screenshots still show deliberate placeholders.
- Hero heading is not manually split with hard-coded line breaks.
- Tucked Away styles use the central green palette tokens.
- Tucked Away uses a deliberate shared spacing scale without returning to oversized slide sections.
- The hero heading is `Turn a phone full of videos into a library you can actually use.`
- The hero includes the `Why Tucked Away` action linked to `#why-tucked-away`.
- The transparent logo asset is used and should not show a visible rectangular background.
- How it works shows three process steps without a large process screenshot.
- Screenshot selectors update the main screenshot.
- Use cases remain visible below Why Tucked Away without a redundant standalone screenshot panel.
- Features and screenshots render as one showcase, not separate grids.
- Privacy summary and policy containers align to the same width.
- No Tucked Away section uses viewport-height layout.
- No Tucked Away card uses a large fixed minimum height.
- No old oversized `360px` process row or `440px` gallery row returns.
