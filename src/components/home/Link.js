import React from 'react';
import { css } from 'emotion';
import GatsbyLink from 'gatsby-link';
import PropTypes from 'prop-types';

const YELLOW = `hsl(44, 100%, 75%)`;

const link = css({
  backgroundImage: `linear-gradient(to bottom, ${YELLOW} 0%, ${YELLOW} 100%)`,
  backgroundPosition: '0 1em',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  color: 'inherit',
  display: 'inline-block',
  textDecoration: 'none',
  transition: 'background-position 125ms ease-out 250ms',

  '&:hover': {
    backgroundPosition: '0',
    cursor: 'pointer',
    transition: 'background-position 100ms ease-out 0s'
  },

  '&:active': {
    color: 'black'
  }
});

const Link = ({ children, to, ...props }) => {
  const Component = to.startsWith('/') ? GatsbyLink : 'a';
  return (
    <Component className={link} to={to} href={to} {...props}>
      {children}
    </Component>
  );
};

Link.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired
};

export default Link;
