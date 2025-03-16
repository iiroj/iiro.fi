import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

import { compileBunnyScripts } from "./compile-bunny-scripts.ts";
import { getPages } from "./get-pages.ts";
import { renderReactToHTML } from "./render-react-to-html.tsx";
import { resolveRelativePath } from "./resolve-relative-path.ts";

const pages = await getPages();

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

await compileBunnyScripts();
