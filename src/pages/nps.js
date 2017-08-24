import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";

import { Back } from "components/Back";

class NPS extends PureComponent {
  constructor() {
    super();
    this.state = {
      comment: "",
      disabledSubmit: true,
      question: null,
      score: null,
      submitted: false,
      error: false
    };
    this.setScore = this.setScore.bind(this);
    this.setComment = this.setComment.bind(this);
    this.post = this.post.bind(this);
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

  post(url, data) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload = resolve;
      xhr.onerror = reject;
      xhr.send(JSON.stringify(data));
    });
  }

  submitNps(event) {
    event.preventDefault();
    const url = this.props.data.site.siteMetadata.nps.api.url;
    const data = {
      question: this.state.question,
      score: this.state.score,
      comment: this.state.comment
    };

    this.post(url, data)
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  componentWillMount() {
    this.selectRandomQuestion(this.props.data.site.siteMetadata.nps.questions);
  }

  componentDidMount() {
    this.setState({ disabledSubmit: false });
  }

  render() {
    const { className } = this.props;
    const { disabledSubmit, question, submitted } = this.state;

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
        <label htmlFor={n + 1} />
        <p>
          {n + 1}
        </p>
      </li>
    );

    return (
      <div>
        <Helmet title={question} />
        <Back />
        <main className={className}>
          <form onSubmit={this.submitNps}>
            <h1>
              {question}
            </h1>
            <ol>
              {selection}
            </ol>
            <textarea onChange={this.setComment} />
            <button disabled={disabledSubmit}>Submit</button>
            {submitted && <p>Thank you!</p>}
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
  justify-content: center;
  min-height: 100vh;
  padding: 5rem 1rem;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    text-align: center;
  }

  ol {
    display: flex;
    margin: 0 auto;
  }

  li {
    position: relative;

    & + li {
      margin-left: 1rem;
    }
  }

  input {
    appearance: none;
    left: 0;
    height: 3rem;
    margin: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 3rem;

    &:checked + label {
      background: green;
    }
  }

  label {
    position: relative;
    background: red;
    display: block;
    height: 3rem;
    width: 3rem;
  }

  button {
    display: block;
    margin: 0 auto;
  }
`;
