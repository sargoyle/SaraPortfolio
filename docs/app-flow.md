# Sara's Portfolio App Flow PRD

## Product Skeleton

Sara's Portfolio is a single-page application with five primary sections:

1. Home
2. Crafter Dark
3. Photography
4. Games
5. AI POCs

Navigation is state-based in the current version. Selecting a nav button updates the active page without changing the URL.

Global persistent elements:

- Fixed top navigation
- Animated particle background
- Dark gradient page background

## Primary User Journeys

### Journey 1: First-Time Visitor Understands Sara

Entry point:

- Visitor lands on Home.

Flow:

1. Visitor sees `Sara's Portfolio`.
2. Visitor reads subtitle: `Creative Technologist & AI Artist`.
3. Visitor sees profile image or fallback.
4. Visitor reads short description.
5. Visitor can select LinkedIn link.
6. Visitor reads About Sara content.
7. Visitor chooses a portfolio section from navigation.

Expected outcome:

- Visitor understands Sara's creative technology positioning and has a clear path to browse work.

Edge cases:

- Profile image missing: show fallback placeholder.
- LinkedIn opens in a new tab.
- Mobile screen: nav remains horizontally scrollable.

### Journey 2: Visitor Browses Crafter Dark

Entry point:

- Visitor selects `Crafter Dark` from nav.

Flow:

1. App renders Crafter Dark page.
2. Visitor reads section title and description.
3. Visitor sees filters:
   - All
   - When Stitches Kaleid
   - Pop Culture Inspired
4. Visitor selects a filter.
5. Project grid updates to matching projects.
6. Visitor selects a project card.
7. Fullscreen project modal opens.
8. Visitor inspects project title, category, size, images, and description.
9. Visitor uses previous/next controls or arrow keys.
10. Visitor closes modal via close button, Escape, or outside click.
11. Visitor returns to the filtered project grid.

Expected outcome:

- Visitor can browse all cross-stitch work and inspect details without losing context.

State transitions:

- `selectedFilter` updates when a filter is clicked.
- `activeProject` changes from `null` to selected project when card opens.
- `activeProject` changes to adjacent filtered project on previous/next.
- `activeProject` returns to `null` when modal closes.

Edge cases:

- Missing project image: fallback placeholder appears.
- Filtered result set has one item: previous/next loops to the same item.
- Long description: modal content scrolls.
- Mobile screen: card grid and project image grid collapse to one column.

### Journey 3: Visitor Browses Photography

Entry point:

- Visitor selects `Photography` from nav.

Flow:

1. App renders Photography page.
2. Visitor reads section title and description.
3. Visitor sees filters:
   - All
   - Abstract Macro
   - When visions kaleid
4. Visitor selects a filter.
5. Photo grid updates to matching photos.
6. Visitor selects a photo card.
7. Fullscreen image viewer opens.
8. Visitor uses previous/next controls or arrow keys to move through filtered photos.
9. Visitor closes viewer via close button, Escape, or outside click.
10. Visitor returns to the filtered photo grid.

Expected outcome:

- Visitor can inspect photography at larger size and browse within the selected category.

State transitions:

- `selectedFilter` updates when a filter is clicked.
- `activePhoto` changes from `null` to selected photo when card opens.
- `activePhoto` changes to adjacent filtered photo on previous/next.
- `activePhoto` returns to `null` when modal closes.

Edge cases:

- Missing photo image: fallback placeholder appears.
- Long image loads fail: fallback preserves layout.
- Mobile screen: grid collapses to one column.

### Journey 4: Visitor Reads Game Concept

Entry point:

- Visitor selects `Games` from nav.

Flow:

1. App renders Games page.
2. Visitor reads section title and description.
3. Visitor sees 9 Sisters - Xanadu card/content section.
4. Visitor views game images.
5. Visitor reads long-form game concept description.

Expected outcome:

- Visitor understands the board game concept and Sara's role in its development.

State transitions:

- No modal state currently required for Games.
- Page is static, driven by `games` data.

Edge cases:

- Missing game images: fallback placeholders appear.
- Long description: text preserves paragraph breaks.
- Future multiple games: each game renders as a separate content block.

### Journey 5: Visitor Explores AI Proofs of Concept

Entry point:

- Visitor selects `AI POCs` from nav.

Flow:

