import path from "node:path";
import fs from "node:fs/promises";

import { resolveRelativePath } from "./resolve-relative-path.ts";

const traverse = async (dir: string, result: string[] = []) => {
  const files = await fs.readdir(dir, { withFileTypes: true });

  for await (const file of files) {
    const filename = path.join(dir, file.name);

    if (file.isDirectory()) {
      await traverse(filename, result);
    } else {
      result.push(filename);
    }
  }

  return result;
};

export const getPages = async (): Promise<
  Array<{ page: string; component: string }>
> => {
  const pagesDir = resolveRelativePath(import.meta.url, "../src/pages");
  const pages = await traverse(pagesDir);

  return pages.map((page) => ({
    page: path.relative(pagesDir, page).replace(/\.m?[jt]sx$/, ".html"),
    component: page,
  }));
};
