import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { withReducer, withHandlers, withProps, compose } from "recompose";
import styled from "styled-components";

import Back from "../src/components/Back";
import FeedbackForm from "../src/components/FeedbackForm";

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");

const resolveFeedbackProps = () =>
  withProps(props => ({
    question: "How likely would you be to recommend Iiro as a designer?",
  }));

const reducer = withReducer(
  "state",
  "dispatch",
  (state, action) => {
    switch (action.type) {
      case "SET_STATE":
        return { ...state, [action.payload.name]: action.payload.value };
      case "SET_ERROR":
        return { ...state, error: true };
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
    honeypot: "",
    score: "",
    submitted: false,
    submitting: false,
  },
);

const handlers = withHandlers({
  onChange: ({ dispatch }) => event =>
    dispatch({ type: "SET_STATE", payload: { name: event.target.name, value: event.target.value } }),

  onSubmit: ({ dispatch, state: { score, comment, honeypot }, question }) => async event => {
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
          honeypot,
        }),
      }).then(response => {
        if (response.status >= 400) {
          throw new Error(response.status);
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
  ({ onChange, onSubmit, question, state: { comment, error, honeypot, score, submitted, submitting } }) => (
    <Container>
      <Head>
        <title>{question}</title>
      </Head>
      <Back />
      <FeedbackForm
        comment={comment}
        error={error}
        honeypot={honeypot}
        onChange={onChange}
        onSubmit={onSubmit}
        question={question}
        score={score}
        submitted={submitted}
        submitting={submitting}
      />
    </Container>
  ),
);

Feedback.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  question: PropTypes.string.isRequired,
  state: PropTypes.shape({
    comment: PropTypes.string,
    error: PropTypes.bool.isRequired,
    honeypot: PropTypes.string,
    score: PropTypes.string,
    submitted: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
  }),
};

export default resolveFeedbackProps()(Feedback);
