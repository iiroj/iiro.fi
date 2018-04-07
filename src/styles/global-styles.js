import React, { PureComponent } from "react";
import FontFaceObserver from "fontfaceobserver";
import { injectGlobal } from "styled-components";
import reset from "css-wipe/js";

import font from "./fonts";

const montserrat = new FontFaceObserver("Montserrat");

const withGlobalStyles = Page =>
  class GlobalStyles extends PureComponent {
    componentDidMount = () =>
      montserrat.load().then(injectGlobal`
        body {
          font-family: "Montserrat", sans-serif;
        }
      `);

    render = () => <Page {...this.props} />;
  };

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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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

export default withGlobalStyles;
