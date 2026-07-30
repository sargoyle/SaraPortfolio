# Sara's Portfolio Tasks

This file is the source of truth for implementation order. Update task status here as work progresses.

Status key:

- `[x]` Done
- `[ ]` To do
- `[~]` In progress
- `[?]` Needs decision
- `[-]` Blocked

## Phase 1: Static Portfolio Foundation

Goal: Establish the maintainable React/Vite foundation and preserve the prototype's core experience.

- `[x]` Create Vite React project folder named `Sara's Portfolio`.
- `[x]` Add app entry files: `index.html`, `src/main.jsx`, `src/App.jsx`.
- `[x]` Add React/Vite configuration with `vite.config.js`.
- `[x]` Create project structure:
  - `src/components`
  - `src/data`
  - `src/pages`
  - `src/styles`
  - `public/images`
  - `docs`
- `[x]` Move hardcoded prototype data into:
  - `src/data/crafterProjects.js`
  - `src/data/photos.js`
  - `src/data/games.js`
  - `src/data/aiPocs.js`
- `[x]` Create reusable navigation component.
- `[x]` Create animated particle canvas background component.
- `[x]` Create reusable image fallback component.
- `[x]` Create reusable filter bar component.
- `[x]` Create reusable project card component.
- `[x]` Create reusable photo card component.
- `[x]` Create shared modal shell component.
- `[x]` Create fullscreen image modal for Photography.
- `[x]` Create project detail modal for Crafter Dark and AI POCs.
- `[x]` Create page components:
  - Home
  - Crafter Dark
  - Photography
  - Games
  - AI POCs
- `[x]` Preserve dark gradient, purple accent, glassmorphism card, glow, and fixed nav visual direction.
- `[x]` Implement client-side section navigation and active nav state.
- `[x]` Implement Crafter Dark filtering.
- `[x]` Implement Photography filtering.
- `[x]` Implement fullscreen project modals.
- `[x]` Implement fullscreen image viewer.
- `[x]` Implement Escape close, arrow-key navigation, previous/next controls, and outside-click modal close.
- `[x]` Implement responsive desktop, tablet, and mobile layout.
- `[x]` Add accessible labels, `aria-current`, `aria-pressed`, modal roles, and visible focus states.
- `[x]` Run production build successfully.
- `[x]` Smoke-test primary flows locally.

## Phase 2: Asset Completion

Goal: Populate the expected image library and remove unintended missing-asset errors.

- `[x]` Audit local workspace and Downloads for referenced image assets.
- `[x]` Add profile image at `public/images/about/profile.jpg`.
- `[x]` Add remaining Crafter Dark Own images.
  - `/images/crafter-dark/Xeno.JPG`
  - `/images/crafter-dark/Xeno-Finished.png`
  - `/images/crafter-dark/MothMan.png`
  - `/images/crafter-dark/FalloutGecko.png`
- `[x]` Add remaining Crafter Dark Pop Culture images referenced by `src/data/crafterProjects.js`.
  - `/images/crafter-dark/FalloutTimeline.png`
  - `/images/crafter-dark/FalloutTimeline-Finished.png`
