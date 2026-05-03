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

const HEADERS = "./public/_headers";

const CSP = [`default-src 'self'`, `style-src 'self' 'sha256-${integrity}'`].join(";");

await Bun.write(
  HEADERS,
  `*
  Content-Security-Policy: ${CSP}
  Cross-Origin-Embedder-Policy: require-corp; report-to="default"
  Cross-Origin-Opener-Policy: same-site; report-to="default"
  Cross-Origin-Resource-Policy: same-site
  Link: </static/styles.css>; rel=preload; as=style
  Permissions-Policy: browsing-topics=(), conversion-measurement=(), interest-cohort=(), join-ad-interest-group=(), run-ad-auction=()
  Referrer-Policy: strict-origin-when-cross-origin
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
`,
);

const prettier = Bun.spawn(["oxfmt", "--write", ...buildFiles, HEADERS]);
const prettierOutput = await prettier.stdout.text();
console.log(`💅 Prettier: ${prettierOutput}`);
