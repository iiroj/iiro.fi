import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import reset from 'css-wipe/js';
import { pure } from 'recompose';

import HeaderArea from 'components/HeaderArea';
import MainArea from 'components/MainArea';

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
    background: linear-gradient(
      180deg,
      hsla(44,100%,75%,0)  0em,
      hsla(44,100%,75%,0) 0.9em,
      hsla(44,100%,75%,1) 0.9em,
      hsla(44,100%,75%,1) 1em
    );
    background-repeat: repeat-y;
    background-size: 100% 1.5rem;
    color: inherit;
    text-decoration: none;
    word-wrap: break-word;

    &:hover {
      background: linear-gradient(
        180deg,
        hsla(44,100%,75%,0) 0em,
        hsla(44,100%,75%,1) 0em,
        hsla(44,100%,75%,1) 1em
      );
      background-repeat: repeat-y;
      background-size: 100% 1.5rem;
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
    flex: 1 1 25%;
  }

  ${MainArea} {
    flex: 1 1 75%;
  }

  @media (min-width: 64rem) {
    flex-direction: row;

    ${HeaderArea}, ${MainArea} {
      flex: 1 1 50%;
    }
  }
`);
