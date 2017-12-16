import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import pages from "../../utils/pages";
import Post from "./Post";
import posts from "../../utils/posts";

const Pages = () => (
  <Switch>
    {pages.map(page => <Route key={page.url} exact path={page.url} component={page.component} />)}
    {posts.map(post => <Route key={post.url} exact path={post.url} render={() => <Post {...post} />} />)}
  </Switch>
);

export default Pages;
