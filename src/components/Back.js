import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

const Back = ({ className }) => (
  <Link to="/" className={className} title="Back to iiro.fi" role="navigation">
    Back to iiro.fi
  </Link>
);

Back.propTypes = {
  className: PropTypes.string
};

const backStyles = css`
  background: none !important;
  color: transparent;
  cursor: pointer;
  font-size: 0;
  height: 1.5rem;
  left: 0;
  margin: 2.4rem 0 0 1rem;
  overflow: hidden;
  position: absolute;
  top: 0;
  user-select: none;
  width: 1.5rem;
  z-index: 9001;

  &::before,
  &::after {
    background-color: rgb(77, 77, 77);
    border-radius: 1px;
    content: '';
    display: block;
    height: 2px;
    margin-top: -1px;
    position: absolute;
    top: 50%;
    width: 100%;
    z-index: -1;
    transition: transform 125ms ease;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }

  &:hover {
    &::before {
      transform: rotate(45deg) scale(1.2);
    }
    &::after {
      transform: rotate(-45deg) scale(1.2);
    }
  }

  &:active {
    &::before {
      transform: rotate(45deg) scale(1);
    }
    &::after {
      transform: rotate(-45deg) scale(1);
    }
  }

  @media print {
    display: none;
  }
`;

export default styled(Back)(backStyles);
