import posed from "react-pose";
import React from "react";
import styled, { keyframes } from "styled-components";

const jump = keyframes({
  from: { transform: "translateY(-50%)" },
  to: { transform: "translateY(50%)" }
});

const Ball1 = styled.div({
  animation: `${jump.getName()} 500ms ease-in-out forwards alternate infinite`,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  borderRadius: "50%",
  display: "block",
  height: "0.5rem",
  position: "absolute",
  transform: "translateY(-50%)",
  width: "0.5rem"
});

const Ball2 = styled(Ball1)({
  animationDelay: "100ms",
  left: "1rem"
});

const Ball3 = styled(Ball1)({
  animationDelay: "200ms",
  left: "2rem"
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
});

const Container = styled.i({
  animation: `${fadeIn.getName()} 125ms ease-in-out`,
  display: "block",
  height: "0.5rem",
  position: "relative",
  width: "2.5rem"
});

const Typing = React.forwardRef((props, ref) => (
  <li ref={ref}>
    <Container aria-live="polite">
      <Ball1 />
      <Ball2 />
      <Ball3 />
    </Container>
  </li>
));

export default posed(Typing)({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});
