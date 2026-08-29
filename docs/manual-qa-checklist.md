# Manual QA Checklist

Use this checklist before release and after changes to shared navigation, filters, cards, image handling, modals, or page layout.

## Build

- Run `pnpm run lint`.
- Run `pnpm test`.
- Run `pnpm run build`.
- Confirm the build completes without errors.
- Confirm `dist/index.html` and bundled assets are generated.

## Navigation

- Confirm the active navigation items are Home, Sara's Lab, Cross-Stitch, Crafts, and Photography.
- Confirm AI POCs is not shown in active navigation.
- Confirm the top navigation button group is right-aligned on desktop.
- Confirm navigation scrolls horizontally on small screens.
- Confirm active nav state is visible and uses `aria-current="page"`.
- Open a modal and use a nav button; confirm the modal closes.

## Home

- Confirm the Home title is `Sara's Portfolio`.
- Confirm the subtitle is `Creative Technologist, Artist & Pattern Maker`.
- Confirm the profile image loads or shows a fallback.
- Confirm LinkedIn is the only public connect/contact link.
- Confirm there is no email address, phone number, contact form, or extra social link.
- Confirm About Sara and Behind the Work follow the hero content without floating down the page on desktop resize.
- Confirm the footer sits directly below page content without creating unnecessary empty scroll space.

## Cross-Stitch

- Confirm filters are All, Pop Culture Inspired, Science, and When Stitches Kaleid.
- Confirm filter counts update and `aria-pressed` reflects the active filter.
- Confirm visible cards sort alphabetically by project title after filtering.
- Confirm listing cards do not show category metadata.
- Confirm listing cards show 18 count size, chart size, colour count, and description when present.
- Confirm every listing thumbnail uses one square `SquareImageFrame` and images are not cropped or stretched.
- Visual regression check: compare Adam Ant Logo, Blue Digital Bloom, Caligari Hallway, Cells, Grey, HAL 9000, Mr Handy Fudge, Twin Peaks Socket, Xeno, and X-Files Hand in the listing grid; confirm every thumbnail frame starts at the same top level, uses the same square size, and shows the same inset/border treatment.
- Open multiple projects and confirm detail images display correctly.
- Open projects with finished photos and confirm the second/detail image loads from a lighter `-display.webp` asset where available.
- Confirm category appears as a subtle bottom tag in the detail view.
- Confirm Escape, outside click, close button, ArrowLeft, ArrowRight, previous, and next all work.

## Photography

- Confirm filters are All, Abstract Macro, and When visions kaleid.
- Confirm photo cards show images without visible generic titles.
- Open a photo and confirm no visible generic title appears in the detail viewer.
- Confirm close button sits outside the photograph frame.
- Confirm Escape, outside click, close button, ArrowLeft, ArrowRight, previous, and next all work.

## Sara's Lab

- Confirm exactly seven projects show in this order: Alphabet Stitch, Batcave Font, Xanadu: The 9 Muses, The Door List, Tucked Away, Meeting Bingo, Commonwealth After Dark.
- Confirm cards show type, title, status, description, and action text.
- Confirm card images use contained media and do not crop important artwork.
- Confirm Xanadu displays the uploaded Muses image and the contain treatment looks acceptable.
- Confirm Alphabet Stitch shows `Create beautiful cross stitch text patterns in minutes.` and its detail view has an external `Open Site` link to `https://www.crossstitchtext.com/`.
- Confirm Batcave Font status is Live and the detail view shows a downloadable font action.
- Confirm Xanadu and The Door List do not show empty external/download links.
- Confirm Tucked Away shows status `In Progress`, action text `View Details`, and the cropped app image.
- Confirm Tucked Away detail links to `/tucked-away`.
- Confirm Meeting Bingo shows status `Work in Progress`, card action text `View Details`, the supplied app interface image, and a detail link to `https://meeting-bingo-rg4n.vercel.app/` that opens in a new tab.
- Confirm Commonwealth After Dark appears last, shows status `Passion Project`, card action text `View Details`, and uses `/images/lab/commonwealth-after-dark-1.jpg` as the card image.
- Confirm Commonwealth After Dark detail shows all three gallery images in order, with matching titles and captions, and that thumbnail selection works by mouse and keyboard.
- Confirm Commonwealth After Dark does not show an external link, empty link, or dead navigation action.
- Confirm detail views do not show a visible Focus section or focus tag list.
- Confirm shared previous/next arrow controls and ArrowLeft/ArrowRight move through projects.
- Confirm Escape, outside click, and close button close the detail view.

## Metadata And Assets

