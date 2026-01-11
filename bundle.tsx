import React from "react";
import { prerender } from "react-dom/static";

import Html from "./src/components/Html.tsx";
import { pagesRouter } from "./src/router.ts";

export const prerenderResponse = async (src: string) => {
  const PageComponent = (await import(src)).default as React.FC;

  const { prelude } = await prerender(
    <Html>
      <PageComponent />
    </Html>,
  );

  return new Response(prelude);
};

for (const [route, src] of Object.entries(pagesRouter.routes)) {
  let dest = "./public" + route;
  if (dest.endsWith("/")) dest += "index";
  dest += ".html";

  const response = await prerenderResponse(src);

  await Bun.write(dest, await response.text());
}
