import React from 'react';
import styled from 'react-emotion';

import Svg from './fraktio.svg';
import Link from '../Link';

const Fraktio = styled(Svg)`
  vertical-align: -20%;
  position: relative;
  display: inline-block;

  path {
    fill: hsla(0, 0%, 30%, 1);
  }
`;

export default () => (
  <Link href="https://fraktio.fi" target="_blank" rel="noopener noreferrer">
    <Fraktio />
  </Link>
);
