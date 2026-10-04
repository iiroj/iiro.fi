import fs from "node:fs/promises";
import path from "node:path";

/**
 * Format as ISO date
 * @example "2027-10-04"
 */
const intl = new Intl.DateTimeFormat("sv-SE", {
  day: "2-digit",
  month: "2-digit",
  timeZone: "Europe/Helsinki",
  year: "numeric",
});

export const emitSitemap = async () => {
  const sitemapFile = path.join(import.meta.dirname, "../public/sitemap.xml");
  const lastmod = intl.format(Date.now());

  await fs.writeFile(
    sitemapFile,
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://iiro.fi/</loc>
    <lastmod>${lastmod}</lastmod>
  </url>
</urlset>
`,
  );
};
