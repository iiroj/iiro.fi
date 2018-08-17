import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';

const Picture = props => (
  <>
    <div role="img" alt="Iiro Jäppinen" {...props} />
    <Helmet>
      <link rel="preload" href="/picture.jpg" as="image" />
    </Helmet>
  </>
);

export default styled(Picture)`
  flex: 0 0 4rem;
  height: 4rem;
  background-image: url('/picture.jpg');
  background-size: cover;
  border-radius: 50%;
  position: relative;
  width: 4rem;
`;
