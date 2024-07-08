import fs from "node:fs/promises";
import path from "node:path";

import { getPages } from "./get-pages.js";
import { renderReactToHTML } from "./render-react-to-html.jsx";
import { resolveRelativePath } from "./resolve-relative-path.js";

const pages = await getPages();

const publicDir = resolveRelativePath(import.meta.url, "../public");

for (const { component, page } of pages) {
  const html = await renderReactToHTML(component, page);
  await fs.writeFile(path.resolve(publicDir, page), html);
}
