import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import { Header } from "components/Header";
import { Links } from "components/Links";
import BlogListing from "components/BlogListing";

const microdata = {
  "@context": "http://schema.org",
  "@type": "Person",
  name: "Iiro Jäppinen",
  jobTitle: "UX & UI Designer",
  worksFor: {
    "@type": "Organization",
    name: "Fraktio",
    url: "https://fraktio.fi"
  },
  url: "https://iiro.fi/",
  email: "iiro@jappinen.fi",
  nationality: "Finland",
  address: {
    "@type": "PostalAddress",
    addressCountry: "Finland",
    addressLocality: "Helsinki"
  },
  sameAs: [
    "https://dribbble.com/iiroj",
    "https://fb.me/iiro.jappinen",
    "https://fi.linkedin.com/in/iiroj",
    "https://github.com/iiroj",
    "https://t.me/iiroj"
  ]
};

const Index = props =>
  <div>
    <main>
      <article>
        <Helmet
          title="Iiro Jäppinen"
          script={[
            {
              type: "application/ld+json",
              innerHTML: `${JSON.stringify(microdata)}`
            }
          ]}
        />
        <Header />
        <Links />
      </article>
    </main>
    <BlogListing edges={props.data.allMarkdownRemark.edges} />
  </div>;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: {
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: {
            fields: {
              slug: PropTypes.string.isRequired
            }.isRequired,
            frontmatter: {
              title: PropTypes.string.isRequired
            }.isRequired
          }.isRequired
        })
      ).isRequired
    }.isRequired
  }).isRequired
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

export default Index;
