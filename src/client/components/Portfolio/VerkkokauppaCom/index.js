import React from 'react';
import { css } from 'react-emotion';

import { Header } from './Header';
import { DeliveryEstimates } from './DeliveryEstimates';
import { SelfPickup } from './SelfPickup';
import { Barometer } from './Barometer';

const articleStyles = css`
  background-color: white;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 1;

  h1 {
    font-size: 3em;
    line-height: 1.2;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h3 {
    color: #2171cc;
    margin: 0.5rem 0 0 0;
  }
`;

export const VerkkokauppaCom = () => (
  <article className={articleStyles}>
    <Header />
    <DeliveryEstimates />
    <SelfPickup />
    <Barometer />
  </article>
);
