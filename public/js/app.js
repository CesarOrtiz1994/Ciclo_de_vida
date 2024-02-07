if (navigator.serviceWorker) {
  // se registra el service worker
  navigator.serviceWorker
    .register("/sw.js")
    // .then(reg => {
    //     console.log('Service Worker registrado');
    // })
    // .catch(err => {
    //     console.error('Erroral registrar el Service Worker', err);
    // });

    .then((reg) => {
        setTimeout(() =>{
            reg.sync.register('Enviar-fotos')
            console.log('se enviaron fotos al servidor');

        }, 3000);
    })

    .catch((err) => {
        console.error(err);
    });
}
