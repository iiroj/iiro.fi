import React from 'react';
import { css } from 'emotion';

import link from '../link';

const headerStyles = css({
  alignItems: 'center',
  backgroundColor: '#e30613',
  color: 'white',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  flex: '0 0 320px',
  justifyContent: 'center',
  marginBottom: '10rem',
  position: 'relative',
  textShadow: '0 1px 4px rgba(0, 0, 0, 0.2)',

  '&::before, &::after': {
    backgroundColor: '#e30613',
    content: '""',
    display: 'block',
    height: '50%',
    left: 0,
    position: 'absolute',
    right: 0,
    zIndex: -1
  },

  '&::before': {
    top: 0,
    transformOrigin: '0%',
    transform: 'skewY(-2deg)'
  },

  '&::after': {
    bottom: 0,
    transformOrigin: '100%',
    transform: 'skewY(-2deg)'
  }
});

const textStyles = css({
  margin: '4rem',
  maxWidth: 480
});

const phoneContainerStyles = css({
  height: 480,
  margin: '0 4rem',
  width: 303,
  position: 'relative'
});

const phoneStyles = css({
  width: 303,
  display: 'block'
});

const screenStyles = css({
  display: 'block',
  width: 270,
  position: 'absolute',
  top: 63,
  left: 15
});

export const Header = () => (
  <header className={headerStyles}>
    <div className={textStyles}>
      <h1>Verkko&shy;kauppa.com</h1>
      <p>
        UX/UI designer from November 2014 until April 2017. As the resident web designer, I oversaw the visual direction
        of Verkkokauppa.com’s website.
      </p>
      <a className={link} href="https://www.verkkokauppa.com/" target="_blank" rel="noopener noreferrer">
        Visit Verkkokauppa.com
      </a>
    </div>
    <div className={phoneContainerStyles}>
      <img
        alt=""
        className={phoneStyles}
        src="/portfolio/verkkokauppacom/pixel.png"
        srcSet="/portfolio/verkkokauppacom/pixel.png 1x, /portfolio/verkkokauppacom/pixel@2x.png 2x, /portfolio/verkkokauppacom/pixel@3x.png 3x"
      />
      <img
        alt="Verkkokauppa.com Front Page"
        className={screenStyles}
        src="/portfolio/verkkokauppacom/frontpage.jpg"
        srcSet="/portfolio/verkkokauppacom/frontpage.jpg 1x, /portfolio/verkkokauppacom/frontpage@2x.jpg 2x, /portfolio/verkkokauppacom/frontpage@3x.jpg 3x"
      />
    </div>
  </header>
);
