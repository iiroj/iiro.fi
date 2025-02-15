import { getSha384hash } from "./get-sha384-hash";
import { getHtmlResponseHeaders } from "./get-html-response-headers";
import { handleRequest } from "./handle-request";

const fetch = async (
  request: Request,
  env: Env,
  context: EventContext<Env, string, unknown>,
) => {
  const currentVersion = env.CF_VERSION_METADATA.id;
  const versionedCache = await caches.open(`html:${currentVersion}`);
  const cachedResponse = await versionedCache.match(request);

  if (cachedResponse) {
    const response = new Response(cachedResponse.body, {
      headers: cachedResponse.headers,
      status: cachedResponse.status,
      statusText: cachedResponse.statusText,
    });
    response.headers.set("cache-control", "public, max-age=0, s-max-age=3600");

    return response;
  }

  const stylesResponse = await env.ASSETS.fetch(
    new Request(new URL("/static/styles.css", request.url)),
  );

  const integrity = {
    styles: await getSha384hash(await stylesResponse.arrayBuffer()),
  };

  const response = await handleRequest(request, currentVersion, integrity);

  const cacheResponse = async () => {
    const cachedResponse = response.clone();
    cachedResponse.headers.set("cache-control", "immutable");
    await versionedCache.put(request, cachedResponse);
  };

  void context.waitUntil(cacheResponse());

  return response;
};

export default {
  fetch,
};
