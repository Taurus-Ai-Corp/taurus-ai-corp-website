export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const path = url.pathname;

  if (path.startsWith('/editions-2026/') || path === '/editions-2026' || path === '/editions-2026/') {
    const target = new URL(path, 'https://taurus-editions-2026-static.pages.dev');
    target.search = url.search;
    return fetch(target.toString(), request);
  }

  return next();
}
