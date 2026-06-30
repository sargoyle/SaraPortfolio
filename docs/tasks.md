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
  - `/images/crafter-dark/Own/Xeno.JPG`
  - `/images/crafter-dark/Own/Xeno-Finished.JPG`
  - `/images/crafter-dark/Own/MothMan.png`
  - `/images/crafter-dark/Own/FalloutGecko.png`
- `[-]` Add remaining Crafter Dark Pop Culture images referenced by `src/data/crafterProjects.js`. Blocked: source assets not found locally.
  - `/images/crafter-dark/pop/FalloutTimeline.png`
  - `/images/crafter-dark/pop/FalloutTimeline-Finished.png`
- `[-]` Add Photography images referenced by `src/data/photos.js`. Blocked: source assets not found locally.
- `[x]` Pick up renamed uploaded Photography files as `Abstract Macro 1.JPG` through `Abstract Macro 15.JPG`.
- `[x]` Match uploaded When visions kaleid Photography images to existing Alien, Cat, Cat Eyes, Gecko, and Mothman placeholders.
- `[x]` Match uploaded Abstract Macro images to existing Abstract Macro placeholders and remove duplicate generated entries.
- `[x]` Match uploaded Xeno Photography image to existing Xeno placeholder.
- `[x]` Match uploaded Crafter Dark images to expected project records with finished images as the second modal image.
- `[x]` Match uploaded Cells Crafter Dark images with the finished photo as the second modal image.
- `[x]` Match newly uploaded Crafter Dark Cooper Eyes, Grey, HAL 9000, Mr Handy Fudge, Pip-Boy, Raven Moon, and UFO images.
- `[x]` Add newly uploaded Crafter Dark projects to the Crafter Dark page and sort their images into the correct folders.
- `[x]` Extract uploaded Crafter Dark pattern sizes from PDF/DOCX documents and update matching project records.
- `[x]` Pick up latest Crafter Dark images and documents, add X-Files and Twin Peaks Socket projects, and update extracted pattern sizes.
- `[x]` Update Crafter Dark requested sizes, add finished-image placeholders for Moth Man and Gecko, and rename Groovie Goolies projects.
- `[-]` Add Games images. Blocked: source assets not found locally.
  - `/images/games/9sisters-1.jpg`
  - `/images/games/9sisters-2.jpg`
- `[-]` Add AI POC images referenced by `src/data/aiPocs.js`. Blocked: source assets not found locally.
- `[x]` Create exact missing asset inventory in `docs/asset-inventory.md`.
- `[-]` Confirm filename casing matches data paths exactly. Blocked until source assets are added.
- `[-]` Load the site and verify intended portfolio images no longer 404. Blocked until source assets are added.
- `[-]` Review card image crops on desktop. Blocked until source assets are added.
- `[-]` Review card image crops on mobile. Blocked until source assets are added.
- `[-]` Review modal image sizing on desktop. Blocked until source assets are added.
- `[-]` Review modal image sizing on mobile. Blocked until source assets are added.
- `[?]` Decide whether any intentionally missing images should keep placeholders permanently.

## Phase 3: Content Review

Goal: Make sure the portfolio reads cleanly, consistently, and accurately before launch.

- `[x]` Review Home page positioning copy.
- `[x]` Reposition Home page around cross-stitch, pattern-making, photography, games, and creative tools, with a two-column desktop layout.
- `[x]` Balance Home layout by placing profile photo, LinkedIn button, and intro in the left desktop column with mobile order preserved.
- `[x]` Update Home short intro wording to Sara's revised cross-stitch and image-led copy.
- `[?]` Confirm LinkedIn URL is correct. Automated verification was blocked by LinkedIn with HTTP 999; needs Sara confirmation.
- `[x]` Review About Sara copy for tone and accuracy.
- `[x]` Review all Crafter Dark titles, categories, sizes, and descriptions.
- `[x]` Review all Photography titles and categories.
- `[x]` Review 9 Sisters - Xanadu description.
- `[x]` Review all AI POC titles, descriptions, links, and screenshots.
- `[x]` Decide whether AI POC card previews should show shorter summaries while modals keep full descriptions.
- `[?]` Decide whether Games should have detail modals like Crafter Dark and AI POCs.
- `[?]` Confirm all external AI POC links open correctly in new tabs. Automated checks reached Claude but received HTTP 403, so manual browser confirmation is still needed.
- `[x]` Confirm terminology:
  - `AI POCs`
  - `When Stitches Kaleid`
  - `When visions kaleid`
  - `Pop Culture Inspired`
  - `Abstract Macro`

## Phase 4: UX and Accessibility QA

