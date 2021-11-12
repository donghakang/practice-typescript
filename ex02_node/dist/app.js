"use strict";
console.log('app.js');
const button = document.querySelector('button');
function clickHandler(message) {
    console.log('clicked ' + message);
}
button.addEventListener('click', () => {
    clickHandler('Hello world...');
});
//# sourceMappingURL=app.js.map