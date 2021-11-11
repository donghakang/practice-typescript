const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement; // ! ==> this will never be null
                                                                     // as HTMLInputElement ==> type is HTMLInputElement
const input2 = document.getElementById("num2")! as HTMLInputElement; 


// the input's type is number
function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});


