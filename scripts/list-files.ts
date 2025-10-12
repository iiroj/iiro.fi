import fs from "node:fs/promises";
import path from "node:path";

export const listFiles = async (dir: string, result: string[] = []) => {
  const files = await fs.readdir(dir, { withFileTypes: true });

  for await (const file of files) {
    const filename = path.join(dir, file.name);

    if (file.isDirectory()) {
      await listFiles(filename, result);
    } else {
      result.push(filename);
    }
  }

  return result;
};
