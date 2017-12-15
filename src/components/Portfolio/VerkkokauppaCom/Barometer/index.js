import React from "react";
import styled from "styled-components";

import barometer1x from "./price-barometer.png";
import barometer2x from "./price-barometer@2x.png";
import barometer3x from "./price-barometer@3x.png";

const Svg = styled.svg`
  height: 120px;
  left: 50%;
  position: relative;
  transform: translateX(-50%);
  width: 1920px;
`;

const Graph = () => (
  <Svg width="1920" height="120" viewBox="0 0 1920 120" xmlns="http://www.w3.org/2000/svg">
    <g strokeWidth="2" fill="none" fillRule="evenodd">
      <path
        d="M964.282 43.872s238.338 32.795 485.567 39.043c247.229 6.248 470.483 36.101 470.483 36.101"
        stroke="#009EC2"
        strokeDasharray="4,4"
      />
      <path
        d="M.332 33.656s109.682.534 268.263 2.381c158.581 1.848 147.094-16.522 310.906-14.594 163.812 1.928 148.028 19.346 384.781 22.43"
        stroke="#009EC2"
      />
      <path
        d="M964.282 23.872s238.338 14.795 485.567 21.043c247.229 6.248 470.483 14.101 470.483 14.101"
        stroke="#E30613"
        strokeDasharray="4,4"
      />
      <path
        d="M.332 13.656s109.682.534 268.263 2.381C427.176 17.885 415.689-.485 579.501 1.443 743.313 3.37 727.53 20.789 964.282 23.873"
        stroke="#E30613"
      />
    </g>
  </Svg>
);

const Section = styled.section`
  overflow-x: hidden;
  padding-top: 192px;
  position: relative;
  width: 100%;
`;

const Image = styled.img`
  display: block;
  left: 50%;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  width: 368px;
`;

const Text = styled.div`
  margin: 0 auto 2rem auto;
  max-width: 480px;
  padding: 0 1rem;
`;

export const Barometer = () => (
  <Section>
    <Image src={barometer1x} srcSet={`${barometer1x} 1x, ${barometer2x} 2x, ${barometer3x} 3x`} />
    <Graph />
    <Text>
      <h2>Making Informed Customers</h2>
      <p>
        <a href="https://www.verkkokauppa.com/en/investors/" target="_blank" rel="noopener noreferrer">
          Verkkokauppa.com
        </a>{" "}
        is the most transparent low cost online retailer in Finland… while being probably always cheaper.
      </p>
      <p>
        To empower customers in their self-service shopping we created a way to estimate the price fluctuations of
        products. Customers are able to judge themselves how much cheaper Verkkokauppa.com is. We also tell customers
        the value of their product as used-goods, so they can be confident reselling and fighting e-waste.
      </p>
    </Text>
  </Section>
);
