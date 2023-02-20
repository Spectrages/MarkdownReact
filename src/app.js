if('serviceWorker' in navigator) {
    try{
        const reg = navigator.serviceWorker.register('/sw.js');
        console.log(`Service worker register succesfull: ${reg}`);
    } catch(error) {
        console.log('Service worker register fail');
    }
}