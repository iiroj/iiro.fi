import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import DefaultHead from "../src/components/Head.jsx";
import Html from "../src/components/Html.jsx";

/** @type {(componentPath: string, urlPath: string)} */
export const renderReactToHTML = async (componentPath, urlPath) => {
  const { Body, Head } = await import(componentPath);

  const markup = renderToStaticMarkup(
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

  return markup;
};
