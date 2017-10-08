import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

const RateMeLink = styled(Link)`
  background: hsla(0, 0%, 98%, 1);
  border-radius: 2px;
  border-bottom-left-radius: 0;
  box-shadow: inset 0 0 0 1px hsla(0, 0%, 90%, 1);
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  position: relative;
  transition: all 125ms ease-out 250ms;

  &::before,
  &::after {
    border-bottom: 1rem solid transparent;
    border-top: 1rem solid transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 0;
    left: 0;
    position: absolute;
    transition: all 125ms ease-out 250ms;
    width: 0;
  }

  &::before {
    border-left: 1rem solid hsla(0, 0%, 90%, 1);
    transform: translateY(50%);
    z-index: -1;
  }

  &::after {
    border-left: 1rem solid hsla(0, 0%, 98%, 1);
    bottom: 2.3px;
    transform: translate(1px, 50%);
    z-index: 1;
  }

  &:hover {
    background: hsla(44, 100%, 75%, 1);
    box-shadow: inset 0 0 0 1px hsla(44, 80%, 70%, 1);
    transition: all 125ms ease-out 0;

    &::after {
      border-left: 1rem solid hsla(44, 100%, 75%, 1);
      transition: all 125ms ease-out 0;
    }

    &::before {
      border-left: 1rem solid hsla(44, 80%, 70%, 1);
      transition: all 125ms ease-out 0;
    }
  }
`;

const RateMe = ({ className }) => (
  <div className={className}>
    <RateMeLink to="/feedback">Rate Me!</RateMeLink>
  </div>
);

RateMe.propTypes = {
  className: PropTypes.string,
};

export default RateMe;
