import fs from "node:fs/promises";
import path from "node:path";

import { generateStyles } from "./generateStyles.ts";

export const emitStatichostHeaders = async () => {
  const headersFile = path.join(import.meta.dirname, "../public/_headers");
  const styles = await generateStyles();

  const contentSecurityPolicy = [
    `default-src 'self'`,
    `style-src 'self' 'sha256-${styles.integity}'`,
  ].join("; ");

  await fs.writeFile(
    headersFile,
    `*
      Content-Security-Policy: ${contentSecurityPolicy}
      Cross-Origin-Embedder-Policy: require-corp; report-to="default"
      Cross-Origin-Opener-Policy: same-site; report-to="default"
      Cross-Origin-Resource-Policy: same-site
      Permissions-Policy: browsing-topics=(), conversion-measurement=(), interest-cohort=(), join-ad-interest-group=(), run-ad-auction=()
      Referrer-Policy: strict-origin-when-cross-origin
      Strict-Transport-Security: max-age=31536000; includeSubDomains
      X-Content-Type-Options: nosniff
      X-Frame-Options: DENY
    `,
  );

  return headersFile;
};
