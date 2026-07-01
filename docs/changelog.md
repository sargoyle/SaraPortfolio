# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- Initial project setup
- 2026-07-01: Added structured Sara's Lab project data, reusable Lab card/detail components, Lab function docs, and initial Lab images. Files affected: `src/data/labProjects.js`, `src/components/LabProjectCard.jsx`, `src/components/LabProjectDetail.jsx`, `src/components/LabProjectDetailModal.jsx`, `functions/saras-lab-page.md`, `functions/saras-lab-list-view.md`, `functions/saras-lab-detail-view.md`, `functions/lab-project-card.md`, `functions/lab-project-detail.md`, `public/images/lab/*`, `docs/tasks.md`.
- 2026-07-01: Added new Crafter Dark assets for Blue Digital Bloom, Purple Digital Bloom, Raven Film Strip, Solar Swirl, Vortex, and Chaos Butterfly. Files affected: `public/images/crafter-dark/Own/*`, `public/images/crafter-dark/pop/*`.
- 2026-06-30: Added project README with setup, build, content editing, image path, metadata, and documentation guidance. Files affected: `README.md`, `docs/tasks.md`.
- 2026-06-30: Added reusable `SquareImageFrame` and `CrafterDarkCard` components for Crafter Dark listing thumbnails and cards. Files affected: `src/components/SquareImageFrame.jsx`, `src/components/CrafterDarkCard.jsx`, `src/pages/CrafterDark.jsx`, `src/components/ProjectCard.jsx`, `src/styles/global.css`, `functions/crafter-dark-list-view.md`, `functions/shared-card-components.md`, `functions/shared-image-components.md`, `docs/tasks.md`.
- 2026-06-30: Created root `functions/` documentation library covering pages, list/detail views, shared components, image rules, modal behaviour, responsive layout, and visual design guidance. Files affected: `functions/*.md`, `docs/tasks.md`, `docs/rules.md`.
- 2026-06-30: Added a subtle global footer with copyright text. Files affected: `src/components/Footer.jsx`, `src/App.jsx`, `src/styles/global.css`, `docs/tasks.md`.
- 2026-05-10: Added repository structure audit cleanup activities to the production readiness task list. Files affected: `docs/tasks.md`.
- 2026-05-10: Added concise AI POC card summaries while preserving full modal descriptions. Files affected: `src/components/ProjectCard.jsx`, `src/data/aiPocs.js`, `docs/rules.md`, `docs/tasks.md`.
- 2026-05-05: Added photography metadata sync workflow and optional photo metadata display. Files affected: `scripts/sync-photography.mjs`, `package.json`, `src/components/PhotoCard.jsx`, `src/components/FullscreenImageModal.jsx`, `src/styles/global.css`, `docs/rules.md`.
- 2026-05-05: Added collaboration rules requiring documentation review, source-of-truth docs, and final task reporting format. Files affected: `docs/rules.md`.

