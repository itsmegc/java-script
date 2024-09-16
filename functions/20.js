// basic function

function singHappyBirthday() {
  console.log("happy birthday to you.....");
}

singHappyBirthday();

function addTwoNumber(num1, num2) {
  return num1 + num2;
}

let num1 = 7;
let num2 = 8;
//   console.log(`addition of ${num1} and ${num2} is ${addTwoNumber(num1,num2)}`);
const returnValue = addTwoNumber(num1, num2);
console.log(`addition of ${num1} and ${num2} is ${returnValue}`);
