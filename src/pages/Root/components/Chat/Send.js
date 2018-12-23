import { css } from "@emotion/core";
import React from "react";

const send = css({
  fill: "none",
  height: "2rem",
  display: "block",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  stroke: "hsl(0, 0%, 80%)",
  width: "2rem"
});

export default () => (
  <svg css={send} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="15" />
    <path d="m17 23 4-12-12 4 6 2" />
  </svg>
);
