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

- The page must use the exact approved Tucked Away copy stored in `tuckedAwayContent` in `src/pages/TuckedAway.jsx`.
- The page must explain the product, problem, benefits, how it works, use cases, features, screenshot selectors, privacy summary, and full privacy policy.
- Tucked Away is a flexible personal video-library app, not an exercise-only app.
- Do not add invented marketing copy, pills, statistics, labels, or status text to the Tucked Away page.
- Do not claim Google Play availability until a real URL is provided.
- The non-clicking `Coming to Android` release status belongs at the bottom of the cabinet navigation, not inside the Overview content.
- The Overview hero must include the Tucked Away logo above the `OVERVIEW` label.
- The `Private by design` summary belongs in the Overview first-screen composition and must not be duplicated as a later marketing section.
- The Overview `Private by design` row must include a `Read the full privacy policy` action that selects the Privacy panel.
- Do not claim cloud sync, iPhone support, AI metadata generation, video upload, video copying, source video editing, or backup of video files.
- Do not show a Contact subsection until Sara supplies an approved support route.
- The fixed privacy-policy publication date is `28 July 2026`.
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
- The hero catalogue screenshot should use a cleaner direct image treatment instead of an oversized padded frame.
- The image itself must remain borderless and use `object-fit: contain`.
- The active panel owns its main screenshot. Inactive panel screenshots should remain lazy-loaded where practical.
- Features must keep one large selected screenshot and compact thumbnail selectors for: Catalogue, History, Filters, Video details, and Sorting.
- The Setup screenshot belongs beneath the Use cases intro copy as a direct image, not inside the Features selector gallery.
- The Use cases Setup screenshot must not be wrapped in a card, panel, frame, border, caption, or added heading.
- The Use cases Setup screenshot must preserve its natural phone-screenshot aspect ratio; do not force a fixed width and capped height that stretches it into a wide panel.
- The Features screenshot gallery should be visually integrated into the section, without a heavy outer panel or boxed heading.
- Missing images must keep deliberate placeholders with accessible labels.

## Layout Rules

- The page is organised as a compact interactive product cabinet with five selectable panels: Overview, Why Tucked Away, Use cases, Features, and Privacy.
- Use the shared page width: `max-width` around `1240px`, centred with responsive inline padding.
- Keep a compact header. Do not let it consume a full hero-like row.
- Desktop uses a left filing-cabinet-style navigation rail and one active content panel on the right.
- Tablet and mobile use the same section list as a horizontally scrollable tab row above the active panel.
- Only the selected panel should be presented as the main content. Do not restore the previous long stacked marketing page.
- Panel state is represented by URL fragments: `#overview`, `#why`, `#use-cases`, `#features`, and `#privacy`.
- The Why Tucked Away panel contains the page-two content: Why copy on the left, three stacked benefit cards on the right, and the How it works step row directly underneath.
- The Why Tucked Away eyebrow and heading span the full panel width above the body/card columns.
- The How it works cards use a dark green filled treatment with light text and inline numbered headings such as `1. Choose a folder`; do not render separate number badges.
- Use cases is its own panel immediately after Why Tucked Away. How it works must not return as a standalone panel.
- The Use cases panel desktop order is intro copy with the Setup screenshot beneath it on the left, and the seven use-case cards on the right.
- On mobile, the Use cases panel order is label, heading, paragraph, Setup screenshot, then the seven use-case cards.
- The Features panel heading spans the full content row, with feature cards and the screenshot gallery aligned together beneath it on desktop.
- Missing or invalid fragments fall back to Overview.
- Privacy remains fully visible and readable inside the Privacy panel. The four introductory privacy paragraphs stay together in one calm text block with normal dark text, no dark-green panel treatment, and no large card styling.
- Privacy policy subsections use a compact divider-based two-column layout on desktop and a single-column reading order on tablet/mobile. They must not use rounded cards, large backgrounds, equal-height rows, or fixed/minimum heights.
- Cards must size to their content and should not use large fixed `min-height` values.
- Tucked Away sections must not use `100vh` or other viewport-height layouts.
- Tucked Away h1 and h2 sizes are page-scoped, fixed via media queries, and intentionally smaller than the broader portfolio hero typography; h3 and card heading sizes should not be changed during this typography refinement.
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
- Use accessible tab controls for section navigation.
- `Coming to Android` must remain non-clicking until a real Google Play URL exists.
- Placeholders need accessible labels.
- Hash navigation must remain keyboard-accessible and support browser Back/Forward.
- Arrow keys, Home, and End should work on the section tab list.

## Test Expectations

- `/tucked-away` opens directly and refreshes.
- `/tucked-away#privacy` opens directly and selects the Privacy panel.
- `/tucked-away#overview`, `/tucked-away#why`, `/tucked-away#use-cases`, `/tucked-away#features`, and `/tucked-away#privacy` open directly and select the matching panel.
- Invalid hash values fall back to Overview.
- Browser Back and Forward move between selected panels.
- Section tabs update the URL without a full page reload.
- `Back to Sara's Lab` returns to the active Sara's Lab section.
- The exact four introductory privacy paragraphs render.
- The Contact subsection and support email placeholder do not render.
- The Last updated subsection displays `Last updated: 28 July 2026`.
- `Coming to Android` is visible but non-clicking until a real URL exists.
- Missing screenshots show placeholders.
- Sitemap includes `/tucked-away`.
- Metadata for Tucked Away does not include old role-led positioning.
- Supplied logo and screenshot assets are used where available.
- Missing screenshots still show deliberate placeholders.
- Overview heading is not manually split with hard-coded line breaks.
- Tucked Away styles use the central green palette tokens.
- The Overview heading is `Turn a phone full of videos into a library you can actually use.`
- The Overview panel contains the Tucked Away logo above the label and no hero action pills.
- `Coming to Android` appears once as a small release status beneath the cabinet navigation items.
- Only one visible `Private by design` section exists, inside the Overview composition.
- The Overview `Private by design` summary includes a working `Read the full privacy policy` action.
- The Why Tucked Away heading is `A folder full of videos is not a library.`
- The Why Tucked Away panel shows only the approved problem story, three benefits, and inline How it works steps.
- The Why Tucked Away heading is not trapped in the body-copy column.
- The How it works cards are visually distinct from the upper benefit cards and include their step numbers directly in the card headings.
- The How it works content appears directly under Why Tucked Away and is not duplicated as a separate panel.
- The Use cases panel appears after Why Tucked Away in the nav and contains the approved starter-template/use-case copy.
- The Features panel uses the approved eight features and five screenshot selector labels: Catalogue, History, Filters, Video details, and Sorting.
- The Features panel does not show Setup as a screenshot selector.
- The Use cases panel shows the Setup screenshot beneath the intro copy without a frame, caption, or extra heading.
- The Use cases Setup screenshot uses the same direct rounded screenshot glow as the Overview screenshot and must not be distorted into a wide rectangular panel.
- The Features heading should not be trapped in the left column, and the screenshot gallery should start with the feature-card row rather than at the top of the panel.
- The transparent logo asset is used and should not show a visible rectangular background.
- The five tabs are visible and programmatically identify the selected panel.
- Desktop uses a compact left-navigation cabinet layout.
- Tablet and mobile use horizontal tabs.
- No Tucked Away section uses viewport-height layout.
- No old long-page card grids or repeated full-width feature sections return.
- No old oversized `360px` process row or `440px` gallery row returns.
- H1/H2 use compact cabinet typography, while h3 and card heading overrides remain unchanged.
