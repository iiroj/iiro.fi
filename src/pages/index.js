import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import HeaderArea from 'components/HeaderArea';
import MainArea from 'components/MainArea';
import Header from 'components/Header';
import PostList from 'components/PostList';
import Links from 'components/Links';

const microdata = {
  '@context': 'http://schema.org',
  '@type': 'Person',
  name: 'Iiro Jäppinen',
  jobTitle: 'Designer',
  worksFor: {
    '@type': 'Organization',
    name: 'Fraktio',
    url: 'https://fraktio.fi',
  },
  url: 'https://iiro.fi/',
  email: 'iiro@jappinen.fi',
  nationality: 'Finland',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Finland',
    addressLocality: 'Helsinki',
  },
  sameAs: [
    'https://twitter.com/iirojappinen',
    'https://fi.linkedin.com/in/iiroj',
    'https://dribbble.com/iiroj',
    'https://github.com/iiroj',
    'https://gitlab.com/iiroj',
  ],
};

const Index = ({ className, data }) => [
  <Helmet
    key="helmet"
    title="Iiro Jäppinen"
    script={[
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(microdata),
      },
    ]}
  />,
  <HeaderArea key="header">
    <Header />
  </HeaderArea>,
  <MainArea className={className} key="main">
    <h3>Blog</h3>
    <ul>
      <PostList edges={data.allMarkdownRemark.edges} />
    </ul>
    <h3>Elsewhere</h3>
    <ul>
      <Links />
    </ul>
  </MainArea>,
];

Index.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    allMarkdownRemark: {
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: {
            fields: {
              slug: PropTypes.string.isRequired,
            }.isRequired,
            frontmatter: {
              title: PropTypes.string.isRequired,
            }.isRequired,
          }.isRequired,
        })
      ).isRequired,
    }.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query Index {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default styled(Index)`
  h3 {
    margin: 2rem 0;
    opacity: 0.6;
  }
`;
