import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #a4abb3;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 480px;
  margin-bottom: 2rem;
  overflow: hidden;
  padding: 0 1rem;
  position: relative;
  width: 100%;
`;

const Image = styled.img`
  display: block;
  left: 50%;
  min-width: 100%;
  opacity: 0.2;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const Text = styled.div`
  color: white;
  margin: 1rem auto;
  max-width: 480px;
  position: relative;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

export const SelfPickup = () => (
  <Section>
    <Image
      src="/static/portfolio/verkkokauppacom/ipad.jpg"
      srcSet="/static/portfolio/verkkokauppacom/ipad.jpg 1x, /static/portfolio/verkkokauppacom/ipad@2x.jpg 2x, /static/portfolio/verkkokauppacom/ipad@3x.jpg 3x"
    />
    <Text>
      <h2>Self-Service order pickup</h2>
      <p>
        Customers need to check their order in for pick-up at the Verkkokauppa.com Helsinki store, because of the
        massive amount of daily customers.
      </p>
      <p>
        To ease this process we created a self-service kiosk. I designed the UI to be intuitive and simple. It should
        make obvious that you are picking up the right order, without exposing any personally identifiable information.
      </p>
      <p>The self-service kiosk is used for more than 50 % of daily pick-ups.</p>
    </Text>
  </Section>
);
