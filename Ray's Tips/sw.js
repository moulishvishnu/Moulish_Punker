const CACHE_NAME = 'pulse-asia-v1';
const urlsToCache = [
  './index2.html',
  './style.css',
  './app.js',
  './manifest.json'
];

// Install Event: Cache essential PWA assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch Event: Serve cached assets offline seamlessly
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
