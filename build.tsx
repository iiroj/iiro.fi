import fs from "node:fs/promises";

import type { FunctionComponent, LazyExoticComponent } from "react";
import { prerender } from "react-dom/static";
import { exec } from "tinyexec";

import Html from "./src/components/Html.tsx";
import { generateRoutes } from "./src/generateRoutes.ts";
import { emitHeaders } from "./src/headers.ts";
import { emitSitemap } from "./src/sitemap.ts";

const OUTDIR = "./public";

const routes = await generateRoutes();

const version = ((await exec("git", ["rev-parse", "--short", "HEAD"])).stdout || "HEAD").trim();

export const prerenderResponse = async (Content: LazyExoticComponent<FunctionComponent>) => {
  const { prelude } = await prerender(
    <Html version={version}>
      <Content />
    </Html>,
  );
  return new Response(prelude);
};

const buildFiles: string[] = [];
await Promise.all([
  ...Object.entries(routes).map(async ([route, content]) => {
    const destination = `${OUTDIR}/${route}`;
    console.log(`⚙️  Building ${destination}`);

    const response = await prerenderResponse(content);

    await fs.writeFile(destination, await response.bytes());
    buildFiles.push(destination);
  }),
  emitSitemap(),
  emitHeaders(),
]);
