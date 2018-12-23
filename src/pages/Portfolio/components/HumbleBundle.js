import { css } from "@emotion/core";
import React from "react";

const articleStyles = css({
  backgroundColor: "#3b3e48",
  padding: "4rem 1rem"
});

const logoStyles = css({
  display: "block",
  margin: "0 auto 4rem",
  maxHeight: 64,
  maxWidth: "100%"
});

const textStyles = css({
  color: "white",
  margin: "0 auto 0.5rem",
  maxWidth: 480,

  a: {
    background: "none",
    color: "inherit",
    textDecoration: "underline"
  }
});

export default () => (
  <article css={articleStyles}>
    <img
      alt="Humble Bundle"
      css={logoStyles}
      src="/portfolio/humble/humble-logo.png"
      srcSet="/portfolio/humble/humble-logo.png 1x, /portfolio/humble/humble-logo@2x.png 2x, /portfolio/humble/humble-logo@3x.png 3x"
    />
    <p css={textStyles}>
      I designed the first{" "}
      <a
        href="https://www.humblebundle.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Humble Bundle
      </a>{" "}
      website and many after that. I worked with Humble from its inception in
      2011 until summer 2014.
    </p>
    <p css={textStyles}>
      People often follow up with whether or not I also created the beautiful
      icons representing bundled games. I did not.
    </p>
  </article>
);
