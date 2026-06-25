import fs from "node:fs";
import module from "node:module";
import { fileURLToPath } from "node:url";

import { transformSync } from "oxc-transform";

const isTSXModule = (moduleUrl: string) => /\.tsx$/iu.test(moduleUrl);

module.registerHooks({
  load(url, context, nextLoad) {
    if (!isTSXModule(url)) {
      return nextLoad(url, context);
    }

    const filepath = fileURLToPath(url);
    const rawSource = fs.readFileSync(filepath, "utf8");
    const { code: source } = transformSync(filepath, rawSource, {
      lang: "tsx",
      sourceType: "module",
    });

    return {
      format: "module",
      shortCircuit: true,
      source,
    };
  },
});
