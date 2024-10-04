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

// examples


// Example 1: Block Scope vs Function Scope with let, const, and var

{
  let fruit = "Apple";
  const color = "Red";
  console.log(fruit); // Output: Apple
  console.log(color); // Output: Red
}
// console.log(fruit); // Uncaught ReferenceError: fruit is not defined
// console.log(color); // Uncaught ReferenceError: color is not defined

{
  var car = "Tesla";
}
console.log(car); // Output: Tesla

// Example 2: Block Scope Inside Loops

for (let i = 0; i < 3; i++) {
  console.log(`Iteration ${i}`);
}
// console.log(i); // Uncaught ReferenceError: i is not defined

for (var j = 0; j < 3; j++) {
  console.log(`Iteration ${j}`);
}
console.log(j); // Output: 3 (var is function scoped, so j is accessible here)

// Example 3: Using Default Parameters

function multiplyNumbers(x = 5, y = 3) {
  return x * y;
}

console.log(multiplyNumbers()); // Output: 15
console.log(multiplyNumbers(10)); // Output: 30
console.log(multiplyNumbers(7, 4)); // Output: 28

// Example 4: Function Scope with var

function greetUser() {
  var greeting = "Hello, world!";
  console.log(greeting);
}

greetUser();
// console.log(greeting); // Uncaught ReferenceError: greeting is not defined (function scope)

// Example 5: Block Scope in Conditions

if (true) {
  const user = "Gaurav";
  let age = 25;
  console.log(user); // Output: Gaurav
  console.log(age); // Output: 25
}
// console.log(user); // Uncaught ReferenceError: user is not defined
// console.log(age); // Uncaught ReferenceError: age is not defined
