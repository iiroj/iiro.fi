import path from "node:path";
import { fileURLToPath } from "node:url";

/** @type {(importMetaUrl: string, relativePath: string) => string} */
export const resolveRelativePath = (importMetaUrl, relativePath) =>
  path.join(path.dirname(fileURLToPath(importMetaUrl)), relativePath);
