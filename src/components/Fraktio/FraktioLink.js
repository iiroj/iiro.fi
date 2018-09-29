import React from 'react';
import PropTypes from 'prop-types';

import Logo from './Logo';
import Link from '../Link';

const FraktioLink = ({ colored }) => (
  <Link to="https://fraktio.fi" target="_blank" rel="noopener noreferrer">
    <Logo colored={colored} />
  </Link>
);

FraktioLink.propTypes = {
  colored: PropTypes.bool
};

export default FraktioLink;
