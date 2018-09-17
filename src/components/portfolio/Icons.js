import { css } from 'emotion';
import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

import link from './link';

const articleStyles = css({
  boxShadow: '0 1px 0 rgba(0, 0, 0, 0.08)',
  padding: '4rem 1rem 3rem 1rem',
  position: 'relative',
  textAlign: 'center',
  width: '100%'
});

const bgImageOuter = css({
  position: 'absolute !important',
  height: '100%',
  width: '100%',
  top: 0,
  left: 0
});

const bgImageInner = css({
  height: '100%',
  width: '100%'
});

const titleStyles = css({
  fontSize: '3em',
  lineHeight: 1.2,
  marginBottom: '4rem',
  position: 'relative'
});

const containerStyles = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: '0 1rem',
  position: 'relative',

  '.gatsby-image-outer-wrapper': {
    margin: '0 1rem'
  },

  a: {
    margin: 0
  }
});

const Icons = ({ data }) => (
  <article className={articleStyles}>
    <Img className={bgImageInner} fluid={data.bg.childImageSharp.fluid} outerWrapperClassName={bgImageOuter} />
    <h1 className={titleStyles}>Icon Aficionado</h1>
    <div className={containerStyles}>
      <div>
        <Img alt="Growl" fixed={data.growl.childImageSharp.fixed} />
        <a className={link} href="http://growl.info" target="_blank" rel="noopener noreferrer">
          Growl
        </a>
      </div>
      <div>
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
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        growl: file(name: { in: "growl" }) {
          childImageSharp {
            fixed(height: 256, width: 256) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }

        tuneinstructor: file(name: { in: "tuneinstructor" }) {
          childImageSharp {
            fixed(height: 256, width: 256) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
  >
    {data => <Icons data={data} />}
  </StaticQuery>
);
