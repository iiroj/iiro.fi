/** @jsx jsx */

import { jsx } from "@emotion/core";
import React from "react";

import svg from "./svg";

export default () => (
  <svg css={svg} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="m1 5h30v22h-30v-18" />
      <path d="m5 9 11 9 10.9963379-9" />
    </g>
  </svg>
);
