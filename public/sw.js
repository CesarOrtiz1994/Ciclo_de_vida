//Responder con lo que contiene la solicitud
self.addEventListener('fetch', event => {
    console.log(event);
})

self.addEventListener('fetch', event => {
    if(event.request.url.includes('boston1')){
        event.respondWith(fetch('logo512.png'))
    }
})