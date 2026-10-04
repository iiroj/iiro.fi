import fs from "node:fs/promises";

import type { FunctionComponent, LazyExoticComponent } from "react";
import { prerender } from "react-dom/static";
import { exec } from "tinyexec";

import Html from "./src/components/Html.tsx";
import { generateRoutes } from "./src/generateRoutes.ts";
import { emitStatichostHeaders } from "./src/headers.ts";

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
await Promise.all(
  Object.entries(routes).map(async ([route, content]) => {
    const destination = `${OUTDIR}/${route}`;
    console.log(`⚙️  Building ${destination}`);

    const response = await prerenderResponse(content);

    await fs.writeFile(destination, await response.bytes());
    buildFiles.push(destination);
  }),
);

await emitStatichostHeaders();

/** Using `node --watch` */
if (process.env.WATCH_REPORT_DEPENDENCIES === "1") {
  const { createServer } = await import("node:http");
  const serve = (await import("serve-handler")).default;

  createServer((request, response) => {
    void serve(request, response, {
      public: "public",
    });
  }).listen(3000, () => {
    console.log("🌐 Serving at http://localhost:3000");
  });
}
