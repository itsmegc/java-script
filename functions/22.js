// hoisting

// hello();

// const hello = () => {
//   console.log("Hello.....");
// };

// console.log(hello);

// var hello="Hii" // undefined
// let hello="Hii" // 22.js:9 Uncaught ReferenceError: Cannot access 'hello' before initialization
// const hello = "Hii"; // Uncaught ReferenceError: Cannot access 'hello' before initialization

// function inside function

const app = () => {
  console.log("1st");
  const addTwoNumber = (num1, num2) => {
    return num1 + num2;
  };
  const multipleTwoNumber = (num1, num2) => {
    return num1 * num2;
  };
  console.log(addTwoNumber(1,2))
  console.log(multipleTwoNumber(1,2))
};

app();

// Example

// Example 1: Hoisting with Function Declaration (Function can be called before its declaration)
greet();

function greet() {
  console.log("Hello, World!"); // Output: Hello, World!
}

// Example 2: Hoisting with var, let, and const (Variable hoisting behavior)
console.log(x); // Output: undefined (due to var hoisting)
var x = 5;

try {
  console.log(y); // ReferenceError: Cannot access 'y' before initialization
  let y = 10;
} catch (error) {
  console.error(error);
}

try {
  console.log(z); // ReferenceError: Cannot access 'z' before initialization
  const z = 15;
} catch (error) {
  console.error(error);
}

// Example 3: Hoisting and Function Expressions (Functions assigned to const/let/var are not hoisted)
try {
  sayHello(); // TypeError: sayHello is not a function (due to hoisting rules for function expressions)
} catch (error) {
  console.error(error);
}

const sayHello = () => {
  console.log("Hello from function expression");
};

// Example 4: Nested Functions (Function inside another function)
const calculator = () => {
  const add = (a, b) => a + b;
  const multiply = (a, b) => a * b;
  
  console.log("Addition:", add(3, 4)); // Output: Addition: 7
  console.log("Multiplication:", multiply(3, 4)); // Output: Multiplication: 12
};

calculator();

// Example 5: Nested Functions with Hoisting (Function declaration hoisting inside another function)
const outerFunction = () => {
  innerFunction(); // This works due to function declaration hoisting
  
  function innerFunction() {
    console.log("Inner function called!"); // Output: Inner function called!
  }
};

outerFunction();
