import { Global } from "@emotion/react";
import reset from "react-style-reset";
import * as React from "react";

import { colors, colorVariables, fonts } from "../design";

export default React.memo(() => (
  <Global
    styles={[
      reset,
      colorVariables,
      fonts,
      {
        "html, body, #__next": {
          height: "100%"
        },

        body: {
          backgroundColor: colors.background.primary,

          "@media (-webkit-min-device-pixel-ratio: 1.5)": {
            WebkitFontSmoothing: "antialiased"
          }
        },

        a: {
          color: "inherit",
          textDecoration: "none"
        }
      }
    ]}
  />
));
