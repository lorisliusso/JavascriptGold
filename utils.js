const current= Date.now()

setTimeout(() => {

    console.log('Time elapsed', Date.now()-current)
    
}, -100);