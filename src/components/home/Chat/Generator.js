import React from 'react';

import Chat from './Chat';
import messages from './messages';

const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const waitFor = ms => new Promise(resolve => setTimeout(resolve, ms));

function* messageGenerator(i = 1) {
  while (true) yield messages.slice(0, i++);
}

const generateMessage = messageGenerator();

export default class ChatGenerator extends React.PureComponent {
  state = {
    messages: [],
    ready: false,
    typing: true
  };

  getMessage = () =>
    new Promise(async (resolve, reject) => {
      this.setState({ typing: true });
      await waitFor(randomIntFromInterval(10, 20) * 100);
      this.setState({ messages: generateMessage.next().value, typing: false }, resolve);
    }).then(async () => {
      if (this.state.messages.length !== messages.length) {
        await waitFor(1000);
        this.getMessage();
      }
    });

  componentDidMount = () => {
    this.getMessage();
  };

  render = () => <Chat messages={this.state.messages} typing={this.state.typing} />;
}
