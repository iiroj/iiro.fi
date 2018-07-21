import React from 'react';
import { css } from 'react-emotion';
import { Title } from 'react-head';

import Picture from './components/Picture';
import Baskerville from './components/Baskerville';
import Fraktio from './components/Fraktio';
import Links from './components/Links';
import FeedbackLink from './components/FeedbackLink';

const microdata = JSON.stringify({
  '@context': 'http://schema.org',
  '@type': 'Person',
  name: 'Iiro Jäppinen',
  jobTitle: 'Designer',
  worksFor: {
    '@type': 'Organization',
    name: 'Fraktio',
    url: 'https://fraktio.fi'
  },
  url: 'https://iiro.fi/',
  email: 'iiro@jappinen.fi',
  nationality: 'Finland',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Finland',
    addressLocality: 'Helsinki'
  },
  sameAs: ['https://twitter.com/iirojappinen', 'https://fi.linkedin.com/in/iiroj', 'https://github.com/iiroj']
});

const articleStyle = css`
  flex: 1 1 24rem;
  padding: 4rem 0 0 2rem;
  transition: padding 125ms ease;

  h1 {
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 2rem;
  }

  p {
    margin-top: 1rem;
    line-height: 1.75;
  }

  ${Baskerville} {
    font-size: 120%;
    line-height: 1.25;
  }

  ${Links} {
    margin-top: 1.5rem;
  }

  ${FeedbackLink} {
    margin: 2.5rem 0 4rem;
  }

  @media (min-width: 60rem) {
    padding: 10rem 0 0 4rem;
  }
`;

const containerStyle = css`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  max-width: 64rem;
  padding: 2rem;
  width: 100%;
`;

export default () => (
  <div className={containerStyle}>
    <Title>Iiro Jäppinen</Title>
    <script type="application/ld+json">{microdata}</script>
    <Picture />
    <article className={articleStyle}>
      <h1>I am Iiro Jäppinen</h1>
      <p>
        a UI Designer <Baskerville>&</Baskerville> Developer, and all-around handyman at <Fraktio />. I help people
        realise their ideas, design useful experiences and create beautiful interfaces and interactions. I mainly create
        ECMAScript/React applications.
      </p>
      <Links />
      <FeedbackLink />
    </article>
  </div>
);
