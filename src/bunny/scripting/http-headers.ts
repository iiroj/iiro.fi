import * as BunnySDK from "@bunny.net/edgescript-sdk";

const HEADERS = [
  [
    "Content-Security-Policy",
    `default-src 'self'; style-src 'self' 'sha384-Nw/nmDva0qXRRGDLR7blMuDE6eUQ+Lq/ZgwnunmGEeduk6MJP0l6NjkuByIHki1O'`,
  ],
  ["Cross-Origin-Embedder-Policy", `require-corp; report-to="default"`],
  ["Cross-Origin-Opener-Policy", `same-site; report-to="default"`],
  ["Cross-Origin-Resource-Policy", `same-site`],
  ["Link", `</static/styles.css>; rel=preload; as=style`],
  [
    "Link",
    `</static/profile-96.webp>; rel=preload; as=image; type="image/webp" imagesrcset="/static/profile-96.webp 1x, /static/profile-192.webp 2x, /static/profile-288.webp 3x"`,
  ],
  [
    "Link",
    `</static/profile-96.jpg>; rel=preload; as=image; type="image/jpg" imagesrcset="/static/profile-96.jpg 1x, /static/profile-192.jpg 2x, /static/profile-288.jpg 3x"`,
  ],
  [
    "Permissions-Policy",
    `browsing-topics=(), conversion-measurement=(), interest-cohort=(), join-ad-interest-group=(), run-ad-auction=()`,
  ],
  ["Referrer-Policy", `strict-origin-when-cross-origin`],
  ["Strict-Transport-Security", `max-age=31536000; includeSubDomains`],
  ["X-Content-Type-Options", `nosniff`],
  ["X-Frame-Options", `DENY`],
];

const onOriginResponse = async ({
  response,
}: BunnySDK.OriginResponseContext) => {
  for (const [headerName, headerValue] of HEADERS) {
    response.headers.append(headerName, headerValue);
  }

  return response;
};

BunnySDK.net.http
  .servePullZone({ url: "http://localhost:3001" })
  .onOriginResponse(onOriginResponse);
