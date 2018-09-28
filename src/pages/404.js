import React from 'react';
import { css } from 'emotion';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';

import Back from '../components/Back';

const h1Styles = css({
  fontSize: '2rem',
  textAlign: 'center',
  margin: 'auto'
});

const NotFound = () => (
  <>
    <Helmet>
      <title>Page Not Found</title>
    </Helmet>
    <Back />
    <h1 className={h1Styles}>There’s nothing here...</h1>
  </>
);

export default hot(module)(NotFound);
