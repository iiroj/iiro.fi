import { css } from "@emotion/core";
import React from "react";
import PropTypes from "prop-types";

const header = css({
  display: "flex",
  flexWrap: "wrap-reverse",

  div: {
    flex: "1 1 100mm",
    display: "flex",
    flexDirection: "column",
    marginRight: "5mm",

    h1: {
      borderBottom: "1px solid hsl(0,0%,30%)",
      fontWeight: 600,
      fontSize: "3rem",
      lineHeight: "4rem",
      marginBottom: "1rem"
    },

    p: {
      marginTop: "auto",
      marginBottom: "2rem"
    }
  },

  img: {
    flex: "0 1 45mm",
    height: "100%",
    marginBottom: "auto",
    paddingBottom: "2rem",

    "@media only print": {
      filter: "grayscale(100%) brightness(120%) contrast(80%)"
    }
  }
});

const Header = ({ children, name, picture }) => (
  <header css={header}>
    <div>
      <h1>{name}</h1>
      {children}
    </div>
    {picture}
  </header>
);

Header.propTypes = {
  children: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.any.isRequired
};

export default Header;
