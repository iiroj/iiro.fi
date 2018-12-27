import { css } from "@emotion/core";
import Helmet from "react-helmet-async";
import React from "react";

import Back from "../../components/Back";

import {
  Aside,
  Header,
  HumbleBundle,
  Icons,
  VerkkokauppaCom
} from "./components";
import { aside, header } from "./styles";

const container = css({
  overflowX: "hidden",
  overflowY: "auto"
});

const Portfolio = () => (
  <div css={container}>
    <Helmet>
      <title>Portfolio of Iiro Jäppinen</title>
    </Helmet>
    <Back />
    <Header css={header}>
      <h1>Portfolio of Iiro Jäppinen</h1>
    </Header>
    <VerkkokauppaCom />
    <HumbleBundle />
    <Icons />
    <Aside css={aside}>With more coming soon...</Aside>
  </div>
);

export default Portfolio;
