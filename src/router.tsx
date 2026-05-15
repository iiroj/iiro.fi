import { lazy } from "react";

export const routes = {
  "/": lazy(() => import("./pages/index.tsx")),
  "/404": lazy(() => import("./pages/404.tsx")),
};

export const Router = ({ route }: { route: keyof typeof routes }) => {
  const Component = routes[route];
  return <Component />;
};
