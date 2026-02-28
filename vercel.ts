import crypto from "node:crypto";
import fs from "node:fs/promises";

import { routes, type VercelConfig } from "@vercel/config/v1";

const stylesCss = await fs.readFile("./public/static/styles.css", "utf-8");
const stylesCssHash = crypto
  .createHash("sha256")
  .update(stylesCss)
  .digest("base64");

export default {
  buildCommand: null,
  cleanUrls: true,
  framework: null,
  headers: [
    /** Without any dots, HTML files */
    routes.header("/([^.]*)", [
      {
        key: "Link",
        value: [
          "</static/styles.css>; rel=preload; as=style",
          '</static/profile-96.webp>; rel=preload; as=image; type="image/webp" imagesrcset="/static/profile-96.webp 1x, /static/profile-192.webp 2x, /static/profile-288.webp 3x"',
          '</static/profile-96.jpg>; rel=preload; as=image; type="image/jpg" imagesrcset="/static/profile-96.jpg 1x, /static/profile-192.jpg 2x, /static/profile-288.jpg 3x"',
        ].join(","),
      },
      {
        key: "Content-Security-Policy",
        value: `default-src 'self'; style-src 'self' 'sha256-${stylesCssHash}'`,
      },
      {
        key: "Permissions-Policy",
        value:
          "browsing-topics=(), conversion-measurement=(), interest-cohort=(), join-ad-interest-group=(), run-ad-auction=()",
      },
    ]),
    routes.header("/(.*)", [
      {
        key: "Access-Control-Allow-Origin",
        value: "https://iiro.fi",
      },

      {
        key: "Cross-Origin-Embedder-Policy",
        value: "require-corp",
      },
      {
        key: "Cross-Origin-Opener-Policy",
        value: "same-site",
      },
      {
        key: "Cross-Origin-Resource-Policy",
        value: "require-corp; same-site",
      },

      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
      {
        key: "Strict-Transport-Security",
        value: "max-age=31536000; includeSubDomains",
      },
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },
      {
        key: "X-Frame-Options",
        value: "DENY",
      },
      {
        key: "X-XSS-Protection",
        value: "1; mode=block",
      },
    ]),
  ],
  outputDirectory: "public",
  public: false,
  regions: ["arn1"],
  trailingSlash: false,
} satisfies VercelConfig;
