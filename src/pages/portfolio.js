import React from 'react';
import Helmet from 'react-helmet';

import Back from '../components/Back';

import Portfolio from '../components/portfolio';

export default () => (
  <>
    <Helmet>
      <title>Portfolio of Iiro Jäppinen</title>
    </Helmet>
    <Back />
    <Portfolio />
  </>
);
