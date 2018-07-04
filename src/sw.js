const CACHE_NAME = `cache-version-${Date.now()}`;

const { assets } = global.serviceWorkerOption;
const CACHED_FILES = [...assets, './'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => cache.addAll(CACHED_FILES))
      .then(self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => cacheNames.filter(cacheName => cacheName !== CACHE_NAME))
      .then(cachesToDelete => Promise.all(cachesToDelete.map(cacheToDelete => caches.delete(cacheToDelete))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.methd !== 'GET') {
    return;
  }

  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches
          .open(CACHE_NAME)
          .then(cache =>
            fetch(event.request).then(response => cache.put(event.request, response.clone()).then(() => response))
          );
      })
    );
  }
});
