import { css } from "@emotion/core";
import * as React from "react";
import lqip from "lqip.macro";

import { breakpoints, scale } from "../design";

const preview = lqip("../../static/self-desktop.jpg");

const container = css({
  backgroundImage: `url(${preview})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  flex: "1 1 50%",
  minHeight: scale(12),
  overflowY: "hidden",
  position: "relative",

  "&::after": {
    background: `
      linear-gradient(hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 0) 33%),
      linear-gradient(to right, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 0) 25%),
      linear-gradient(120deg, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 0) 50%)
    `,
    content: "''",
    display: "block",
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%",

    "@media (prefers-color-scheme: dark)": {
      background: `
      linear-gradient(hsla(0, 0%, 10%, 1) 0%, hsla(0, 0%, 10%, 0) 33%),
      linear-gradient(to right, hsla(0, 0%, 10%, 1) 0%, hsla(0, 0%, 10%, 0) 25%),
      linear-gradient(120deg, hsla(0, 0%, 10%, 1) 0%, hsla(0, 0%, 10%, 0) 50%)
    `
    }
  }
});

const image = css({
  height: "100%",
  objectFit: "cover",
  position: "absolute",
  width: "100%"
});

export default () => (
  <picture css={container}>
    <source
      media={`(max-width: ${breakpoints.desktop - 1}px)`}
      srcSet="/self-mobile.jpg, /self-mobile@2x.jpg 1.5x, /self-mobile@3x.jpg 2x"
    />
    <source
      media={`(min-width: ${breakpoints.desktop}px)`}
      srcSet="/self-desktop.jpg, /self-desktop@2x.jpg 1.5x, /self-desktop@3x.jpg 2x"
    />
    <img alt="Iiro Jäppinen" src="/self-desktop.jpg" css={image} />
  </picture>
);
