import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderArea = ({ children, className }) => <div className={className}>{children}</div>;

HeaderArea.propTypes = {
  children: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default styled(HeaderArea)`
  background: hsla(0, 0%, 95%, 1);
  display: flex;
  flex-direction: column;
  position: relative;

  &::after {
    background-color: hsla(0, 0%, 100%, 1);
    content: '';
    display: block;
    height: 5rem;
    position: absolute;
    bottom: -5rem;
    transform-origin: top left;
    transform: skewY(-3deg);
    width: 100%;

    @media (min-width: 64rem) {
      height: 100%;
      right: -5rem;
      top: 0;
      transform-origin: top right;
      transform: skewX(-3deg);
      width: 5rem;
    }
  }
`;
