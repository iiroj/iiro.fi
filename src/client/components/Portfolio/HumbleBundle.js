import React from 'react';
import { css } from 'react-emotion';

const articleStyles = css`
  background-color: #3b3e48;
  padding: 4rem 1rem;
`;

const logoStyles = css`
  display: block;
  margin: 0 auto 4rem;
  max-height: 64px;
  max-width: 100%;
`;

const textStyles = css`
  color: white;
  margin: 0 auto 0.5rem;
  max-width: 480px;

  a {
    background: none;
    color: inherit;
    text-decoration: underline;
  }
`;

export const HumbleBundle = () => (
  <article className={articleStyles}>
    <img
      alt="Humble Bundle"
      className={logoStyles}
      src="/portfolio/humble/humble-logo.png"
      srcSet="/portfolio/humble/humble-logo.png 1x, /portfolio/humble/humble-logo@2x.png 2x, /portfolio/humble/humble-logo@3x.png 3x"
    />
    <p className={textStyles}>
      I designed the first{' '}
      <a href="https://www.humblebundle.com" target="_blank" rel="noopener noreferrer">
        Humble Bundle
      </a>{' '}
      website and many after that. I worked with Humble from its inception in 2011 until summer 2014.
    </p>
    <p className={textStyles}>
      People often follow up with whether or not I also created the beautiful icons representing bundled games. I did
      not.
    </p>
  </article>
);
