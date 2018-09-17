import React from 'react';
import { css } from 'emotion';

import link from './link';

const articleStyles = css({
  background: 'url(/portfolio/icons/icons.jpg)',
  backgroundSize: 'cover',
  boxShadow: '0 1px 0 rgba(0, 0, 0, 0.08)',
  padding: '4rem 1rem 3rem 1rem',
  position: 'relative',
  textAlign: 'center',
  width: '100%'
});

const titleStyles = css({
  fontSize: '3em',
  lineHeight: 1.2,
  marginBottom: '4rem'
});

const containerStyles = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  position: 'relative',

  img: {
    display: 'block',
    height: 256,
    margin: '0 1rem',
    width: 256
  },

  a: {
    margin: 0
  }
});

export default () => (
  <article className={articleStyles}>
    <h1 className={titleStyles}>Icon Aficionado</h1>
    <div className={containerStyles}>
      <div>
        <img
          alt="Growl"
          src="/portfolio/icons/growl.png"
          srcSet="/portfolio/icons/growl.png 1x, /portfolio/icons/growl@2x.png 2x, /portfolio/icons/growl@3x.png 3x"
        />
        <a className={link} href="http://growl.info" target="_blank" rel="noopener noreferrer">
          Growl
        </a>
      </div>
      <div>
        <img
          alt="Tune•Instructor"
          src="/portfolio/icons/tuneinstructor.png"
          srcSet="/portfolio/icons/tuneinstructor.png 1x, /portfolio/icons/tuneinstructor@2x.png 2x, /portfolio/icons/tuneinstructor@3x.png 3x"
        />
        <a className={link} href="https://www.tune-instructor.de/en/" target="_blank" rel="noopener noreferrer">
          Tune•Instructor
        </a>
      </div>
    </div>
  </article>
);
