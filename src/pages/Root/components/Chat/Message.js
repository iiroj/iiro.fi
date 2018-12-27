import React from "react";
import { css } from "@emotion/core";
import posed from "react-pose";

const message = css({
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

const Message = React.forwardRef(({ children }, ref) => (
  <li css={message} ref={ref}>
    {children}
  </li>
));

export default posed(Message)({
  from: {
    opacity: 0,
    y: "25%"
  },
  enter: {
    opacity: 1,
    y: "0%"
  },
  exit: {
    opacity: 0,
    y: "-25%"
  }
});
