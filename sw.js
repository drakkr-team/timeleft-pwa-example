self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('fox-store').then(function(cache) {
     return cache.addAll([
       '/timeleft-pwa-example/',
       '/timeleft-pwa-example/index.html',
       '/timeleft-pwa-example/index.js',
       '/timeleft-pwa-example/style.css',
       '/timeleft-pwa-example/images/dream1.jpg',
       '/timeleft-pwa-example/images/dream2.jpg',
       '/timeleft-pwa-example/images/dream3.jpg',
       '/timeleft-pwa-example/images/dream4.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
