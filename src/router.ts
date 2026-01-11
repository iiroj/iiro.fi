export const pagesDir = "./src/pages";

export const pagesRouter = new Bun.FileSystemRouter({
  dir: pagesDir,
  style: "nextjs",
});
