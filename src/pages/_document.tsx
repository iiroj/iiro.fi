import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import { FilledContext } from "react-helmet-async";
import React from "react";

class Document extends NextDocument<{
  helmetContext: FilledContext;
}> {
  static getInitialProps: typeof NextDocument.getInitialProps = async (ctx) => {
    let helmetContext;

    const page = ctx.renderPage({
      // override with `any` to make functional App callable
      enhanceApp: (App: any) => (props) => {
        const app = App(props);
        helmetContext = app.helmetContext;
        return app;
      },
    });

    return { ...page, helmetContext };
  };

  render() {
    const { helmetContext } = this.props;

    return (
      <Html lang="en">
        <Head>
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
      </Html>
    );
  }
}

export default Document;
