import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { blogLink } from "../../utils/client-paths";
import * as blog from "../../blog/**/*.md";

const list = Object.entries(blog).map(post => blogLink(post[0], post[1]));

console.log(list);

const PostListItem = styled.li`
  article,
  h1 {
    display: inline;
  }

  & + li {
    margin-top: 2em;
  }
`;

const PostList = () => (
  <ul>
    {list.map((post, key) => (
      <PostListItem key={key}>
        <Link to={post.url}>
          <article>
            <h1>{post.title}</h1>
          </article>
        </Link>
      </PostListItem>
    ))}
  </ul>
);

export default withRouter(PostList);
