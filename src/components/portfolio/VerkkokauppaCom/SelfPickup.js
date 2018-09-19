import React from 'react';
import { css } from 'emotion';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const sectionStyles = css({
  backgroundColor: '#a4abb3',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  height: 480,
  marginBottom: '2rem',
  overflow: 'hidden',
  padding: '0 1rem',
  position: 'relative',
  width: '100%'
});

const imageStyles = css({
  height: '100%',
  left: 0,
  opacity: 0.2,
  position: 'absolute !important',
  top: 0,
  width: '100%',

  '> div': {
    height: '100%',
    width: '100%'
  }
});

const textStyles = css({
  color: 'white',
  margin: '1rem auto',
  maxWidth: 480,
  position: 'relative',
  textShadow: '0 1px 4px rgba(0, 0, 0, 0.2)',
  zIndex: 2
});

const IPadImg = () => (
  <StaticQuery
    query={graphql`
      query {
        file(name: { in: "ipad" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
  >
    {data => (
      <Img
        alt="Verkkokauppa.com Self-Service Checkout"
        className={imageStyles}
        fluid={data.file.childImageSharp.fluid}
      />
    )}
  </StaticQuery>
);

export const SelfPickup = () => (
  <section className={sectionStyles}>
    <IPadImg />
    <div className={textStyles}>
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
    </div>
  </section>
);
