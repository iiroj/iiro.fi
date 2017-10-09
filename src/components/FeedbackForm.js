import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { onlyUpdateForKeys } from 'recompose';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  header {
    margin: 0 auto;
    max-width: 43rem;
    padding: 2rem 1rem 2rem 4rem;

    aside {
      opacity: 0.4;
      text-align: left;
      width: 100%;
    }
  }

  h1 {
    font-family: Georgia, serif;
    font-size: 1.5rem;
    font-style: italic;
  }
`;

const Fieldset = styled.fieldset`
  margin: 0 auto 2rem;
  max-width: 38rem;
  padding: 0 1rem;
  text-align: center;
  width: 100%;

  textarea {
    appearance: none;
    border-radius: 4px;
    border: 2px solid hsla(0, 0%, 0%, 0.2);
    color: inherit;
    display: block;
    font-size: 1rem;
    line-height: 1.25rem;
    margin-bottom: 1rem;
    outline: none;
    padding: 0.5rem;
    width: 100%;

    &:focus {
      border: 2px solid hsla(44, 100%, 75%, 1);
    }
  }

  button {
    background-color: hsla(44, 100%, 75%, 1);
    border-radius: 1.5rem;
    border: none;
    display: block;
    font-size: 1rem;
    height: 3rem;
    margin: 0 auto;
    outline: none;
    padding: 0 4rem;
    transition: background-color 125ms ease-out, box-shadow 125ms ease-out, transform 125ms ease-out;

    &:disabled {
      cursor: not-allowed;
      background-color: hsla(44, 100%, 75%, 0.4);
    }

    &:hover:not(:disabled) {
      cursor: pointer;
      box-shadow: 0 0.5rem 2rem hsla(0, 0%, 0%, 0.1);
    }

    &:active:not(:disabled) {
      box-shadow: inset 0 0 0 3rem hsla(0, 0%, 0%, 0.1);
      transform: scale(0.95);
    }
  }
`;

const Score = styled.ol`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  width: 100%;

  li {
    flex-grow: 1;
    position: relative;

    &:hover,
    &:hover * {
      cursor: pointer;
    }
  }

  li input[type='radio'] {
    appearance: none;
    left: 0;
    height: 1rem;
    margin: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 1rem;
  }

  li .radio {
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, 0.2);
    display: block;
    height: 1rem;
    margin: 0 auto;
    position: relative;
    transition: box-shadow 125ms ease-out, transform 125ms ease-out;
    width: 1rem;

    &::after {
      background: hsla(0, 0%, 100%, 1);
      border-radius: 50%;
      box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.2), inset 0 0 0 0 hsla(44, 100%, 75%, 1);
      content: '';
      display: block;
      height: 0.5rem;
      left: 50%;
      opacity: 0;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: opacity 125ms ease-out, transform 125ms ease-out;
      width: 0.5rem;
    }
  }

  li:hover .radio {
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, 0.2), inset 0 0 0 2rem hsla(44, 100%, 75%, 1);
  }

  li input[type='radio']:checked + .radio {
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, 0.2), inset 0 0 0 2rem hsla(44, 100%, 75%, 1);
    transform: scale(1.25);

    &::after {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  li .text {
    flex-grow: 1;
    font-weight: bold;
    display: block;
    line-height: 2rem;
    margin-top: -1.5rem;
    opacity: 0.4;
    padding-top: 1.5rem;
    text-align: center;
    transition: opacity 125ms ease-out;
  }

  li:hover .text {
    opacity: 1;
  }

  li input[type='radio']:checked ~ .text {
    opacity: 1;
  }
`;

const FeedbackForm = props => {
  const { className, error, handleScore, handleSelection, onSubmit, question, score, submitted, submitting } = props;

  if (submitted)
    return (
      <Form>
        <header>
          <h1>Thank you!</h1>
        </header>
      </Form>
    );

  if (error)
    return (
      <Form>
        <header>
          <h1>Something went wrong!</h1>
          <p>Please try again later...</p>
        </header>
      </Form>
    );

  const selection = Array.from(Array(10).keys()).map(n => (
    <li key={n + 1}>
      <input
        id={n + 1}
        name="feedback"
        onChange={() => handleScore(n + 1)}
        required
        selected={score === n + 1}
        type="radio"
      />
      <label htmlFor={n + 1} className="radio" />
      <label htmlFor={n + 1} className="text">
        {n + 1}
      </label>
    </li>
  ));

  return (
    <Form onSubmit={onSubmit}>
      <header>
        <h1>{question}</h1>
        <aside>On a scale from 1 to 10</aside>
      </header>
      <Fieldset>
        <Score>{selection}</Score>
        <textarea onChange={handleSelection} placeholder="Send your regards" />
        <button disabled={score === null || submitting || submitted}>Submit</button>
      </Fieldset>
    </Form>
  );
};

FeedbackForm.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool.isRequired,
  handleScore: PropTypes.func.isRequired,
  handleSelection: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  submitted: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const enhance = onlyUpdateForKeys(['submitted', 'submitting', 'error']);
export default FeedbackForm;
