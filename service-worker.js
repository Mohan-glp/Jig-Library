const CACHE_NAME = 'jig-library-v2.0';
const ASSETS = [
    './',
    './index.html',
    './app.js',
    './app.js?v=2.0',
    './styles.css',
    './styles.css?v=2.0',
    './manifest.json',
    './pocket_guide.png',
    './jig_library_icon.png',
    './version.json'
];

self.addEventListener('install', (event) => {
    // Force active state immediately on mobile PWA
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('activate', (event) => {
    // Clean up old caches on mobile devices
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Network-First with Cache Fallback for instant updates on mobile
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        fetch(event.request)
            .then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200) {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return networkResponse;
            })
            .catch(() => {
                return caches.match(event.request);
            })
    );
});
