import React from 'react';
import { css } from 'react-emotion';
import { Title } from 'react-head';

import Back from '../components/Back';

const h1Styles = css`
  font-size: 2rem;
  text-align: center;
  margin: auto;
`;

export default () => (
  <>
    <Title>Page Not Found</Title>
    <Back />
    <h1 className={h1Styles}>There’s nothing here...</h1>
  </>
);
