const CACHE_NAME = 'ray-bytes-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/sw.service.js',
  '/icons/icon1.svg',
  '/icons/icon2.svg',
  '/icons/icon3.svg',
  '/icons/icon4.svg',
  '/icons/icon5.svg',
  '/icons/icon6.svg',
  '/icons/icon7.svg',
  '/icons/icon8.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.log('Cache addAll error (some assets may not be cacheable):', err);
        return Promise.resolve();
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request).catch(() => {
        // Return offline fallback if needed
        return new Response('Offline - Content not available', { status: 503 });
      });
    })
  );
});
