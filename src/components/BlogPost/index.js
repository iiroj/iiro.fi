import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import logo from "../Header/profilePicture@3x.jpg";
import Back from "../Back";
import Article from "./Article";

const BlogPost = ({ body, date, title, url }) => {
  const postRawDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const postDate = date.toDateString();

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
        url: `https://iiro.fi${logo}`,
        height: "384",
        width: "384",
      },
    },
    datePublished: `${postRawDate}`,
    dateModified: `${postRawDate}`,
    headline: `${title}`,
    image: {
      "@type": "ImageObject",
      url: `https://iiro.fi${logo}`,
      height: "384",
      width: "384",
    },
    mainEntityOfPage: `https://iiro.fi${url}`,
  };

  return (
    <Fragment>
      <Helmet
        title={`${title} — by Iiro Jäppinen`}
        script={[
          {
            type: "application/ld+json",
            innerHTML: `${JSON.stringify(microdata)}`,
          },
        ]}
      />
      <Back />
      <Article body={body} title={title} />
    </Fragment>
  );
};

BlogPost.propTypes = {
  body: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default BlogPost;
