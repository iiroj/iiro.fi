/* globals self, workbox */
/* eslint-disable no-restricted-globals */

workbox.precaching.precacheAndRoute(self.__precacheManifest);
workbox.precaching.cleanupOutdatedCaches();
workbox.precaching.addPlugins([
  {
    async fetchDidSucceed({ response }) {
      const { headers } = response;
      const contentType = headers.get("content-type");
      const body = await response.text();
      if (contentType && contentType.includes("text/html")) {
        const modifiedBody = body
          .replace("<html", "<html data-from-sw")
          .replace('rel="preload" as="style"', 'rel="stylesheet"');
        return new Response(modifiedBody, { headers });
      } else {
        return new Response(body, { headers });
      }
    }
  }
]);
