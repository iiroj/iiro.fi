/** @jsx jsx */

import { css, jsx } from "@emotion/core";
import React from "react";

const picture = css({
  flex: "0 0 4rem",
  height: "4rem",
  objectFit: "cover",
  position: "relative",
  width: "4rem"
});

const Picture = () => (
  <img alt="Iiro Jäppinen" css={picture} src="/picture.jpg" />
);

export default Picture;
