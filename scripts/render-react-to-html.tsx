import React from "react";
import { prerender } from "react-dom/static";

import DefaultHead from "../src/components/Head.tsx";
import Html from "../src/components/Html.tsx";

interface Integrity {
  styles: string;
}

export const renderReactToHTML = async (
  componentPath: string,
  urlPath: string,
  integrity: Integrity,
): Promise<ReadableStream> => {
  const { Body, Head } = await import(componentPath);

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

  return prelude;
};
