export const pagesDir = "./src/pages";

export const pagesRouter = new Bun.FileSystemRouter({
  style: "nextjs",
  dir: pagesDir,
});
