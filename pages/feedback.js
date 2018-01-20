import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { withReducer, withHandlers, withProps, compose } from "recompose";
import qs from "qs";
import styled from "styled-components";

import Back from "../src/components/Back";
import FeedbackForm from "../src/components/FeedbackForm";

const QUESTIONS = [
  "How likely would you be to recommend Iiro as a designer?",
  "How likely would you be to recommend Iiro as a colleague?",
];

const resolveFeedbackProps = () =>
  withProps(props => ({
    question: QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)],
  }));

const reducer = withReducer(
  "state",
  "dispatch",
  (state, action) => {
    switch (action.type) {
      case "SET_COMMENT":
        return { ...state, comment: action.payload };
      case "SET_ERROR":
        return { ...state, error: true };
      case "SET_SCORE":
        return { ...state, score: action.payload };
      case "SET_SUBMITTED":
        return { ...state, submitted: action.payload };
      case "SET_SUBMITTING":
        return { ...state, submitting: action.payload };
      default:
        return state;
    }
  },
  {
    comment: "",
    error: false,
    score: null,
    submitted: false,
    submitting: false,
  },
);

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
};

const handlers = withHandlers({
  setComment: ({ dispatch }) => event => dispatch({ type: "SET_COMMENT", payload: event.target.value }),
  setScore: ({ dispatch }) => event => dispatch({ type: "SET_SCORE", payload: event }),
  submit: ({ dispatch, state: { score, comment }, question }) => async event => {
    event.preventDefault();
    dispatch({ type: "SET_SUBMITTING", payload: true });

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "Feedback",
          question,
          score,
          comment,
        }),
      }).then(response => {
        if (response.status >= 400) {
          throw new Error(respose.status);
        }
      });

      dispatch({ type: "SET_SUBMITTING", payload: false });
      dispatch({ type: "SET_SUBMITTED", payload: true });
    } catch (error) {
      dispatch({ type: "SET_SUBMITTING", payload: false });
      dispatch({ type: "SET_ERROR" });
    }
  },
});

const enhance = compose(reducer, handlers);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const Feedback = enhance(
  ({ question, setComment, setScore, state: { comment, error, score, submitted, submitting }, submit }) => (
    <Container>
      <Helmet title={question} />
      <Back />
      <FeedbackForm
        submitted={submitted}
        submitting={submitting}
        score={score}
        error={error}
        handleScore={setScore}
        handleComment={setComment}
        onSubmit={submit}
        question={question}
      />
    </Container>
  ),
);

Feedback.propTypes = {
  question: PropTypes.string.isRequired,
  setComment: PropTypes.func,
  state: PropTypes.shape({
    comment: PropTypes.string,
    error: PropTypes.bool.isRequired,
    score: PropTypes.number,
    submitted: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
  }),
  submit: PropTypes.func,
};

export default resolveFeedbackProps()(Feedback);