- `[x]` Add Photography images referenced by `src/data/photos.js`; Sara confirmed the current Photography images look correct.
- `[x]` Pick up renamed uploaded Photography files as `Abstract Macro 1.JPG` through `Abstract Macro 15.JPG`.
- `[x]` Match uploaded When visions kaleid Photography images to existing Alien, Cat, Cat Eyes, Gecko, and Mothman placeholders.
- `[x]` Match uploaded Abstract Macro images to existing Abstract Macro placeholders and remove duplicate generated entries.
- `[x]` Match uploaded Xeno Photography image to existing Xeno placeholder.
- `[x]` Replace Photography data with the current images in `public/images/photography` and remove stale old photo references.
- `[x]` Match uploaded Crafter Dark images to expected project records with finished images as the second modal image.
- `[x]` Match uploaded Cells Crafter Dark images with the finished photo as the second modal image.
- `[x]` Match newly uploaded Crafter Dark Cooper Eyes, Grey, HAL 9000, Mr Handy Fudge, Pip-Boy, Raven Moon, and UFO images.
- `[x]` Add newly uploaded Crafter Dark projects to the Crafter Dark page and sort their images into the correct folders.
- `[x]` Extract uploaded Crafter Dark pattern sizes from PDF/DOCX documents and update matching project records.
- `[x]` Pick up latest Crafter Dark images and documents, add X-Files and Twin Peaks Socket projects, and update extracted pattern sizes.
- `[x]` Update Crafter Dark requested sizes, add finished-image placeholders for Moth Man and Gecko, and rename Groovie Goolies projects.
- `[x]` Add uploaded Blue Digital Bloom, Purple Digital Bloom, Raven Film Strip, Solar Swirl, Vortex, and Chaos Butterfly assets.
- `[x]` Close legacy Games image task; Sara confirmed game assets are complete and active Sara's Lab now uses `public/images/lab`.
  - `/images/games/9sisters-1.jpg`
  - `/images/games/9sisters-2.jpg`
- `[x]` Move AI POC image follow-ups to `archive/ai-pocs/README.md`; active site does not need these archived assets.
- `[x]` Create exact missing asset inventory in `docs/asset-inventory.md`.
- `[x]` Confirm filename casing matches active data paths exactly.
- `[x]` Load/build the site and verify intended active portfolio images no longer 404 by static asset path audit.
- `[x]` Review card image crops on desktop; Sara confirmed current imagery is acceptable.
- `[x]` Review card image crops on mobile; Sara confirmed current imagery is acceptable.
- `[x]` Review modal image sizing on desktop; Sara confirmed current imagery is acceptable.
- `[x]` Review modal image sizing on mobile; Sara confirmed current imagery is acceptable.
- `[x]` Decide whether any intentionally missing images should keep placeholders permanently; unfinished Crafter Dark pieces may keep in-progress placeholders until finished photos exist.

## Phase 3: Content Review

Goal: Make sure the portfolio reads cleanly, consistently, and accurately before launch.

- `[x]` Review Home page positioning copy.
- `[x]` Reposition Home page around cross-stitch, pattern-making, photography, games, and creative tools, with a two-column desktop layout.
- `[x]` Balance Home layout by placing profile photo, LinkedIn button, and intro in the left desktop column with mobile order preserved.
- `[x]` Update Home short intro wording to Sara's revised cross-stitch and image-led copy.
- `[x]` Confirm LinkedIn URL is correct; Sara tested it manually and confirmed it works.
- `[x]` Review About Sara copy for tone and accuracy.
- `[x]` Review all Crafter Dark titles, categories, sizes, and descriptions.
- `[x]` Review all Photography titles and categories.
- `[x]` Review 9 Sisters - Xanadu description.
- `[x]` Review all AI POC titles, descriptions, links, and screenshots.
- `[x]` Decide whether AI POC card previews should show shorter summaries while modals keep full descriptions.
- `[x]` Decide whether Games should have detail modals like Crafter Dark and AI POCs; Sara confirmed current Sara's Lab detail behaviour is fine with no changes needed.
- `[x]` Close external AI POC link confirmation as not needed for active site because AI POCs are archived.
- `[x]` Confirm terminology:
  - `AI POCs`
  - `When Stitches Kaleid`
  - `When visions kaleid`
  - `Pop Culture Inspired`
  - `Abstract Macro`

## Phase 4: UX and Accessibility QA

Goal: Ensure the implemented experience satisfies the design and app-flow PRDs.

