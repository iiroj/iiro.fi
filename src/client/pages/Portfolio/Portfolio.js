import React from 'react';
import styled from 'react-emotion';
import { Title } from 'react-head';

import Back from '../../components/Back';

import { VerkkokauppaCom } from './components/VerkkokauppaCom';
import { HumbleBundle } from './components/HumbleBundle';
import { Icons } from './components/Icons';

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
    <Title>Portfolio of Iiro Jäppinen</Title>
    <Back />
    <Header>
      <h1>Portfolio of Iiro Jäppinen</h1>
    </Header>
    <VerkkokauppaCom />
    <HumbleBundle />
    <Icons />
    <More>With more coming soon...</More>
  </>
);
