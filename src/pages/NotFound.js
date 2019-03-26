import { Helmet } from "react-helmet-async";
import React from "react";
import styled from "styled-components";

import Back from "../components/Back";

const H1 = styled.h1({
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
    <H1>There’s nothing here...</H1>
  </>
);
