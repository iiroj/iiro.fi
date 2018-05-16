import React from "react";
import styled from "react-emotion";

const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 4rem 0;
`;

const Text = styled.div`
  margin: 4rem;
  max-width: 480px;
`;

const Image = styled.figure`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 368px;
  overflow: hidden;
  position: relative;

  img {
    display: block;
  }
`;

export const DeliveryEstimates = () => (
  <Section>
    <Text>
      <h2>Delivery estimates</h2>
      <h3>The Problem</h3>
      <p>Customers were confused by raw product stock numbers and unsure what it meant for availability.</p>
      <h3>The Research</h3>
      <p>
        Customers were asked questions about product availability and the results were studied. General customer
        feedback was collected online. Order and visitor data was aggregated to find out patterns related to product
        availability.
      </p>
      <h3>The Solution</h3>
      <p>
        Customers do not need detailed availability numbers because they order single items. Thus, a simpler true/false
        availability interface was designed for store locations. For online ordering, the availability logic was
        completely revamped to give an estimate on when the product would arrive at the customer.
      </p>
    </Text>
    <Image>
      <img
        src="/static/portfolio/verkkokauppacom/dialog.png"
        srcSet="/static/portfolio/verkkokauppacom/dialog.png 1x, /static/portfolio/verkkokauppacom/dialog@2x.png 2x, /static/portfolio/verkkokauppacom/dialog@3x.png 3x"
      />
      <img
        src="/static/portfolio/verkkokauppacom/list.png"
        srcSet="/static/portfolio/verkkokauppacom/list.png 1x, /static/portfolio/verkkokauppacom/list@2x.png 2x, /static/portfolio/verkkokauppacom/list@3x.png 3x"
      />
    </Image>
  </Section>
);
