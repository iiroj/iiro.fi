import React from "react";
import styled from "styled-components";
import { ButtonLink } from "pages/portfolio";

import { default as pixel1x } from "./pixel.png";
import { default as pixel2x } from "./pixel@2x.png";
import { default as pixel3x } from "./pixel@3x.png";
import { default as frontpage1x } from "./frontpage.jpg";
import { default as frontpage2x } from "./frontpage@2x.jpg";
import { default as frontpage3x } from "./frontpage@3x.jpg";

export const Header = () => {
  const Header = styled.header`
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
      content: '';
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
    margin: 1rem;
    max-width: 480px;
  `;
  const PhoneContainer = styled.div`
    height: 480px;
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

  return (
    <Header>
      <Text>
        <h1>Verkkokauppa.com</h1>
        <p>
          UX/UI designer from November 2014 until April 2017. As the resident
          web designer, I oversaw the visual direction of Verkkokauppa.com’s
          website.
        </p>
        <ButtonLink href="https://www.verkkokauppa.com/" target="_blank">
          Visit Verkkokauppa.com
        </ButtonLink>
      </Text>
      <PhoneContainer>
        <Phone
          src={pixel1x}
          srcSet={`${pixel1x} 1x, ${pixel2x} 2x, ${pixel3x} 3x`}
        />
        <Screen
          src={frontpage1x}
          srcSet={`${frontpage1x} 1x, ${frontpage2x} 2x, ${frontpage3x} 3x`}
        />
      </PhoneContainer>
    </Header>
  );
};
