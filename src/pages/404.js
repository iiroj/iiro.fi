import React from 'react';
import { css } from 'react-emotion';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import Back from '../components/Back';

const h1Styles = css`
  font-size: 2rem;
  text-align: center;
  margin: auto;
`;

export default () => (
  <Layout>
    <Helmet>
      <title>Page Not Found</title>
    </Helmet>
    <Back />
    <h1 className={h1Styles}>There’s nothing here...</h1>
  </Layout>
);
