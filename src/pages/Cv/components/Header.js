import { css } from 'emotion';
import React from 'react';
import PropTypes from 'prop-types';

const header = css({
  display: 'flex',
  flexWrap: 'wrap-reverse',

  div: {
    flex: '1 1 100mm',
    paddingRight: '4rem'
  },

  h1: {
    fontWeight: 600,
    fontSize: '3rem',
    lineHeight: '3rem',
    marginBottom: '2rem'
  },

  img: {
    flex: '0 1 50mm',
    height: '100%',
    marginBottom: 'auto',
    paddingBottom: '2rem',

    '@media only print': {
      filter: 'grayscale(100%) brightness(120%) contrast(80%)'
    }
  }
});

const Header = ({ children, name, picture }) => (
  <header className={header}>
    <div>
      <h1>{name}</h1>
      <p>{children}</p>
    </div>
    {picture}
  </header>
);

Header.propTypes = {
  children: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.any.isRequired
};

export default Header;
