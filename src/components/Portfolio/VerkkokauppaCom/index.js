import React from "react";
import styled from "styled-components";

import { Header } from "./Header";
import { DeliveryEstimates } from "./DeliveryEstimates";
import { SelfPickup } from "./SelfPickup";
import { Barometer } from "./Barometer";

export const VerkkokauppaCom = () => {
  const VerkkokauppaCom = styled.article`
    background-color: white;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .05);
    position: relative;
    z-index: 1;

    h1 {
      font-family: Georgia, serif;
      font-size: 2rem;
      line-height: 3rem;
      margin-bottom: 0.5rem;
    }
    h2 {
      font-family: Georgia, serif;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    h3 {
      color: #2171cc;
      font-weight: 500;
      margin: 0.5rem 0 0 0;
    }
  `;

  return (
    <VerkkokauppaCom>
      <Header />
      <DeliveryEstimates />
      <SelfPickup />
      <Barometer />
    </VerkkokauppaCom>
  );
};
