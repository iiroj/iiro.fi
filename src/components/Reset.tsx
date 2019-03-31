import { Global } from "@emotion/core";
import reset from "react-style-reset";
import * as React from "react";

import { colors, colorVariables, fontFaces, useFonts } from "../design";

export default () => {
  const body = useFonts();

  return (
    <Global
      styles={[
        reset,

        colorVariables,

        ...fontFaces,

        { body },

        {
          "html, body": {
            backgroundColor: colors.background.primary,
            height: "100%"
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
  );
};
