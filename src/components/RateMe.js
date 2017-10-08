import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

const RateMeLink = styled(Link)`
  background: hsla(0, 0%, 0%, 0.02);
  border-radius: 2px;
  box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, 0.08);
  display: inline-block;
  padding: 1rem 2rem;
  transition: background 125ms ease-out 250ms;

  &:hover {
    background: hsla(44, 100%, 75%, 1);
    transition: background 125ms ease-out 0;
  }
`;

const RateMe = ({ className }) => <RateMeLink to="/feedback">Rate Me!</RateMeLink>;

RateMe.propTypes = {
  className: PropTypes.string,
};

export default RateMe;
