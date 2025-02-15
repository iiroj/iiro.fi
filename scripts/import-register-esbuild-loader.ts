import { register } from "node:module";

import { resolveRelativePath } from "./resolve-relative-path.ts";

register(
  resolveRelativePath(import.meta.url, "./esbuild-loader.ts"),
  import.meta.url,
);
