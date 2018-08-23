import React from 'react';
import Helmet from 'react-helmet';
import { css } from 'emotion';

const picture = css({
  backgroundImage: 'url(/picture.jpg)',
  backgroundSize: 'cover',
  borderRadius: '50%',
  flex: '0 0 4rem',
  height: '4rem',
  position: 'relative',
  width: '4rem'
});

const Picture = () => (
  <>
    <div className={picture} role="img" alt="Iiro Jäppinen" />
    <Helmet>
      <link rel="preload" href="/picture.jpg" as="image" />
    </Helmet>
  </>
);

export default Picture;
