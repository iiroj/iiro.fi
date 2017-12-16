import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import posts from "../../utils/posts";

const sortedPosts = posts.sort((a, b) => a.date < b.date);

const PostListItem = styled.li`
  article,
  h1 {
    display: inline;
  }

  & + li {
    margin-top: 2em;
  }
`;

const PostList = () =>
  sortedPosts.map((post, key) => (
    <PostListItem key={key}>
      <Link to={post.url}>
        <article>
          <h1>{post.title}</h1>
        </article>
      </Link>
    </PostListItem>
  ));

export default PostList;