- `[x]` Test keyboard-only navigation through top nav.
- `[x]` Test keyboard-only navigation through filters.
- `[x]` Test keyboard-only activation of project cards.
- `[x]` Test keyboard-only activation of photo cards.
- `[x]` Test Escape close on every modal type.
- `[x]` Test ArrowLeft and ArrowRight in Crafter Dark modal.
- `[x]` Test ArrowLeft and ArrowRight in Photography modal.
- `[x]` Test ArrowLeft and ArrowRight in AI POC modal.
- `[x]` Test focus restoration after modal close.
- `[x]` Test click-outside close on every modal type.
- `[x]` Test screen-reader-facing labels for icon-only controls.
- `[x]` Test active nav state is not color-only.
- `[x]` Test active filter state is not color-only.
- `[x]` Enforce square Crafter Dark image containers on listing cards and detail modal panels.
- `[x]` Update Crafter Dark listing images to contain full artwork inside square card frames.
- `[x]` Add complete subtle border around Crafter Dark listing card image frames.
- `[x]` Make Crafter Dark listing image borders wrapper-owned and consistently visible across varied image backgrounds.
- `[x]` Strengthen Crafter Dark listing image frame contrast so borders remain visible against white and dark artwork.
- `[x]` Replace Crafter Dark listing image display with a dedicated outer frame, inner inset, and contained image structure.
- `[x]` Simplify Crafter Dark listing thumbnails to one square image frame container with the only thumbnail border.
- `[x]` Constrain Crafter Dark thumbnail images to the square container size so tall images cannot overflow the frame.
- `[x]` Test responsive layout at:
  - 390px mobile
  - 768px tablet
  - 1280px desktop
- `[x]` Test text does not overflow nav buttons, filter buttons, cards, or modals.
- `[x]` Test page remains usable when images fail to load.
- `[x]` Fix Photography fullscreen modal spacing so opened photos do not sit underneath the fixed navigation.
- `[x]` Simplify Photography cards and fullscreen viewer to show only the photo name.
- `[x]` Hide visible Photography grid titles while preserving accessible photo labels.
- `[x]` Hide visible Photography detail modal titles while preserving accessible image labels.
- `[x]` Test menu navigation while Photography modal is focused and close modals on every nav click.
- `[x]` Center fullscreen previous and next chevron icons.
- `[x]` Prevent scrolled page content from showing through the fixed top navigation.

## Phase 5: Production Readiness

Goal: Prepare the project for handoff, version control, and deployment.

- `[x]` Add repository structure audit cleanup activities to the implementation task list.
- `[x]` Create root `functions/` documentation library for pages, list views, detail views, shared components, and reusable patterns.
- `[x]` Add subtle global footer with copyright notice.
- `[x]` Rename Games navigation and page heading to Sara's Lab while keeping existing game content.
- `[x]` Add `.gitignore`.
- `[x]` Add `README.md` with:
  - project overview
  - setup commands
  - build command
  - content-editing instructions
  - image path instructions
- `[x]` Remove `public/images/.gitkeep` once the image folder is confirmed tracked with real assets.
- `[x]` Decide whether uploaded pattern/header PDFs should remain publicly served or move to project documentation/source storage.
- `[x]` Move Crafter Dark pattern/header PDFs out of `public/images/crafter-dark`.
- `[x]` Add missing Fallout Timeline assets:
  - `public/images/crafter-dark/FalloutTimeline.png`
  - `public/images/crafter-dark/FalloutTimeline-Finished.png`
- `[x]` Close missing Games asset folder task; legacy game image requirements are archived and active Sara's Lab assets are complete.
  - `public/images/games/9sisters-1.jpg`
  - `public/images/games/9sisters-2.jpg`
