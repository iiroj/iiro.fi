import { prerender } from "react-dom/static";

import Html from "./src/components/Html.tsx";
import { pagesRouter } from "./src/router.ts";

const OUTDIR = "./public";

await Bun.build({
  entrypoints: ["src/index.ts"],
  format: "esm",
  minify: true,
  outdir: OUTDIR,
  sourcemap: "none",
  target: "browser",
});

export const prerenderResponse = async (src: string) => {
  // oxlint-disable-next-line typescript/no-unsafe-member-access
  const PageComponent = (await import(src)).default as React.FC;

  const { prelude } = await prerender(
    <Html>
      <PageComponent />
    </Html>,
  );

  return new Response(prelude);
};

const styles = Bun.file(`${OUTDIR}/static/styles.css`);
const stylesIntegrity = new Bun.CryptoHasher("sha256").update(await styles.text()).digest("base64");
const bootstrap = Bun.file(`${OUTDIR}/index.js`);
const bootstrapIntegrity = new Bun.CryptoHasher("sha256")
  .update(await bootstrap.text())
  .digest("base64");

const buildFiles: string[] = [];

await Promise.all(
  Object.entries(pagesRouter.routes).map(async ([route, src]) => {
    let dest = `${OUTDIR}${route}`;
    if (dest.endsWith("/")) dest += "index";
    dest += ".html";

    console.log(`⚙️  Building ${dest}`);

    const response = await prerenderResponse(src);

    await Bun.write(dest, await response.text());
    buildFiles.push(dest);
  }),
);

const HEADERS = `${OUTDIR}/_headers`;

const CSP = [
  `default-src 'self'`,
  `script-src 'self' 'sha256-${bootstrapIntegrity}'`,
  `connect-src 'self' https://public.api.bsky.app/`,
  `style-src 'self' 'sha256-${stylesIntegrity}'`,
].join("; ");

await Bun.write(
  HEADERS,
  `*
  Content-Security-Policy: ${CSP}
  Cross-Origin-Embedder-Policy: require-corp; report-to="default"
  Cross-Origin-Opener-Policy: same-site; report-to="default"
  Cross-Origin-Resource-Policy: same-site
  Link: </index.js>; rel=preload; as=script
  Link: </static/styles.css>; rel=preload; as=style
  Permissions-Policy: browsing-topics=(), conversion-measurement=(), interest-cohort=(), join-ad-interest-group=(), run-ad-auction=()
  Referrer-Policy: strict-origin-when-cross-origin
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
`,
);

const prettier = Bun.spawnSync(["oxfmt", "--write", ...buildFiles, HEADERS]);
const prettierOutput = prettier.stdout.toString();
console.log(`💅 Prettier: ${prettierOutput}`);
