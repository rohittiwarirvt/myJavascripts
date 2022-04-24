const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});


function printNumber(num: number): void {
  console.log(`This is a ${num}`)

}

let combineValue : (a: number, b: number) => number;

combineValue = add
// combineValue = printNumber

console.log(combineValue(2, 4))

function addNumberWithCb(n1: number, n2: number, cb : (num: number  ) => void) {
  const result = n1 + n2
  cb(result)
}

addNumberWithCb(2, 4, (num: number) => { console.log(num)})

interface addFn {
  (n: number, n1: number): number
}

let newAdd: addFn;

newAdd = (a: number, b: number) => {
  console.log("This is it")
  return a + b;
}