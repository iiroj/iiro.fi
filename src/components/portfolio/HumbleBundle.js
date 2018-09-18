import { css } from 'emotion';
import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const articleStyles = css({
  backgroundColor: '#3b3e48',
  padding: '4rem 1rem'
});

const humbleImg = css({
  margin: '0 auto 4rem',
  maxWidth: 480
});

const textStyles = css({
  color: 'white',
  margin: '0 auto 0.5rem',
  maxWidth: 480,

  a: {
    background: 'none',
    color: 'inherit',
    textDecoration: 'underline'
  }
});

const HumbleImg = () => (
  <StaticQuery
    query={graphql`
      query {
        file(name: { in: "humble" }) {
          childImageSharp {
            fluid(maxWidth: 512) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
  >
    {data => <Img alt="Humble Bundle" className={humbleImg} fluid={data.file.childImageSharp.fluid} />}
  </StaticQuery>
);

export default () => (
  <article className={articleStyles}>
    <HumbleImg alt="Humble Bundle" />
    <p className={textStyles}>
      I designed the first{' '}
      <a href="https://www.humblebundle.com" target="_blank" rel="noopener noreferrer">
        Humble Bundle
      </a>{' '}
      website and many after that. I worked with Humble from its inception in 2011 until summer 2014.
    </p>
    <p className={textStyles}>
      People often follow up with whether or not I also created the beautiful icons representing bundled games. I did
      not.
    </p>
  </article>
);
