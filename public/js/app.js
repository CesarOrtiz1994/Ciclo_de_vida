if (navigator.serviceWorker) {
    // se registra el service worker
    navigator.serviceWorker.register('/sw.js')
    // .then(reg => {
    //     console.log('Service Worker registrado');
    // })
    // .catch(err => {
    //     console.error('Erroral registrar el Service Worker', err);
    // });
        
}

    // Solicitud fech
    fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(console.log)
    .catch(err => console.error('Error al hacer el fetch', err));