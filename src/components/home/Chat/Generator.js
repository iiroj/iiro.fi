import React from 'react';

import Chat from './Chat';
import messages from './messages';

const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const waitFor = ms => new Promise(resolve => setTimeout(resolve, ms));

function* messageGenerator(i = 1) {
  while (true) yield messages.slice(0, i++);
}

const generateMessage = messageGenerator();

export default class Generator extends React.PureComponent {
  state = {
    messages: [],
    ready: false,
    typing: true
  };

  generator = () =>
    new Promise(async (resolve, reject) => {
      if (!this.state.ready) {
        this.setState({ typing: true });
        await waitFor(randomIntFromInterval(10, 20) * 100);
        if (!this.state.ready) {
          this.setState({ messages: generateMessage.next().value, typing: false }, resolve);
        } else {
          resolve();
        }
      }
    }).then(async () => {
      if (!this.state.ready && this.state.messages.length !== messages.length) {
        await waitFor(1000);
        this.generator();
      } else {
        this.setState({ ready: true });
      }
    });

  handleSkip = () => this.setState({ messages, ready: true, typing: false });

  componentDidMount = () => this.generator();

  render = () => (
    <Chat messages={this.state.messages} onSkip={this.handleSkip} ready={this.state.ready} typing={this.state.typing} />
  );
}
