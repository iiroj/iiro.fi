import path from "node:path";
import fs from "node:fs/promises";

import esbuild from "esbuild";

import { listFiles } from "./list-files.ts";
import { resolveRelativePath } from "./resolve-relative-path.ts";

export const compileBunnyScripts = async () => {
  console.log("▶︎ Compiling Bunny scripts…");

  const bunnyScriptingDir = resolveRelativePath(
    import.meta.url,
    "../src/bunny/scripting",
  );
  const scripting = await listFiles(bunnyScriptingDir);

  const targetDir = resolveRelativePath(import.meta.url, "../bunny/scripting");
  await fs.mkdir(targetDir, { recursive: true });

  for (const script of scripting) {
    const ext = path.extname(script);
    const outfile = path
      .join(targetDir, path.basename(script))
      .replace(ext, ".js");

    await esbuild.build({
      bundle: true,
      entryPoints: [script],
      format: "esm",
      outfile,
    });
  }

  console.log("✓ Done compiling Bunny scripts!");
};
