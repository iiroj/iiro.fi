import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withReducer, withHandlers, withProps, compose } from 'recompose';

import { postJSON } from 'services/postJSON';
import Back from 'components/Back';
import FeedbackForm from 'components/FeedbackForm';

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
  submit: ({ dispatch }) => event => {
    event.preventDefault();
    console.log(event);
    // dispatch({ type: 'SET_SUBMITTING', payload: false });
    // const data = {
    //   question: question,
    //   score: score,
    //   comment: comment,
    // };
    //
    // postJSON(url, data)
    //   .then(response => {
    //     dispatch({ type: 'SET_SUBMITTING', payload: false });
    //     dispatch({ type: 'SET_SUBMITTED', payload: true });
    //   })
    //   .catch(error => {
    //     dispatch({ type: 'SET_SUBMITTING', payload: false });
    //     dispatch({ type: 'SET_ERROR' });
    //   });
  },
});

const enhance = compose(reducer, handlers);

const FeedbackPure = enhance(props => {
  const {
    question,
    setComment,
    setError,
    setScore,
    state: { comment, error, score, submitted, submitting },
    submit,
    url,
  } = props;

  return [
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
  ];
});

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

  setScore(event) {
    this.setState({ score: event });
  }

  setComment(event) {
    this.setState({ comment: event.target.value });
  }

  submitFeedback(event) {
    event.preventDefault();
    this.setState({ submitting: true });
    const url = this.props.url;
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

  componentDidMount() {
    this.setState({ submitting: false });
  }

  render() {
    const { question } = this.props;
    const { error, score, submitted, submitting } = this.state;

    return [
      <Helmet key="helmet" title={question} />,
      <Back key="back" />,
      <FeedbackForm
        key="form"
        submitted={submitted}
        submitting={submitting}
        score={score}
        error={error}
        handleScore={this.setScore}
        handleSelection={this.setComment}
        onSubmit={this.submitFeedback}
        question={question}
      />,
    ];
  }
}

Feedback.propTypes = {
  question: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export const pageQuery = graphql`
  query FeedbackForm {
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

const resolveFeedbackFormProps = () =>
  withProps(props => {
    const questions = props.data.site.siteMetadata.feedback.questions;
    return {
      url: props.data.site.siteMetadata.feedback.api.url,
      question: questions[Math.floor(Math.random() * questions.length)],
    };
  });

export default resolveFeedbackFormProps()(FeedbackPure);
