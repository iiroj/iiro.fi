import React from 'react';

import messages, { sentFeedbackMessage, noScriptMessage } from './messages';

import Chat from './Chat';

const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const waitFor = ms => new Promise(resolve => setTimeout(resolve, ms));

function* messageGenerator(i = 0) {
  while (true) yield messages[i++];
}

const generateMessage = messageGenerator();

export default class Generator extends React.PureComponent {
  state = {
    messages: [...messages, noScriptMessage],
    ready: true,
    replied: false,
    typing: false
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

  handleSentFeedback = () =>
    this.setState({
      messages: this.state.messages.concat(sentFeedbackMessage)
    });

  componentDidMount() {
    this.setState({ messages: [], ready: false }, this.generator);
  }

  render() {
    const { messages, ready, typing } = this.state;

    return (
      <Chat
        messages={messages}
        onSentFeedback={this.handleSentFeedback}
        onSkip={this.handleSkip}
        ready={ready}
        typing={typing}
      />
    );
  }
}
