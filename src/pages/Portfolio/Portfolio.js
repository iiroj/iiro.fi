import Helmet from "react-helmet-async";
import React from "react";

import Back from "../../components/Back";

import {
  Aside,
  Container,
  Header,
  HumbleBundle,
  Icons,
  VerkkokauppaCom
} from "./components";

const Portfolio = () => (
  <Container>
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
    <Aside>With more coming soon...</Aside>
  </Container>
);

export default Portfolio;
