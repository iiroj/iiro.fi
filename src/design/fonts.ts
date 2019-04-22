import { colors } from "./colors";
import { minWidth } from "./media";
import { scale } from "./scale";

import {
  IBM_PLEX_SANS_CONDENSED,
  IBM_PLEX_SERIF,
  SYSTEM_FONT
} from "../constants/fonts";

export const fonts = {
  html: {
    "&.body-font-loaded": {
      body: {
        fontFamily: IBM_PLEX_SANS_CONDENSED
      },

      h1: {
        fontFamily: IBM_PLEX_SERIF
      }
    },

    "&[data-from-sw]": {
      body: {
        fontFamily: IBM_PLEX_SANS_CONDENSED
      },

      h1: {
        IBM_PLEX_SERIF
      }
    }
  },

  body: {
    color: colors.text.primary,
    fontFamily: SYSTEM_FONT,
    fontStyle: "normal",
    fontSize: 18,
    lineHeight: scale.ratio,
    fontWeight: 400,

    ...minWidth.tablet({
      fontSize: 24
    })
  },

  strong: {
    fontWeight: 600
  },

  h1: {
    fontSize: 32,
    letterSpacing: "-2",
    lineHeight: "0.8em",

    ...minWidth.tablet({
      fontSize: 48
    }),

    ...minWidth.desktop({
      fontSize: 64
    })
  }
};
