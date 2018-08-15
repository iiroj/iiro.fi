/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react';
import PropTypes from 'prop-types';

import Baskerville from '../Baskerville';
import Fraktio from '../Fraktio';
import A from '../A';

// This wrapper creates accessible emojis, but jsx-a11y doesn't detect it
const Emoji = ({ children, label }) => (
  <span role="img" aria-label={label}>
    {children}
  </span>
);

Emoji.propTypes = {
  children: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired
};

export default [
  <p key="1">
    Hello there! <Emoji label="Smiling Face With Sunglasses">😎</Emoji>
  </p>,
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
    You should email me at{' '}
    <A to="mailto:hello@iiro.fi">
      <Emoji label="Email">📧</Emoji>
      hello@iiro.fi
    </A>
    , or send a tweet to{' '}
    <A to="https://twitter.com/iirojappinen">
      <Emoji label="Bird">🐦</Emoji> @iirojappinen
    </A>
  </p>,
  <p key="8">
    I also have a{' '}
    <A to="/portfolio">
      <Emoji label="Nailpolish">💅</Emoji> Portfolio
    </A>{' '}
    and a{' '}
    <A to="https://fi.linkedin.com/in/iiroj">
      <Emoji label="Briefcase">💼</Emoji> LinkedIn
    </A>{' '}
    profile.
  </p>,
  <p key="9">
    Check out my{' '}
    <A to="https://github.com/iiroj">
      <Emoji label="Globe Showing Europe And Africa">🌍</Emoji> GitHub
    </A>{' '}
    and{' '}
    <A to="https://www.npmjs.com/~iiroj">
      <Emoji label="Package">📦</Emoji> npm
    </A>{' '}
    for my open source work.
  </p>,
  <p key="10">
    Finally, feel free to send me a <Emoji label="Speech Balloon">💬</Emoji> message from below. Have a nice day!
  </p>
];
