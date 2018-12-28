import React from "react";
import styled from "styled-components";

import Header from "./Header";
import DeliveryEstimates from "./DeliveryEstimates";
import SelfPickup from "./SelfPickup";
import Barometer from "./Barometer";

const Article = styled.article({
  backgroundColor: "white",
  position: "relative",
  zIndex: 1,

  h1: {
    fontSize: "3em",
    lineHeight: 1.2,
    marginBottom: "2rem"
  },

  h2: {
    fontSize: "2rem",
    marginBottom: "1rem"
  },

  h3: {
    color: "#2171cc",
    margin: "0.5rem 0 0 0"
  }
});

export default () => (
  <Article>
    <Header />
    <DeliveryEstimates />
    <SelfPickup />
    <Barometer />
  </Article>
);
