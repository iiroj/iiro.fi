import { glob } from "node:fs/promises";
import path from "node:path";

import { lazy, type FunctionComponent, type LazyExoticComponent } from "react";

const pagesDir = path.join(import.meta.dirname, "pages");

export const generateRoutes = async () => {
  const routes: Record<string, LazyExoticComponent<FunctionComponent>> = {};

  for await (const importPath of glob(path.join(pagesDir, "**/*.tsx"))) {
    const htmlPath = path.relative(pagesDir, importPath).replace(/\.tsx?$/u, ".html");
    routes[htmlPath] = lazy(() => import(importPath));
  }

  return routes;
};
