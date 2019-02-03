import loadable from "@loadable/component";

export const routes = new Map([
  ["/cv/", loadable(() => import("./pages/Cv"))],
  ["/portfolio/", loadable(() => import("./pages/Portfolio"))],
  ["/", loadable(() => import("./pages/Root"))]
]);

export const NotFound = loadable(() => import("./pages/NotFound"));
