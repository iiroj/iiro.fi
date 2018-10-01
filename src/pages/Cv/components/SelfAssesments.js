import { css } from 'emotion';
import React from 'react';

const container = css({
  fontSize: '1rem',

  'dd, dt': {
    display: 'inline'
  },

  br: {
    marginBottom: '0.5rem'
  }
});

const SelfAssesments = () => (
  <>
    <h3>Self-assesment explanation</h3>
    <dl className={container}>
      <dt>
        <strong>Beginner</strong>
      </dt>
      <span>: </span>
      <dd>
        has only received a brief introduction to the subject, made some simple projects, and has some references/demos
        to show. Has the ability to learn more when needed.
      </dd>
      <br />
      <dt>
        <strong>Junior</strong>
      </dt>
      <span>: </span>
      <dd>can work with the assistance of a professional, or perform simple tasks independently.</dd>
      <br />
      <dt>
        <strong>Professional</strong>
      </dt>
      <span>: </span>
      <dd>can work independently in any normal project.</dd>
      <br />
      <dt>
        <strong>Senior</strong>
      </dt>
      <span>: </span>
      <dd>
        can work independently with new and challenging tasks. Has concept or architecture designing/planning
        experience, and is able to teach and guide others.
      </dd>
      <br />
      <dt>
        <strong>Expert</strong>
      </dt>
      <span>: </span>
      <dd>
        same as above, but has also gained recognition in many organisations, and has been in a lead position in a
        multi-person team of seniors.
      </dd>
    </dl>
  </>
);

export default SelfAssesments;
