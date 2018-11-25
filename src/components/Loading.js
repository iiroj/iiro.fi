import posed, { PoseGroup } from "react-pose";
import React from "react";
import PropTypes from "prop-types";

const pBaseStyles = {
  backgroundColor: "hsl(44, 100%, 75%)",
  cursor: "wait",
  height: "200vmax",
  left: "50%",
  position: "fixed",
  top: "50%",
  transformOrigin: "center center",
  width: "200vmax",

  transition: {
    ease: "linear"
  }
};

const Overlay = posed.div({
  from: { x: "20%", y: "20%", rotate: "45deg", ...pBaseStyles },
  enter: { x: "-50%", y: "-50%", rotate: "45deg", ...pBaseStyles },
  exit: { x: "-100%", y: "-100%", rotate: "45deg", ...pBaseStyles }
});

const containerBaseStyles = {
  height: "100%",
  left: 0,
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 4
};

const Container = posed.div({
  from: containerBaseStyles,
  enter: containerBaseStyles,
  exit: containerBaseStyles
});

const Loading = ({ visible }) => (
  <PoseGroup preEnterPose="from" enterPose="enter" exitPose="exit">
    {visible && (
      <Container key="container">
        <Overlay
          key="loader"
          aria-label="Loading"
          aria-live="polite"
          role="status"
        />
      </Container>
    )}
  </PoseGroup>
);

Loading.propTypes = {
  visible: PropTypes.bool.isRequired
};

export default Loading;
