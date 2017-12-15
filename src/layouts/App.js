import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled, { injectGlobal } from "styled-components";
import reset from "css-wipe/js";

import Roboto from "../styles/Roboto";
import ScrollToTop from "../components/ScrollToTop";

const YELLOW = `hsla(44,100%,75%,1)`;

injectGlobal`
  ${reset}
  ${Roboto}

  html, body, #___gatsby {
    height: 100%;
  }

  html {
    font-size: 12px;
  }

  body {
    background-color: hsla(0, 0%, 100%, 1);
    color: hsla(0, 0%, 30%, 1);
    font-family: Roboto, sans-serif;
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

const App = ({ children }) => (
  <Fragment>
    <ScrollToTop />
    {children}
  </Fragment>
);

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
