import React from 'react';
import styled from 'react-emotion';
import { Title } from 'react-head';

import Back from '../components/Back';
import { VerkkokauppaCom } from '../components/Portfolio/VerkkokauppaCom';
import { HumbleBundle } from '../components/Portfolio/HumbleBundle';
import { Icons } from '../components/Portfolio/Icons';

export const ButtonLink = styled.a`
  background: white !important;
  border-radius: 2px;
  color: #333333 !important;
  text-shadow: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  margin: 1rem 0;
  display: inline-block;
  line-height: 16px;
  padding: 12px 16px;
  text-decoration: none;
  transition: color 125ms ease-in, box-shadow 125ms ease-in;

  &:hover {
    color: #2171cc !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:active {
    color: #333333 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

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
