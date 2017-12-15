import { css } from "styled-components";

import iosevkaWoff2 from "../fonts/iosevka-regular.woff2";
import iosevkaWoff from "../fonts/iosevka-regular.woff";

const fonts = css`
  @font-face {
    font-family: "Iosevka";
    font-weight: 400;
    src: url(${iosevkaWoff2}) format("woff2"), url(${iosevkaWoff}) format("woff");
  }
`;

export default fonts;
