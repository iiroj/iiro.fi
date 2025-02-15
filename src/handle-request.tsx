import { renderToReadableStream } from "react-dom/server";
import React from "react";

import DefaultHead, { type Integrity } from "./components/Head";
import Html from "./components/Html";
import { getHtmlResponseHeaders } from "./get-html-response-headers";

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

  const body = await renderToReadableStream(
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

  await body.allReady;

  return new Response(body, {
    headers: getHtmlResponseHeaders(integrity, btoa(version)),
    status: isMatch ? 200 : 404,
  });
};