1. App renders AI POCs page.
2. Visitor reads section title and description.
3. Visitor sees AI POC cards.
4. Visitor selects a POC card.
5. Fullscreen project modal opens.
6. Visitor views title, images, description, and optional external links.
7. Visitor can select an external link if present.
8. Visitor uses previous/next controls or arrow keys.
9. Visitor closes modal via close button, Escape, or outside click.

Expected outcome:

- Visitor understands Sara's AI experimentation and can open linked artifacts where available.

State transitions:

- `activePoc` changes from `null` to selected POC when card opens.
- `activePoc` changes to adjacent POC on previous/next.
- `activePoc` returns to `null` when modal closes.

Edge cases:

- POC has no links: links area is omitted.
- POC has one image: single image layout is used.
- POC has multiple images: grid layout is used.
- External link opens in a new tab.
- Missing image: fallback placeholder appears.

## Screen-by-Screen Requirements

### Home Screen

Required content:

- H1: `Sara's Portfolio`
- Subtitle: `Creative Technologist & AI Artist`
- Profile image from `/images/about/profile.jpg`
- LinkedIn link
- Short description
- About Sara section

Required interactions:

- LinkedIn link opens externally.
- Navigation buttons change sections.

### Crafter Dark Screen

Required content:

- H1: `Crafter Dark`
- Description text
- Filter bar
- Project grid

Required interactions:

- Filter buttons update grid.
- Project cards open modal.
- Modal previous/next cycles through current filtered result set.

### Photography Screen

Required content:

- H1: `Photography`
- Description text
- Filter bar
- Photo grid

Required interactions:

- Filter buttons update grid.
- Photo cards open modal.
- Modal previous/next cycles through current filtered result set.

### Games Screen

Required content:

- H1: `Games`
- Description text
- Game title
- Game images
- Game description

Required interactions:

- Navigation only in current version.

### AI POCs Screen

Required content:

- H1: `AI POCs`
- Description text
- AI POC grid

Required interactions:

- POC cards open modal.
- Modal previous/next cycles through AI POC list.
- External links open in new tabs.

## Navigation State

Current page keys:

```js
home
crafter
photo
games
ai
```

Navigation behavior:

- Clicking a nav button sets `currentPage`.
- `App.jsx` maps `currentPage` to the relevant page component.
- Active nav button receives the active class and `aria-current="page"`.
- `document.title` updates when the page changes.

Current limitation:

- Browser URL does not change.
- Refresh returns to Home.
- Individual projects cannot currently be deep-linked.

Future improvement:

- Add React Router or hash routing if shareable URLs are required.

## Modal State

Modal states are local to each page:

- Crafter Dark: `activeProject`
- Photography: `activePhoto`
- AI POCs: `activePoc`

Modal open:

- User activates a card.
- Active item state is set.
- Modal renders.
- Focus moves to modal.

Modal close:

- User clicks close button.
- User presses Escape.
- User clicks outside modal content.
- Active item state returns to `null`.
- Focus returns to previous active element.

Modal navigation:

- Previous button selects previous item.
- Next button selects next item.
- ArrowLeft selects previous item.
- ArrowRight selects next item.
- Navigation wraps at list boundaries.

## Error and Empty States

### Missing Images

Expected behavior:

- Show placeholder instead of broken image.
- Preserve layout dimensions.
- Include accessible fallback label.

### Empty Filter Results

Current data does not produce empty filter states.

If future filters can produce empty results:

- Show a short message such as `No items found for this filter.`
- Keep filter controls visible.
- Do not show a blank page.

### External Link Failure

Expected behavior:

- External links open in a new tab.
- If a destination is unavailable, browser handles the error.
- App should not crash.

### JavaScript Error

Expected behavior:

- Production build should not ship with known runtime errors.
- Future improvement may add an error boundary for page-level crashes.

### No Image Assets Installed

Expected behavior:

- App still renders.
- Cards and modals show placeholders.
- Browser may log 404s for missing images until assets are added.

## Acceptance Criteria

The app flow is correct when:

- Visitor can navigate from Home to every primary section.
- Active nav state updates on each section.
- Crafter Dark filters show expected item counts and filtered grids.
- Photography filters show expected item counts and filtered grids.
- Project modals open from cards and close by all required methods.
- Photo modals open from cards and close by all required methods.
- Arrow keys navigate open modals.
- Previous/next controls wrap through the current item list.
- Missing images do not break the layout.
- Mobile viewport remains usable with horizontal nav and single-column content.