- `[x]` Add initial Sara's Lab image assets for Alphabet Stitch, Batcave Font, and The Door List.
- `[x]` Move restored-AI-POC missing asset task to `archive/ai-pocs/README.md`.
- `[-]` Defer uppercase `/images/AIPOC` path decision unless AI POCs are deliberately restored.
- `[-]` Do not standardize uploaded image filenames to slug-style lowercase names for now; current paths work and renaming would add churn without user value.
- `[-]` Filename standardization migration not needed unless a future naming cleanup is explicitly requested.
- `[x]` Confirm no remaining `Pattern size varies` Crafter Dark records need resolution.
- `[x]` Re-run referenced asset path audit after asset decisions were resolved.
- `[x]` Add a lightweight smoke test script or documented manual QA checklist.
- `[x]` Extract Crafter Dark thumbnail handling into reusable `SquareImageFrame` and `CrafterDarkCard` components and update `functions/crafter-dark-list-view.md`.
- `[x]` Refactor Crafter Dark listing cards to use `CrafterDarkCard` and `SquareImageFrame`.
- `[x]` Review and align Crafter Dark function documentation with the implemented list card and square image frame behaviour.
- `[x]` Stabilise Crafter Dark list thumbnail DOM and CSS so all cards use identical square image frames.
- `[x]` Add consistent inner inset to Crafter Dark list thumbnails so images cannot touch frame borders.
- `[x]` Update Crafter Dark project data with size, chart size, colour count, category, and short description fields.
- `[x]` Display Crafter Dark structured metadata in list cards.
- `[x]` Display Crafter Dark structured metadata in detail view.
- `[x]` Add Science category to Crafter Dark filters.
- `[x]` Reintroduce `SquareImageFrame` fallback handling without changing the stable outer frame or thumbnail layout.
- `[-]` Do not extract a dedicated `GalleryImageCard` component for now; current card variants are not duplicated enough to justify the abstraction.
- `[-]` Do not add a reusable `PageHeader` pattern for now; current page headers are simple enough.
- `[x]` Add an automated or documented visual regression check for Crafter Dark thumbnail consistency.
- `[x]` Replace Sara's Lab single project content with four structured project cards.
- `[x]` Add Sara's Lab project detail view format.
- `[x]` Add Alphabet Stitch, Batcave Font, Xanadu: The 9 Muses, and The Door List to Sara's Lab data.
- `[x]` Update Sara's Lab function docs and test expectations.
- `[x]` Improve Sara's Lab list card layout and media presentation.
- `[x]` Redesign Sara's Lab project detail view.
- `[x]` Remove visible Focus section from Sara's Lab detail view.
- `[x]` Add previous and next navigation to Sara's Lab detail view.
- `[x]` Add shared fullscreen previous and next arrow controls to Sara's Lab detail view.
- `[x]` Remove inline Previous and Next buttons from Sara's Lab detail view.
- `[x]` Move Sara's Lab close button outside the modal project card and centre the shared close icon.
- `[x]` Make Sara's Lab list media use consistent contained image previews.
- `[x]` Move shared modal close controls outside the scrollable panel so Lab close buttons do not create scrollbars.
- `[x]` Keep Home About content directly connected to the hero copy during desktop resize.
- `[x]` Move the global footer directly below page content without forced empty scroll space.
- `[x]` Sort Crafter Dark listing cards alphabetically by visible title after filtering.
- `[x]` Hide Crafter Dark category metadata from listing cards.
- `[x]` Move Crafter Dark detail category display to a subtle bottom tag.
- `[x]` Widen Crafter Dark and Sara's Lab page intros so they do not wrap early on desktop.
- `[x]` Align Crafter Dark list thumbnail image boxes to a consistent top level and size.
- `[x]` Move Photography detail close button outside the photograph frame.
- `[x]` Remove AI POCs from active site navigation and page registry without deleting repository content.
- `[x]` Left-align the fixed top navigation button group.
- `[x]` Right-align the fixed top navigation button group.
- `[x]` Strengthen top navigation right alignment with a full-width flex row.
- `[x]` Mark Batcave Font as completed and add downloadable font file link.
- `[x]` Update Sara's Lab status labels for Batcave Font and Xanadu.
- `[x]` Move Crafter Dark images into one flat `public/images/crafter-dark` folder and update data/documentation paths.
- `[x]` Rotate the Alien photography image 90 degrees to match the intended site orientation.
- `[x]` Move newly uploaded root Crafter Dark assets into `public/images/crafter-dark` and attach them to Xeno, Mr Handy Fudge, and Fallout Timeline.
- `[x]` Constrain Sara's Lab list images with contained frame sizing so The Door List is not cropped or overflowing.
- `[x]` Fix modal close button alignment for Sara's Lab and shared modal behaviour where applicable.
- `[x]` Audit project for duplicate, old, and unused portfolio items.
- `[x]` Archive AI POC page, data, and old generic project card without deleting them.
- `[x]` Remove AI POC content from active navigation and page registry.
- `[x]` Update function documentation after cleanup.
- `[x]` Add manual security checks documentation.
- `[x]` Update Vite to a patched version for high/moderate audit advisories.
- `[x]` Re-run dependency audit and manual static security checks.
- `[ ]` Monitor or resolve remaining low transitive dependency advisories for `esbuild` and `@babel/core` when upstream Vite/plugin-react updates are available.
- `[x]` Review and archive legacy `src/data/games.js` now that Sara's Lab uses `src/data/labProjects.js`.
- `[ ]` Review old `.project-card-*` and `.poc-*` CSS selectors after archived AI POCs are no longer active.
- `[x]` Add an automated security/static check script for external link rel attributes, asset references, metadata, contact-link scope, and unsafe HTML usage.
- `[x]` Add final image assets for Sara's Lab project cards; Sara confirmed current Lab imagery is acceptable.
- `[x]` Add screenshots for Alphabet Stitch, Xanadu: The 9 Muses, The Door List, and Batcave Font; Sara confirmed the Xanadu treatment and current Lab imagery are acceptable.
- `[x]` Add Tucked Away to Sara's Lab with supplied image, In Progress status, custom card action label, and detail copy.
- `[x]` Update Tucked Away card action to `View Details` and refresh the Lab image path to the cropped asset.
- `[x]` Create standalone public Tucked Away product page at `/tucked-away` with full privacy-policy anchor at `/tucked-away#privacy`.
- `[x]` Add Tucked Away route metadata, Vercel rewrite support, sitemap entry, placeholders, and validation coverage.
- `[x]` Refine Tucked Away page typography, spacing, card density, screenshot presentation, and real image mapping without changing approved content.
- `[x]` Compact Tucked Away page length, consolidate green palette, align screenshot frame heights, and integrate the use-case screenshot into the grid without changing approved content.
- `[x]` Make a strict Tucked Away layout-compression pass by flattening stacked spacing, reducing oversized screenshot frames, tightening card padding, compacting privacy layout, and adding regression checks.
- `[x]` Redesign Tucked Away into a five-beat marketing page with hero/catalogue, why/benefits, process/use cases, feature screenshot showcase, privacy/CTA, selector interactions, and updated validation.
- `[x]` Correct Tucked Away layout grouping: transparent larger logo, phone-focused hero heading, Why/use-case grouping, process step row, feature/screenshot split, aligned Privacy containers, and overlap checks.
- `[x]` Remove the Tucked Away Privacy Contact placeholder and set the fixed Last updated date to `28 July 2026`.
- `[x]` Reduce Tucked Away page-scoped h1 and h2 typography while preserving h3 and card heading sizes.
- `[x]` Replace Tucked Away h1 and h2 clamp typography with exact fixed responsive sizes.
- `[x]` Rebuild Tucked Away as a compact five-panel interactive app showcase with hash-aware tabs.
- `[x]` Restore approved Tucked Away product copy, remove exercise-only positioning, and add content-lock validation.
- `[x]` Clean up the Tucked Away Overview hero with in-hero logo, single Coming to Android action, direct screenshot treatment, and one Private by design summary.
- `[x]` Correct the Tucked Away Overview Private by design row with a working Read the full privacy policy action.
- `[x]` Combine Tucked Away page two into a Why Tucked Away panel with inline How it works steps and remove the separate How panel.
- `[x]` Restore Tucked Away Use cases as the third nav panel and polish the Features screenshot gallery into a lighter integrated layout.
- `[x]` Move the Tucked Away `Coming to Android` status from the Overview content area to the bottom of the cabinet navigation.
- `[x]` Refine the Tucked Away Why panel with a full-width heading row and dark green How it works step cards.
- `[x]` Move Tucked Away How it works step numbers into the card headings and remove separate number badges.
- `[x]` Refine the Tucked Away Features panel so the heading spans above both columns and the screenshot gallery aligns with the feature cards.
- `[x]` Refine the Tucked Away Privacy panel by removing the dark intro panel and oversized subsection cards in favour of compact divider-based policy content.
- `[x]` Remove the narrow paragraph width constraint from the Tucked Away Overview `Private by design` section.
- `[x]` Move the Tucked Away Setup screenshot from the Features selector gallery to the Use cases intro area.
- `[x]` Increase the Tucked Away Use cases Setup screenshot size while keeping it unframed and in the left intro column.
- `[x]` Apply the shared Tucked Away screenshot shadow treatment to the Use cases Setup screenshot.
- `[x]` Remove visible wrapper-like styling from the Tucked Away Use cases Setup screenshot by matching the Overview rounded screenshot treatment.
- `[x]` Preserve the Tucked Away Use cases Setup screenshot's natural phone aspect ratio so it no longer renders as a wide pale panel.
- `[x]` Run `npm run build`.
- `[x]` Verify generated `dist` output.
- `[x]` Choose deployment target: Vercel with custom domain `https://saragillard.com`.
- `[x]` Configure production domain metadata, canonical URL, robots.txt, and sitemap.xml for `https://saragillard.com`.
- `[x]` Replace old role-led metadata with creative portfolio title and description across browser, search, social, manifest, and validation files.
- `[x]` Confirm deployment host is Vercel and the custom domain is connected externally.
- `[x]` Add production metadata:
  - page description
  - Open Graph title
  - Open Graph description
  - social preview image
  - favicon
