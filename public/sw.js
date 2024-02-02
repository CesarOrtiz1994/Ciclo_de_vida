//ciclo de vidaa del service worker
//1.- Instalacion
self.addEventListener('install', event => {
    console.log('SW instalado');
    // simular  instalacion de caches
    const instalacion = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Instalaciones terminadas');
            self.skipWaiting();
            resolve();
        }, 3000);
        event.waitUntil(instalacion);
    });
});
//2.- Activacion
self.addEventListener('activate', event => {
    console.log('SW: activado y controlando la app:');
});
//3.- Fetch
self.addEventListener('fetch', function (event) {

    console.log('SW:', event.request.url);                                                                                  

    if (event.request.url.includes('https://fakestoreapi.com/products/')) {
    const resp = new Response(`{"ok": false, "mensaje": "interceptar por el SW" }`);
    event.respondWith(resp);
    }

});