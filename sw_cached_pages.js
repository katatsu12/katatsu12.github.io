const cacheV = 'v1';

const cacheAssets = [
  'index.html',
  'about.html',
  'links.html',
  '/css/styles.css',
  '/js/main.js'
];


// install event
self.addEventListener('install', e => {
  e.waitUntill(
    caches.open(cacheV).then(cache => {
      cache.addAll(cacheAssets);
    })
    .then(() => self.skipWaiting())
  );
});

// activate event
self.addEventListener('activate', e => {
  console.log('Service Worker Activeated');
  // remove not supported caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if(cache !== cacheV) { return caches.delete(cache); }
        })
      )
    })
  );
});

// fetch event
self.addEventListener('fetch', e => {
  e.respondWith( fetch(e.request).catch(() => caches.match(e.request)) )
})