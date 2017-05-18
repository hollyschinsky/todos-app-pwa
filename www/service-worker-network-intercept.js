// Network interception example service-worker. Uncomment the logo.png in index.htm and run it with this
// service worker
self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');    
});

self.addEventListener('activate', function(event) {
  console.log('[ServiceWorker] Activate');  
});

self.addEventListener('fetch', function(event) {    
  console.log('Network intercept example - checking URL for png ', event.request.url);
  if (/\.png$/.test(event.request.url)) {
    event.respondWith(
        fetch('http://addolo.com/wp-content/uploads/2017/01/90-stunning-silly-cat-pictures-image-inspirations-1280x960-wallpapersother-wallpapers-with-captions.jpg', 
        { mode: 'no-cors'}).then(function(response) {
            console.log("Response from network intercept " + response);
            return response;
    })
  )}
  else return fetch(event.request);                           
});
