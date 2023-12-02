const CACHE_NAME = 'superdiamondbrowserextensions-offline';
const CACHE_DATA = [
  'service-worker.js',
  'load-service-worker.html',
  'discDownload.html',
  'discImport.html',
  'index.html',
  'loadExtensions.html',
  'superDiamondDriveImport.html',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_DATA);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
