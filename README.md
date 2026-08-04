# taurus-ai-corp-website

Taurus AI Corp corporate website repository.

## Subsites

- TAURUS EDITIONS 2026 campaign site lives in `public/editions-2026/`
  - Source archive: `editions-2026/public/`
  - Live URL: https://taurusai.io/editions-2026/


## /editions-2026 Deployment

TAURUS EDITIONS 2026 is deployed as a separate static Cloudflare Pages project:

- **Static repo:** `Taurus-Ai-Corp/taurus-editions-2026-static`
- **Source in this repo:** `public/editions-2026/` (reference copy)
- **Live URL target:** `https://editions-2026.taurusai.io/`
- **Pages subdomain:** `https://taurus-editions-2026-static.pages.dev/`

The rewrite rule in `functions/_middleware.js` proxies `/editions-2026/*` requests from the main site to the static Pages project.

### To complete deployment
1. In Cloudflare Pages, create a project from `Taurus-Ai-Corp/taurus-editions-2026-static`.
2. Set build command to empty and root directory to `/`.
3. Add custom domain `editions-2026.taurusai.io`.
4. Push this main repo so the middleware is deployed with `taurus-ai-corp-website`.
