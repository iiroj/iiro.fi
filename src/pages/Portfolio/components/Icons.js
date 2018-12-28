import React from "react";
import styled from "styled-components";

import Link from "./Link";

const Article = styled.article({
  background: "url(/portfolio/icons/icons.jpg)",
  backgroundSize: "cover",
  boxShadow: "0 1px 0 rgba(0, 0, 0, 0.08)",
  padding: "4rem 1rem 3rem 1rem",
  position: "relative",
  textAlign: "center",
  width: "100%"
});

const H1 = styled.h1({
  fontSize: "3em",
  lineHeight: 1.2,
  marginBottom: "4rem"
});

const Container = styled.div({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  position: "relative",

  img: {
    display: "block",
    height: 256,
    margin: "0 1rem",
    width: 256
  },

  a: {
    margin: 0
  }
});

export default () => (
  <Article>
    <H1>Icon Aficionado</H1>
    <Container>
      <div>
        <img
          alt="Growl"
          src="/portfolio/icons/growl.png"
          srcSet="/portfolio/icons/growl.png 1x, /portfolio/icons/growl@2x.png 2x, /portfolio/icons/growl@3x.png 3x"
        />
        <Link
          href="http://growl.info"
          target="_blank"
          rel="noopener noreferrer"
        >
          Growl
        </Link>
      </div>
      <div>
        <img
          alt="Tune•Instructor"
          src="/portfolio/icons/tuneinstructor.png"
          srcSet="/portfolio/icons/tuneinstructor.png 1x, /portfolio/icons/tuneinstructor@2x.png 2x, /portfolio/icons/tuneinstructor@3x.png 3x"
        />
        <Link
          href="https://www.tune-instructor.de/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tune•Instructor
        </Link>
      </div>
    </Container>
  </Article>
);
