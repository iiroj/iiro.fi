import { getResponseBodyHash } from "./get-response-body-hash";
import { getHtmlResponseHeaders } from "./get-html-response-headers";
import { handleRequest } from "./handle-request";

const fetch = async (
  request: Request,
  env: Env,
  context: EventContext<Env, string, unknown>,
) => {
  const cache = caches.default;
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  const stylesResponse = await env.ASSETS.fetch(
    new Request(new URL("/static/styles.css", request.url)),
  );

  const integrity = {
    styles: await getResponseBodyHash(stylesResponse),
  };

  const { response, allReady } = await handleRequest(request, integrity);

  for (const [headerName, headerValue] of getHtmlResponseHeaders(integrity)) {
    response.headers.set(headerName, headerValue);
  }

  const cacheResponse = async () => {
    await allReady;
    await cache.put(request, response.clone());
  };

  void context.waitUntil(cacheResponse());

  return response;
};

export default {
  fetch,
};
