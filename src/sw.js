const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
const CACHE_NAME = new Date().toISOString();

const { assets } = global.serviceWorkerOption;

const assetsToCache = assets.map(path => new URL(path, global.location).toString());

self.addEventListener('install', event => {
  if (IS_DEVELOPMENT) {
    console.log('[SW] Install event');
  }

  event.waitUntil(
    global.caches
      .open(CACHE_NAME)
      .then(cache => cache.addAll(assetsToCache))
      .then(() => {
        if (IS_DEVELOPMENT) {
          console.log('Cached assets: main', assetsToCache);
        }
      })
      .catch(error => {
        console.error(error);
        throw error;
      })
  );
});

self.addEventListener('activate', event => {
  if (IS_DEVELOPMENT) {
    console.log('[SW] Activate event');
  }

  event.waitUntil(
    global.caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.map(cacheName => (cacheName.indexOf(CACHE_NAME) === 0 ? null : global.caches.delete(cacheName)))
        )
      )
  );
});

self.addEventListener('message', event => {
  switch (event.data.action) {
    case 'skipWaiting':
      if (self.skipWaiting) {
        self.skipWaiting();
        self.clients.claim();
      }
  }
});

self.addEventListener('fetch', event => {
  const request = event.request;

  if (request.method !== 'GET') {
    if (IS_DEVELOPMENT) {
      console.log(`[SW] Ignore non GET request ${request.method}`);
    }
    return;
  }

  const requestUrl = new URL(request.url);

  if (requestUrl.origin !== location.origin) {
    if (IS_DEVELOPMENT) {
      console.log(`[SW] Ignore different origin ${requestUrl.origin}`);
    }
    return;
  }

  const resource = global.caches.match(request).then(response => {
    if (response) {
      if (IS_DEVELOPMENT) {
        console.log(`[SW] fetch URL ${requestUrl.href} from cache`);
      }

      return response;
    }

    return fetch(request)
      .then(responseNetwork => {
        if (!responseNetwork || !responseNetwork.ok) {
          if (IS_DEVELOPMENT) {
            console.log(
              `[SW] URL [${requestUrl.toString()}] wrong responseNetwork: ${responseNetwork.status} ${
                responseNetwork.type
              }`
            );
          }

          return responseNetwork;
        }

        if (IS_DEVELOPMENT) {
          console.log(`[SW] URL ${requestUrl.href} fetched`);
        }

        const responseCache = responseNetwork.clone();

        global.caches
          .open(CACHE_NAME)
          .then(cache => cache.put(request, responseCache))
          .then(() => {
            if (IS_DEVELOPMENT) {
              console.log(`[SW] Cache asset: ${requestUrl.href}`);
            }
          });

        return responseNetwork;
      })
      .catch(() => (event.request.mode === 'navigate' ? global.caches.match('./') : null));
  });

  event.respondWith(resource);
});
