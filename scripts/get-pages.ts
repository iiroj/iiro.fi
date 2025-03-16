import path from "node:path";

import { listFiles } from "./list-files.ts";
import { resolveRelativePath } from "./resolve-relative-path.ts";

export const getPages = async (): Promise<
  Array<{ page: string; component: string }>
> => {
  const pagesDir = resolveRelativePath(import.meta.url, "../src/pages");
  const pages = await listFiles(pagesDir);

  return pages.map((page) => ({
    page: path.relative(pagesDir, page).replace(/\.m?[jt]sx$/, ".html"),
    component: page,
  }));
};
