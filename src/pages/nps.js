import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";

import { postJSON } from "services/postJSON";
import { Back } from "components/Back";

class NPS extends PureComponent {
  constructor() {
    super();
    this.state = {
      comment: "",
      error: false,
      question: null,
      score: null,
      submitted: false,
      submitting: true
    };
    this.setScore = this.setScore.bind(this);
    this.setComment = this.setComment.bind(this);
    this.submitNps = this.submitNps.bind(this);
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

  submitNps(event) {
    event.preventDefault();
    this.setState({ submitting: true });
    const url = this.props.data.site.siteMetadata.nps.api.url;
    const data = {
      question: this.state.question,
      score: this.state.score,
      comment: this.state.comment
    };

    postJSON(url, data)
      .then(response => {
        this.setState({
          submitted: true,
          submitting: false
        });
      })
      .catch(error => {
        this.setState({
          submitting: false,
          error: true
        });
      });
  }

  componentWillMount() {
    this.selectRandomQuestion(this.props.data.site.siteMetadata.nps.questions);
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

    const selection = Array.from(Array(10).keys()).map(n =>
      <li key={n + 1}>
        <input
          id={n + 1}
          name="nps"
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
    );

    return (
      <div>
        <Helmet title={question} />
        <Back />
        <main className={className}>
          <form onSubmit={this.submitNps}>
            <ol className="score">
              {selection}
            </ol>
            <div className="side">
              <aside>On a scale from 1 to 10...</aside>
              <h1>
                {question}
              </h1>
              <textarea
                onChange={this.setComment}
                placeholder="Send your regards"
              />
              <button disabled={score === null || submitting || submitted}>
                Submit
              </button>
            </div>
          </form>
        </main>
      </div>
    );
  }
}

NPS.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        nps: PropTypes.shape({
          api: PropTypes.shape({
            url: PropTypes.string.isRequired
          }),
          questions: PropTypes.array.isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query NPS {
    site {
      siteMetadata {
        nps {
          api {
            url
          }
          questions
        }
      }
    }
  }
`;

export default styled(NPS)`
  align-items: center;
  background-color: white;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  h1 {
    font-family: Georgia, serif;
    font-size: 1.5rem;
    font-style: italic;
    line-height: 2rem;
    margin-bottom: 2rem;
  }

  form {
    align-items: center;
    display: flex;
    margin: 5rem 1rem 1rem;

    .score {
      margin-right: 2rem;
    }

    .side {
      max-width: 24rem;
    }
  }

  .score li {
    align-items: center;
    display: flex;

    &:hover,
    &:hover * {
      cursor: pointer;
    }

    & + li {
      margin-top: 0.5rem;
    }
  }

  .score li input[type="radio"] {
    appearance: none;
    left: 0;
    height: 2rem;
    margin: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 2rem;
  }

  .score li .radio {
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px hsla(0, 0%, 0%, 0.2);
    display: block;
    height: 2rem;
    position: relative;
    transition: box-shadow 125ms ease-out;
    width: 2rem;

    &::after {
      background: hsla(0, 0%, 100%, 1);
      border-radius: 50%;
      box-shadow: 0 0 0 2px hsla(0, 0%, 0%, 0.2),
                  inset 0 0 0 0 hsla(44,100%,75%,1);
      content: "";
      display: block;
      height: 1rem;
      left: 50%;
      opacity: 0;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: opacity 125ms ease-out, transform 125ms ease-out;
      width: 1rem;
    }
  }

  .score li:hover .radio {
    box-shadow: inset 0 0 0 2px hsla(0, 0%, 0%, 0.2),
                inset 0 0 0 2rem hsla(44,100%,75%,1);
  }

  .score li input[type="radio"]:checked + .radio {
    box-shadow: inset 0 0 0 2px hsla(0, 0%, 0%, 0.2),
                inset 0 0 0 2rem hsla(44,100%,75%,1);

    &::after {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  .score li .text {
    flex-grow: 1;
    font-weight: bold;
    line-height: 2rem;
    opacity: 0.4;
    padding-left: 1rem;
    text-align: center;
    transition: opacity 125ms ease-out;
  }

  .score li:hover .text {
    opacity: 1;
  }

  .score li input[type="radio"]:checked ~ .text {
    opacity: 1;
  }

  .side aside {
    opacity: 0.4;
  }

  .side textarea {
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
      border: 2px solid hsla(44,100%,75%,1);
    }
  }

  .side button {
    background-color: hsla(44,100%,75%,1);
    border-radius: 1.5rem;
    border: none;
    display: block;
    font-size: 1rem;
    height: 3rem;
    margin: 0 auto;
    outline: none;
    padding: 0 4rem;
    transition: background-color 125ms ease-out,
                box-shadow 125ms ease-out,
                transform 125ms ease-out;

    &:disabled {
      cursor: not-allowed;
      background-color: hsla(44,100%,75%,0.4);
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
