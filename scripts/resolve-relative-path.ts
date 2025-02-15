import path from "node:path";
import { fileURLToPath } from "node:url";

export const resolveRelativePath = (
  importMetaUrl: string,
  relativePath: string,
) => path.join(path.dirname(fileURLToPath(importMetaUrl)), relativePath);
