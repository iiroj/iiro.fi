import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { injectGlobal, ServerStyleSheet } from "styled-components";
import reset from "css-wipe/js";

const YELLOW = `hsla(44,100%,75%,1)`;

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
  font-family: -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5rem;
}

a {
  background-image: linear-gradient(to bottom, ${YELLOW} 0%, ${YELLOW} 100%);
  background-position: 0 1em;
  background-repeat: no-repeat;
  background-size: 100%;
  color: inherit;
  text-decoration: none;
  transition: background-position 125ms ease-out 250ms;

  &:hover {
    background-image: linear-gradient(to bottom, ${YELLOW} 0%, ${YELLOW} 100%);
    background-position: 0 0em;
    cursor: pointer;
    transition: background-position 100ms ease-out 0s;
  }

  &:active {
    color: hsla(0, 0%, 0%, 1);
  }
}

strong {
  font-weight: 700;
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
    return (
      <html lang="fi">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" sizes="600x600" href="/static/icon.png" />
          <link rel="preload stylesheet" href="https://fonts.googleapis.com/css?family=Spectral:400,600" as="style" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
