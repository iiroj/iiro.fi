import { css } from 'emotion';
import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

import link from './link';

const articleStyles = css({
  boxShadow: '0 1px 0 rgba(0, 0, 0, 0.08)',
  padding: '4rem 1rem 3rem',
  position: 'relative',
  textAlign: 'center',
  width: '100%'
});

const bgImage = css({
  position: 'absolute !important',
  height: '100%',
  width: '100%',
  top: 0,
  left: 0
});

const titleStyles = css({
  fontSize: '3em',
  lineHeight: 1.2,
  marginBottom: '2rem',
  position: 'relative'
});

const wrapperStyles = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  margin: '2rem'
});

const containerStyles = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  position: 'relative',

  '.gatsby-image-wrapper': {
    marginBottom: '2rem'
  }
});

const Icons = ({ data }) => (
  <article className={articleStyles}>
    <Img className={bgImage} fluid={data.bg.childImageSharp.fluid} />
    <h1 className={titleStyles}>Icon Aficionado</h1>
    <div className={containerStyles}>
      <div className={wrapperStyles}>
        <Img alt="Growl" fixed={data.growl.childImageSharp.fixed} />
        <a className={link} href="http://growl.info" target="_blank" rel="noopener noreferrer">
          Growl
        </a>
      </div>
      <div className={wrapperStyles}>
        <Img alt="Tune•Instructor" fixed={data.tuneinstructor.childImageSharp.fixed} />
        <a className={link} href="https://www.tune-instructor.de/en/" target="_blank" rel="noopener noreferrer">
          Tune•Instructor
        </a>
      </div>
    </div>
  </article>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        bg: file(name: { in: "icons" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        growl: file(name: { in: "growl" }) {
          childImageSharp {
            fixed(height: 256, width: 256) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        tuneinstructor: file(name: { in: "tuneinstructor" }) {
          childImageSharp {
            fixed(height: 256, width: 256) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
  >
    {data => <Icons data={data} />}
  </StaticQuery>
);
