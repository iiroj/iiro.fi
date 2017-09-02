import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { injectGlobal } from 'styled-components';

import { postJSON } from 'services/postJSON';
import Back from 'components/Back';
import Footer from 'components/Footer';
import Author from 'components/Author';

class Feedback extends PureComponent {
  constructor() {
    super();
    this.state = {
      comment: '',
      error: false,
      question: null,
      score: null,
      submitted: false,
      submitting: true,
    };
    this.setScore = this.setScore.bind(this);
    this.setComment = this.setComment.bind(this);
    this.submitFeedback = this.submitFeedback.bind(this);
  }

  selectRandomQuestion(questions) {
    const random = questions[Math.floor(Math.random() * questions.length)];
    this.setState({ question: random });
  }

  setScore(event) {
    this.setState({ score: event });
  }

  setComment(event) {
    this.setState({ comment: event.target.value });
  }

  submitFeedback(event) {
    event.preventDefault();
    this.setState({ submitting: true });
    const url = this.props.data.site.siteMetadata.feedback.api.url;
    const data = {
      question: this.state.question,
      score: this.state.score,
      comment: this.state.comment,
    };

    postJSON(url, data)
      .then(response => {
        this.setState({
          submitted: true,
          submitting: false,
        });
      })
      .catch(error => {
        this.setState({
          submitting: false,
          error: true,
        });
      });
  }

  componentWillMount() {
    this.selectRandomQuestion(this.props.data.site.siteMetadata.feedback.questions);
  }

  componentDidMount() {
    this.setState({ submitting: false });
  }

  render() {
    const { className } = this.props;
    const { error, question, score, submitted, submitting } = this.state;

    if (submitted === true) {
      return (
        <div>
          <Helmet title="Thank you!" />
          <Back />
          <main className={className}>
            <h1>Thank you!</h1>
          </main>
        </div>
      );
    }

    if (error === true) {
      return (
        <div>
          <Helmet title="Something went wrong!" />
          <Back />
          <main className={className}>
            <h1>Something went wrong!</h1>
            <p>Please try again later...</p>
          </main>
        </div>
      );
    }

    const selection = Array.from(Array(10).keys()).map(n => (
      <li key={n + 1}>
        <input
          id={n + 1}
          name="feedback"
          onChange={() => this.setScore(n + 1)}
          required
          selected={this.state.score === n + 1}
          type="radio"
        />
        <label htmlFor={n + 1} className="radio" />
        <label htmlFor={n + 1} className="text">
          {n + 1}
        </label>
      </li>
    ));

    return (
      <div>
        <Helmet title={question} />
        <Back />
        <main className={className}>
          <header>
            <h1>{question}</h1>
            <aside>On a scale from 1 to 10</aside>
          </header>
          <form onSubmit={this.submitFeedback}>
            <ol className="score">{selection}</ol>
            <textarea onChange={this.setComment} placeholder="Send your regards" />
            <button disabled={score === null || submitting || submitted}>Submit</button>
          </form>
        </main>
        <Footer>
          <Author />
        </Footer>
      </div>
    );
  }
}

Feedback.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        feedback: PropTypes.shape({
          api: PropTypes.shape({
            url: PropTypes.string.isRequired,
          }),
          questions: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query Feedback {
    site {
      siteMetadata {
        feedback {
          api {
            url
          }
          questions
        }
      }
    }
  }
`;

export default styled(Feedback)`
  background-color: white;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  header {
    margin: 0 auto;
    max-width: 43rem;
    padding: 2rem 1rem 2rem 4rem;

    h1 {
      font-family: Georgia, serif;
      font-size: 1.5rem;
      font-style: italic;
      line-height: 2rem;
    }

    aside {
      opacity: 0.4;
      text-align: left;
      width: 100%;
    }
  }

  form {
    margin: 0 auto 2rem;
    max-width: 38rem;
    padding: 0 1rem;
    width: 100%;
  }

  .score {
    display: flex;
    justify-content: space-around;
    margin-bottom: 2rem;
    width: 100%;
  }

  .score li {
    flex-grow: 1;
    position: relative;

    &:hover,
    &:hover * {
      cursor: pointer;
    }
  }

  .score li input[type='radio'] {
    appearance: none;
    left: 0;
    height: 1rem;
    margin: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 1rem;
  }

  .score li .radio {
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

  .score li:hover .radio {
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, 0.2), inset 0 0 0 2rem hsla(44, 100%, 75%, 1);
  }

  .score li input[type='radio']:checked + .radio {
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, 0.2), inset 0 0 0 2rem hsla(44, 100%, 75%, 1);
    transform: scale(1.25);

    &::after {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  .score li .text {
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

  .score li:hover .text {
    opacity: 1;
  }

  .score li input[type='radio']:checked ~ .text {
    opacity: 1;
  }

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
