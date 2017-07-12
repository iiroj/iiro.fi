import React from "react";
import styled from "styled-components";
import { ButtonLink } from "pages/portfolio";

import { default as iconsBg } from "./icons.jpg";
import { default as growl1x } from "./growl.png";
import { default as growl2x } from "./growl@2x.png";
import { default as growl3x } from "./growl@3x.png";
import { default as tune1x } from "./tuneinstructor.png";
import { default as tune2x } from "./tuneinstructor@2x.png";
import { default as tune3x } from "./tuneinstructor@3x.png";

export const Icons = () => {
  const Article = styled.article`
    align-items: center;
    background-color: #f5f5f5;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    padding: 4rem 1rem 3rem 1rem;
    position: relative;
    width: 100%;
  `;
  const Bg = styled.img`
    display: block;
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    opacity: 0.25;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  `;
  const Title = styled.h1`
    font-family: Georgia, serif;
    font-size: 2rem;
    font-style: italic;
    font-weight: 300;
    margin: 0 0 1rem 0;
    position: relative;
    z-index: 2;
  `;
  const Icons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    text-align: center;
    z-index: 2;

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

  return (
    <Article>
      <Bg src={iconsBg} />
      <Title>Icon Aficionado</Title>
      <Icons>
        <div>
          <img
            src={growl1x}
            srcSet={`${growl1x} 1x, ${growl2x} 2x, ${growl3x} 3x`}
          />
          <ButtonLink href="http://growl.info" target="_blank">
            Growl
          </ButtonLink>
        </div>
        <div>
          <img
            src={tune1x}
            srcSet={`${tune1x} 1x, ${tune2x} 2x, ${tune3x} 3x`}
          />
          <ButtonLink href="https://www.tune-instructor.de/en/" target="_blank">
            Tune•Instructor
          </ButtonLink>
        </div>
      </Icons>
    </Article>
  );
};
