import { prerender } from "react-dom/static";
import React from "react";

import DefaultHead, { type Integrity } from "./components/Head";
import Html from "./components/Html";
import { getHtmlResponseHeaders } from "./get-html-response-headers";
import { getSha384hash } from "./get-sha384-hash";

export const handleRequest = async (
  request: Request,
  version: string,
  integrity: Integrity,
): Promise<Response> => {
  const url = new URL(request.url);
  const isMatch = url.pathname === "/";

  const { Body, Head } = await import(
    isMatch ? "./pages/index" : "./pages/404"
  );

  const { prelude } = await prerender(
    <Html>
      <head>
        <DefaultHead integrity={integrity} />
        <Head />
      </head>
      <body>
        <Body />
      </body>
    </Html>,
  );

  const response = new Response(prelude, {
    headers: getHtmlResponseHeaders(integrity),
    status: isMatch ? 200 : 404,
  });

  const ETag = await getSha384hash(await response.clone().arrayBuffer());
  response.headers.set("Etag", ETag);

  return response;
};
