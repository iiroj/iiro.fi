import crypto from "node:crypto";
import fs from "node:fs/promises";

import { compileBunnyScripts } from "./compile-bunny-scripts.ts";
import { compileHtmlPages } from "./compile-html-pages.ts";
import { resolveRelativePath } from "./resolve-relative-path.ts";

const stylePath = resolveRelativePath(
  import.meta.url,
  "../public/static/styles.css",
);
const file = await fs.readFile(stylePath, "utf-8");
const styleIntegrity = `sha384-${crypto.createHash("sha384").update(file).digest("base64")}`;

compileHtmlPages(styleIntegrity);
compileBunnyScripts(styleIntegrity);
