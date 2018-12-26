// Set up the service worker
(() => {
  // Register the service worker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js")
      .then(function(reg) {
        console.log("Service worker registration successful");
      })
      .catch(function (error) {
        console.log("Service worker registration failed: " + error);
      });
  }

  const staticCacheName = "restaurant-v1";

  // Cache the files
  self.addEventListener("install", event => {
    event.waitUntil(
      caches.open(staticCacheName).then( cache => {
        return cache
          .addAll([
            "/",
            "/index.html",
            "/restaurant.html",
            "/js/dbhelper.js",
            "/js/main.js",
            "/js/restaurant_info.js",
            "/css/styles.css",
            "/data/restaurants.json",
            "/img/1.jpg",
            "/img/2.jpg",
            "/img/3.jpg",
            "/img/4.jpg",
            "/img/5.jpg",
            "/img/6.jpg",
            "/img/7.jpg",
            "/img/8.jpg",
            "/img/9.jpg",
            "/img/10.jpg"
          ])
          .catch( error => {
            console.log("Caches open failed: " + error);
          });
      })
    );
  });

  // Update cached files
  self.addEventListener("activate", event => {
  	event.waitUntil(
  		caches.keys().then( cacheNames => {
  			return Promise.all(
  				cacheNames.filter( cacheName => {
  					return cacheName !== staticCacheName
  				}).map( cacheName => {
  					return caches.delete(cacheName);
  				})
  			);
  		})
  	);
  });

  // Respond with an entry from the cache if there is one.
  // If there isn't, fetch from the network.
  self.addEventListener("fetch", event => {
  	event.respondWith(
  		caches.match(event.request).then( response => {
  			return response || fetch(event.request);
  		})
  	);
  });
})();

