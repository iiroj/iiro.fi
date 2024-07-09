import fs from "fs/promises";
import { fileURLToPath } from "node:url";

import esbuild from "esbuild";

const isNodeModule = (moduleUrl) => moduleUrl.includes("/node_modules/");

const isJSModule = (moduleUrl) => /\.m?[jt]sx?$/i.test(moduleUrl);

export const load = async (sourceUrl, context, nextLoad) => {
  if (!isJSModule(sourceUrl) || isNodeModule(sourceUrl)) {
    return nextLoad(sourceUrl, context, nextLoad);
  }

  const sourcefile = fileURLToPath(sourceUrl);
  const rawSource = await fs.readFile(sourcefile, "utf8");

  const { code: source } = await esbuild.transform(rawSource, {
    format: "esm",
    loader: "tsx",
    sourcefile,
    sourcemap: "inline",
    target: "esnext",
  });

  return {
    format: "module",
    shortCircuit: true,
    source,
  };
};