Goal: Ensure the implemented experience satisfies the design and app-flow PRDs.

- `[ ]` Test keyboard-only navigation through top nav.
- `[ ]` Test keyboard-only navigation through filters.
- `[ ]` Test keyboard-only activation of project cards.
- `[ ]` Test keyboard-only activation of photo cards.
- `[ ]` Test Escape close on every modal type.
- `[ ]` Test ArrowLeft and ArrowRight in Crafter Dark modal.
- `[ ]` Test ArrowLeft and ArrowRight in Photography modal.
- `[ ]` Test ArrowLeft and ArrowRight in AI POC modal.
- `[ ]` Test focus restoration after modal close.
- `[ ]` Test click-outside close on every modal type.
- `[ ]` Test screen-reader-facing labels for icon-only controls.
- `[ ]` Test active nav state is not color-only.
- `[ ]` Test active filter state is not color-only.
- `[x]` Enforce square Crafter Dark image containers on listing cards and detail modal panels.
- `[x]` Update Crafter Dark listing images to contain full artwork inside square card frames.
- `[x]` Add complete subtle border around Crafter Dark listing card image frames.
- `[x]` Make Crafter Dark listing image borders wrapper-owned and consistently visible across varied image backgrounds.
- `[x]` Strengthen Crafter Dark listing image frame contrast so borders remain visible against white and dark artwork.
- `[x]` Replace Crafter Dark listing image display with a dedicated outer frame, inner inset, and contained image structure.
- `[x]` Simplify Crafter Dark listing thumbnails to one square `.crafter-thumbnail` container with the only thumbnail border.
- `[x]` Constrain Crafter Dark thumbnail images to the square container size so tall images cannot overflow the frame.
- `[ ]` Test responsive layout at:
  - 390px mobile
  - 768px tablet
  - 1280px desktop
- `[ ]` Test text does not overflow nav buttons, filter buttons, cards, or modals.
- `[ ]` Test page remains usable when images fail to load.
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
- `[x]` Add subtle global footer with copyright notice.
- `[x]` Rename Games navigation and page heading to Sara's Lab while keeping existing game content.
- `[ ]` Add `.gitignore`.
- `[ ]` Add `README.md` with:
  - project overview
  - setup commands
  - build command
  - content-editing instructions
  - image path instructions
- `[ ]` Remove `public/images/.gitkeep` once the image folder is confirmed tracked with real assets.
- `[ ]` Decide whether uploaded pattern/header PDFs should remain publicly served or move to project documentation/source storage.
- `[ ]` If approved, move Crafter Dark pattern/header PDFs out of `public/images/crafter-dark`.
- `[ ]` Add missing Fallout Timeline assets:
  - `public/images/crafter-dark/pop/FalloutTimeline.png`
  - `public/images/crafter-dark/pop/FalloutTimeline-Finished.png`
- `[ ]` Add missing Games asset folder and images:
  - `public/images/games/9sisters-1.jpg`
  - `public/images/games/9sisters-2.jpg`
- `[ ]` Add missing AI POC asset folder and screenshots referenced by `src/data/aiPocs.js`.
- `[?]` Decide whether to keep uppercase `/images/AIPOC` paths or standardize to lowercase `/images/ai-pocs`.
- `[?]` Decide whether to standardize uploaded image filenames to slug-style lowercase names.
- `[ ]` If filename standardization is approved, update image asset filenames and matching data paths in one coordinated pass.
- `[ ]` Resolve remaining `Pattern size varies` Crafter Dark records where pattern documents or dimensions are available.
- `[ ]` Re-run referenced asset path audit after missing assets and naming decisions are resolved.
- `[ ]` Add a lightweight smoke test script or documented manual QA checklist.
- `[ ]` Run `npm run build`.
- `[ ]` Verify generated `dist` output.
- `[?]` Choose deployment target:
  - Netlify
  - Vercel
  - GitHub Pages
  - another static host
- `[ ]` Configure deployment for selected host.
- `[ ]` Add production metadata:
  - page description
  - Open Graph title
  - Open Graph description
  - social preview image
  - favicon
- `[ ]` Verify production URL loads.
- `[ ]` Verify production console has no unintended errors.

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
- `[ ]` Add a contact section if LinkedIn is not enough.

## Current Open Questions

1. Are all referenced image assets available now, and should I copy them into `public/images` if they exist elsewhere?
2. Should Games remain a static page, or should game concepts also open in fullscreen detail modals?
3. Do you want direct URLs for each section or project in this release, or is the current single-page state navigation enough for launch?
4. Which deployment target should this project optimize for?
