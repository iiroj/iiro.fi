import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pure } from 'recompose';

const MainArea = ({ children, className }) => <div className={className}>{children}</div>;

MainArea.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  className: PropTypes.string,
};

export default styled(MainArea)`
  background-color: hsla(0, 0%, 100%, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  position: relative;
  z-index: 1;

  @media (min-width: 64rem) {
    padding: 4rem;
  }

  &::before {
    background-color: hsla(0, 0%, 100%, 1);
    content: '';
    display: block;
    height: 5rem;
    left: 0;
    position: absolute;
    top: 0;
    transform-origin: top left;
    transform: skewY(-3deg);
    width: 100%;
    z-index: -1;

    @media (min-width: 64rem) {
      height: 100%;
      transform-origin: top left;
      transform: skewX(-3deg);
      width: 5rem;
    }
  }
`;
