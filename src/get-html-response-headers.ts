import type { Integrity } from "./components/Head";

const getCspHeader = (integrity: Integrity) =>
  [
    `default-src 'self'`,
    `connect-src https://cloudflareinsights.com`,
    `script-src https://static.cloudflareinsights.com`,
    `style-src 'self' '${integrity.styles}'`,
  ].join(";");

export const getHtmlResponseHeaders = (integrity: Integrity, ETag: string) => {
  const headers = new Headers({
    "Content-Security-Policy": getCspHeader(integrity),
    "Content-Type": "text/html",
    "Cross-Origin-Embedder-Policy": 'require-corp; report-to="default"',
    "Cross-Origin-Opener-Policy": 'same-site; report-to="default"',
    "Cross-Origin-Resource-Policy": "same-site",
    ETag,
    "Permissions-Policy":
      "browsing-topics=(), conversion-measurement=(), interest-cohort=(), join-ad-interest-group=(), run-ad-auction=()",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
  });

  headers.append("Link", "</static/styles.css>; rel=preload; as=style");

  headers.append(
    "Link",
    '</static/profile-96.jpg>; rel=preload; as=image; imagesrcset="/static/profile-96.jpg 1x, /static/profile-192.jpg 2x, /static/profile-288.jpg 3x"',
  );

  return headers;
};
