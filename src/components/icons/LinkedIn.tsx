import { css } from "@emotion/core";
import * as React from "react";

import baseSvg from "./svg";

const svg = css({
  ...baseSvg,

  circle: {
    fill: "hsl(0, 0%, 40%)",
    stroke: "none"
  }
});

export default () => (
  <svg css={svg} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="m4 31h25c1 0 2-1 2-2.052v-25.948c0-1-1-2-2-2h-26c-1 0-2 1-2 2v25" />
      <path d="m15 25v-11 4c0-1 2-5 5-5 2 0 4 2 4 5v7" />
      <circle cx="9" cy="9" r="1" />
      <path d="m8.99926758 14v11" />
    </g>
  </svg>
);
