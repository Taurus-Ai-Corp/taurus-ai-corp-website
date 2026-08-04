# taurus-ai-corp-website

Taurus AI Corp corporate website repository.

## Subsites

- TAURUS EDITIONS 2026 campaign site lives in `public/editions-2026/`
  - Source archive: `editions-2026/public/`
  - Live URL: https://taurusai.io/editions-2026/

## Static microsite routing

The Next.js app uses Cloudflare Pages (`@cloudflare/next-on-pages`), which installs a catch-all worker that can shadow static files under `public/`. A Pages Function in `functions/_middleware.js` intercepts `/editions-2026/*` first and serves it directly from the Pages ASSETS binding, bypassing the Next.js router.
