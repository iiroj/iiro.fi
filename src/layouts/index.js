import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import reset from 'css-wipe/js';
import { pure } from 'recompose';

import HeaderArea from 'components/HeaderArea';
import MainArea from 'components/MainArea';

const YELLOW = `hsla(44,100%,75%,1)`;

injectGlobal`
  ${reset}

  html, body, #___gatsby {
    height: 100%;
  }

  html {
    font-size: 12px;
  }

  body {
    background-color: hsla(0, 0%, 100%, 1);
    color: hsla(0, 0%, 30%, 1);
    font-family:
        -apple-system, BlinkMacSystemFont,
        "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
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
    overflow: hidden;
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
`;

const DefaultLayout = ({ children, className }) => <div className={className}>{children()}</div>;

DefaultLayout.propTypes = {
  children: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default pure(styled(DefaultLayout)`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;

  ${HeaderArea} {
    flex: 1 0 25%;
    min-height: 20rem;
  }

  ${MainArea} {
    flex: 1 0 75%;
  }

  @media (min-width: 64rem) {
    flex-direction: row;

    ${HeaderArea}, ${MainArea} {
      flex: 1 1 50%;
    }
  }
`);
