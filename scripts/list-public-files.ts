import fs from "node:fs";
import path from "node:path";

import { resolvePath } from "./resolve-path";

export const listPublicFiles = (): string[] => {
  const publicDir = resolvePath(import.meta.url, "../public");

  const publicFiles: string[] = [];

  const recursiveListFiles = (targetDir: string) => {
    for (const file of fs.readdirSync(targetDir)) {
      const fullPath = path.join(targetDir, file);

      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        recursiveListFiles(fullPath);
        break;
      }

      const relativePath = path.relative(publicDir, fullPath);
      publicFiles.push(`/${relativePath}`);
    }
  };

  recursiveListFiles(publicDir);

  return publicFiles;
};
