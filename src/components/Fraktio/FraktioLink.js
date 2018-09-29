import React from 'react';

import Logo from './Logo';
import Link from '../Link';

const FraktioLink = () => (
  <Link to="https://fraktio.fi" target="_blank" rel="noopener noreferrer">
    <Logo />
  </Link>
);

export default FraktioLink;
