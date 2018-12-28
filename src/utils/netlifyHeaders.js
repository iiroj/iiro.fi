import path from "path";
import fs from "fs";

const headerFilePath = path.resolve("./static/_headers");

const staticHeaders = `/*
  Content-Security-Policy: default-src 'none'; connect-src 'self' https://fonts.gstatic.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://*.cloudfront.net; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  Feature-Policy: default 'none'
  Referrer-Policy: no-referrer-when-downgrade
`;

const generateLinkHeaders = scripts =>
  scripts.map(script => `Link: </${script}>; rel=preload; as=script`);

const generateHeadersForPath = path => headers => `
${path}
  ${headers.join("\n  ")}
`;

var firstRun = true;

export default function generateNetlifyHeaders(path, scripts) {
  if (firstRun) {
    fs.writeFileSync(headerFilePath, staticHeaders);
    firstRun = false;
  }

  fs.appendFileSync(
    headerFilePath,
    generateHeadersForPath(path)(generateLinkHeaders(scripts))
  );
}
