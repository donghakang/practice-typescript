var button = document.querySelector("button");
var input1 = document.getElementById("num1"); // ! ==> this will never be null
// as HTMLInputElement ==> type is HTMLInputElement
var input2 = document.getElementById("num2");
// the input's type is number
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
