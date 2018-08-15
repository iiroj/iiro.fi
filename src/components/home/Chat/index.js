import React from 'react';

import Baskerville from '../Baskerville';
import Fraktio from '../Fraktio';
import A from '../A';
import Picture from '../Picture';

import Chat from './Chat';

const randomIntFromInterval = (min, max, seed) => Math.floor((seed || Math.random()) * (max - min + 1) + min);
const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

function* messageGenerator() {
  yield <p>Hello there!</p>;

  yield <p>My name is Iiro Jäppinen</p>;

  yield (
    <p>
      I’m an UX <Baskerville>&</Baskerville> UI Designer
    </p>
  );

  yield <p>But I also code ECMAscript and React!</p>;

  yield (
    <p>
      I work at <Fraktio />
    </p>
  );

  yield (
    <p>
      There I help people realise their ideas, design useful experiences and create beautiful interfaces and
      interactions.
    </p>
  );

  yield (
    <p>
      You should email me at <A to="mailto:hello@iiro.fi">hello@iiro.fi</A>, or send a tweet to{' '}
      <A to="https://twitter.com/iirojappinen">@iirojappinen</A>
    </p>
  );

  yield (
    <p>
      I also have a <A to="/portfolio">Portfolio</A> and a <A to="https://fi.linkedin.com/in/iiroj">LinkedIn</A>{' '}
      profile.
    </p>
  );

  yield (
    <p>
      Check out my <A to="https://github.com/iiroj">GitHub</A> and <A to="https://www.npmjs.com/~iiroj">npm</A> for my
      open source work.
    </p>
  );
}

const generateMessage = messageGenerator();

export default class ChatGenerator extends React.PureComponent {
  state = {
    messages: [],
    ready: false,
    typing: true
  };

  async addMessage() {
    this.setState({ typing: !this.state.ready });

    await timeout(randomIntFromInterval(1, 3) * 1000);

    const { value } = generateMessage.next();

    if (value === undefined) {
      this.setState({ ready: true, typing: false });
    } else {
      this.setState({ messages: this.state.messages.concat(value), typing: false });
    }
  }

  async componentDidMount() {
    while (!this.state.ready) {
      await timeout(randomIntFromInterval(1, 3) * 1000);
      await this.addMessage();
    }
  }

  render = () => (
    <Chat avatar={<Picture />} messages={this.state.messages} onClick={this.handleSkip} typing={this.state.typing} />
  );
}
