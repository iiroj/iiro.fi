import React from "react";
import styled from "styled-components";

import dialog1x from "./dialog.png";
import dialog2x from "./dialog@2x.png";
import dialog3x from "./dialog@3x.png";
import list1x from "./list.png";
import list2x from "./list@2x.png";
import list3x from "./list@3x.png";

const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem 0;
`;

const Text = styled.div`
  margin: 0 1rem 2rem 1rem;
  max-width: 480px;
`;

const Image = styled.figure`
  align-items: center;
  display: flex;
  flex-direction: column;
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
      <img src={dialog1x} srcSet={`${dialog1x} 1x, ${dialog2x} 2x, ${dialog3x} 3x`} />
      <img src={list1x} srcSet={`${list1x} 1x, ${list2x} 2x, ${list3x} 3x`} />
    </Image>
  </Section>
);
