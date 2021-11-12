/**
 * npm init
 * npm install --save-dev lite-server
 * .. in package.json (start: "lite-server")
 * 
 * npm start
 * tsc app.ts
 * 
 * --> this will reload when app.ts is compiled
 */

console.log('Code starts!!') 

console.log('==> Basic Types ============================')
function add (n1: number, n2: number, showResult: boolean, message: string) {
    console.log(message)
    if (showResult) return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;

const result = add(number1, number2, printResult, "👨🏻‍💻")

console.log('ex1)', result)

console.log('==> Type Assignment and Type Interface =====')

let num1 = 5           // O
let num2: number  = 5  // X
let num3: number       // O


