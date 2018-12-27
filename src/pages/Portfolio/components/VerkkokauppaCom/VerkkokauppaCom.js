import React from "react";
import { css } from "@emotion/core";

import Header from "./Header";
import { DeliveryEstimates } from "./DeliveryEstimates";
import { SelfPickup } from "./SelfPickup";
import { Barometer } from "./Barometer";

const articleStyles = css({
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
  <article css={articleStyles}>
    <Header />
    <DeliveryEstimates />
    <SelfPickup />
    <Barometer />
  </article>
);
