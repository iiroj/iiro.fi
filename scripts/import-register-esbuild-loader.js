import { register } from "node:module";

import { resolveRelativePath } from "./resolve-relative-path.js";

register(
  resolveRelativePath(import.meta.url, "./esbuild-loader.js"),
  import.meta.url,
);
