import { PassThrough } from "node:stream";

import React from "react";
import { renderToPipeableStream } from "react-dom/server";

import DefaultHead from "../src/components/Head.jsx";
import Html from "../src/components/Html.jsx";

/** @type {(componentPath: string, urlPath: string) => PassThrough} */
export const renderReactToHTML = async (componentPath, urlPath) => {
  const { Body, Head } = await import(componentPath);

  const { pipe } = renderToPipeableStream(
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
  pipe(stream);

  return stream;
};
