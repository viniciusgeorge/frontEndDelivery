importScripts("/precache-manifest.e112efd3b6f7b056dd6740ca6c58ddcf.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(

    new RegExp('https://192.168.0.112:8080/getEstabelecimentos'),
    workbox.strategies.networkFirst({
        cacheName: "stores",
        plugins:[
            new workbox.expiration.Plugin({
                maxEntries: 30
            })

        ],
        method: "GET",
        cacheableResponse: { statuses: [0, 200]}

    })
);

workbox.routing.registerRoute(

    new RegExp('https://192.168.0.112:8080/getEnderecos'),
    workbox.strategies.networkFirst({
        cacheName: "addresses",
        plugins:[
            new workbox.expiration.Plugin({
                maxEntries: 30
            })

        ],
        method: "GET",
        cacheableResponse: { statuses: [0, 200]}

    })
);

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting()
    }
  })
