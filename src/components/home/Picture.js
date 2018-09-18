import { css } from 'emotion';
import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const imageStyles = css({
  borderRadius: '50%',
  flex: '0 0 4rem',
  height: '4rem !important',
  overflow: 'hidden',
  width: '4rem !important'
});

const Picture = ({ data }) => (
  <Img alt="Iiro Jäppinen" className={imageStyles} critical fixed={data.file.childImageSharp.fixed} />
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
