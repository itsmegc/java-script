// Example 1: Hoisting with 'var' vs 'let'
console.log(age); // undefined (hoisted, but not initialized)
var age = 25;

// console.log(height); // ReferenceError: Cannot access 'height' before initialization
let height = 175;

// Example 2: Hoisting with Function Declaration
console.log(sum(5, 3)); // 8
function sum(a, b) {
  return a + b;
}

// Example 3: Hoisting with Function Expression
console.log(multiply); // undefined
// console.log(multiply(4, 2)); // TypeError: multiply is not a function
var multiply = function(a, b) {
  return a * b;
};

// Example 4: Hoisting with 'const'
/* 
console.log(pi); // ReferenceError: Cannot access 'pi' before initialization
const pi = 3.14;
*/

// Example 5: Temporal Dead Zone (TDZ) with 'let'
/*
console.log(car); // ReferenceError: Cannot access 'car' before initialization
let car = "Tesla";
console.log(car); // Tesla
*/

// Hoisting Example from Original Code
console.log(this);
console.log(window);
console.log(fullName); // undefined, 'var' is hoisted but not initialized

console.log(myFunction); // undefined, function expression is not hoisted

var myFunction = function () {
  console.log("This is my function");
};

console.log(myFunction); // Function reference is now available

// // Hoisting with variables
let firstName = "Gaurav";
let lastName = "Chand";
let fullName = firstName + " " + lastName;
console.log(fullName); // "Gaurav Chand"
