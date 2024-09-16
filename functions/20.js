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

// even odd

function isEven(num) {
  return num % 2 == 0;
}

console.log(isEven(4));

function firstChar(anyString){
    return anyString[0];
}
console.log(firstChar('Gaurav'));