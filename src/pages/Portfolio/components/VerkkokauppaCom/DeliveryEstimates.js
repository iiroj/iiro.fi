import React from "react";
import { css } from "emotion";

const sectionStyles = css({
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "4rem 0"
});

const textStyles = css({
  margin: "4rem",
  maxWidth: 480
});

const imageStyles = css({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  maxWidth: 368,
  overflow: "hidden",
  position: "relative",

  img: {
    display: "block"
  }
});

export const DeliveryEstimates = () => (
  <section className={sectionStyles}>
    <div className={textStyles}>
      <h2>Delivery estimates</h2>
      <h3>The Problem</h3>
      <p>
        Customers were confused by raw product stock numbers and unsure what it
        meant for availability.
      </p>
      <h3>The Research</h3>
      <p>
        Customers were asked questions about product availability and the
        results were studied. General customer feedback was collected online.
        Order and visitor data was aggregated to find out patterns related to
        product availability.
      </p>
      <h3>The Solution</h3>
      <p>
        Customers do not need detailed availability numbers because they order
        single items. Thus, a simpler true/false availability interface was
        designed for store locations. For online ordering, the availability
        logic was completely revamped to give an estimate on when the product
        would arrive at the customer.
      </p>
    </div>
    <figure className={imageStyles}>
      <img
        alt="Verkkokauppa.com Product Availability Estimates"
        src="/portfolio/verkkokauppacom/dialog.png"
        srcSet="/portfolio/verkkokauppacom/dialog.png 1x, /portfolio/verkkokauppacom/dialog@2x.png 2x, /portfolio/verkkokauppacom/dialog@3x.png 3x"
      />
      <img
        alt=""
        src="/portfolio/verkkokauppacom/list.png"
        srcSet="/portfolio/verkkokauppacom/list.png 1x, /portfolio/verkkokauppacom/list@2x.png 2x, /portfolio/verkkokauppacom/list@3x.png 3x"
      />
    </figure>
  </section>
);
