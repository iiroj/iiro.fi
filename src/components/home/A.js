import React from 'react';
import styled from 'react-emotion';
import GatsbyLink from 'gatsby-link';
import PropTypes from 'prop-types';

const YELLOW = `hsla(44,100%,75%,1)`;

const Link = ({ children, to, ...props }) => {
  const Component = to.startsWith('/') ? GatsbyLink : 'a';
  return (
    <Component to={to} href={to} {...props}>
      {children}
    </Component>
  );
};

Link.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired
};

export default styled(Link)`
  background-image: linear-gradient(to bottom, ${YELLOW} 0%, ${YELLOW} 100%);
  background-position: 0 1em;
  background-repeat: no-repeat;
  background-size: 100%;
  color: inherit;
  display: inline-block;
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
`;
