// tsc --init
// tsc --watch

console.log('app.js')


const button = document.querySelector('button')!;


function clickHandler (message: string) {
    console.log('clicked ' + message)
}

button.addEventListener('click', () => {
    clickHandler('Hello world...')
}) 
