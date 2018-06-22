import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

const formStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 44rem;
  padding: 2rem 4rem;
  width: 100%;

  header {
    margin: 0 auto 2rem;

    h1 {
      font-size: 2rem;
      line-height: 1.25em;
      margin-bottom: 1rem;
    }

    aside {
      color: hsla(0, 0%, 80%, 1);
      font-size: 0.85em;
      font-weight: 500;
      text-align: left;
      text-transform: uppercase;
      width: 100%;
    }
  }
`;

const sectionStyles = css`
  margin: 0 auto 2rem;
  text-align: center;
  width: 100%;
`;

const inputStyles = css`
  -webkit-appearance: none;
  left: 0;
  height: 1rem;
  margin: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 1rem;
`;

const Radio = styled.label`
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

  ${props =>
    props.selected === true &&
    css`
      box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, 0.2), inset 0 0 0 2rem hsla(44, 100%, 75%, 1);
      transform: scale(1.25);

      &::after {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    `};
`;

const Text = styled.label`
  flex-grow: 1;
  font-weight: bold;
  display: block;
  line-height: 2rem;
  margin-top: -1.5rem;
  opacity: 0.4;
  padding-top: 1.5rem;
  text-align: center;
  transition: opacity 125ms ease-out;

  ${props =>
    props.selected === true &&
    css`
      opacity: 1;
    `};
`;

const numberStyles = css`
  flex-grow: 1;
  position: relative;

  &:hover,
  &:hover * {
    cursor: pointer;
  }

  &:hover ${Radio} {
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, 0.2), inset 0 0 0 2rem hsla(44, 100%, 75%, 1);
  }

  &:hover ${Text} {
    opacity: 1;
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
  border-radius: 4px;
  border: 2px solid hsla(0, 0%, 0%, 0.2);
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
    border: 2px solid hsla(44, 100%, 75%, 1);
  }
`;

const buttonStyles = css`
  background-color: hsla(44, 100%, 75%, 1);
  border-radius: 1.5rem;
  border: none;
  display: block;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
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
`;

const Submitted = () => (
  <form className={formStyles}>
    <section className={sectionStyles}>
      <header>
        <h1>Thank you!</h1>
      </header>
    </section>
  </form>
);

const Error = () => (
  <form className={formStyles}>
    <section className={sectionStyles}>
      <header>
        <h1>Something went wrong!</h1>
        <p>Please try again later...</p>
      </header>
    </section>
  </form>
);

const Form = ({ comment, onChange, onSubmit, question, score, submitting }) => (
  <form className={formStyles} onSubmit={onSubmit}>
    <header>
      <h1>{question}</h1>
      <aside>On a scale from 1 to 7</aside>
    </header>
    <section className={sectionStyles}>
      <ol className={scoreStyles}>
        {Array.from(Array(7).keys()).map(n => {
          const value = n + 1;
          const selected = score == value;

          return (
            <li className={numberStyles} key={value}>
              <input
                className={inputStyles}
                id={value}
                name="score"
                onChange={onChange}
                required
                selected={selected}
                type="radio"
                value={value}
              />
              <Radio htmlFor={value} selected={selected} />
              <Text htmlFor={value} selected={selected}>
                {value}
              </Text>
            </li>
          );
        })}
      </ol>
      <textarea
        className={textareaStyles}
        name="comment"
        onChange={onChange}
        placeholder="You can also give more detailed feedback here."
        value={comment}
      />
      <button className={buttonStyles} disabled={score === null || submitting}>
        Submit
      </button>
    </section>
  </form>
);

Form.propTypes = {
  comment: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};

const FeedbackForm = props => {
  if (props.error) return <Error />;

  if (props.submitted) return <Submitted />;

  return <Form {...props} />;
};

FeedbackForm.propTypes = Form.propTypes;

export default FeedbackForm;
