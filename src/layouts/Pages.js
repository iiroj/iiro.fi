import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import BlogPost from "./BlogPost";
import convertToPath from "../../utils/convertToPath";
import * as pages from "../pages/*.js";
import * as blog from "../../blog/**/*.md";

const Page = page => {
  const path = convertToPath(page[0]);
  const Component = page[1];

  return <Route key={path} exact path={path} component={Component} />;
};

const Post = post => {
  const path = post[0];
  const md = post[1];

  return <Route key={path} exact path={`/${path}`} render={() => <BlogPost md={md} />} />;
};

const Pages = () => (
  <Switch>
    {Object.entries(pages).map(page => Page(page))}
    {Object.entries(blog).map(post => Post(post))}
  </Switch>
);

console.log(Object.entries(blog).map(post => Post(post)));

export default Pages;
