import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { postJSON } from 'services/postJSON';
import Back from 'components/Back';
import FeedbackForm from 'components/FeedbackForm';

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

  componentDidMount() {
    this.selectRandomQuestion(this.props.data.site.siteMetadata.feedback.questions);
    this.setState({ submitting: false });
  }

  render() {
    const { error, question, score, submitted, submitting } = this.state;

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

export default Feedback;
