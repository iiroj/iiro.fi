Bun.spawn(["bun", "run", "build"]);

const PUBLIC = "./public";

const resolveFilePath = (pathname = "/") => {
  if (pathname.endsWith("/")) {
    return PUBLIC + "/index.html";
  }

  if (pathname.includes(".")) {
    return PUBLIC + pathname;
  }

  return PUBLIC + pathname + ".html";
};

Bun.serve({
  hostname: "localhost",
  port: 3000,

  routes: {
    "/*": async (req) => {
      const urlPathname = new URL(req.url).pathname;
      const filePath = resolveFilePath(urlPathname);
      const file = Bun.file(filePath);

      if (await file.exists()) {
        return new Response(file, { status: 200 });
      }

      const notFound = Bun.file(PUBLIC + "/404.html");
      return new Response(notFound, { status: 404 });
    },
  },
});

export {};
