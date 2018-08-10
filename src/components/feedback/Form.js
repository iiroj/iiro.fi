import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

const YELLOW = 'hsl(44, 100%, 75%, 1)';

const headerStyles = css`
  aside {
    color: hsla(0, 0%, 80%, 1);
    font-size: 0.85em;
    text-align: left;
    text-transform: uppercase;
    width: 100%;
  }

  &:not(:last-child) {
    margin: 0 auto 2rem;
  }
`;

const inputStyles = css`
  -webkit-appearance: none;
  cursor: pointer;
  height: 100%;
  left: 0;
  margin: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Label = styled.li`
  background-color: ${props => (props.selected ? YELLOW : 'white')};
  box-shadow: ${props => (props.selected ? '0 0 0 2px hsl(44, 100%, 40%)' : '0 0 0 2px hsl(0, 0%, 80%)')};
  display: block;
  flex-grow: 1;
  font-weight: bold;
  line-height: 2rem;
  margin: 0 1px;
  padding: 1rem 0;
  position: relative;
  text-align: center;
  z-index: ${props => (props.selected ? 2 : 1)};

  span {
    pointer-events: none;
  }

  &:first-child {
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
  }

  &:last-child {
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
  }

  &:hover {
    background-color: ${YELLOW};
    box-shadow: 0 0 0 2px hsl(44, 100%, 40%);
    z-index: 2;
  }
`;

const scoreStyles = css`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  width: 100%;
`;

const textareaStyles = css`
  -webkit-appearance: none;
  background-color: white;
  border-radius: 2px;
  border: none;
  box-shadow: 0 0 0 2px hsl(0, 0%, 80%);
  color: inherit;
  display: block;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.25em;
  margin-bottom: 1rem;
  outline: none;
  padding: 1em;
  resize: vertical;
  width: 100%;

  &:focus {
    box-shadow: 0 0 0 2px hsla(44, 100%, 75%);
  }
`;

const buttonStyles = css`
  background-color: ${YELLOW};
  border-radius: 1.5rem;
  border: none;
  display: block;
  font-family: inherit;
  font-size: 1rem;
  height: 3rem;
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
`;

const Submitted = () => (
  <header className={headerStyles}>
    <h1>Thank you!</h1>
  </header>
);

const Error = () => (
  <header className={headerStyles}>
    <h1>Something went wrong!</h1>
    <p>Please try again later...</p>
  </header>
);

const Form = ({ comment, handleChange, onSubmit, question, score, submitting }) => (
  <form onSubmit={onSubmit}>
    <header className={headerStyles}>
      <h1>{question}</h1>
      <aside>On a scale from 1 to 7</aside>
    </header>
    <section>
      <ol className={scoreStyles}>
        {Array.from(Array(7).keys()).map(n => {
          const value = n + 1;
          const selected = score == value;

          return (
            <Label selected={selected} key={value}>
              <input
                className={inputStyles}
                id={value}
                name="score"
                onClick={handleChange}
                required
                selected={selected}
                type="radio"
                value={value}
              />
              <span>{value}</span>
            </Label>
          );
        })}
      </ol>
      <textarea
        className={textareaStyles}
        name="comment"
        onChange={handleChange}
        placeholder="You can also give more detailed feedback here."
        value={comment}
      />
      <button className={buttonStyles} disabled={score === null || submitting}>
        Submit
      </button>
    </section>
  </form>
);

const FeedbackForm = props => {
  if (props.error) return <Error />;

  if (props.submitted) return <Submitted />;

  return <Form {...props} />;
};

const props = {
  comment: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};

Form.propTypes = props;
FeedbackForm.propTypes = props;

export default FeedbackForm;
