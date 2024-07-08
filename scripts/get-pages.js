import path from "node:path";
import fs from "node:fs/promises";

import { resolveRelativePath } from "./resolve-relative-path.js";

const traverse = async (dir, result = []) => {
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

/** @type {() => Promise<{ page: string; component: string }>} */
export const getPages = async () => {
  const pagesDir = resolveRelativePath(import.meta.url, "../src/pages");
  const pages = await traverse(pagesDir);

  return pages.map((page) => ({
    page: path.relative(pagesDir, page).replace(/\.jsx$/, ".html"),
    component: page,
  }));
};
