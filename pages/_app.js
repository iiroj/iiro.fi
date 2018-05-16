import React from "react";
import DefaultApp, { Container } from "next/app";
import FontFaceObserver from "fontfaceobserver";
import { hydrate, injectGlobal } from "react-emotion";
import reset from "css-wipe/js";

import font from "../styles/fonts";

injectGlobal`
  ${font}

  ${reset}

  html {
    height: 100%;
  }

  #__next {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
  }

  html {
    font-size: 12px;
  }

  body {
    background-color: hsla(0, 0%, 100%, 1);
    color: hsla(0, 0%, 30%, 1);
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 400;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
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

if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids);
}

const observe = new FontFaceObserver("Montserrat");

export default class App extends DefaultApp {
  static async getInitialProps({ Component, router, ctx }) {
    if (Component.getInitialProps) {
      return { pageProps: await Component.getInitialProps(ctx) };
    } else {
      return { pageProps: {} };
    }
  }

  componentDidMount() {
    observe.load().then(injectGlobal`
        body {
          font-family: "Montserrat", sans-serif !important;
        }
    `);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
