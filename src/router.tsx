import { lazy } from "react";

export const pagesDir = "./src/pages";

export const pagesRouter = new Bun.FileSystemRouter({
  dir: pagesDir,
  style: "nextjs",
});

export const Router = ({ route }: { route: string }) => {
  const matchedRoute = pagesRouter.match(route);

  if (!matchedRoute) {
    throw new Error("Cannot match route", { cause: route });
  }

  const Route = lazy(() => import(matchedRoute.filePath));
  return <Route />;
};
