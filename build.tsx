import { prerender } from "react-dom/static";

import Html from "./src/components/Html.tsx";
import { pagesRouter } from "./src/router.ts";

export const prerenderResponse = async (src: string, integrity: string) => {
  // oxlint-disable-next-line typescript/no-unsafe-member-access
  const PageComponent = (await import(src)).default as React.FC;

  const { prelude } = await prerender(
    <Html integrity={integrity}>
      <PageComponent />
    </Html>,
  );

  return new Response(prelude);
};

const styles = Bun.file("./public/static/styles.css");

const integrity = new Bun.CryptoHasher("sha256").update(await styles.text()).digest("base64");

const buildFiles: string[] = [];

await Promise.all(
  Object.entries(pagesRouter.routes).map(async ([route, src]) => {
    let dest = `./public${route}`;
    if (dest.endsWith("/")) dest += "index";
    dest += ".html";

    console.log(`⚙️  Building ${dest}`);

    const response = await prerenderResponse(src, integrity);

    await Bun.write(dest, await response.text());
    buildFiles.push(dest);
  }),
);

const prettier = Bun.spawn(["oxfmt", "--write", ...buildFiles]);
const prettierOutput = await prettier.stdout.text();
console.log(`💅 Prettier: ${prettierOutput}`);
