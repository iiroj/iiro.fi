import crypto from "node:crypto";
import fs from "node:fs/promises";

import { compileHtmlPages } from "./compile-html-pages.ts";
import { resolveRelativePath } from "./resolve-relative-path.ts";

const stylePath = resolveRelativePath(
  import.meta.url,
  "../public/static/styles.css",
);
const file = await fs.readFile(stylePath, "utf-8");
const styleIntegrity = `sha256-${crypto.createHash("sha256").update(file).digest("base64")}`;

await compileHtmlPages(styleIntegrity);
