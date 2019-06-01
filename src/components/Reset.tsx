import { Global } from "@emotion/core";
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
        "html, body": {
          height: "100%"
        },

        body: {
          backgroundColor: colors.background.primary,

          "@media (-webkit-min-device-pixel-ratio: 1.5)": {
            "-webkit-font-smoothing": "antialiased"
          }
        },

        "#___gatsby": {
          height: "100%",

          "> div": {
            height: "100%"
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
