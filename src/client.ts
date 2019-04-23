import FontFaceObserver from "fontfaceobserver";

import {
  GOOGLE_FONTS_URL,
  IBM_PLEX_SANS_CONDENSED,
  IBM_PLEX_SERIF
} from "./constants/fonts";

(document => {
  if (!document.documentElement.dataset.hasOwnProperty("fromSw")) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = GOOGLE_FONTS_URL;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  }
})(document);

const IBMPlexSerif300 = new FontFaceObserver(IBM_PLEX_SERIF, {
  style: "normal",
  weight: 300
});

(() => {
  IBMPlexSerif300.load().then(() => {
    document.documentElement.classList.add("header-font-loaded");
  });
})();

const IBMPlexSansCondensed400 = new FontFaceObserver(IBM_PLEX_SANS_CONDENSED, {
  style: "normal",
  weight: 400
});

const IBMPlexSansCondensed600 = new FontFaceObserver(IBM_PLEX_SANS_CONDENSED, {
  style: "normal",
  weight: 600
});

(() => {
  Promise.all([
    IBMPlexSansCondensed400.load(),
    IBMPlexSansCondensed600.load()
  ]).then(() => {
    document.documentElement.classList.add("body-font-loaded");
  });
})();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    try {
      navigator.serviceWorker.register("/sw.js");
    } catch (error) {
      console.error("⚙️ Service Worker registration failed:", error);
    }
  });
}
