import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'styled-components';
import reset from 'css-wipe/js';
import { pure } from 'recompose';

injectGlobal`
  ${reset}

  body {
    background-color: hsla(0, 0%, 95%, 1);
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
      hsla(44,100%,75%,0)  0.8em,
      hsla(44,100%,75%,1) 0.8em,
      hsla(44,100%,75%,1) 1em
    );
    background-repeat: repeat-y;
    background-size: 100% 1.5rem;
    color: inherit;
    text-decoration: none;
    word-wrap: break-word;
  }

  a:hover {
    background: linear-gradient(
      180deg,
      hsla(44,100%,75%,0)  0em,
      hsla(44,100%,75%,0) 0.6em,
      hsla(44,100%,75%,1) 0.6em,
      hsla(44,100%,75%,1) 1em
    );
    background-repeat: repeat-y;
    background-size: 100% 1.5rem;
  }

  a:active {
    color: hsla(0, 0%, 0%, 1);
  }
`;

const DefaultLayout = ({ children }) => children();

DefaultLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default pure(DefaultLayout);
