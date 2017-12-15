import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import convertToPath from "../../utils/convertToPath";
import * as pages from "../pages/*.js";
import * as blog from "../../blog/**/*.md";

console.log(blog);

const Page = page => {
  const path = convertToPath(page[0]);
  const Component = page[1];

  return <Route key={path} exact path={path} component={Component} />;
};

const Pages = () => <Switch>{Object.entries(pages).map(page => Page(page))}</Switch>;

export default Pages;
