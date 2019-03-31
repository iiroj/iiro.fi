import FontFaceObserver from "fontfaceobserver";
import * as React from "react";

import { colors } from "./colors";
import { minWidth } from "./media";
import { scale } from "./scale";

export const IBM_PLEX_SERIF = "IBM Plex Serif";

export const IBM_PLEX_SANS_CONDENSED = "IBM Plex Sans Condensed";

export const SYSTEM_FONT =
  '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

export const fontFaces = [
  {
    "@font-face": {
      fontFamily: IBM_PLEX_SERIF,
      fontStyle: "normal",
      fontWeight: 300,
      src:
        'local("IBM Plex Serif Light"), local("IBMPlexSerif-Light"), url(https://fonts.gstatic.com/s/ibmplexserif/v7/jizAREVNn1dOx-zrZ2X3pZvkTi20-SI0q1vjitOh.woff2) format("woff2")',
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
    }
  },
  {
    "@font-face": {
      fontFamily: IBM_PLEX_SANS_CONDENSED,
      fontStyle: "normal",
      fontWeight: 400,
      src:
        'local("IBM Plex Sans Condensed"), local("IBMPlexSansCond"), url(https://fonts.gstatic.com/s/ibmplexsanscondensed/v5/Gg8lN4UfRSqiPg7Jn2ZI12V4DCEwkj1E4LVeHYapyK7Bh4sN.woff2) format("woff2")',
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
    }
  },
  {
    "@font-face": {
      fontFamily: IBM_PLEX_SANS_CONDENSED,
      fontStyle: "normal",
      fontWeight: 600,
      src:
        'local("IBM Plex Sans Condensed SemiBold"), local("IBMPlexSansCond-SemiBold"), url(https://fonts.gstatic.com/s/ibmplexsanscondensed/v5/Gg8gN4UfRSqiPg7Jn2ZI12V4DCEwkj1E4LVeHY527LvspYYnFBq4.woff2) format("woff2")',
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
    }
  }
];

const IBMPlexSerif300 = new FontFaceObserver(IBM_PLEX_SERIF, {
  style: "normal",
  weight: 300
});

const IBMPlexSansCondensed400 = new FontFaceObserver(IBM_PLEX_SANS_CONDENSED, {
  style: "normal",
  weight: 400
});

const IBMPlexSansCondensed600 = new FontFaceObserver(IBM_PLEX_SANS_CONDENSED, {
  style: "normal",
  weight: 600
});

/**
 * Load web fonts with FontFaceObserver
 * @returns font configuration objects
 */
export const useFonts = () => {
  const [headerLoaded, setHeaderLoaded] = React.useState(false);
  const [bodyLoaded, setBodyLoaded] = React.useState(false);

  React.useEffect(() => {
    Promise.all([IBMPlexSerif300.load()]).then(() => {
      setHeaderLoaded(true);
    });
  }, []);

  React.useEffect(() => {
    Promise.all([
      IBMPlexSansCondensed400.load(),
      IBMPlexSansCondensed600.load()
    ]).then(() => {
      setBodyLoaded(true);
    });
  }, []);

  return {
    color: colors.text.primary,
    fontFamily: bodyLoaded ? IBM_PLEX_SANS_CONDENSED : SYSTEM_FONT,
    fontStyle: "normal",
    fontSize: 18,
    lineHeight: scale.ratio,
    fontWeight: 400,

    ...minWidth.tablet({
      fontSize: 24
    }),

    strong: {
      fontWeight: 600
    },

    h1: {
      fontFamily: headerLoaded ? IBM_PLEX_SERIF : undefined,
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
};
