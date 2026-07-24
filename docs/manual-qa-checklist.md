# Manual QA Checklist

Use this checklist before release and after changes to shared navigation, filters, cards, image handling, modals, or page layout.

## Build

- Run `pnpm run lint`.
- Run `pnpm test`.
- Run `pnpm run build`.
- Confirm the build completes without errors.
- Confirm `dist/index.html` and bundled assets are generated.

## Navigation

- Confirm the active navigation items are Home, Crafter Dark, Photography, and Sara's Lab.
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

## Crafter Dark

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

- Confirm exactly five projects show in this order: Alphabet Stitch, Batcave Font, Xanadu: The 9 Muses, The Door List, Tucked Away.
- Confirm cards show type, title, status, description, and action text.
- Confirm card images use contained media and do not crop important artwork.
- Confirm Xanadu displays the uploaded Muses image and the contain treatment looks acceptable.
- Confirm Alphabet Stitch detail shows an external `Open project` link.
- Confirm Batcave Font status is Live and the detail view shows a downloadable font action.
- Confirm Xanadu, The Door List, and Tucked Away do not show empty external/download links.
- Confirm Tucked Away shows status `In Progress`, action text `View Details`, and the cropped app image.
- Confirm detail views do not show a visible Focus section or focus tag list.
- Confirm shared previous/next arrow controls and ArrowLeft/ArrowRight move through projects.
- Confirm Escape, outside click, and close button close the detail view.

## Metadata And Assets

- Confirm `index.html` includes title, description, Open Graph, Twitter card, theme colour, favicon, manifest, and social preview metadata.
- Confirm favicon files exist in `public`.
- Confirm social preview image exists at `public/images/social/saras-portfolio-og.png`.

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
