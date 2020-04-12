importScripts("/precache-manifest.e066beb7d76a08e94092a87405fa4fc8.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute(self.__precacheManifest);

var staticCacheName = 'covid-static-7'; //TODO update this
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/skeleton',
        '/contacts',
        '/links',
        '/news',
        '/profile',
        '/favicon.ico',
      ]);
    })
  );
});
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('covid-') && cacheName != staticCacheName;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  var requestUrl = new URL(event.request.url);
  if(requestUrl.origin === location.origin) {

    if(requestUrl.pathname === '/') {
      event.respondWith(caches.match('/skeleton'));
      return;
    }

    if(requestUrl.pathname === '/links') {
      event.respondWith(caches.match('/skeleton'));
      return;
    }

    if(requestUrl.pathname === '/contacts') {
      event.respondWith(caches.match('/skeleton'));
      return;
    }

    if(requestUrl.pathname === '/news') {
      event.respondWith(caches.match('/skeleton'));
      return;
    }

    if(requestUrl.pathname === '/profile') {
      event.respondWith(caches.match('/skeleton'));
      return;
    }
  }

  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) return response;

      return fetch(event.request);
    })
  );
  // event.respondWith(
  //   fetch(event.request).then(function(response) {
  //     if(response.status === 404) {

  //     }

  //     return response;
  //   }).catch(function() {

  //   })
  // );
});


self.addEventListener('message', function(event) {
  if(event.data.action == 'skipWaiting') {
    self.skipWaiting();
  }
});

