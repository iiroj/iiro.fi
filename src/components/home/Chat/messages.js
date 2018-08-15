import React from 'react';

import Baskerville from '../Baskerville';
import Fraktio from '../Fraktio';
import A from '../A';

export default [
  <p key="1">Hello there!</p>,
  <p key="2">My name is Iiro Jäppinen</p>,
  <p key="3">
    I’m an UX <Baskerville>&</Baskerville> UI Designer
  </p>,
  <p key="4">But I also code ECMAscript and React!</p>,
  <p key="5">
    I work at <Fraktio />
  </p>,
  <p key="6">
    There I help people realise their ideas, design useful experiences and create beautiful interfaces and interactions.
  </p>,
  <p key="7">
    You should email me at <A to="mailto:hello@iiro.fi">hello@iiro.fi</A>, or send a tweet to{' '}
    <A to="https://twitter.com/iirojappinen">@iirojappinen</A>
  </p>,
  <p key="8">
    I also have a <A to="/portfolio">Portfolio</A> and a <A to="https://fi.linkedin.com/in/iiroj">LinkedIn</A> profile.
  </p>,
  <p key="9">
    Check out my <A to="https://github.com/iiroj">GitHub</A> and <A to="https://www.npmjs.com/~iiroj">npm</A> for my
    open source work.
  </p>
];
