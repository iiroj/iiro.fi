import { css } from "@emotion/react";
import * as React from "react";

import { breakpoints, scale, minWidth } from "../design";

const preview =
  "iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAIAAACtAwlQAAAB3klEQVR4AVTIAQaAUBjA4O3X/Q8bIvIWXtAHbJ5dRrJJsWQGgaNRfNat8id7zZcVrwgBQCXUrMBGAEDPd7Ftp7ZtYyp+qVNt27ZtO7Z9jDV17vz8/of0980lj00OqsxAp9XNxSG5FiAIoNXIxUmNawIYjf6MJitAOd6mylrPWBQDEzlm0njv+y+/I4mkTQjyRUJYbraPsaimzV8ez1PJfKVUpX2R6MzgGfnc9WwmFSsxIAQjErF8wrRFJw5se/Ttm9s+tkqVUoVcYab3594DrV/Pf45egdG1YafEu30dvvby+8rr9686YOuE2FlYOjeTDCumz7n+9uWXrx8ROvt0390k1YsU8pUVs2dGU7GdcmIjBgkEfJarLhrrSEYC8MaN0wRYc/o4pVFqMGoQhZigkckOfmnLsbPE2Om1Ym7jCgMiFLJiGdBsdVU64GZAF/rxo8HeOXj3vAjBO54PCo1186o58PyF00Y6F4TiifnTDbeeU602yxcKIZ0JsTjlakM+mzt1//O/x/ceveVLBFOVRplm+BgOYUS32wW7PYYtwxMdSD5HhQLRD77Euw9vtRpds9vl2LpJbypVyjIRSmAYFKFlHYrmi0VZslbMp2U4IMAxmUKeLaSRHkNX8mHf7z5iBfLTazOPsQAAAABJRU5ErkJggg==";

const container = css({
  backgroundImage: `url(data:image/jpeg;base64,${preview})`,
  backgroundPosition: "80% 50%",
  backgroundSize: "cover",
  flex: "0 1 756px",
  maxHeight: scale(8),
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
    `,
    },
  },

  ...minWidth.tablet({
    maxHeight: "100%",
  }),
});

const image = css({
  height: "100%",
  objectFit: "cover",
  objectPosition: "80% 50%",
  position: "absolute",
  width: "100%",
});

export default () => (
  <picture css={container}>
    <source
      type="image/jpeg"
      media={`(max-width: ${breakpoints.desktop - 1}px)`}
      srcSet="/self-mobile.jpg, /self-mobile@2x.jpg 1.5x, /self-mobile@3x.jpg 2x"
    />
    <source
      type="image/jpeg"
      media={`(min-width: ${breakpoints.desktop}px)`}
      srcSet="/self-desktop.jpg, /self-desktop@2x.jpg 1.5x, /self-desktop@3x.jpg 2x"
    />
    <source
      type="image/webp"
      media={`(max-width: ${breakpoints.desktop - 1}px)`}
      srcSet="/self-mobile.webp, /self-mobile@2x.webp 1.5x, /self-mobile@3x.webp 2x"
    />
    <source
      type="image/webp"
      media={`(min-width: ${breakpoints.desktop}px)`}
      srcSet="/self-desktop.webp, /self-desktop@2x.webp 1.5x, /self-desktop@3x.webp 2x"
    />
    <img alt="Iiro Jäppinen" src="/self-desktop.jpg" css={image} />
  </picture>
);
