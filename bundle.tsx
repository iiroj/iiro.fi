import { prerender } from "react-dom/static";

import Html from "./src/components/Html.tsx";
import { pagesRouter } from "./src/router.ts";

export const prerenderResponse = async (src: string, integrity: string) => {
  const PageComponent = (await import(src)).default as React.FC;

  const { prelude } = await prerender(
    <Html integrity={integrity}>
      <PageComponent />
    </Html>,
  );

  return new Response(prelude);
};

const styles = Bun.file("./public/static/styles.css");

const integrity = new Bun.CryptoHasher("sha256")
  .update(await styles.text())
  .digest("base64");

for (const [route, src] of Object.entries(pagesRouter.routes)) {
  let dest = `./public${route}`;
  if (dest.endsWith("/")) dest += "index";
  dest += ".html";

  console.log(`⚙️  Building ${dest}`);

  const response = await prerenderResponse(src, integrity);

  await Bun.write(dest, await response.text());
  const prettier = Bun.spawn([
    "prettier",
    "--ignore-path=.prettier-ignore",
    "--write",
    dest,
  ]);
  const prettierOutput = await prettier.stdout.text();
  console.log(`💅 Prettier: ${prettierOutput}`);
}

console.log("⚙️  Emitting vercel.json");
type VercelJson = typeof import("./src/vercel.json");
const vercelJson = (await Bun.file("./src/vercel.json").json()) as VercelJson;

vercelJson.headers.at(0)?.headers.push({
  key: "Content-Security-Policy",
  value: `default-src 'self'; style-src 'self' 'sha256-${integrity}'`,
});

await Bun.write("./vercel.json", JSON.stringify(vercelJson, null, 2));
