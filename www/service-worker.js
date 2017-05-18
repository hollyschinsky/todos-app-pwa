// use a cacheName for cache versioning
var cacheName = 'v1a:todos-pwa-app';

// during the install phase you usually want to cache static assets
self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    // once the SW is installed, go ahead and fetch the resources to make this work offline
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll([
                '/',
                'index.html',
                'service-worker.js',
                'manifest.json',                
                'css/app.css',
                'css/app.ios.css',
                'css/app.material.css',
                'js/app.js',
                'js/todos.js',
                'js/init-styles.js',
                'cordova.js',
                'cordova_plugins.js',
                'plugins/cordova-plugin-statusbar/www/statusbar.js',
                'plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js',
                'cordova.js',
                'lib/framework7/css/framework7.ios.colors.min.css',
                'lib/framework7/css/framework7.ios.min.css',
                'lib/framework7/css/framework7.ios.rtl.min.css',
                'lib/framework7/css/framework7.material.colors.min.css',
                'lib/framework7/css/framework7.material.min.css',
                'lib/framework7/css/framework7.material.rtl.min.css',
                'lib/framework7/js/framework7.min.js',
                'lib/framework7-icons/css/framework7-icons.css',
                'lib/framework7-icons/fonts/Framework7Icons-Regular.eot',
                'lib/framework7-icons/fonts/Framework7Icons-Regular.ttf',
                'lib/framework7-icons/fonts/Framework7Icons-Regular.woff',
                'lib/framework7-icons/fonts/Framework7Icons-Regular.woff2',
                'lib/framework7-vue/framework7-vue.min.js',
                'lib/vue/vue.min.js',    
                'img/icons/apple-touch-icon.png',
                'img/icons/mstile-150x150.png',
                'img/icons/safari-pinned-tab.svg',
                'img/icons/favicon-16x16.png',
                'img/icons/favicon-32x32.png',
                'img/icons/favicon.ico',
                'img/icons/icon-128x128.png',
                'img/icons/icon-144x144.png',
                'img/icons/icon-152x152.png',
                'img/icons/icon-192x192.png', 
                'img/icons/icon-256x256.png',                       
            ]).then(function() {
                self.skipWaiting();
            });
        })
    );
});


self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});

// when the browser fetches a url
self.addEventListener('fetch', function(event) {
    // either respond with the cached object or go ahead and fetch the actual url
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                // retrieve from cache
                console.log("[Service Worker] retrieving object FROM CACHE - request URL -> " + event.request.url);
                return response;
            }
            // fetch as normal
            console.log("[Service Worker] fetching object (not-cached) request URL -> " + event.request.url);
            return fetch(event.request);
        })
    );
});
