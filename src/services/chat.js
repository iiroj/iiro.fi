import React from 'react';
import PropTypes from 'prop-types';

import baskerville from '../components/baskerville';
import Fraktio from '../components/Fraktio';
import Link from '../components/Link';
import { Email, GitHub, Npm, Linkedin, Portfolio, Telegram, Twitter } from '../components/icons';

import Emoji from '../components/Emoji';

const messages = [
  <p key="1">
    Hello there! <Emoji label="Smiling Face With Sunglasses">😎</Emoji>
  </p>,
  <p key="2">My name is Iiro Jäppinen</p>,
  <p key="3">
    I’m an UX <span className={baskerville}>&</span> UI Designer
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
      <Emoji label="npmn">
        <Npm />
      </Emoji>{' '}
      npm
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

const sentFeedbackMessage = (
  <p key="replied">
    <Emoji label="Check Mark">✅</Emoji> Thanks for the feedback!
  </p>
);

const noScriptMessage = (
  <p key="noscript">
    <Emoji label="Warning">⚠️</Emoji> Uh-oh! It seems you don’t have Javascript enabled.
  </p>
);

const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const waitFor = ms => new Promise(resolve => setTimeout(resolve, ms));

function* messageGenerator(i = 0) {
  while (true) yield messages[i++];
}

const generateMessage = messageGenerator();

const MessageContext = React.createContext();

export class MessageProvider extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired
  };

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
      <MessageContext.Provider
        value={{
          messages,
          onSentFeedback: this.handleSentFeedback,
          onSkip: this.handleSkip,
          ready,
          typing
        }}
      >
        {this.props.children}
      </MessageContext.Provider>
    );
  }
}

export const MessageConsumer = MessageContext.Consumer;