### Changed
- 2026-07-01: Removed inline Previous/Next buttons from Sara's Lab detail views and standardised Lab card previews to contained media. Files affected: `src/components/LabProjectDetail.jsx`, `src/components/LabProjectDetailModal.jsx`, `src/data/labProjects.js`, `src/styles/global.css`, `functions/saras-lab-detail-view.md`, `functions/saras-lab-list-view.md`, `functions/lab-project-card.md`, `docs/tasks.md`.
- 2026-07-01: Enabled shared fullscreen previous/next arrow controls on Sara's Lab detail modals. Files affected: `src/components/LabProjectDetailModal.jsx`, `functions/saras-lab-detail-view.md`, `docs/tasks.md`.
- 2026-07-01: Polished Sara's Lab card media, intro layout, and project detail view with controlled media fit, inline previous/next navigation, and no visible Focus section. Files affected: `src/pages/Games.jsx`, `src/data/labProjects.js`, `src/components/LabProjectCard.jsx`, `src/components/LabProjectDetail.jsx`, `src/components/LabProjectDetailModal.jsx`, `src/styles/global.css`, `functions/saras-lab-page.md`, `functions/saras-lab-list-view.md`, `functions/saras-lab-detail-view.md`, `functions/lab-project-card.md`, `functions/lab-project-detail.md`, `docs/tasks.md`.
- 2026-07-01: Updated Crafter Dark page tagline to include original designs, pop-culture pieces, science-inspired patterns, and stitched experiments. Files affected: `src/pages/CrafterDark.jsx`.
- 2026-07-01: Replaced the old Sara's Lab single-project content with a four-project gallery and modal detail flow. Files affected: `src/pages/Games.jsx`, `src/styles/global.css`, `docs/tasks.md`.
- 2026-07-01: Updated Crafter Dark project data and UI to use structured category, 18-count size, chart size, colour count, and short-description metadata, including the Science filter. Files affected: `src/data/crafterProjects.js`, `src/pages/CrafterDark.jsx`, `src/components/CrafterDarkCard.jsx`, `src/components/ProjectDetailModal.jsx`, `src/styles/global.css`, `functions/crafter-dark-page.md`, `functions/crafter-dark-list-view.md`, `functions/crafter-dark-detail-view.md`, `docs/tasks.md`.
- 2026-07-01: Added a consistent inner inset to Crafter Dark listing thumbnails so images cannot visually touch or hide the frame border. Files affected: `src/styles/global.css`, `functions/crafter-dark-list-view.md`, `docs/tasks.md`.
- 2026-06-30: Stabilised Crafter Dark listing thumbnail DOM and CSS so `SquareImageFrame` renders one predictable `div > img` structure and the pseudo-element owns the only visible thumbnail border. Files affected: `src/components/SquareImageFrame.jsx`, `src/components/CrafterDarkCard.jsx`, `src/styles/global.css`, `functions/crafter-dark-list-view.md`, `docs/tasks.md`.
- 2026-06-30: Expanded `.gitignore` for Vite build output, coverage, caches, environment overrides, editor folders, and OS files. Files affected: `.gitignore`, `docs/tasks.md`.
- 2026-06-30: Completed Phase 4 UX and accessibility QA covering keyboard-accessible controls, modal close/navigation behaviour, active states, responsive breakpoints, text overflow, and missing-image fallbacks. Files affected: `docs/tasks.md`.
- 2026-06-30: Aligned Crafter Dark function documentation with the implemented `CrafterDarkCard` and `SquareImageFrame` refactor, and added Crafter-specific card/frame selectors to prevent shared ProjectCard image rules affecting the listing. Files affected: `functions/crafter-dark-page.md`, `functions/crafter-dark-list-view.md`, `src/styles/global.css`, `docs/tasks.md`.
- 2026-06-30: Constrained Crafter Dark thumbnail images to the square container size so tall images cannot overflow the frame. Files affected: `src/styles/global.css`, `docs/tasks.md`.
- 2026-06-30: Simplified Crafter Dark listing thumbnails to one square `.crafter-thumbnail` container with the only thumbnail border. Files affected: `src/components/ProjectCard.jsx`, `src/styles/global.css`, `docs/tasks.md`.
- 2026-06-30: Replaced Crafter Dark listing image display with a dedicated outer frame, inner inset, and contained image structure. Files affected: `src/components/ProjectCard.jsx`, `src/pages/CrafterDark.jsx`, `src/styles/global.css`, `docs/tasks.md`.
- 2026-06-30: Improved Crafter Dark listing image frame contrast so borders stay visible against white and dark artwork. Files affected: `src/styles/global.css`, `docs/tasks.md`.
- 2026-06-30: Strengthened Crafter Dark listing image frame borders so every card uses the same wrapper-owned border treatment. Files affected: `src/styles/global.css`, `docs/tasks.md`.
- 2026-06-30: Added a complete subtle border around Crafter Dark listing card image frames. Files affected: `src/styles/global.css`, `docs/tasks.md`.
- 2026-06-30: Changed Crafter Dark listing card images to show full artwork inside square frames instead of cropping. Files affected: `src/styles/global.css`, `docs/tasks.md`.
- 2026-06-30: Enforced square Crafter Dark card images and detail image panels without editing source assets. Files affected: `src/styles/global.css`, `docs/tasks.md`.
- 2026-06-30: Updated the Home short intro wording. Files affected: `src/pages/Home.jsx`, `docs/tasks.md`.
- 2026-06-30: Balanced the Home page two-column layout by moving the LinkedIn button and intro under the profile image, and removed visible Photography detail modal titles. Files affected: `src/pages/Home.jsx`, `src/components/FullscreenImageModal.jsx`, `src/styles/global.css`, `docs/tasks.md`.
- 2026-06-30: Reworked the Home page copy and layout to centre Sara's cross-stitch, pattern-making, photography, games, and creative tools. Files affected: `src/pages/Home.jsx`, `src/styles/global.css`, `docs/rules.md`, `docs/tasks.md`.
- 2026-06-30: Renamed the Games navigation/page heading to Sara's Lab and hid visible Photography grid titles while preserving accessible labels. Files affected: `src/components/Navigation.jsx`, `src/pages/Games.jsx`, `src/components/PhotoCard.jsx`, `src/App.jsx`, `docs/tasks.md`.
- 2026-05-10: Reviewed and tightened Home and AI POC copy for portfolio accuracy, punctuation, and card readability. Files affected: `src/pages/Home.jsx`, `src/data/aiPocs.js`, `docs/tasks.md`.
- 2026-05-06: Updated Crafter Dark metadata with requested pattern sizes, added finished-image in-progress placeholders for Moth Man and Gecko, and renamed Bella, Drac, and Frankie with the Groovie Goolies prefix. Files affected: `src/data/crafterProjects.js`, `public/images/crafter-dark/Own/finished-in-progress.svg`, `docs/asset-inventory.md`, `docs/tasks.md`.
- 2026-05-06: Picked up latest Crafter Dark images, connected remaining Own assets, and added Twin Peaks Socket, X-Files Aliens, and X-Files Hand with sizes extracted from uploaded PDFs. Files affected: `src/data/crafterProjects.js`, `docs/asset-inventory.md`, `docs/tasks.md`.
- 2026-05-06: Extracted pattern dimensions from uploaded Crafter Dark PDF/DOCX documents and updated matching project sizes. Files affected: `src/data/crafterProjects.js`, `docs/tasks.md`.
- 2026-05-06: Added newly uploaded Crafter Dark projects to the Crafter Dark page and sorted their images into Own and Pop Culture folders. Files affected: `src/data/crafterProjects.js`, `docs/asset-inventory.md`, `docs/tasks.md`.
- 2026-05-06: Matched newly uploaded Crafter Dark Cooper Eyes, Grey, HAL 9000, Mr Handy Fudge, Pip-Boy, Raven Moon, and UFO assets to their project records, with finished photos assigned as second images where available. Files affected: `src/data/crafterProjects.js`, `docs/asset-inventory.md`, `docs/tasks.md`.
- 2026-05-05: Connected the uploaded Home profile image by normalising it to the expected `public/images/about/profile.jpg` path. Files affected: `public/images/about/profile.jpg`, `docs/asset-inventory.md`, `docs/tasks.md`.
- 2026-05-05: Matched uploaded Cells Crafter Dark assets to the Cells project and assigned the finished photo as the second image. Files affected: `src/data/crafterProjects.js`, `docs/asset-inventory.md`, `docs/tasks.md`.
- 2026-05-05: Matched uploaded Crafter Dark assets to project records and assigned finished photos as each matched project's second image. Files affected: `src/data/crafterProjects.js`, `docs/asset-inventory.md`, `docs/tasks.md`.
- 2026-05-05: Adjusted Photography fullscreen modal spacing below the fixed navigation and simplified photo card/modal text to show only photo names. Files affected: `src/components/PhotoCard.jsx`, `src/components/FullscreenImageModal.jsx`, `src/components/ModalShell.jsx`, `src/styles/global.css`, `docs/tasks.md`, `docs/rules.md`.
- 2026-05-05: Updated the required assistant response salutation from `ISara's Portfolio` to `Sara's Portfolio`. Files affected: `docs/rules.md`.
- 2026-05-05: Updated uploaded Photography entries to use renamed `Abstract Macro 1.JPG` through `Abstract Macro 15.JPG` asset names. Files affected: `src/data/photos.js`, `docs/asset-inventory.md`, `docs/tasks.md`.
- 2026-05-05: Matched uploaded When visions kaleid Photography images to existing Alien, Cat, Cat Eyes, Gecko, and Mothman placeholder records. Files affected: `src/data/photos.js`, `docs/asset-inventory.md`, `docs/tasks.md`.
- 2026-05-05: Matched uploaded Abstract Macro images to the original Abstract Macro placeholder records and removed duplicate generated records. Files affected: `src/data/photos.js`, `docs/asset-inventory.md`, `docs/tasks.md`.
- 2026-05-05: Matched uploaded Xeno Photography image to the existing Xeno placeholder record. Files affected: `src/data/photos.js`, `docs/asset-inventory.md`, `docs/tasks.md`.

