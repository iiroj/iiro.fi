import React from "react";

import RouterContext from "./RouterContext.js";

const Route = ({ children, path }) => {
  const pathname = React.useContext(RouterContext);

  if (pathname === path) {
    return children;
  }
};

export default Route;
