import PropTypes from "prop-types";
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

const Portfolio = ({ forceInitialPose }) => (
  <Container>
    <Helmet>
      <title>Portfolio of Iiro Jäppinen</title>
    </Helmet>
    <Back />
    <Header>
      <h1>Portfolio of Iiro Jäppinen</h1>
    </Header>
    <VerkkokauppaCom forceInitialPose={forceInitialPose} />
    <HumbleBundle />
    <Icons />
    <Aside>With more coming soon...</Aside>
  </Container>
);

Portfolio.propTypes = {
  forceInitialPose: PropTypes.bool.isRequired
};

export default Portfolio;
