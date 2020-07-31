self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('fox-store').then(function(cache) {
     return cache.addAll([
       '/timeleft-pwa-example.github.io/',
       '/timeleft-pwa-example.github.io/index.html',
       '/timeleft-pwa-example.github.io/index.js',
       '/timeleft-pwa-example.github.io/style.css',
       '/timeleft-pwa-example.github.io/images/dream1.jpg',
       '/timeleft-pwa-example.github.io/images/dream2.jpg',
       '/timeleft-pwa-example.github.io/images/dream3.jpg',
       '/timeleft-pwa-example.github.io/images/dream4.jpg'
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
