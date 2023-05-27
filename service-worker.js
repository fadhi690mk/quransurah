self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('surah-list').then(function(cache) {
        return cache.addAll([
          'index.html',
          'manifest.json',
          'icon.png',
          'recitation.html', // Add any other files your app depends on
          'iqra.json'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  