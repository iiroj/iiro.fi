export const routes = new Map([
  ["/cv/", () => import("./pages/Cv")],
  ["/portfolio/", () => import("./pages/Portfolio")],
  ["/", () => import("./pages/Root")]
]);

export const NotFound = () => import("./pages/NotFound");
