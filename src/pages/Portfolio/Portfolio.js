import React from "react";
import Helmet from "react-helmet-async";

import Back from "../../components/Back";

import { HumbleBundle, Icons, VerkkokauppaCom } from "./components";
import { aside, header } from "./styles";

const Portfolio = () => (
  <>
    <Helmet>
      <title>Portfolio of Iiro Jäppinen</title>
    </Helmet>
    <Back />
    <header className={header}>
      <h1>Portfolio of Iiro Jäppinen</h1>
    </header>
    <VerkkokauppaCom />
    <HumbleBundle />
    <Icons />
    <aside className={aside}>With more coming soon...</aside>
  </>
);

export default Portfolio;
