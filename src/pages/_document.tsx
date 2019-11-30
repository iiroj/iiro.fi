import NextDocument, { Head, Main, NextScript } from "next/document";
import { FilledContext } from "react-helmet-async";
import React from "react";

import { GOOGLE_FONTS_URL } from "../constants/fonts";

export default class Document extends NextDocument<{
  helmetContext: FilledContext;
}> {
  static getInitialProps: typeof NextDocument.getInitialProps = async ctx => {
    let helmetContext;

    const page = ctx.renderPage({
      // override with `any` to make functional App callable
      enhanceApp: (App: any) => props => {
        const app = App(props);
        helmetContext = app.helmetContext;
        return app;
      }
    });

    return { ...page, helmetContext };
  };

  render() {
    const { helmetContext } = this.props;

    return (
      <html lang="en">
        <Head>
          <link
            crossOrigin="anonymous"
            href={GOOGLE_FONTS_URL}
            rel="stylesheet"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="icon" href="/favicon.png" type="image/x-icon" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <link rel="mask-icon" href="/icon.svg" color="#333333" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#ffffff" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          {helmetContext && helmetContext.helmet && (
            <>
              {helmetContext && helmetContext.helmet.meta.toComponent()}
              {helmetContext && helmetContext.helmet.link.toComponent()}
              {helmetContext && helmetContext.helmet.title.toComponent()}
              {helmetContext && helmetContext.helmet.script.toComponent()}
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
