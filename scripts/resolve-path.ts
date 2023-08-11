import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const resolvePath = (
  base = import.meta.url,
  relativePath: string,
): string => {
  const __dirname = path.dirname(fileURLToPath(base));
  return path.resolve(__dirname, relativePath);
};
