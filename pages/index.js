import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

import { media } from "../src/styles/helpers";
import BaseGrid from "../src/components/Grid";
import Picture from "../src/components/Picture";
import Baskerville from "../src/components/Baskerville";
import FraktioLink from "../src/components/FraktioLink";

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

const Title = styled.h1`
  font-size: 150%;
  font-weight: 500;
`;

const Text = styled.article`
  line-height: 1.5;

  ${Title} {
    margin-bottom: 1rem;
  }
`;

const Grid = BaseGrid.extend`
  align-items: center;
  min-height: 100%;
  padding: 2rem;

  ${Picture} {
    grid-column: col 2 / span 6;
    height: 40vh;
    min-height: 32rem;

    ${media.tablet`
      grid-column: col 3 / span 3;
    `};
  }

  ${Text} {
    grid-column: col 4 / span 6;

    ${media.tablet`
      grid-column: col 7 / span 4;
      margin-top: 20vh;
    `};
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
    <Grid>
      <Picture />
      <Text>
        <Title>I am Iiro Jäppinen</Title>
        <p>
          a UI Designer <Baskerville>&</Baskerville> Developer, all-around handyman at <FraktioLink />. React
          enthusiast.
        </p>
      </Text>
    </Grid>
  </Fragment>
);

export default Index;
