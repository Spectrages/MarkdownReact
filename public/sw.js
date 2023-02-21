const STATIC_CACHE_NAME = 's-app-v2';
const DYNAMIC_CACHE_NAME = 'd-app-v2';
const ASSET_URL = [
    'index.html',
];

self.addEventListener('install', async event => {
    const cashe = await caches.open(STATIC_CACHE_NAME);
    await cashe.addAll(ASSET_URL);
    }
);

self.addEventListener('activate', async event => {
    const cacheNames = await caches.keys();
    await Promise.all(
        cacheNames
            .filter(name => name !== STATIC_CACHE_NAME)
            .filter(name => name !== DYNAMIC_CACHE_NAME)
            .map(name => caches.delete(name))
    )
});

self.addEventListener('fetch', event => {
    const {request} = event;
    const url = new URL(request.url);
    if(url.origin === location.origin) {
        event.respondWith(cacheFirst(request))
    } else {
        event.respondWith(networkFirst(request))
    }
});

async function cacheFirst(request) {
    const cached = await caches.match(request);
    return cached ?? await fetch(request);
}

async function networkFirst(request) {
    const cache = await caches.open(DYNAMIC_CACHE_NAME);
    try {
        const response = await fetch(request);
        await cache.put(request, response.clone());
        return response;
    } catch (e) {
        const cached = await cache.match(request);
        return cached ?? await caches.match('/offline.html');
    }

}