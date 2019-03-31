import { css } from "@emotion/core";
import GatsbyImage from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
import * as React from "react";

import { scale } from "../design";

const image = css({
  height: "100%",
  width: "100%",

  "&::after": {
    background: `
      linear-gradient(hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 0) 33%),
      linear-gradient(to right, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 0) 25%),
      linear-gradient(120deg, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 0) 50%)
    `,
    content: "''",
    display: "block",
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%",

    "@media (prefers-color-scheme: dark)": {
      background: `
      linear-gradient(hsla(0, 0%, 10%, 1) 0%, hsla(0, 0%, 10%, 0) 33%),
      linear-gradient(to right, hsla(0, 0%, 10%, 1) 0%, hsla(0, 0%, 10%, 0) 25%),
      linear-gradient(120deg, hsla(0, 0%, 10%, 1) 0%, hsla(0, 0%, 10%, 0) 50%)
    `
    }
  }
});

const imageContainer = css({
  flex: "1 1 50%",
  minHeight: scale(9),
  overflowY: "hidden",
  position: "relative"
});

export default () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "self.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <figure css={imageContainer}>
        <GatsbyImage
          alt="Iiro Jäppinen"
          backgroundColor="white"
          css={image}
          fluid={data.file.childImageSharp.fluid}
          style={{ position: "absolute" }}
        />
      </figure>
    )}
  />
);
