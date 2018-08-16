import React from 'react';
import styled from 'react-emotion';

import VerkkokauppaCom from './VerkkokauppaCom';
import HumbleBundle from './HumbleBundle';
import Icons from './Icons';

const Header = styled.header`
  background-color: white;
  font-size: 1.5rem;
  padding: 2rem 3rem 6rem;
  text-align: center;
`;

const More = styled.aside`
  color: hsla(0, 0%, 60%, 1);
  font-size: 1.5em;
  padding: 4rem 0;
  text-align: center;
`;

export default () => (
  <>
    <Header>
      <h1>Portfolio of Iiro Jäppinen</h1>
    </Header>
    <VerkkokauppaCom />
    <HumbleBundle />
    <Icons />
    <More>With more coming soon...</More>
  </>
);
