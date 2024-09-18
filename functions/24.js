// block scope vs function scope

// let and const are block scope
// var is function scope

{
  let firstNames = "Mohit";
  console.log(firstNames);
}
// console.log(firstNames) // Uncaught ReferenceError: firstName is not defined

{
  var firstName = "Gaurav";
}
console.log(firstName);

if (true) {
  let number = 10;
  console.log(number);
}
// console.log(number); // Uncaught ReferenceError: number is not defined

// default parameter

function addTwoNumber(a = 1, b = 2) {
  return a + b;
}

console.log(`sum of two number is ${addTwoNumber()}`);
