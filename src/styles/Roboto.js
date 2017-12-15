import { css } from "styled-components";

import RobotoWoff2 from "../fonts/roboto-regular.woff2";
import RobotoWoff from "../fonts/roboto-regular.woff";
import RobotoItalicWoff2 from "../fonts/roboto-italic.woff2";
import RobotoItalicWoff from "../fonts/roboto-italic.woff";
import RobotoMediumWoff2 from "../fonts/roboto-medium.woff2";
import RobotoMediumWoff from "../fonts/roboto-medium.woff";
import RobotoMediumItalicWoff2 from "../fonts/roboto-mediumitalic.woff2";
import RobotoMediumItalicWoff from "../fonts/roboto-mediumitalic.woff";
import RobotoBoldWoff2 from "../fonts/roboto-bold.woff2";
import RobotoBoldWoff from "../fonts/roboto-bold.woff";
import RobotoBoldItalicWoff2 from "../fonts/roboto-bolditalic.woff2";
import RobotoBoldItalicWoff from "../fonts/roboto-bolditalic.woff";

const fonts = css`
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    src: local("Roboto"), local("Roboto-Regular"), url(${RobotoWoff2}) format("woff2"),
      url(${RobotoWoff}) format("woff");
    unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02c6, U+02da, U+02dc, U+2000-206f, U+2074, U+20ac, U+2212, U+2215;
  }

  @font-face {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 400;
    src: local("Roboto Italic"), local("Roboto-Italic"), url(${RobotoItalicWoff2}) format("woff2"),
      url(${RobotoItalicWoff}) format("woff");
    unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02c6, U+02da, U+02dc, U+2000-206f, U+2074, U+20ac, U+2212, U+2215;
  }

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    src: local("Roboto Medium"), local("Roboto-Medium"), url(${RobotoMediumWoff2}) format("woff2"),
      url(${RobotoMediumWoff}) format("woff");
    unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02c6, U+02da, U+02dc, U+2000-206f, U+2074, U+20ac, U+2212, U+2215;
  }

  @font-face {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 500;
    src: local("Roboto Medium Italic"), local("Roboto-MediumItalic"), url(${RobotoMediumItalicWoff2}) format("woff2"),
      url(${RobotoMediumItalicWoff}) format("woff");
    unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02c6, U+02da, U+02dc, U+2000-206f, U+2074, U+20ac, U+2212, U+2215;
  }

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    src: local("Roboto Bold"), local("Roboto-Bold"), url(${RobotoBoldWoff2}) format("woff2"),
      url(${RobotoBoldWoff}) format("woff");
    unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02c6, U+02da, U+02dc, U+2000-206f, U+2074, U+20ac, U+2212, U+2215;
  }

  @font-face {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 700;
    src: local("Roboto Bold Italic"), local("Roboto-BoldItalic"), url(${RobotoBoldItalicWoff2}) format("woff2"),
      url(${RobotoBoldItalicWoff2}) format("woff");
    unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02c6, U+02da, U+02dc, U+2000-206f, U+2074, U+20ac, U+2212, U+2215;
  }
`;

export default fonts;
