import { RendererArgs } from "html-renderer-webpack-plugin";
import { html } from "common-tags";
import { FilledContext, HelmetProvider } from "react-helmet-async";
import { renderToString } from "react-dom/server";
import { createMemoryHistory } from "history";
import React from "react";

/* eslint-disable @typescript-eslint/no-var-requires */
export default function renderer({ path, stats }: RendererArgs): string {
  const { default: App } = require("./components/App");
  const history = createMemoryHistory({ initialEntries: [path!] });
  const helmetContext = {};

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <App history={history} />
    </HelmetProvider>
  );

  const { helmet } = helmetContext as FilledContext;

  const client = stats.entrypoints.client.assets[0];

  /* eslint-disable prettier/prettier */
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta name="version" content="${stats.hash}" />
        <meta charset="utf-8" />
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed:400,600|IBM+Plex+Serif:300" rel="stylesheet" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="mask-icon" href="/icon.svg" color="#333333" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <script async src="${client}"></script>
      </head>
      <body>
        ${appHtml}
      </body>
    </html>
  `.replace(/^\s*$(?:\r\n?|\n)/gm, "");
};
