import React from "react";

import RouterContext from "./RouterContext.js";

const Router = async ({ children, notFoundRoute, pathname }) => {
  const hasMatches = React.Children.toArray(children).some(
    ({ props }) => props.path === pathname,
  );

  return (
    <RouterContext.Provider value={pathname}>
      {hasMatches ? children : notFoundRoute}
    </RouterContext.Provider>
  );
};

export default Router;
