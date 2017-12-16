import React from "react";
import PropTypes from "prop-types";
import remark from "remark";
import remarkReact from "remark-react";
import RemarkLowlight from "remark-react-lowlight";
import frontmatter from "remark-frontmatter";
import bash from "highlight.js/lib/languages/bash";
import js from "highlight.js/lib/languages/javascript";
import scss from "highlight.js/lib/languages/scss";

const BlogPost = ({ md }) => {
  const markdown = remark()
    .use(remarkReact, {
      remarkReactComponents: {
        code: RemarkLowlight({
          bash,
          js,
          scss,
        }),
      },
    })
    .use(frontmatter)
    .processSync(md);

  console.log(markdown);

  return <article>{markdown.contents}</article>;
};

BlogPost.propTypes = {
  md: PropTypes.string.isRequired,
};

export default BlogPost;
