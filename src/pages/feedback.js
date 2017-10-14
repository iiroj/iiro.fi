import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withReducer, withHandlers, withProps, compose } from 'recompose';

import { postJSON } from 'services/postJSON';
import Back from 'components/Back';
import FeedbackForm from 'components/FeedbackForm';

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

const resolveFeedbackProps = () =>
  withProps(props => {
    const questions = props.data.site.siteMetadata.feedback.questions;
    return {
      url: props.data.site.siteMetadata.feedback.api.url,
      question: questions[Math.floor(Math.random() * questions.length)],
    };
  });

const reducer = withReducer(
  'state',
  'dispatch',
  (state, action) => {
    switch (action.type) {
      case 'SET_COMMENT':
        return Object.assign(state, { comment: action.payload });
      case 'SET_ERROR':
        return Object.assign(state, { error: true });
      case 'SET_SCORE':
        return Object.assign(state, { score: action.payload });
      case 'SET_SUBMITTED':
        return Object.assign(state, { submitted: action.payload });
      case 'SET_SUBMITTING':
        return Object.assign(state, { submitting: action.payload });
      default:
        return state;
    }
  },
  {
    comment: '',
    error: false,
    score: null,
    submitted: false,
    submitting: false,
  }
);

const handlers = withHandlers({
  setComment: ({ dispatch }) => payload => dispatch({ type: 'SET_COMMENT', payload }),
  setScore: ({ dispatch }) => payload => dispatch({ type: 'SET_SCORE', payload }),
  submit: ({ dispatch, state: { score, comment }, question, url }) => event => {
    event.preventDefault();
    dispatch({ type: 'SET_SUBMITTING', payload: false });
    const data = {
      question: question,
      score: score,
      comment: comment,
    };

    postJSON(url, data)
      .then(response => {
        dispatch({ type: 'SET_SUBMITTING', payload: false });
        dispatch({ type: 'SET_SUBMITTED', payload: true });
      })
      .catch(error => {
        dispatch({ type: 'SET_SUBMITTING', payload: false });
        dispatch({ type: 'SET_ERROR' });
      });
  },
});

const enhance = compose(reducer, handlers);

const Feedback = enhance(
  ({ question, setComment, setScore, state: { comment, error, score, submitted, submitting }, submit, url }) => [
    <Helmet key="helmet" title={question} />,
    <Back key="back" />,
    <FeedbackForm
      key="form"
      submitted={submitted}
      submitting={submitting}
      score={score}
      error={error}
      handleScore={setScore}
      handleComment={setComment}
      onSubmit={submit}
      question={question}
    />,
  ]
);

Feedback.propTypes = {
  question: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  setComment: PropTypes.func,
  state: PropTypes.shape({
    comment: PropTypes.string,
    error: PropTypes.bool.isRequired,
    score: PropTypes.number,
    submitted: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
  }),
  submit: PropTypes.func,
  url: PropTypes.string.isRequired,
};

export default resolveFeedbackProps()(Feedback);
