import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { injectGlobal, ServerStyleSheet } from "styled-components";
import reset from "css-wipe/js";

injectGlobal`
  ${reset}

  html,
  body,
  body > div:first-child,
  #__next,
  #__next > div[data-reactroot] {
    height: 100%;
  }

  html {
    font-size: 12px;
  }

  body {
    background-color: hsla(0, 0%, 100%, 1);
    color: hsla(0, 0%, 30%, 1);
    font-family: "Alegreya", "Georgia", serif;
    font-size: 16px;
    font-weight: 400;
  }

  * {
    line-height: 1.5;
  }

  strong {
    font-weight: 500;
  }

  em {
    font-style: italic;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    const { styleTags } = this.props;

    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" sizes="600x600" href="/static/icon.png" />
          <link
            href="https://fonts.googleapis.com/css?family=Alegreya:400,500"
            rel="subresource stylesheet"
            as="style"
          />
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
