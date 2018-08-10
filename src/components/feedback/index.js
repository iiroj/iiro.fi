import React from 'react';

import Form from './Form';

const FEEDBACK_URL = `/.netlify/functions/telegram`;
const QUESTION = 'What do you think?';

export default class Feedback extends React.PureComponent {
  state = {
    comment: '',
    error: false,
    score: '',
    submitted: false,
    submitting: false
  };

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  onSubmit = event => {
    event.preventDefault();
    this.setState({ submitting: true });

    const { score, comment } = this.state;

    return new Promise((resolve, reject) => {
      setTimeout(reject, 10000);
      fetch(FEEDBACK_URL, {
        method: 'POST',
        body: JSON.stringify({ question: QUESTION, score, comment }),
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        mode: 'cors'
      })
        .then(resolve)
        .catch(reject);
    })
      .then(response => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }

        this.setState({ submitting: false, submitted: true });
      })
      .catch(error => {
        console.log('error', error);
        this.setState({ submitting: false, error });
      });
  };

  render() {
    const { comment, error, score, submitted, submitting } = this.state;

    return (
      <Form
        comment={comment}
        error={error}
        handleChange={this.handleChange}
        onSubmit={this.onSubmit}
        question={QUESTION}
        score={score}
        submitted={submitted}
        submitting={submitting}
      />
    );
  }
}
