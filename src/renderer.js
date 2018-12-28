import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import { HelmetProvider } from "react-helmet-async";
import { html } from "common-tags";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter } from "react-router";
import React from "react";

export default async ({ compilationAssets, path, stats }) => {
  const App = require("./components/App").default;
  const extractor = new ChunkExtractor({
    entrypoints: ["client"],
    stats: JSON.parse(compilationAssets["loadable-stats.json"].source())
  });
  const sheet = new ServerStyleSheet();
  const helmetContext = {};

  const appHtml = renderToString(
    sheet.collectStyles(
      <ChunkExtractorManager extractor={extractor}>
        <StaticRouter location={path} context={{}}>
          <HelmetProvider context={helmetContext}>
            <App />
          </HelmetProvider>
        </StaticRouter>
      </ChunkExtractorManager>
    )
  );

  const styleTags = sheet.getStyleTags();
  const { helmet } = helmetContext;

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
        ${extractor.getLinkTags()}
        ${styleTags}
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${appHtml}</div>
        ${extractor.getScriptTags()}
      </body>
    </html>
  `.replace(/^\s*$(?:\r\n?|\n)/gm, "");
};
