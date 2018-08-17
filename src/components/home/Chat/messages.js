import React from 'react';

import Baskerville from '../Baskerville';
import Fraktio from '../Fraktio';
import Link from '../Link';
import { Email, GitHub, Linkedin, Portfolio, Telegram, Twitter } from '../icons';

import Emoji from './Emoji';

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
    <Link to="mailto:hello@iiro.fi">
      <Emoji label="Email">
        <Email />
      </Emoji>{' '}
      hello@iiro.fi
    </Link>
    , or send a tweet to{' '}
    <Link to="https://twitter.com/iirojappinen">
      <Emoji label="Twitter">
        <Twitter />
      </Emoji>{' '}
      @iirojappinen
    </Link>
  </p>,
  <p key="8">
    I also have a{' '}
    <Link to="/portfolio">
      <Emoji label="Portfolio">
        <Portfolio />
      </Emoji>{' '}
      Portfolio
    </Link>{' '}
    and a{' '}
    <Link to="https://fi.linkedin.com/in/iiroj">
      <Emoji label="Linkedin">
        <Linkedin />
      </Emoji>{' '}
      LinkedIn
    </Link>{' '}
    profile.
  </p>,
  <p key="9">
    Check out my{' '}
    <Link to="https://github.com/iiroj">
      <Emoji label="GitHub">
        <GitHub />
      </Emoji>{' '}
      GitHub
    </Link>{' '}
    and{' '}
    <Link to="https://www.npmjs.com/~iiroj">
      <Emoji label="Package">📦</Emoji> npm
    </Link>{' '}
    for my open source work.
  </p>,
  <p key="10">
    Finally, feel free to send me a{' '}
    <Emoji label="Telegram">
      <Telegram />
    </Emoji>{' '}
    message from below. Have a nice day!
  </p>
];
