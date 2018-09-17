import React from 'react';
import { css, cx } from 'emotion';

import Send from './Send';
import Typing from './Typing';

const REPLY_URL = `${process.env.LAMBDA_BASE_URL}/telegram`;

const form = css({
  alignItems: 'center',
  marginLeft: 'auto',
  display: 'flex',
  position: 'relative',
  transition: 'all 125ms ease-in-out'
});

const formDirty = css({
  flexBasis: '100%',
  marginTop: '1rem'
});

const button = css({
  appearance: 'none',
  background: 'none',
  borderRadius: '0.5rem',
  border: 'none',
  bottom: 0,
  cursor: 'pointer',
  display: 'block',
  outline: 'none',
  padding: '1rem',
  pointerEvents: 'none',
  position: 'absolute',
  right: 0,
  transition: 'all 125ms ease-in-out',

  '&:hover svg circle': {
    fill: 'hsl(44, 100%, 60%)'
  },

  i: {
    bottom: '1.5rem',
    left: '-2.5rem',
    position: 'absolute'
  }
});

const buttonValid = css({
  pointerEvents: 'unset',

  svg: {
    circle: {
      fill: 'hsl(44, 100%, 75%)',
      stroke: 'none'
    },

    path: {
      fill: 'white',
      stroke: 'none'
    }
  }
});

const input = css({
  appearance: 'none',
  borderRadius: '0.5rem',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
  height: '4rem',
  lineHeight: '2rem',
  marginLeft: 'auto',
  opacity: 0,
  outline: 'none',
  padding: '1rem 2rem',
  resize: 'none',
  transition: 'all 125ms ease-in-out',
  width: '4rem',

  '&:focus': {
    border: '2px solid hsl(44, 100%, 75%)',
    paddingRight: '4rem'
  },

  '&:disabled': {
    background: 'hsl(0, 0%, 96%)',
    border: 'none',
    pointerEvents: 'none'
  }
});

const inputExpanded = css({
  border: '2px solid hsl(0, 0%, 80%)',
  color: 'inherit',
  cursor: 'text',
  height: 'auto',
  opacity: 1,
  resize: 'vertical',
  width: '100%'
});

export default class Reply extends React.PureComponent {
  state = {
    dirty: false,
    failed: false,
    sending: false,
    submitted: false,
    text: '',
    valid: false
  };

  inputRef = React.createRef();

  handleOpen = () => this.setState({ dirty: true });

  handleTextInput = ({ target }) => this.setState({ text: target.value, valid: target.value !== '' });

  handleSumbit = event => {
    event.preventDefault();
    this.setState({ sending: true });

    return new Promise((resolve, reject) => {
      setTimeout(reject, 10000);
      fetch(REPLY_URL, {
        method: 'POST',
        body: JSON.stringify({ text: this.state.text }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then(resolve)
        .catch(reject);
    })
      .then(response => {
        if (response.status !== 204) throw new Error(response.status);
        this.inputRef.current.blur();
        this.setState({
          dirty: false,
          sending: false,
          submitted: true,
          text: '',
          valid: false
        });
        this.props.onSentFeedback();
      })
      .catch(error => this.setState({ failed: true, sending: false }));
  };

  render() {
    const { dirty, failed, sending, text } = this.state;

    const valid = this.state.valid && !sending && !failed;

    return (
      <form className={cx(form, dirty && formDirty)} disabled={sending || failed} onSubmit={this.handleSumbit}>
        <textarea
          className={cx(input, dirty && !failed && inputExpanded)}
          disabled={sending}
          onClick={this.handleOpen}
          onChange={this.handleTextInput}
          placeholder="Send Feedback"
          ref={this.inputRef}
          valid={valid.toString()}
          value={text}
        />
        <button className={cx(button, valid && buttonValid)} disabled={!valid}>
          {sending ? <Typing /> : <Send />}
        </button>
      </form>
    );
  }
}
