import { writeFile } from "node:fs/promises";
import { exec } from "tinyexec";

import { prerender } from "react-dom/static";

import Html from "./src/components/Html.tsx";
import { emitStatichostHeaders } from "./src/headers.ts";
import { generateRoutes } from "./src/gen-routes.ts";
import type { FunctionComponent, LazyExoticComponent } from "react";

const OUTDIR = "./public";

const routes = await generateRoutes();

export const prerenderResponse = async (Content: LazyExoticComponent<FunctionComponent>) => {
  const { prelude } = await prerender(
    <Html>
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

    await writeFile(destination, await response.bytes());
    buildFiles.push(destination);
  }),
);

const headersFile = await emitStatichostHeaders();

const oxfmt = await exec("oxfmt", ["--write", ...buildFiles, headersFile]);
console.log(`💅 Prettier: ${oxfmt.stdout}`);

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
