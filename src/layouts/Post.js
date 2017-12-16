import React from "react";
import PropTypes from "prop-types";
import remark from "remark";
import remarkReact from "remark-react";
import RemarkLowlight from "remark-react-lowlight";
import bash from "highlight.js/lib/languages/bash";
import js from "highlight.js/lib/languages/javascript";
import scss from "highlight.js/lib/languages/scss";

import BlogPost from "../components/BlogPost";

const Post = ({ content, date, slug, title, url }) => {
  const body = remark()
    .use(remarkReact, {
      remarkReactComponents: {
        code: RemarkLowlight({
          bash,
          js,
          scss,
        }),
      },
    })
    .processSync(content).contents;

  return <BlogPost body={body} date={date} title={title} url={url} />;
};

Post.propTypes = {
  content: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Post;
