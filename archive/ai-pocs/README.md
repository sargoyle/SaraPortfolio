# Archived AI POCs

This folder preserves the former AI POCs portfolio section.

## What Was Archived

- `AiPocs.jsx`: the former AI POCs page.
- `aiPocs.js`: the former AI POC data records.
- `ProjectCard.jsx`: the generic project card used only by the former AI POCs page.

## Why

Sara's Portfolio now centres Crafter Dark, Photography, and Sara's Lab. AI POC content is no longer part of the active site navigation or page registry, but it is preserved here so it can be restored later if needed.

## Restore Notes

To restore this section, move the files back to their original locations:

- `AiPocs.jsx` to `src/pages/AiPocs.jsx`
- `aiPocs.js` to `src/data/aiPocs.js`
- `ProjectCard.jsx` to `src/components/ProjectCard.jsx`

Then update `src/App.jsx`, `src/components/Navigation.jsx`, and the function docs to re-register the page deliberately.

## Restore Action Items

If AI POCs are restored later:

- Add or restore the missing screenshots referenced by `archive/ai-pocs/aiPocs.js`.
- Decide whether to keep the legacy uppercase `/images/AIPOC` public path or standardize to lowercase `/images/ai-pocs`.
- Verify every external AI POC link manually in a browser before making the section public.
- Re-run modal, keyboard, image fallback, and external-link security checks for the restored page.
