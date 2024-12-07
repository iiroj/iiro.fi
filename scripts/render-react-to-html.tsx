import { PassThrough } from "node:stream";

import React from "react";
import { prerenderToNodeStream } from "react-dom/static";

import DefaultHead from "../src/components/Head.tsx";
import Html from "../src/components/Html.tsx";

export const renderReactToHTML = async (
  componentPath: string,
  urlPath: string,
): Promise<PassThrough> => {
  const { Body, Head } = await import(componentPath);

  const { prelude } = await prerenderToNodeStream(
    <Html>
      <head>
        <DefaultHead />
        <Head />
      </head>
      <body>
        <Body />
      </body>
    </Html>,
  );

  const stream = new PassThrough();
  prelude.pipe(stream);

  return stream;
};
