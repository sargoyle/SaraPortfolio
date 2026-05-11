# Sara's Portfolio Masterplan

## Vision

Sara's Portfolio is a polished personal portfolio website for Sara, built to present her creative technology practice as one coherent body of work. The site should feel dark, expressive, curious, and refined, preserving the existing purple glassmorphism aesthetic while making the content easier to maintain and expand.

The portfolio exists to help visitors quickly understand Sara's creative range across:

- Creative technology and AI-assisted experimentation
- Crafter Dark cross-stitch projects
- Photography and kaleidoscopic visual studies
- Board game concepts
- AI proof-of-concept projects

The product's North Star is:

> Make Sara's creative work feel discoverable, credible, memorable, and alive without losing the handmade, experimental personality of the prototype.

## Core Purpose

The website should act as a durable public home for Sara's portfolio. It should allow Sara to add, update, and reorganize work without needing to edit one large component or understand complex infrastructure.

The site should communicate:

- Sara is a creative technologist with a strong visual identity.
- Sara's work spans physical craft, photography, games, and AI.
- Each portfolio item has enough context to be understood as a complete piece, not just an image thumbnail.
- The experience is polished enough for professional sharing, including LinkedIn, job opportunities, collaborators, galleries, and creative peers.

## Target Users

### Primary User: Portfolio Visitor

Visitors may include hiring managers, collaborators, creative peers, clients, friends, and people discovering Sara's work through LinkedIn.

Needs:

- Understand who Sara is within the first few seconds.
- Browse work by category without friction.
- Open items for larger images and richer descriptions.
- Access relevant external links for AI proof-of-concepts.
- Use the site comfortably on desktop and mobile.

Success for this user:

- They understand Sara's positioning.
- They can navigate to the category they care about.
- They can inspect work in detail.
- They can connect with Sara through LinkedIn.

### Secondary User: Sara as Content Maintainer

Sara needs to maintain and extend the site over time.

Needs:

- Add new portfolio items by editing structured data files.
- Preserve image path conventions.
- Avoid touching modal, navigation, or layout code for routine updates.
- Keep copy, categories, sizes, links, and images easy to find.

Success for this user:

- New work can be added in minutes.
- Existing work can be edited without fear of breaking the app.
- Project organization remains understandable to a non-developer.

### Tertiary User: Developer

A future developer may extend the site, improve accessibility, add routing, or connect a CMS.

Needs:

- Clear architecture and data model documentation.
- Stable component boundaries.
- Explicit interaction requirements.
- Known assumptions and non-goals.

Success for this user:

- They can onboard quickly.
- They can modify one area without unintended side effects.
- They understand which choices are intentional.

## Value Proposition

Sara's Portfolio brings together diverse creative work in one elegant, immersive website. It preserves the prototype's personality while replacing the single large component with maintainable React structure.

Primary value:

- A credible professional portfolio that still feels personal and experimental.

Supporting value:

- Fast static site architecture.
- No database or backend maintenance.
- Content separated into simple data files.
- Strong visual identity.
- Interactive browsing through filters and fullscreen modals.
- Graceful handling of missing image assets.

## Product Principles

1. Preserve Sara's identity.
   The site should not drift into a generic portfolio template. Dark gradients, purple accents, glass cards, soft glow, and animated particles are part of the product identity.

2. Content first, atmosphere second.
   Visual effects should support the work, not obscure it. Images, titles, descriptions, and links must remain readable.

3. Static until there is a clear reason not to be.
   A database or CMS is not required at this stage. Data files are the source of truth.

4. Maintainable by default.
   New content should be added through `src/data` files. Shared UI behavior should live in reusable components.

5. Accessible without becoming plain.
   Buttons, filters, navigation, and modals should remain keyboard-accessible and screen-reader-friendly while preserving the visual style.

## Success Metrics

Because this is an early portfolio site, success should be measured with a mix of quality, usability, and content-completeness metrics.

### Launch Quality Goals

- Site builds successfully with `npm run build`.
- No runtime JavaScript errors during primary browsing flows.
- All primary sections are reachable from the navigation.
- Crafter Dark filters return correct item counts.
- Photography filters return correct item counts.
- Fullscreen modals open and close via click, Escape, and outside click.
- Arrow keys and previous/next buttons move between modal items.
- Missing image assets show graceful placeholders.
- Mobile layout is usable at common phone widths.

### Content Goals

- Home page includes Sara's name, subtitle, profile image path, LinkedIn link, short description, and About section.
- Crafter Dark includes all existing cross-stitch projects from the prototype.
- Photography includes all existing photo records from the prototype.
- Games includes 9 Sisters - Xanadu.
- AI POCs includes all existing proof-of-concept projects and their external links.

### User Experience Goals

- Visitors can understand the site purpose within 10 seconds.
- Visitors can reach any primary section in one click/tap.
- Visitors can open a project detail view in one click/tap from a gallery card.
- Visitors can return from modals without losing page context.

### Maintainability Goals

- A new Crafter Dark project can be added by editing `src/data/crafterProjects.js`.
- A new photo can be added by editing `src/data/photos.js`.
- A new AI POC can be added by editing `src/data/aiPocs.js`.
- A new page should be possible by adding a page component and registering it in `App.jsx` and `Navigation.jsx`.

## Scope

### In Scope

- Single-page React/Vite app.
- Client-side state for navigation, filters, and modals.
- Static data files.
- Responsive UI.
- Animated particle canvas background.
- Image fallbacks.
- External links for AI POCs.
- Accessible nav, buttons, filters, and modal controls.

### Out of Scope for Current Version

- Database.
- Authentication.
- Admin editing interface.
- CMS integration.
- Contact form.
- Analytics dashboard.
- Server-side rendering.
- Blog or long-form article system.
- E-commerce or purchasing flows.

## Future Opportunities

Potential future enhancements:

- Add real URL routing for direct links to sections or projects.
- Add metadata for richer social sharing.
- Add a lightweight CMS once content updates become frequent.
- Add project tags beyond the current category filters.
- Add image captions and process notes.
- Add downloadable pattern links for Crafter Dark if desired.
- Add analytics to understand which sections visitors use most.
- Add automated accessibility tests and visual regression tests.

