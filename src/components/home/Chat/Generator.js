import React from 'react';

import messages from './messages';

import Chat from './Chat';
import Emoji from './Emoji';

const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const waitFor = ms => new Promise(resolve => setTimeout(resolve, ms));

function* messageGenerator(i = 0) {
  while (true) yield messages[i++];
}

const generateMessage = messageGenerator();

export default class Generator extends React.PureComponent {
  state = {
    messages: [],
    ready: false,
    replied: false,
    typing: true
  };

  generator = () =>
    new Promise(async (resolve, reject) => {
      if (!this.state.ready) {
        this.setState({ typing: true });
        await waitFor(randomIntFromInterval(10, 20) * 100);
        if (!this.state.ready) {
          const message = generateMessage.next().value;
          this.setState({ messages: this.state.messages.concat(message), typing: false }, resolve);
        } else {
          resolve();
        }
      }
    }).then(async () => {
      if (!this.state.ready && this.state.messages.length < messages.length) {
        await waitFor(1000);
        this.generator();
      } else {
        this.setState({ ready: true });
      }
    });

  handleSkip = () => this.setState({ messages, ready: true, typing: false });

  handleReplied = () =>
    this.setState({
      messages: this.state.messages.concat(
        <p key="replied">
          <Emoji label="Check Mark">✅</Emoji> Thanks for the feedback!
        </p>
      )
    });

  componentDidMount() {
    this.generator();
  }

  render() {
    const { messages, ready, typing } = this.state;
    return (
      <Chat messages={messages} onReplied={this.handleReplied} onSkip={this.handleSkip} ready={ready} typing={typing} />
    );
  }
}
