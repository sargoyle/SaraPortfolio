# Security Checks

## Purpose

Manual security checklist for Sara's Portfolio until an automated test or lint suite is added.

## Current Scope

- Static React/Vite portfolio.
- No backend, authentication, database, payments, user-generated content, or secrets are expected.
- External links are limited to Sara's LinkedIn, Alphabet Stitch, and archived AI POC links.

## Required Checks

- Run the production build before release.
- Run a dependency audit when package manager/network access is available.
- Confirm no active source uses `dangerouslySetInnerHTML`.
- Confirm no hardcoded API keys, passwords, bearer tokens, or private keys exist in active source/docs.
- Confirm every active `target="_blank"` link includes `rel="noreferrer"` or `rel="noopener noreferrer"`.
- Confirm archived AI POC content is not imported by `src/App.jsx`, `src/components/Navigation.jsx`, or active pages.
- Confirm public assets do not include intentionally private documents before deployment.
- Confirm the active nav exposes only Home, Crafter Dark, Photography, and Sara's Lab.

## Known Gaps

- No automated security test script exists yet.
- No deployment security headers are configured in this repo because deployment target is not chosen.
- Public Crafter Dark PDF/header documents still need a human decision on whether they should remain publicly served.
- Dependency audit currently has two low transitive dev-tool advisories: `esbuild <0.28.1` via Vite and `@babel/core <=7.29.0` via `@vitejs/plugin-react`. Avoid forcing overrides unless tested, because these are build-tool internals.

## Test Expectations

- Build passes with no new warnings.
- Dependency audit result is recorded in the task report.
- Browser console has no unexpected errors during the active page smoke test.
