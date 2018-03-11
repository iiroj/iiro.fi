import React from "react";
import styled from "styled-components";
import Head from "next/head";

import { media } from "../src/styles/helpers";
import Picture from "../src/components/Picture";
import Baskerville from "../src/components/Baskerville";
import Fraktio from "../src/components/Fraktio";
import Link from "../src/components/Link";
import Links from "../src/components/Links";
import RateMe from "../src/components/RateMe";

const microdata = JSON.stringify({
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
});

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 2rem;

  ${media.tablet`
    font-size: 4rem;
  `};
`;

const Text = styled.article`
  p {
    hyphens: auto;
    margin-top: 1rem;
  }

  ${Baskerville} {
    font-size: 120%;
    line-height: 1.25;
  }

  ${RateMe} {
    margin: 2rem 0 4rem;
  }
`;

const Container = styled.div`
  margin: auto;
  max-width: 64rem;
  padding: 2rem;
  width: 100%;

  ${Picture} {
    flex: 1 1 32rem;
    height: 32rem;
    max-width: 80%;
    width: 24rem;
  }

  ${Text} {
    flex: 1 1 50rem;
    padding: 4rem 0 0 2rem;
  }

  ${media.tablet`
    display: flex;

    ${Text} {
      padding: 10rem 0 0 4rem;
    }
  `};
`;

const Index = () => (
  <Container>
    <Head>
      <title>Iiro Jäppinen</title>
      <script type="application/ld+json">{microdata}</script>
    </Head>
    <Picture />
    <Text>
      <Title>I am Iiro Jäppinen</Title>
      <p>
        a UI Designer <Baskerville>&</Baskerville> Developer, and all-around handyman at <Fraktio />. I help people
        realise their ideas, design useful experiences and create beautiful interfaces and interactions. I like to write
        Javascript and React. In my toolbox I keep <Link href="https://www.sketchapp.com/">Sketch</Link>,{" "}
        <Link href="https://www.styled-components.com">styled-components</Link>,{" "}
        <Link href="https://github.com/zeit/next.js/">next.js</Link> and{" "}
        <Link href="https://github.com/acdlite/recompose">recompose</Link>.
      </p>
      <p>In my free time I like to go to the gym and train strength. For recovery I drink beer.</p>
      <Links />
      <RateMe />
    </Text>
  </Container>
);

export default Index;
