import { css } from "@emotion/core";
import React from "react";

const sectionStyles = css({
  backgroundColor: "#a4abb3",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  height: 480,
  marginBottom: "2rem",
  overflow: "hidden",
  padding: "0 1rem",
  position: "relative",
  width: "100%"
});

const imageStyles = css({
  display: "block",
  left: "50%",
  minWidth: "100%",
  opacity: 0.2,
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1
});

const textStyles = css({
  color: "white",
  margin: "1rem auto",
  maxWidth: 480,
  position: "relative",
  textShadow: "0 1px 4px rgba(0, 0, 0, 0.2)",
  zIndex: 2
});

export const SelfPickup = () => (
  <section css={sectionStyles}>
    <img
      alt="Verkkokauppa.com Self-Service Checkout"
      css={imageStyles}
      src="/portfolio/verkkokauppacom/ipad.jpg"
      srcSet="/portfolio/verkkokauppacom/ipad.jpg 1x, /portfolio/verkkokauppacom/ipad@2x.jpg 2x, /portfolio/verkkokauppacom/ipad@3x.jpg 3x"
    />
    <div css={textStyles}>
      <h2>Self-Service order pickup</h2>
      <p>
        Customers need to check their order in for pick-up at the
        Verkkokauppa.com Helsinki store, because of the massive amount of daily
        customers.
      </p>
      <p>
        To ease this process we created a self-service kiosk. I designed the UI
        to be intuitive and simple. It should make obvious that you are picking
        up the right order, without exposing any personally identifiable
        information.
      </p>
      <p>
        The self-service kiosk is used for more than 50 % of daily pick-ups.
      </p>
    </div>
  </section>
);
