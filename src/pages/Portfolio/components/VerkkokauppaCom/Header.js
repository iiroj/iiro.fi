import PropTypes from "prop-types";
import posed from "react-pose";
import React from "react";
import styled from "styled-components";

import Link from "../Link";

const Backdrop = posed(
  styled.div({
    backgroundColor: "#e30613",
    height: "100%",
    left: "-25vw",
    position: "absolute",
    transformOrigin: "center",
    top: "50%",
    transform: "translateY(-50%)",
    width: "150vw"
  })
)({
  enter: {
    height: "100%",
    rotate: "-4deg",
    y: "-50%"
  },
  exit: {
    height: "0%",
    rotate: "0deg",
    y: "-50%"
  }
});

const Container = styled.header({
  alignItems: "center",
  color: "white",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  flex: "0 0 320px",
  justifyContent: "center",
  marginBottom: "10rem",
  position: "relative",
  textShadow: "0 1px 4px rgba(0, 0, 0, 0.2)"
});

const Text = styled.div({
  margin: "4rem",
  maxWidth: 480,
  position: "relative"
});

const PhoneContainer = posed(
  styled.div({
    height: 480,
    margin: "0 4rem",
    width: 303,
    position: "relative"
  })
)({
  enter: {
    x: 0,
    transition: {
      easing: "easeOut"
    }
  },
  exit: {
    x: -100
  }
});

const Phone = styled.img({
  width: 303,
  display: "block"
});

const Screen = styled.img({
  display: "block",
  width: 270,
  position: "absolute",
  top: 63,
  left: 15
});

const Header = ({ isSync }) => (
  <Container>
    <Backdrop initialPose={isSync ? "enter" : "exit"} pose={"enter"} />
    <Text>
      <h1>Verkko&shy;kauppa.com</h1>
      <p>
        UX/UI designer from November 2014 until April 2017. As the resident web
        designer, I oversaw the visual direction of Verkkokauppa.com’s website.
      </p>
      <Link
        href="https://www.verkkokauppa.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Verkkokauppa.com
      </Link>
    </Text>
    <PhoneContainer initialPose={isSync ? "enter" : "exit"} pose={"enter"}>
      <Phone
        alt=""
        src="/portfolio/verkkokauppacom/pixel.png"
        srcSet="/portfolio/verkkokauppacom/pixel.png 1x, /portfolio/verkkokauppacom/pixel@2x.png 2x, /portfolio/verkkokauppacom/pixel@3x.png 3x"
      />
      <Screen
        alt="Verkkokauppa.com Front Page"
        src="/portfolio/verkkokauppacom/frontpage.jpg"
        srcSet="/portfolio/verkkokauppacom/frontpage.jpg 1x, /portfolio/verkkokauppacom/frontpage@2x.jpg 2x, /portfolio/verkkokauppacom/frontpage@3x.jpg 3x"
      />
    </PhoneContainer>
  </Container>
);

Header.propTypes = {
  isSync: PropTypes.bool.isRequired
};

export default Header;
