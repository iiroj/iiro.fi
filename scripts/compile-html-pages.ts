import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

import { listFiles } from "./list-files.ts";
import { renderReactToHTML } from "./render-react-to-html.tsx";
import { resolveRelativePath } from "./resolve-relative-path.ts";

export const compileHtmlPages = async () => {
  console.log("▶︎ Compiling HTML pages…");

  const pagesDir = resolveRelativePath(import.meta.url, "../src/pages");
  const pages = (await listFiles(pagesDir)).map((page) => ({
    page: path.relative(pagesDir, page).replace(/\.m?[jt]sx$/, ".html"),
    component: page,
  }));

  const publicDir = resolveRelativePath(import.meta.url, "../public");

  const getPublicAssetHash = async (filePath: string) => {
    const file = await fs.readFile(path.resolve(publicDir, filePath), "utf-8");
    const hash = crypto.createHash("sha384").update(file).digest("base64");
    return `sha384-${hash}`;
  };

  const integrity = {
    styles: await getPublicAssetHash("static/styles.css"),
  };

  for (const { component, page } of pages) {
    const html = await renderReactToHTML(component, page, integrity);
    const publicFile = path.resolve(publicDir, page);
    await fs.mkdir(path.dirname(publicFile), { recursive: true });
    await fs.writeFile(publicFile, html);
  }

  console.log("✓ Done compiling HTML pages!");
};
