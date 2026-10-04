import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

const getHash = (content: string) => createHash("sha256").update(content).digest("base64");

const stylesCss = path.join(import.meta.dirname, "./styles.css");

export const generateStyles = async () => {
  const css = await fs.readFile(stylesCss, "utf-8");

  return {
    css,
    integity: getHash(css),
  };
};
