import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    assets: {
      htmlHandling: "drop-trailing-slash",
      notFoundHandling: "404-page",
    },
    name: "site",
    compatibilityDate: "2026-10-06",
    domains: ["iiro.fi"],
    observability: {
      enabled: false,
    },
    previewUrls: false,
    workersDev: false,
  },
});
