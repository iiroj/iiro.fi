import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

import { media } from "../src/styles/helpers";
import BaseGrid from "../src/components/Grid";
import Picture from "../src/components/Picture";
import Baskerville from "../src/components/Baskerville";
import Fraktio from "../src/components/Fraktio";
import Link from "../src/components/Link";
import RateMe from "../src/components/RateMe";

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
  font-size: 120%;
  font-weight: 500;
`;

const Text = styled.article`
  p {
    margin-top: 1rem;
  }

  ${Baskerville} {
    font-size: 120%;
    line-height: 1.25;
  }

  ${RateMe} {
    margin-top: 1rem;
  }
`;

const Grid = BaseGrid.extend`
  align-items: center;
  min-height: 100%;
  padding: 2rem;

  ${Picture} {
    grid-column: col 2 / span 8;
    height: 40vh;
    min-height: 32rem;

    ${media.tablet`
      grid-column: col 2 / span 4;
    `};

    ${media.desktop`
    grid-column: col 4 / span 2;
    `};
  }

  ${Text} {
    grid-column: col 4 / span 8;

    ${media.tablet`
      grid-column: col 7 / span 4;
      margin-top: 20vh;
    `};

    ${media.desktop`
      grid-column: col 7 / span 3;
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
          a UI Designer <Baskerville>&</Baskerville> Developer, and all-around handyman at <Fraktio />. I help people
          realise their ideas, design useful experiences and create beautiful interfaces and interactions. I like to
          write Javascript and React. In my toolbox I keep <Link href="https://www.sketchapp.com/">Sketch</Link>,{" "}
          <Link href="https://code.visualstudio.com/">VS Code</Link>,{" "}
          <Link href="https://www.gatsbyjs.org/">Gatsby</Link>,{" "}
          <Link href="https://github.com/zeit/next.js/">Next.js</Link> and{" "}
          <Link href="https://github.com/acdlite/recompose">Recompose</Link>.
        </p>
        <p>
          In my free time I like to go to the gym and train strength. Recently I’ve been following the 5x5 progam
          because of its efficiency and relatively short time requirements.
        </p>
        <RateMe />
      </Text>
    </Grid>
  </Fragment>
);

export default Index;
