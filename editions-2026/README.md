# taurus-ai-corp-website

TAURUS AI Corp corporate website — TAURUS EDITIONS 2026.

- Live preview: `npm run dev` → http://127.0.0.1:8792/
- Build: `npm run build` → outputs `dist/`
- Test: `npm run test` → verifies no broken local asset references

## Deploy

### Cloudflare Pages (connected to Taurus-Ai-Corp/taurus-ai-corp-website)

```bash
npm run build
npm run deploy:cf
```

### Vercel fallback

```bash
npm run deploy:vercel
```
