import { Link as ReactRouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const YELLOW = `hsl(44, 100%, 75%)`;

const Link = styled.a.attrs(props => ({
  as: props.to.startsWith("/") ? ReactRouterLink : "a",
  href: props.to
}))({
  backgroundImage: `linear-gradient(to bottom, ${YELLOW} 0%, ${YELLOW} 100%)`,
  backgroundPosition: "0 1em",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  color: "inherit",
  display: "inline-block",
  textDecoration: "none",
  transition: "background-position 125ms ease-out 250ms",

  "&:hover": {
    backgroundPosition: "0",
    cursor: "pointer",
    transition: "background-position 100ms ease-out 0s"
  },

  "&:active": {
    color: "black"
  }
});

Link.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired
};

export default Link;
