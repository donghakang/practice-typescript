// Type script will informed that return is integer since the argumnts are number
// Therefore, we can assume the output of the function.
// We can declare that by : number
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printer(num: number): void {
  console.log("Result: " + num);
}

// Not common, but works. Just use void
function printNone(num: number): undefined {
  console.log("Result: " + num);
  return;
}

// Function Types -> To specify the function
// let combineValues: Function; ==> X
let combineValues: (a: number, b: number) => number; // should accept any function that takes two arguments and returns a number

combineValues = add;
console.log(combineValues(5, 5));


// Callback function
function addAndHandle (n1: number, n2: number, callback: (num: number) => void) {
    const result = n1 + n2;
    callback(result);
}

console.log(addAndHandle(20, 30, printer))