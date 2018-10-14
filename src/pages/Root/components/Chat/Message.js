import React from "react";
import PropTypes from "prop-types";
import { css, keyframes } from "emotion";

const animation = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
});

const message = css({
  animation: `${animation} 125ms ease-in-out forwards`,
  backgroundColor: "hsl(0, 0%, 96%)",
  borderRadius: "0.5rem",
  padding: "1rem 2rem",
  transition: "all 125ms",

  "& + &": {
    marginTop: "0.5rem"
  },

  "&:last-of-type": {
    borderBottomLeftRadius: 0
  }
});

const Message = ({ children }) => <li className={message}>{children}</li>;

Message.propTypes = {
  children: PropTypes.any.isRequired
};

export default Message;
