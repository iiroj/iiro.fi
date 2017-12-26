import PropTypes from "prop-types";
import { injectGlobal } from "styled-components";
import reset from "css-wipe/js";

import Roboto from "styles/Roboto";

const YELLOW = `hsla(44,100%,75%,1)`;

injectGlobal`
  ${reset}
  ${Roboto}

  html, body {
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

  #___gatsby {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    width: 100%;
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

const DefaultLayout = ({ children }) => children();

DefaultLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default DefaultLayout;
