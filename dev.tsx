import { prerenderResponse } from "./bundle.tsx";
import { pagesDir, pagesRouter } from "./src/router.ts";

Bun.serve({
  hostname: "localhost",
  port: 3000,

  routes: {
    "/*": async (req) => {
      try {
        const urlPathname = new URL(req.url).pathname;

        const routeMatch = pagesRouter.match(urlPathname);
        if (routeMatch) {
          const pageSrc = `${pagesDir}/${routeMatch?.src}`;

          const response = await prerenderResponse(pageSrc);

          response.headers.set("Content-Type", "text/html");
          return response;
        }

        const staticFile = Bun.file(`./public${urlPathname}`);
        if (await staticFile.exists()) {
          return new Response(staticFile);
        }

        return new Response(null, { status: 404 });
      } catch (error) {
        console.error(error);
        return new Response(null, { status: 500 });
      }
    },
  },
});
