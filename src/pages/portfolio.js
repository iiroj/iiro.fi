import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Back from 'components/Back';
import { VerkkokauppaCom } from 'components/Portfolio/VerkkokauppaCom';
import { HumbleBundle } from 'components/Portfolio/HumbleBundle';
import { Icons } from 'components/Portfolio/Icons';

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

const Container = styled.div`
  width: 100%;
`;

const Header = styled.header`
  background-color: white;
  font-family: Georgia, serif;
  font-size: 1.5rem;
  padding: 2rem 3rem 6rem;
  text-align: center;
`;

const More = styled.p`
  color: hsla(0, 0%, 60%, 1);
  font-family: Georgia, serif;
  font-size: 1.5em;
  font-style: italic;
  padding: 4rem 0;
  text-align: center;
`;

const PortfolioIndex = () => [
  <Helmet key="helmet" title="Portfolio of Iiro Jäppinen" />,
  <Container key="container">
    <Back />
    <Header>
      <h1>Portfolio of Iiro Jäppinen</h1>
    </Header>
    <VerkkokauppaCom />
    <HumbleBundle />
    <Icons />
    <aside key="aside">
      <More>With more coming soon...</More>
    </aside>
  </Container>,
];

export default PortfolioIndex;
