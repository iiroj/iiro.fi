import { renderToReadableStream } from "react-dom/server";
import React from "react";

import DefaultHead, { type Integrity } from "./components/Head";
import Html from "./components/Html";

export const handleRequest = async (
  request: Request,
  integrity: Integrity,
): Promise<{ allReady: Promise<void>; response: Response }> => {
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

  const response = new Response(body, {
    headers: new Headers({
      "Content-Type": "text/html",
    }),
    status: isMatch ? 200 : 404,
  });

  return {
    allReady: body.allReady,
    response,
  };
};
