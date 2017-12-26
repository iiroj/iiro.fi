import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Back from "components/Back";
import Article from "./Article";
import picture from "../Header/profilePicture@3x.jpg";

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        name
        siteTitle
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

const BlogPost = ({ data }) => {
  const name = data.site.siteMetadata.name;
  const post = data.markdownRemark;
  const body = post.html;
  const postTitle = post.frontmatter.title;
  const postRawDate = post.frontmatter.date;
  const postDate = new Date(postRawDate).toDateString();
  const microdata = {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    author: {
      "@type": "Person",
      name: "Iiro Jäppinen",
    },
    publisher: {
      "@type": "Organization",
      name: "iiro.fi",
      logo: {
        "@type": "ImageObject",
        url: `https://iiro.fi${picture}`,
        height: "384",
        width: "384",
      },
    },
    datePublished: `${postRawDate}`,
    dateModified: `${postRawDate}`,
    headline: `${postTitle}`,
    image: {
      "@type": "ImageObject",
      url: `https://iiro.fi${picture}`,
      height: "384",
      width: "384",
    },
    mainEntityOfPage: `https://iiro.fi${post.fields.slug}`,
  };

  return (
    <Fragment>
      <Helmet
        title={`${postTitle} — by ${name}`}
        script={[
          {
            type: "application/ld+json",
            innerHTML: `${JSON.stringify(microdata)}`,
          },
        ]}
      />
      <Back />
      <Article title={postTitle} body={body} />
    </Fragment>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: {
      fields: {
        title: PropTypes.string.isRequired,
      }.isRequired,
      frontmatter: {
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      },
      html: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }.isRequired,
    site: {
      siteMetadata: {
        name: PropTypes.string.isRequired,
        siteTitle: PropTypes.string.isRequired,
      }.isRequired,
    }.isRequired,
  }).isRequired,
};

export default BlogPost;
