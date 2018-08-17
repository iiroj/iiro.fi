import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import Back from '../components/Back';

import Portfolio from '../components/portfolio';

export default () => (
  <Layout>
    <Helmet>
      <title>Portfolio of Iiro Jäppinen</title>
    </Helmet>
    <Back />
    <Portfolio />
  </Layout>
);
