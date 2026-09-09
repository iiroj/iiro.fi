import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";

const getHash = async (filePath: string) =>
  createHash("sha256")
    .update(await readFile(filePath))
    .digest("base64");

export const getIntegrity = async () => {
  const stylesFile = path.join(import.meta.dirname, "../public/static/styles.css");
  return {
    styles: await getHash(stylesFile),
  };
};
