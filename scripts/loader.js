const ldr = document.querySelector('.loader');
const vid = document.getElementById('vid');

// var dcl = new Promise(function(resolve) {
//     document.addEventListener("DOMContentLoaded",resolve,false);
// })
// var deviceready = new Promise(function(resolve) {
//     vid.addEventListener("loadeddata", resolve, false);
// })

// Promise.all([dcl, deviceready]).then(function() {
//     ldr.remove();
// });

document.addEventListener('DOMContentLoaded', () => {
    ldr.remove();
})

// Promise.all([dcl]).then(function() {
//     ldr.remove();
//     console.log('Finished!')
// });