- `[x]` Add favicon files and web app manifest to `public`.
- `[x]` Add social preview image at `public/images/social/saras-portfolio-og.png`.
- `[x]` Review active pages and components for accessibility labels, alt text, modal roles, and external link metadata.
- `[x]` Review and update function documentation and manual QA expectations against the current active site.
- `[x]` Update global typography to Playfair Display headings and Source Sans 3 body/interface text.
- `[x]` Add `pnpm run lint` and `pnpm test` scripts for static site validation.
- `[x]` Add Vercel host redirect config so `www.saragillard.com` redirects to `https://saragillard.com`.
- `[x]` Keep current single-page navigation for launch; direct section/project URLs are deferred.
- `[x]` Preload Crafter Dark finished/detail images in the background and on card focus/hover to reduce modal image wait time without changing source assets.
- `[x]` Add optimized Crafter Dark finished/detail display images and point detail views at lighter `-display.webp` assets while keeping original uploads untouched.
- `[x]` Rotate the optimized Xeno finished/detail display image back 90 degrees left so it matches the pattern orientation.
- `[x]` Update Xeno to a new corrected landscape display image URL so browser caching cannot keep showing the old rotated asset.
- `[x]` Verify production URL loads at `https://saragillard.com`.
- `[x]` Verify `robots.txt` and `sitemap.xml` return 200 on `https://saragillard.com`.
- `[-]` Verify production console has no unintended errors. Blocked by live-browser/tool access during final validation.

## Phase 6: Future Enhancements

Goal: Track useful improvements without letting them block the first polished launch.

- `[?]` Decide whether shareable URLs are required.
- `[ ]` If shareable URLs are approved, add routing or hash-based navigation.
- `[ ]` Add project-level deep links if routing is introduced.
- `[?]` Decide whether a CMS is needed after launch.
- `[ ]` Add analytics if visitor behavior needs to be measured.
- `[ ]` Add search if the portfolio grows beyond simple category browsing.
- `[ ]` Add tags beyond current category filters if needed.
- `[ ]` Add process notes or captions for individual images if desired.
- `[ ]` Add downloadable Crafter Dark pattern links if desired.
- `[x]` Add Sara's Lab card/detail view pattern for games, Batcave Font, creative tools, and prototypes.
- `[x]` Add Batcave Font project card when content and assets are ready.
- `[-]` Do not add a contact section for the current site; LinkedIn is the only approved public connect route.

## Current Open Questions

No current launch-blocking decisions. Sara confirmed single-page navigation for now, LinkedIn-only contact, and apex-domain preference with `www` redirecting to `https://saragillard.com`.
