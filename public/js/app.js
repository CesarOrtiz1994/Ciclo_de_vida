if (navigator.serviceWorker) {
    console.log('Hello from service worker!')
    navigator.serviceWorker.register('/sw.js')
        
}