/** @jsx jsx */

import { jsx } from "@emotion/core";
import React from "react";

import svg from "./svg";

export default () => (
  <svg css={svg} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="15" />
    <path d="m17 23 4-12-12 4 6 2" />
  </svg>
);
