import { writeFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";

import { prerender } from "react-dom/static";

import Html from "./src/components/Html.tsx";
import { Router, routes } from "./src/router.tsx";
import { emitStatichostHeaders } from "./src/headers.ts";

const OUTDIR = "./public";

export const prerenderResponse = async (route: keyof typeof routes) => {
  const { prelude } = await prerender(
    <Html>
      <Router route={route} />
    </Html>,
  );
  return new Response(prelude);
};

const buildFiles: string[] = [];
await Promise.all(
  (Object.keys(routes) as (keyof typeof routes)[]).map(async (route) => {
    let dest = `${OUTDIR}${route}`;
    if (dest.endsWith("/")) dest += "index";
    dest += ".html";

    console.log(`⚙️  Building ${dest}`);

    const response = await prerenderResponse(route);

    await writeFile(dest, await response.text());
    buildFiles.push(dest);
  }),
);

const headersFile = await emitStatichostHeaders();

const prettier = spawnSync("oxfmt", ["--write", ...buildFiles, headersFile]);
const prettierOutput = prettier.stdout?.toString() ?? "";
console.log(`💅 Prettier: ${prettierOutput}`);
