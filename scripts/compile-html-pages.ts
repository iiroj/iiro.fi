import fs from "node:fs/promises";
import path from "node:path";

import { listFiles } from "./list-files.ts";
import { renderReactToHTML } from "./render-react-to-html.tsx";
import { resolveRelativePath } from "./resolve-relative-path.ts";

export const compileHtmlPages = async (styleIntegrity: string) => {
  console.log("▶︎ Compiling HTML pages…");

  const pagesDir = resolveRelativePath(import.meta.url, "../src/pages");
  const pages = (await listFiles(pagesDir)).map((page) => ({
    page: path.relative(pagesDir, page).replace(/\.m?[jt]sx$/, ".html"),
    component: page,
  }));

  const publicDir = resolveRelativePath(import.meta.url, "../public");

  const integrity = { styles: styleIntegrity };

  for (const { component, page } of pages) {
    const html = await renderReactToHTML(component, page, integrity);
    const publicFile = path.resolve(publicDir, page);
    await fs.mkdir(path.dirname(publicFile), { recursive: true });
    await fs.writeFile(publicFile, html);
  }

  console.log("✓ Done compiling HTML pages!");
};
