import { writeFile } from "node:fs/promises";
import { exec } from "tinyexec";

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

    await writeFile(dest, await response.bytes());
    buildFiles.push(dest);
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
