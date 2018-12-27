import { css } from "@emotion/core";
import posed from "react-pose";
import React from "react";

import { link } from "../../styles";

const backdrop = css({
  backgroundColor: "#e30613",
  height: "100%",
  left: "-25vw",
  position: "absolute",
  transformOrigin: "center",
  top: "50%",
  transform: "translateY(-50%)",
  width: "150vw"
});

const Backdrop = posed.div({
  from: {
    height: "0%",
    rotate: "0deg",
    y: "-50%"
  },
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

const headerStyles = css({
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

const textStyles = css({
  margin: "4rem",
  maxWidth: 480,
  position: "relative"
});

const Text = posed.div({
  from: {
    opacity: 0
  },
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
});

const phoneContainerStyles = css({
  height: 480,
  margin: "0 4rem",
  width: 303,
  position: "relative"
});

const PhoneContainer = posed.div({
  from: {
    x: "-100%"
  },
  enter: {
    x: 0,
    transition: {
      easing: "easeOut"
    }
  },
  exit: {
    opacity: 0
  }
});

const phoneStyles = css({
  width: 303,
  display: "block"
});

const screenStyles = css({
  display: "block",
  width: 270,
  position: "absolute",
  top: 63,
  left: 15
});

const Header = React.forwardRef((props, ref) => (
  <header css={headerStyles} ref={ref}>
    <Backdrop css={backdrop} />
    <Text css={textStyles}>
      <h1>Verkko&shy;kauppa.com</h1>
      <p>
        UX/UI designer from November 2014 until April 2017. As the resident web
        designer, I oversaw the visual direction of Verkkokauppa.com’s website.
      </p>
      <a
        css={link}
        href="https://www.verkkokauppa.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Verkkokauppa.com
      </a>
    </Text>
    <PhoneContainer css={phoneContainerStyles}>
      <img
        alt=""
        css={phoneStyles}
        src="/portfolio/verkkokauppacom/pixel.png"
        srcSet="/portfolio/verkkokauppacom/pixel.png 1x, /portfolio/verkkokauppacom/pixel@2x.png 2x, /portfolio/verkkokauppacom/pixel@3x.png 3x"
      />
      <img
        alt="Verkkokauppa.com Front Page"
        css={screenStyles}
        src="/portfolio/verkkokauppacom/frontpage.jpg"
        srcSet="/portfolio/verkkokauppacom/frontpage.jpg 1x, /portfolio/verkkokauppacom/frontpage@2x.jpg 2x, /portfolio/verkkokauppacom/frontpage@3x.jpg 3x"
      />
    </PhoneContainer>
  </header>
));

export default posed(Header)({
  from: {
    opacity: 1
  },
  enter: {
    staggerChildren: 50
  },
  exit: {
    opacity: 0
  }
});