- Confirm `index.html` includes title, description, canonical URL, Open Graph, Twitter card, JSON-LD, theme colour, favicon, manifest, and social preview metadata.
- Confirm `tucked-away.html` includes its own title, description, canonical URL, Open Graph/Twitter metadata, and SoftwareApplication JSON-LD.
- Confirm favicon files exist in `public`.
- Confirm social preview image exists at `public/images/social/saras-portfolio-og.png`.
- Confirm the Tucked Away social image path points to an existing public image asset.

## Tucked Away

- Open `/tucked-away` directly and refresh; confirm the page still loads.
- Open `/tucked-away#privacy` directly; confirm the Privacy policy heading is visible.
- Confirm section links work for Overview, Why Tucked Away, Use cases, Features, and Privacy.
- Confirm `Back to Sara's Lab` returns to Sara's Lab.
- Confirm `Coming to Android` is visible once as a non-clicking status at the bottom of the Tucked Away navigation panel.
- Confirm missing screenshot assets show deliberate placeholders without broken image icons.
- Confirm supplied Tucked Away logo and screenshots render from `public/images/tucked-away`.
- Confirm the page presents one active cabinet panel rather than a long stacked marketing page.
- Confirm Overview, Why Tucked Away, Use cases, Features, and Privacy tabs are available.
- Confirm desktop uses a compact left navigation rail and active panel.
- Confirm tablet and mobile use horizontal tabs above the active panel.
- Confirm selecting each tab changes the active panel and updates the URL hash.
- Confirm direct links to `#overview`, `#why`, `#use-cases`, `#features`, and `#privacy` select the correct panel.
- Confirm Browser Back and Forward move between selected panels.
- Confirm the Overview heading is exactly `Turn a phone full of videos into a library you can actually use.`
- Confirm the Overview content area does not show a `Coming to Android` pill.
- Confirm the Overview `Private by design` row includes `Read the full privacy policy` and selecting it opens the Privacy panel.
- Confirm the page does not describe Tucked Away as an exercise-only app.
- Confirm Why Tucked Away contains the approved problem story on the left and three stacked benefit cards on the right.
- Confirm the Why Tucked Away eyebrow and heading span the full panel width above the body/card columns on desktop.
- Confirm How it works appears directly underneath Why Tucked Away with the approved three steps.
- Confirm How it works cards use dark green filled cards with light text, no separate number badges, and headings `1. Choose a folder`, `2. Organise your library`, and `3. Find and revisit`.
- Confirm there is only one visible How it works section on the full page.
- Confirm Use cases appears as the third Tucked Away nav item, shows the Setup screenshot directly beneath the intro copy, and contains the approved seven use-case cards.
- Confirm the Use cases Setup screenshot is not wrapped in a card, panel, frame, border, caption, or extra heading.
- Confirm Features contains the approved eight features and screenshot selectors for Catalogue, History, Filters, Video details, and Sorting.
- Confirm Setup is not shown as a Features screenshot selector.
- Confirm Features uses a light integrated screenshot gallery with one main screenshot and thumbnail selectors beside it on desktop.
- Confirm the Features heading spans above both columns, with feature cards and the screenshot gallery aligned beneath it.
- Confirm the old Before/After filename panel, long feature grid, and six-image screenshot selector are not visible.
- Confirm Tucked Away h1 and h2 headings are compact while h3/card headings retain their existing sizing.
- Confirm the four introductory privacy paragraphs display exactly.
- Confirm the Privacy introduction is normal dark text with a subtle accent, not a dark-green panel.
- Confirm Privacy policy subsections use compact dividers rather than large rounded cards, and `Last updated` sizes only to its content.
- Confirm Privacy contains no duplicate marketing blocks.
- Confirm `Privacy basics`, sample statistics, and unapproved exercise-only positioning are absent.
- Confirm the Contact subsection and support email placeholder are not visible.
- Confirm the Last updated subsection displays `Last updated: 28 July 2026`.
- Confirm mobile and tablet layouts have no horizontal overflow or nested scrollbars.
- Confirm page-specific metadata is present in `tucked-away.html`.

## Accessibility

- Confirm all icon-only buttons have accessible labels.
- Confirm images have useful alt text or accessible fallback labels.
- Confirm modals use `role="dialog"` and `aria-modal="true"`.
- Confirm keyboard focus is visible.
- Confirm focus returns to the triggering element after modal close.
- Confirm external links that open new tabs use `rel="noreferrer"` or `rel="noopener noreferrer"`.

## Security

- Run or review `functions/security-checks.md`.
- Confirm `pnpm run lint` and `pnpm test` pass.
- Confirm no active source uses `dangerouslySetInnerHTML`.
- Confirm no hardcoded secrets are present in active source or deployable public files.
- Confirm archived Crafter Dark PDFs/header documents remain outside `public`.
- Confirm archived AI POC files are not imported by active source.
