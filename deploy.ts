import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { Writable } from "node:stream";

const apiKey = process.env.STATICHOST_APIKEY;
if (apiKey === undefined) {
  throw new Error("Missing STATICHOST_APIKEY");
}

const PUBLIC_DIR = path.resolve(import.meta.dirname, "./public");

const stats = await fs.stat(PUBLIC_DIR);

if (!stats.isDirectory()) {
  throw new Error("Missing public/");
}

console.log(`Zipping directory ${PUBLIC_DIR}...`);
const archive = execFileSync("zip", ["-qr", "-", "."], {
  cwd: PUBLIC_DIR,
});

const DROP_URL = "https://builder.statichost.eu/iiro/drop";

console.log(`Uploading to ${DROP_URL}...`);
const response = await fetch(DROP_URL, {
  method: "POST",
  redirect: "manual",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/zip",
    Accept: "text/plain",
  },
  body: archive,
});

await response.body?.pipeTo(Writable.toWeb(process.stdout), { preventClose: true });

if (!response.ok) {
  console.error("Upload failed!");
  process.exit(1);
}

console.log("\nUpload complete!");
