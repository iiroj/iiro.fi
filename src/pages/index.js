import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Links from "../components/Links";
import RateMe from "../components/RateMe";

const microdata = {
  "@context": "http://schema.org",
  "@type": "Person",
  name: "Iiro Jäppinen",
  jobTitle: "Designer",
  worksFor: {
    "@type": "Organization",
    name: "Fraktio",
    url: "https://fraktio.fi",
  },
  url: "https://iiro.fi/",
  email: "iiro@jappinen.fi",
  nationality: "Finland",
  address: {
    "@type": "PostalAddress",
    addressCountry: "Finland",
    addressLocality: "Helsinki",
  },
  sameAs: [
    "https://twitter.com/iirojappinen",
    "https://fi.linkedin.com/in/iiroj",
    "https://dribbble.com/iiroj",
    "https://github.com/iiroj",
    "https://gitlab.com/iiroj",
  ],
};

const HeaderArea = styled.div`
  background: hsla(0, 0%, 95%, 1);
  display: flex;
  flex-direction: column;
  position: relative;

  &::after {
    background-color: hsla(0, 0%, 100%, 1);
    content: "";
    display: block;
    height: 5rem;
    position: absolute;
    bottom: -5rem;
    transform-origin: top left;
    transform: skewY(-3deg);
    width: 100%;
  }

  @media (min-width: 64rem) {
    bottom: 0;
    left: 0;
    position: fixed;
    top: 0;
    width: 50%;

    &::after {
      height: 100%;
      right: -5rem;
      top: 0;
      transform-origin: top right;
      transform: skewX(-3deg);
      width: 5rem;
    }
  }
`;

const MainArea = styled.div`
  background-color: hsla(0, 0%, 100%, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  position: relative;
  z-index: 1;

  h3 {
    opacity: 0.6;
  }

  > * {
    margin: 1rem 0;
  }

  ${RateMe} {
    margin-right: auto;
  }

  @media (min-width: 64rem) {
    margin-left: 50%;
    padding: 4rem;
  }
`;

const Index = () => (
  <Fragment>
    <Helmet
      title="Iiro Jäppinen"
      script={[
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(microdata),
        },
      ]}
    />
    <HeaderArea>
      <Header />
    </HeaderArea>
    <MainArea>
      <ul>
        <Links />
      </ul>
      <RateMe />
    </MainArea>
  </Fragment>
);

export default Index;
