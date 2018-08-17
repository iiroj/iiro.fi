import React from 'react';
import styled from 'react-emotion';

import Logo from './Logo';
import Link from '../Link';

const Fraktio = styled(Logo)`
  vertical-align: -19%;
  position: relative;
  display: inline-block;

  path {
    fill: hsl(0, 0%, 30%);
  }
`;

export default () => (
  <Link to="https://fraktio.fi" target="_blank" rel="noopener noreferrer">
    <Fraktio />
  </Link>
);
