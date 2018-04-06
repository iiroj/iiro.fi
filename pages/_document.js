import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps = ({ renderPage }) => {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  };

  render = () => (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="600x600" href="/static/icon.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,500"
          rel="subresource stylesheet"
          as="style"
        />
        {this.props.styleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  );
}
