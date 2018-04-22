import React, { Fragment, PureComponent } from "react";
import Head from "next/head";

import Back from "../components/Back";
import FeedbackForm from "../components/FeedbackForm";

const feedbackUrl = `${process.env.LAMBDA_URL}/telegram`;
const question = "How likely would you be to recommend Iiro as a designer?";

export default class Feedback extends PureComponent {
  state = {
    comment: "",
    error: false,
    score: "",
    submitted: false,
    submitting: false,
  };

  onChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  onSubmit = event => {
    event.preventDefault();
    this.setState({ submitting: true });

    const { score, comment } = this.state;

    return new Promise((resolve, reject) => {
      setTimeout(reject, 10000);
      fetch(feedbackUrl, {
        method: "POST",
        body: JSON.stringify({ question, score, comment }),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        mode: "cors",
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
        console.log("error", error);
        this.setState({ submitting: false, error });
      });
  };

  render() {
    const { comment, error, score, submitted, submitting } = this.state;

    return (
      <Fragment>
        <Head>
          <title>{question}</title>
        </Head>
        <Back />
        <FeedbackForm
          comment={comment}
          error={error}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          question={question}
          score={score}
          submitted={submitted}
          submitting={submitting}
        />
      </Fragment>
    );
  }
}
