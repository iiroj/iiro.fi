/** @jsx jsx */

import { css, jsx } from "@emotion/core";
import React from "react";
import Helmet from "react-helmet-async";

import Back from "../components/Back";

const h1Styles = css({
  fontSize: "2rem",
  textAlign: "center",
  margin: "auto"
});

export default () => (
  <>
    <Helmet>
      <title>Page Not Found</title>
    </Helmet>
    <Back />
    <h1 css={h1Styles}>There’s nothing here...</h1>
  </>
);
