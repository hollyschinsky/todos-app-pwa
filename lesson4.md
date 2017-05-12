---
layout: module
title: Lesson 4&#58; Service Workers
---
## Overview
Features provided via service workers should be considered a progressive enhancement, and added only if supported by the browser. For example, with service workers you can cache the app shell and data for your app, so that it's available even when the network isn't. When service workers aren't supported, the offline code isn't called, and the user gets a basic experience. Using feature detection to provide progressive enhancement has little overhead and it won't break in older browsers that don't support that feature.

## Demo

## Exercise 

1. From the `www` folder of your project, create a new file and name it **service-worker.js**.

2. In that new file, enter the following code snippet:

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



2. Next we need to register the new service worker so the app is aware of it. Before we register it though, we need to detect if it's supported in the browser environment where the app isncurrent running by checking the existence in the global [`navigator`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) object.

Open your **index.html** file and add the following into the `<head></head>` of the page:

        <script>
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('service-worker.js')
            .then(() => console.log('service worker installed'))
            .catch(err => console.log('Error', err));
        }
        </script>

> This is considered a _progressive enhancement_, where it will only enhance the app with the service worker features where supported but run just fine elsewhere.        


>**TIP:** Check out the [sw-precache](https://github.com/GoogleChrome/sw-precache) project to help generate your service worker.

## Resources
- [Service Workers Explained](https://github.com/w3c/ServiceWorker/blob/master/explainer.md)

<!--## Demo - Data Passing
TODO: are we showing this plugin - https://github.com/purplecabbage/phonegap-plugin-sidebar -->


<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="lesson3.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="lesson5.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