### Fixed
- 2026-07-01: Moved modal close controls outside the scrollable panel and constrained Sara's Lab card images with contained frame sizing to prevent scrollbars and cropped or overflowing Lab previews. Files affected: `src/components/ModalShell.jsx`, `src/styles/global.css`, `functions/modal-system.md`, `functions/saras-lab-list-view.md`, `docs/tasks.md`.
- 2026-07-01: Centered the shared fullscreen close icon and moved the Sara's Lab close button outside the modal project card. Files affected: `src/components/ModalShell.jsx`, `src/styles/global.css`, `functions/modal-system.md`, `docs/tasks.md`.
- 2026-07-01: Aligned the shared fullscreen close button to the modal panel so detail views do not place close controls at the far viewport edge. Files affected: `src/styles/global.css`, `functions/modal-system.md`.
- 2026-07-01: Raised the fullscreen modal stacking layer so close and navigation controls remain clickable above the fixed site navigation. Files affected: `src/styles/global.css`.
- 2026-05-05: Fixed nav clicks while a Photography modal is focused so current-section nav clicks close the modal, and replaced fullscreen previous/next text chevrons with centered SVG icons. Files affected: `src/App.jsx`, `src/components/ModalShell.jsx`, `src/styles/global.css`, `docs/tasks.md`.
- 2026-05-05: Prevented scrolled page content from showing through the fixed top navigation by strengthening the nav background layer and shadow. Files affected: `src/styles/global.css`, `docs/tasks.md`.

---

**Format for new entries:**
- **Added** for new features
- **Changed** for changes in existing functionality
- **Fixed** for bug fixes
- **Removed** for removed features
- **Security** for security improvements

**Rules:**
- Add a new entry after every completed task or group of related tasks
- Include the date, a short description, and files affected
- This is a historical log — never edit or delete past entries
