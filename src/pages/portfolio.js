import React from 'react';
import styled from 'react-emotion';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import Back from '../components/Back';

import { VerkkokauppaCom } from '../components/portfolio/VerkkokauppaCom';
import { HumbleBundle } from '../components/portfolio/HumbleBundle';
import { Icons } from '../components/portfolio/Icons';

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
  <Layout>
    <Helmet>
      <title>Portfolio of Iiro Jäppinen</title>
    </Helmet>
    <Back />
    <Header>
      <h1>Portfolio of Iiro Jäppinen</h1>
    </Header>
    <VerkkokauppaCom />
    <HumbleBundle />
    <Icons />
    <More>With more coming soon...</More>
  </Layout>
);
