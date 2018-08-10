import React from 'react';
import Helmet from 'react-helmet';

import Baskerville from '../components/home/Baskerville';
import Fraktio from '../components/home/Fraktio';
import Layout from '../components/Layout';
import Picture from '../components/home/Picture';
import Chat from '../components/home/Chat';
import A from '../components/home/A';

import Feedback from '../components/feedback';

const microdata = JSON.stringify({
  '@context': 'http://schema.org',
  '@type': 'Person',
  name: 'Iiro Jäppinen',
  jobTitle: 'Designer',
  worksFor: {
    '@type': 'Organization',
    name: 'Fraktio',
    url: 'https://fraktio.fi'
  },
  url: 'https://iiro.fi/',
  email: 'iiro@jappinen.fi',
  nationality: 'Finland',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Finland',
    addressLocality: 'Helsinki'
  },
  sameAs: ['https://twitter.com/iirojappinen', 'https://fi.linkedin.com/in/iiroj', 'https://github.com/iiroj']
});

const messages = [
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
  </p>,
  <Feedback key="10" />
];

const randomIntFromInterval = (min, max, seed) => Math.floor((seed || Math.random()) * (max - min + 1) + min);
const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

async function* messageGenerator(i = 0) {
  while (i < messages.length) {
    const message = messages[i++];
    await timeout(
      randomIntFromInterval(1, 3, (message.props.children ? message.props.children.length : 10) / 50) * 1000
    );
    yield message;
  }
}

const generateMessage = messageGenerator();

export default class Home extends React.PureComponent {
  state = {
    messages: [],
    skipped: false,
    typing: true
  };

  handleSkip = () => this.setState({ messages, skipped: true, typing: false });

  async addMessage() {
    this.setState({ typing: true });
    const { value } = await generateMessage.next();
    if (!this.state.skipped) {
      this.setState({ messages: this.state.messages.concat(value), typing: false });
    }
  }

  async componentDidMount() {
    while (this.state.messages.length < messages.length) {
      await this.addMessage();
      await timeout(1000);
    }
  }

  render() {
    const { messages, typing } = this.state;

    return (
      <Layout>
        <Helmet>
          <title>Iiro Jäppinen</title>
        </Helmet>
        <script type="application/ld+json">{microdata}</script>
        <Chat avatar={<Picture />} messages={messages} onClick={this.handleSkip} typing={typing} />
      </Layout>
    );
  }
}
