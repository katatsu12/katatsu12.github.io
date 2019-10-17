const cacheV = 'v2';

const cacheAssets = [
  'index.html',
  'about.html',
  'links.html',
  '/css/styles.css',
  '/js/main.js'
];


// install event
self.addEventListener('install', e => {});

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
  e.respondWith(
    fetch(e.request).then(res => {
        // Make copy of response
        const resClone = res.clone();

        caches.open(cacheV).then(cache => {
          // Add response to cache
          cache.put(e.request, resClone);

        });
      return res;
    }).catch(err => caches.match(e.request)).then(res => res)
  );
})