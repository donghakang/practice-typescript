"use strict";
// tsc --init
// tsc --watch
console.log('app.js');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log('clicked');
});
