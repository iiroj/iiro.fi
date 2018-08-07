import React from 'react';
import styled from 'react-emotion';

import Logo from './Logo';
import A from '../A';

const Fraktio = styled(Logo)`
  vertical-align: -20%;
  position: relative;
  display: inline-block;

  path {
    fill: hsla(0, 0%, 30%, 1);
  }
`;

export default () => (
  <A to="https://fraktio.fi" target="_blank" rel="noopener noreferrer">
    <Fraktio />
  </A>
);
