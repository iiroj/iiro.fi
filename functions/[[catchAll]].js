import { SECURITY_HEADERS } from "../server/headers.js";
import normalizePathname from "../server/normalizePathname.js";
import Index from "../server/pages/Index.js";
import NotFound from "../server/pages/NotFound.js";
import renderReact from "../server/renderReact.js";

export const onRequestGet = async ({ env, request, waitUntil }) => {
  const url = new URL(request.url);

  const cached = await caches.default.match(url);
  if (cached) {
    return cached;
  }

  const normalized = normalizePathname(url);
  if (url.pathname !== normalized.pathname) {
    return Response.redirect(normalized, 308);
  }

  const isIndexPage = url.pathname === "/";

  const reactRenderedResponse = new Response(
    await renderReact({
      component: isIndexPage ? Index : NotFound,
      signal: request.signal,
    }),
    {
      status: isIndexPage ? 200 : 404,
      statusText: isIndexPage ? undefined : "Page Not Found",
      headers: {
        ...SECURITY_HEADERS,
        "content-type": "text/html",
      },
    },
  );

  waitUntil(caches.default.put(url, reactRenderedResponse.clone()));

  return reactRenderedResponse;
};
