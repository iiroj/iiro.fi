import "./bundle.tsx";
import { pagesRouter } from "./src/router.ts";

Bun.serve({
  hostname: "localhost",
  port: 3000,

  routes: {
    "/*": async (req) => {
      try {
        let urlPathname = new URL(req.url).pathname;

        const routeMatch = pagesRouter.match(urlPathname);
        if (routeMatch) {
          const filename = routeMatch.src.split(".")[0];
          urlPathname = `/${filename}.html`;
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
