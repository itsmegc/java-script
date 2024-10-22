// Example 1: Accessing a function expression before initialization
console.log(myFunction); // Uncaught ReferenceError: Cannot access 'myFunction' before initialization

let myFunction = function () {
  console.log("This is my function");
};

// Example 2: Hoisting with 'var' and function declaration
console.log(anotherFunction()); // Output: "Hello, World!"

function anotherFunction() {
  return "Hello, World!";
}

// Example 3: Hoisting with 'var'
console.log(myVar); // Output: undefined
var myVar = 10;
console.log(myVar); // Output: 10

// Example 4: Hoisting with 'let'
/*
console.log(myLet); // Uncaught ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;
*/

// Example 5: Hoisting with 'const'
/*
console.log(myConst); // Uncaught ReferenceError: Cannot access 'myConst' before initialization
const myConst = 30;
*/

// Example 6: Temporal Dead Zone (TDZ) with 'let'
/*
console.log(car); // Uncaught ReferenceError: Cannot access 'car' before initialization
let car = "Tesla";
console.log(car); // Output: "Tesla"
*/

// Example 7: Function expression assigned to a variable
let mySecondFunction = function () {
  console.log("This is my second function");
};

mySecondFunction(); // Output: "This is my second function"
