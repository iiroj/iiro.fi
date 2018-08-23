import React from 'react';
import { css } from 'emotion';

import VerkkokauppaCom from './VerkkokauppaCom';
import HumbleBundle from './HumbleBundle';
import Icons from './Icons';

const header = css({
  backgroundColor: 'white',
  fontSize: '1.5rem',
  padding: '2rem 3rem 6rem',
  textAlign: 'center'
});

const aside = css({
  color: 'hsl(0, 0%, 60%)',
  fontSize: '1.5em',
  padding: '4rem 0',
  textAlign: 'center'
});

export default () => (
  <>
    <header className={header}>
      <h1>Portfolio of Iiro Jäppinen</h1>
    </header>
    <VerkkokauppaCom />
    <HumbleBundle />
    <Icons />
    <aside className={aside}>With more coming soon...</aside>
  </>
);
