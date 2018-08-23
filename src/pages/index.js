import React from 'react';
import Helmet from 'react-helmet';

import Chat from '../components/home/Chat';

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

const Home = () => (
  <>
    <Helmet>
      <title>Iiro Jäppinen</title>
    </Helmet>
    <script type="application/ld+json">{microdata}</script>
    <Chat />
  </>
);

export default Home;
