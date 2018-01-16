import React from "react";
import styled from "styled-components";

import Svg from "./fraktio.svg";
import Link from "../Link";

const Fraktio = styled(Svg)`
  vertical-align: -14%;
  position: relative;
  margin-right: 2px;
  display: inline-block;

  path {
    fill: hsla(0, 0%, 30%, 1);
  }
`;

export default () => (
  <Link href="https://fraktio.fi">
    <Fraktio />
  </Link>
);
