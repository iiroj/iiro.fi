import { css } from "@emotion/core";
import React from "react";
import { Link } from "react-router-dom";

const back = css({
  background: "none !important",
  color: "transparent",
  cursor: "pointer",
  fontSize: 0,
  height: "1.5rem",
  left: 0,
  margin: "2.4rem 0 0 1rem",
  overflow: "hidden",
  position: "absolute",
  top: 0,
  userSelect: "none",
  width: "1.5rem",
  zIndex: 3,

  "&::before, &::after": {
    backgroundColor: "rgb(77, 77, 77)",
    borderRadius: 1,
    content: '""',
    display: "block",
    height: 2,
    marginTop: -1,
    position: "absolute",
    top: "50%",
    width: "100%",
    zIndex: -1,
    transition: "transform 125ms ease"
  },

  "&::before": {
    transform: "rotate(45deg)"
  },

  "&::after": {
    transform: "rotate(-45deg)"
  },

  "&:hover": {
    "&::before": {
      transform: "rotate(45deg) scale(1.2)"
    },
    "&::after": {
      transform: "rotate(-45deg) scale(1.2)"
    }
  },

  "&:active": {
    "&::before": {
      transform: "rotate(45deg) scale(1)"
    },
    "&::after": {
      transform: "rotate(-45deg) scale(1)"
    }
  },

  "@media print": {
    display: "none"
  }
});

const Back = () => (
  <Link
    css={back}
    rel="preload"
    role="navigation"
    title="Back to iiro.fi"
    to="/"
  >
    Back to iiro.fi
  </Link>
);

export default Back;
