import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import Send from './Send';
import Typing from './Typing';

const REPLY_URL = `${process.env.LAMBDA_BASE_URL}/telegram`;

const Form = styled.form`
  align-items: center;
  flex-basis: ${props => (props.dirty ? '100%' : undefined)};
  margin-left: auto;
  margin-top: ${props => (props.dirty ? '1rem' : undefined)};
  display: flex;
  position: relative;
  transition: all 125ms ease-in-out;
`;

const Button = styled.button`
  appearance: none;
  background: none;
  border-bottom-right-radius: 3rem;
  border-top-right-radius: 3rem;
  border: none;
  bottom: 0;
  cursor: pointer;
  display: block;
  outline: none;
  padding: 1rem;
  position: absolute;
  right: 0;
  transition: all 125ms ease-in-out;

  ${props =>
    props.valid === 'true'
      ? css`
          ${Send} {
            circle {
              fill: hsl(44, 100%, 75%);
              stroke: none;
            }

            path {
              fill: white;
              stroke: none;
            }
          }
        `
      : css`
          pointer-events: none;
        `};

  &:hover ${Send} circle {
    fill: hsl(44, 100%, 60%);
  }

  ${Typing} {
    bottom: 1.5rem;
    left: -2.5rem;
    position: absolute;
  }
`;

const Input = styled.textarea`
  appearance: none;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-family: inherit;
  height: 4rem;
  line-height: 2rem;
  margin-left: auto;
  opacity: 0;
  outline: none;
  padding: 1rem 2rem;
  resize: none;
  transition: all 125ms ease-in-out;
  width: 4rem;

  &:focus {
    border: 2px solid hsl(44, 100%, 75%);
    padding-right: 4rem;
  }

  &:disabled {
    background: hsl(0, 0%, 96%);
    border: none;
    pointer-events: none;
  }

  ${props =>
    props['aria-expanded'] &&
    css`
      border: 1px solid hsl(0, 0%, 80%);
      color: inherit;
      cursor: text;
      height: auto;
      opacity: 1;
      resize: vertical;
      width: 100%;
    `};
`;

export default class Reply extends React.PureComponent {
  static propTypes = {
    onReplied: PropTypes.func.isRequired
  };

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
        this.props.onReplied();
      })
      .catch(error => this.setState({ failed: true, sending: false }));
  };

  render() {
    const { dirty, failed, sending, text } = this.state;

    const valid = this.state.valid && !sending && !failed;

    return (
      <Form disabled={sending || failed} onSubmit={this.handleSumbit} dirty={dirty}>
        <Input
          aria-expanded={dirty && !failed}
          disabled={sending}
          innerRef={this.inputRef}
          onClick={this.handleOpen}
          onChange={this.handleTextInput}
          placeholder="Send Feedback"
          valid={valid.toString()}
          value={text}
        />
        <Button disabled={!valid} valid={valid.toString()}>
          {sending ? <Typing /> : <Send />}
        </Button>
      </Form>
    );
  }
}
