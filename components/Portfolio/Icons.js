import React from "react";
import styled from "styled-components";
import { ButtonLink } from "../../pages/portfolio";

const Article = styled.article`
  background: url("/static/portfolio/icons/icons.jpg");
  background-size: cover;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);
  padding: 4rem 1rem 3rem 1rem;
  position: relative;
  text-align: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 3em;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 4rem;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;

  img {
    display: block;
    height: 256px;
    margin: 0 1rem;
    width: 256px;
  }

  a {
    margin: 0;
  }
`;

export const Icons = () => (
  <Article>
    <Title>Icon Aficionado</Title>
    <Container>
      <div>
        <img
          src="/static/portfolio/icons/growl.png"
          srcSet="/static/portfolio/icons/growl.png 1x, /static/portfolio/icons/growl@2x.png 2x, /static/portfolio/icons/growl@3x.png 3x"
        />
        <ButtonLink href="http://growl.info" target="_blank" rel="noopener noreferrer">
          Growl
        </ButtonLink>
      </div>
      <div>
        <img
          src="/static/portfolio/icons/tuneinstructor.png"
          srcSet="/static/portfolio/icons/tuneinstructor.png 1x, /static/portfolio/icons/tuneinstructor@2x.png 2x, /static/portfolio/icons/tuneinstructor@3x.png 3x"
        />
        <ButtonLink href="https://www.tune-instructor.de/en/" target="_blank" rel="noopener noreferrer">
          Tune•Instructor
        </ButtonLink>
      </div>
    </Container>
  </Article>
);
