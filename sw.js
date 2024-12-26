self.addEventListener('install', event => {
event.waitUntil(
  caches.open('app-cache').then(cache => {
    return cache.addAll([
      '/',
      '/index.html',
      '/script.js',
      '/chwilowe1/manifest.json',  // Zmieniona ścieżka do manifestu
      '/chwilowe1/dow.png',         // Ścieżki do plików w folderze chwilowe
      '/chwilowe1/flaga.gif',
	  '/chwilowe1/start.html',
      '/chwilowe1/thing1.png',
	  '/chwilowe1/uslugi.png',
	  '/chwilowe1/zak.png',
      '/chwilowe1/thing2.png',
      '/chwilowe1/thing3.png'
    ]);
  })
);

  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
