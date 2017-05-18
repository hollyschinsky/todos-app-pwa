// use a cacheName for cache versioning
var cacheName = 'todos_offline_cache:v1'
var goodCaches = [];
goodCaches.push(cacheName);
goodCaches.push('CordovaAssets'); // For Cordova Plugin cachine when config.xml set to true

// during the install phase you usually want to cache static assets
self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install!!');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll([
                // If we don't add the root, we must navigatee to http://localhost:3000/index.html when offline
                '/',  
                '/index.html',
                '/manifest.json',                
                '/css/app.css',
                '/css/app.ios.css',
                '/css/app.material.css',
                '/js/app.js',
                '/js/todos.js',
                '/js/init-styles.js',
                '/cordova.js',
                '/cordova_plugins.js',
                '/socket.io/socket.io.js',
                '/plugins/cordova-plugin-statusbar/www/statusbar.js',
                '/plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js',
                '/lib/framework7/css/framework7.ios.colors.min.css',
                '/lib/framework7/css/framework7.ios.min.css',
                '/lib/framework7/css/framework7.ios.rtl.min.css',
                '/lib/framework7/css/framework7.material.colors.min.css',
                '/lib/framework7/css/framework7.material.min.css',
                '/lib/framework7/css/framework7.material.rtl.min.css',
                '/lib/framework7/js/framework7.min.js',
                '/css/framework7-icons.css',
                '/css/Framework7Icons-Regular.eot',
                '/css/Framework7Icons-Regular.ttf',
                '/css/Framework7Icons-Regular.woff',
                '/css/Framework7Icons-Regular.woff2',
                '/lib/framework7-vue/framework7-vue.min.js',
                '/lib/vue/vue.min.js', 
                '/img/Default-Portrait.png',    
                '/img/logo.png',
                '/img/icons/apple-touch-icon.png',
                '/img/icons/mstile-150x150.png',
                '/img/icons/safari-pinned-tab.svg',
                '/img/icons/favicon-16x16.png',
                '/img/icons/favicon-32x32.png',
                '/img/icons/favicon.ico',
                '/img/icons/icon-128x128.png',
                '/img/icons/icon-144x144.png',
                '/img/icons/icon-152x152.png',
                '/img/icons/icon-192x192.png', 
                '/img/icons/icon-256x256.png',                       
            ]).then(function() {
                self.skipWaiting();
            });
        })
    );
});

self.addEventListener('activate', function(event) {
  console.log('[ServiceWorker] Activate');
  event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheKey) {
                    console.log("Cache key " + cacheKey);
                    if (goodCaches.indexOf(cacheKey) === -1) {
                        console.log("Deleting cache " + cacheKey);
                        return caches.delete(cacheKey);    
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {    
  console.log('Handling fetch event for ' + event.request.url);  
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                console.log('Found response in cache:', response);
                return response;
            }
            console.log('No response found in cache. Fetch from network...');
            return fetch(event.request);
        })               
    );  
});