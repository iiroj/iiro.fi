import "./bundle.tsx";

const htmlRouter = new Bun.FileSystemRouter({
  dir: "./pages",
  fileExtensions: [".html"],
  style: "nextjs",
});

const notFoundFile = Bun.file(htmlRouter.routes["/404"]);

Bun.serve({
  hostname: "localhost",
  port: 3000,

  routes: {
    "/*": async (req) => {
      try {
        let urlPathname = new URL(req.url).pathname;

        const html = htmlRouter.match(urlPathname);
        if (html) {
          urlPathname = `/${html.src}`;
        }

        const staticFile = Bun.file(`./pages${urlPathname}`);
        if (await staticFile.exists()) {
          return new Response(staticFile);
        }

        return new Response(notFoundFile, { status: 404 });
      } catch (error) {
        console.error(error);
        return new Response(null, { status: 500 });
      }
    },
  },
});
