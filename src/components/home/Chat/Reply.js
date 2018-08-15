import React from 'react';
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
  cursor: pointer;
  display: block;
  outline: none;
  padding: 1rem;
  position: absolute;
  right: 0;
  transition: all 125ms ease-in-out;

  ${props =>
    props.disabled &&
    css`
      pointer-events: none;
    `};

  input:focus + & {
    background-color: hsla(44, 100%, 75%, 0.2);
    padding: 1rem 3rem;

    ${Send} {
      circle {
        fill: white;
        stroke: white;
      }

      path {
        stroke: hsla(44, 100%, 75%, 0.4);
      }
    }
  }

  ${Typing} {
    left: -2.5rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Input = styled.input`
  border-radius: 3rem;
  border: none;
  color: inherit;
  cursor: pointer;
  font-family: inherit;
  line-height: 2rem;
  margin-left: auto;
  outline: none;
  padding: 1rem 2rem;
  transition: all 125ms ease-in-out;
  width: 4rem;

  &:focus {
    box-shadow: inset 0 0 0 2px hsl(44, 100%, 75%);
    padding-right: 8rem;
  }

  &:disabled {
    background: hsl(0, 0%, 96%);
    box-shadow: none;
    pointer-events: none;
  }

  ${props =>
    props['aria-expanded'] &&
    css`
      cursor: text;
      width: 100%;
      box-shadow: inset 0 0 0 1px hsl(0, 0%, 80%);

      ${Button} {
        pointer-events: none;
      }
    `};

  ${props =>
    props.valid === 'true' &&
    css`
      & + ${Button} {
        background-color: hsla(0, 0%, 0%, 0.04) !important;

        ${Send} {
          circle {
            fill: white !important;
            stroke: white !important;
          }

          path {
            stroke: hsl(0, 0%, 96%) !important;
          }
        }
      }

      &:focus + ${Button}, & + ${Button}:hover {
        background-color: hsl(44, 100%, 75%) !important;

        ${Send} path {
          stroke: hsl(44, 100%, 75%) !important;
        }
      }
    `};
`;

export default class Reply extends React.PureComponent {
  state = {
    dirty: false,
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
      })
      .catch(error => this.setState({ error, sending: false }));
  };

  render() {
    const { dirty, sending, text, valid } = this.state;

    return (
      <Form disabled={sending} onSubmit={this.handleSumbit} dirty={dirty}>
        <Input
          aria-expanded={dirty}
          disabled={sending}
          innerRef={this.inputRef}
          onClick={this.handleOpen}
          onChange={this.handleTextInput}
          placeholder="Send Feedback"
          type="text"
          valid={valid.toString()}
          value={text}
        />
        <Button disabled={!valid || sending}>{sending ? <Typing /> : <Send />}</Button>
      </Form>
    );
  }
}
