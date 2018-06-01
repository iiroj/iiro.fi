import React from "react";
import { css } from "react-emotion";
import { ButtonLink } from "../../../pages/portfolio";

const headerStyles = css`
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

const textStyles = css`
  margin: 4rem;
  max-width: 480px;
`;

const phoneContainerStyles = css`
  height: 480px;
  margin: 0 4rem;
  width: 303px;
  position: relative;
`;

const phoneStyles = css`
  width: 303px;
  display: block;
`;

const screenStyles = css`
  display: block;
  width: 270px;
  position: absolute;
  top: 63px;
  left: 15px;
`;

export const Header = () => (
  <header className={headerStyles}>
    <div className={textStyles}>
      <h1>Verkko&shy;kauppa.com</h1>
      <p>
        UX/UI designer from November 2014 until April 2017. As the resident web designer, I oversaw the visual direction
        of Verkkokauppa.com’s website.
      </p>
      <ButtonLink href="https://www.verkkokauppa.com/" target="_blank" rel="noopener noreferrer">
        Visit Verkkokauppa.com
      </ButtonLink>
    </div>
    <div className={phoneContainerStyles}>
      <img
        className={phoneStyles}
        src="/static/portfolio/verkkokauppacom/pixel.png"
        srcSet="/static/portfolio/verkkokauppacom/pixel.png 1x, /static/portfolio/verkkokauppacom/pixel@2x.png 2x, /static/portfolio/verkkokauppacom/pixel@3x.png 3x"
      />
      <img
        className={screenStyles}
        src="/static/portfolio/verkkokauppacom/frontpage.jpg"
        srcSet="/static/portfolio/verkkokauppacom/frontpage.jpg 1x, /static/portfolio/verkkokauppacom/frontpage@2x.jpg 2x, /static/portfolio/verkkokauppacom/frontpage@3x.jpg 3x"
      />
    </div>
  </header>
);