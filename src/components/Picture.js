import React from 'react';
import { css } from 'emotion';

const picture = css({
  flex: '0 0 4rem',
  height: '4rem',
  objectFit: 'cover',
  position: 'relative',
  width: '4rem'
});

const Picture = () => <img alt="Iiro Jäppinen" className={picture} src="/picture.jpg" />;

export default Picture;
