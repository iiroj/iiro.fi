import path from "path";
import fs from "fs";

const headerFilePath = path.resolve("./static/_headers");

const staticHeaders = `/*
  Content-Security-Policy: default-src 'none'; connect-src 'self' https://fonts.gstatic.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://*.cloudfront.net; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  Feature-Policy: default 'none'
  Referrer-Policy: no-referrer-when-downgrade
  Link: <https://fonts.gstatic.com/s/ibmplexsans/v2/zYXgKVElMYYaJe8bpLHnCwDKhdHeFaxOedc.woff2>; rel=preload; as=font
  Link: <https://fonts.gstatic.com/s/ibmplexsans/v2/zYX-KVElMYYaJe8bpLHnCwDKhdTuF6ZJW9XjDg.woff2>; rel=preload; as=font
`;

if (process.env.NODE_ENV === "production") {
  fs.writeFileSync(headerFilePath, staticHeaders);
}

const generateLinkHeaders = scripts =>
  scripts
    .map(script => `Link: </${script}>; rel=preload; as=script`)
    .join("\n  ");

export default function generateNetlifyHeaders(path, scripts) {
  if (process.env.NODE_ENV === "production") {
    const linkHeaders = generateLinkHeaders(scripts);
    fs.appendFileSync(
      headerFilePath,
      `${path}
  ${linkHeaders}
`
    );
  }
}
