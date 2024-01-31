if (navigator.serviceWorker) {
    console.log('Hello from service worker!')
    // se registra el service worker
    navigator.serviceWorker.register('/sw.js')
        
}