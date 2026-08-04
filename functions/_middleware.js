export async function onRequest(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);
  const path = url.pathname;

  // Serve TAURUS EDITIONS 2026 static files directly from ASSETS
  // before the Next.js catch-all worker can intercept them.
  if (path === '/editions-2026' || path === '/editions-2026/' || path.startsWith('/editions-2026/')) {
    return env.ASSETS.fetch(request);
  }

  return next();
}
