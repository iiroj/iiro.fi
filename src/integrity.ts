import path from "path";

const getHash = async (file: Bun.BunFile) =>
  new Bun.CryptoHasher("sha256").update(await file.text()).digest("base64");

export const getIntegrity = async () => {
  const stylesFile = Bun.file(path.join(import.meta.dirname, "../public/static/styles.css"));
  const bootstrapFile = Bun.file(path.join(import.meta.dirname, "../public/index.js"));

  const [bootstrap, styles] = await Promise.all([getHash(bootstrapFile), getHash(stylesFile)]);

  return {
    bootstrap,
    styles,
  };
};
