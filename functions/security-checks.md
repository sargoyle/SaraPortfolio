# Security Checks

## Purpose

Manual security checklist for Sara's Portfolio until an automated test or lint suite is added.

## Current Scope

- Static React/Vite portfolio.
- No backend, authentication, database, payments, user-generated content, or secrets are expected.
- Active external links are limited to Sara's LinkedIn and Alphabet Stitch. Archived AI POC links may remain in `archive/ai-pocs` but are not active site links.

## Required Checks

- Run the production build before release.
- Run a dependency audit when package manager/network access is available.
- Confirm no active source uses `dangerouslySetInnerHTML`.
- Confirm no hardcoded API keys, passwords, bearer tokens, or private keys exist in active source/docs.
- Confirm every active `target="_blank"` link includes `rel="noreferrer"` or `rel="noopener noreferrer"`.
- Confirm LinkedIn remains the only public communication/connect route on the active site.
- Confirm archived AI POC content is not imported by `src/App.jsx`, `src/components/Navigation.jsx`, or active pages.
- Confirm public assets do not include intentionally private documents before deployment.
- Confirm the active nav exposes only Home, Crafter Dark, Photography, and Sara's Lab.

## Known Gaps

- No automated security test script exists yet.
- No deployment security headers are configured in this repo because deployment target is not chosen.
- Crafter Dark PDF/header documents are archived outside `public` and should stay out of the deployed static asset tree unless intentionally made downloadable.
- Dependency audit currently has two low transitive dev-tool advisories: `esbuild <0.28.1` via Vite and `@babel/core <=7.29.0` via `@vitejs/plugin-react`. A targeted `pnpm update vite @vitejs/plugin-react` found no newer available versions in the current dependency range; avoid forcing overrides unless tested, because these are build-tool internals.

## Test Expectations

- Build passes with no new warnings.
- Dependency audit result is recorded in the task report.
- Browser console has no unexpected errors during the active page smoke test.
