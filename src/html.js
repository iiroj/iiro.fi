import React from "react";
import Helmet from "react-helmet";
import { ServerStyleSheet } from "styled-components";

export default function HTML(props) {
  const head = Helmet.rewind();

  const sheet = new ServerStyleSheet();
  const main = sheet.collectStyles(
    <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
  );
  const css = sheet.getStyleElement();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        {props.headComponents}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          sizes="600x600"
          href="/icon.png"
          type="image/x-icon"
        />
        {process.env.NODE_ENV === "production" && css}
      </head>
      <body>
        {main}
        {props.postBodyComponents}
      </body>
    </html>
  );
}
