import { css } from 'emotion';
import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const outerWrapperClassname = css({
  borderRadius: '50%',
  flex: '0 0 4rem',
  height: '4rem',
  overflow: 'hidden',
  width: '4rem'
});

const className = css({
  height: '100% !important',
  width: '100% !important'
});

const Picture = ({ data }) => (
  <Img
    alt="Iiro Jäppinen"
    className={className}
    critical
    fixed={data.file.childImageSharp.fixed}
    outerWrapperClassName={outerWrapperClassname}
  />
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        file(name: { in: "avatar" }) {
          childImageSharp {
            fixed(height: 192, width: 192) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
  >
    {data => <Picture data={data} />}
  </StaticQuery>
);
