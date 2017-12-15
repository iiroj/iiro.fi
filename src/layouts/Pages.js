import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import { pageUrl, blogLink } from "../../utils/client-paths";
import BlogPost from "./BlogPost";
import * as pages from "../pages/*.js";
import * as blog from "../../blog/**/*.md";

const Page = page => {
  const path = pageUrl(page[0]);
  const Component = page[1];

  return <Route key={path} exact path={path} component={Component} />;
};

const Post = post => {
  const path = blogLink(post[0], post[1]).url;
  const md = post[1];

  return <Route key={path} exact path={`/${path}`} render={() => <BlogPost md={md} />} />;
};

const Pages = () => (
  <Switch>
    {Object.entries(pages).map(page => Page(page))}
    {Object.entries(blog).map(post => Post(post))}
  </Switch>
);

export default Pages;
