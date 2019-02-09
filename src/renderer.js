import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import { HelmetProvider } from "react-helmet-async";
import { html } from "common-tags";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { createMemoryHistory } from "history";
import React from "react";

import getScriptTags from "./utils/loadable";
import generateNetlifyHeaders from "./utils/netlify";

export default async ({ compilationAssets, path, stats }) => {
  const sheet = new ServerStyleSheet();
  const extractor = new ChunkExtractor({
    entrypoints: ["client"],
    stats: JSON.parse(compilationAssets["loadable-stats.json"].source())
  });
  const { HistoryProvider } = require("./components/History");
  const history = createMemoryHistory({ initialEntries: [path] });
  const helmetContext = {};
  const { default: App } = require("./components/App");

  const appHtml = renderToString(
    sheet.collectStyles(
      <ChunkExtractorManager extractor={extractor}>
        <HistoryProvider history={history}>
          <HelmetProvider context={helmetContext}>
            <App />
          </HelmetProvider>
        </HistoryProvider>
      </ChunkExtractorManager>
    )
  );

  const scriptTags = getScriptTags(extractor);
  const styleTags = sheet.getStyleTags();
  const { helmet } = helmetContext;

  if (process.env.NODE_ENV === "production") {
    generateNetlifyHeaders(path, extractor);
  }

  /* eslint-disable prettier/prettier */
  return html`
    <!DOCTYPE html>
    <html lang="en" ${helmet.htmlAttributes.toString()}>
      <head>
        <meta name="version" content="${stats.hash}" />
        <meta charset="utf-8" />
        ${helmet.title.toString()}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${helmet.meta.toString()}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icon-512.png" />
        ${helmet.link.toString()}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        ${scriptTags}
        ${styleTags}
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${appHtml}</div>
      </body>
    </html>
  `.replace(/^\s*$(?:\r\n?|\n)/gm, "");
};
