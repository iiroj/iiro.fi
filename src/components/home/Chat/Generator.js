import React from 'react';

import Chat from './Chat';
import messages from './messages';

const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

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

  render = () => <Chat messages={messages} typing={false} />;
}
