const CACHE_NAME = 'jig-library-v1.6';
const ASSETS = [
    './',
    './index.html',
    './app.js',
    './styles.css',
    './manifest.json',
    './pocket_guide.png',
    './jig_library_icon.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
