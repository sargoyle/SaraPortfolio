# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- Initial project setup
- 2026-06-30: Added a subtle global footer with copyright text. Files affected: `src/components/Footer.jsx`, `src/App.jsx`, `src/styles/global.css`, `docs/tasks.md`.
- 2026-05-10: Added repository structure audit cleanup activities to the production readiness task list. Files affected: `docs/tasks.md`.
- 2026-05-10: Added concise AI POC card summaries while preserving full modal descriptions. Files affected: `src/components/ProjectCard.jsx`, `src/data/aiPocs.js`, `docs/rules.md`, `docs/tasks.md`.
- 2026-05-05: Added photography metadata sync workflow and optional photo metadata display. Files affected: `scripts/sync-photography.mjs`, `package.json`, `src/components/PhotoCard.jsx`, `src/components/FullscreenImageModal.jsx`, `src/styles/global.css`, `docs/rules.md`.
- 2026-05-05: Added collaboration rules requiring documentation review, source-of-truth docs, and final task reporting format. Files affected: `docs/rules.md`.

### Changed
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
