import PropTypes from "prop-types";
import styled from "styled-components";

import HistoryLink from "./HistoryLink";

const Link = styled.a.attrs(props => ({
  as: props.href.startsWith("/") ? HistoryLink : undefined
}))({
  backgroundImage: `linear-gradient(to bottom, var(--actionable) 0%, var(--actionable) 100%)`,
  backgroundPosition: "0 1em",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  color: "var(--text-primary)",
  display: "inline-block",
  textDecoration: "none",
  transition: "background-position 125ms ease-out 250ms",

  "&:hover": {
    backgroundPosition: "0",
    cursor: "pointer",
    transition: "background-position 100ms ease-out 0s"
  },

  "&:active": {
    color: "var(--text-active)"
  }
});

Link.propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired
};

export default Link;
