import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pure } from 'recompose';

const MainArea = ({ children, className }) => <div className={className}>{children}</div>;

MainArea.propTypes = {
  children: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default styled(MainArea)`
  background-color: hsla(0, 0%, 100%, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
  z-index: 1;

  @media (min-width: 64rem) {
    padding: 4rem;
  }

  &::before {
    background-color: hsla(0, 0%, 100%, 1);
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform-origin: top left;
    transform: skewX(-3deg);
    width: 5rem;
    z-index: -1;
  }
`;
