import React from "react";
import PropTypes from "prop-types";
import remark from "remark";
import remarkReact from "remark-react";

const BlogPost = ({ md }) => {
  console.log(md);

  return (
    <article>
      {
        remark()
          .use(remarkReact)
          .processSync(md).contents
      }
    </article>
  );
};

BlogPost.propTypes = {
  md: PropTypes.string.isRequired,
};

export default BlogPost;
