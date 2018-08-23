import React from 'react';
import { css } from 'emotion';
import Helmet from 'react-helmet';

import Back from '../components/Back';

const h1Styles = css({
  fontSize: '2rem',
  textAlign: 'center',
  margin: 'auto'
});

export default () => (
  <>
    <Helmet>
      <title>Page Not Found</title>
    </Helmet>
    <Back />
    <h1 className={h1Styles}>There’s nothing here...</h1>
  </>
);
