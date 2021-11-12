// Type script will informed that return is integer since the argumnts are number
// Therefore, we can assume the output of the function.
// We can declare that by : number
function add(n1, n2) {
    return n1 + n2;
}
function printer(num) {
    console.log("Result: " + num);
}
// Not common, but works. Just use void
function printNone(num) {
    console.log("Result: " + num);
    return;
}
// Function Types -> To specify the function
// let combineValues: Function; ==> X
var combineValues; // should accept any function that takes two arguments and returns a number
combineValues = add;
console.log(combineValues(5, 5));
// Callback function
function addAndHandle(n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
}
// console.log(addAndHandle(20, 30, printer))
