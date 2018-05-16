import React from "react";
import styled from "react-emotion";
import { ButtonLink } from "../../../pages/portfolio";

const Container = styled.header`
  align-items: center;
  background-color: #e30613;
  color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 0 0 320px;
  justify-content: center;
  margin-bottom: 10rem;
  position: relative;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);

  &::before,
  &::after {
    background-color: #e30613;
    content: "";
    display: block;
    height: 50%;
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
  }

  &::before {
    top: 0;
    transform-origin: 0%;
    transform: skewY(-2deg);
  }

  &::after {
    bottom: 0;
    transform-origin: 100%;
    transform: skewY(-2deg);
  }
`;

const Text = styled.div`
  margin: 4rem;
  max-width: 480px;
`;

const PhoneContainer = styled.div`
  height: 480px;
  margin: 0 4rem;
  width: 303px;
  position: relative;
`;

const Phone = styled.img`
  width: 303px;
  display: block;
`;

const Screen = styled.img`
  display: block;
  width: 270px;
  position: absolute;
  top: 63px;
  left: 15px;
`;

export const Header = () => (
  <Container>
    <Text>
      <h1>Verkko&shy;kauppa.com</h1>
      <p>
        UX/UI designer from November 2014 until April 2017. As the resident web designer, I oversaw the visual direction
        of Verkkokauppa.com’s website.
      </p>
      <ButtonLink href="https://www.verkkokauppa.com/" target="_blank" rel="noopener noreferrer">
        Visit Verkkokauppa.com
      </ButtonLink>
    </Text>
    <PhoneContainer>
      <Phone
        src="/static/portfolio/verkkokauppacom/pixel.png"
        srcSet="/static/portfolio/verkkokauppacom/pixel.png 1x, /static/portfolio/verkkokauppacom/pixel@2x.png 2x, /static/portfolio/verkkokauppacom/pixel@3x.png 3x"
      />
      <Screen
        src="/static/portfolio/verkkokauppacom/frontpage.jpg"
        srcSet="/static/portfolio/verkkokauppacom/frontpage.jpg 1x, /static/portfolio/verkkokauppacom/frontpage@2x.jpg 2x, /static/portfolio/verkkokauppacom/frontpage@3x.jpg 3x"
      />
    </PhoneContainer>
  </Container>
);
