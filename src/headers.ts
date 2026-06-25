import { writeFile } from "node:fs/promises";
import path from "node:path";

import { getIntegrity } from "./integrity.ts";

export const emitStatichostHeaders = async () => {
  const integrity = await getIntegrity();

  const headersFile = path.join(import.meta.dirname, "../public/_headers");

  const contentSecurityPolicy = [
    `default-src 'self'`,
    `script-src 'self' 'sha256-${integrity.bootstrap}'`,
    `connect-src 'self' https://public.api.bsky.app/`,
    `style-src 'self' 'sha256-${integrity.styles}'`,
  ].join("; ");

  await writeFile(
    headersFile,
    `*
      Content-Security-Policy: ${contentSecurityPolicy}
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

  return headersFile;
};
