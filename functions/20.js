// basic function

// function declaration

// function singHappyBirthday() {
//     console.log("happy birthday to you.....");
//   }

//   singHappyBirthday()
 
// function expression
const singHappyBirthday = function () {
  console.log("happy birthday to you.....");
};

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

// Example 1: Function to Calculate Square

// Function Declaration
function squareNumber(num) {
  return num * num;
}

console.log(`Square of 5 is ${squareNumber(5)}`);

// Function Expression
const squareNumber = function (num) {
  return num * num;
};

console.log(`Square of 7 is ${squareNumber(7)}`);

// Example 2: Function to Check if a Number is Positive

// Function Declaration
function isPositive(num) {
  return num > 0;
}

console.log(isPositive(10)); // true

// Function Expression
const isPositive = function (num) {
  return num > 0;
};

console.log(isPositive(-3)); // false

// Example 3: Function to Greet a User

// Function Declaration
function greetUser(name) {
  return `Hello, ${name}!`;
}

console.log(greetUser("Alice"));

// Function Expression
const greetUser = function (name) {
  return `Hello, ${name}!`;
};

console.log(greetUser("Bob"));

// Example 4: Function to Calculate Area of a Circle

// Function Declaration
function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}

console.log(`Area of circle with radius 5 is ${calculateCircleArea(5).toFixed(2)}`);

// Function Expression
const calculateCircleArea = function (radius) {
  return Math.PI * radius * radius;
};

console.log(`Area of circle with radius 7 is ${calculateCircleArea(7).toFixed(2)}`);

// Example 5: Function to Find Maximum of Two Numbers

// Function Declaration
function findMax(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

console.log(`Max of 4 and 9 is ${findMax(4, 9)}`);

// Function Expression
const findMax = function (num1, num2) {
  return num1 > num2 ? num1 : num2;
};

console.log(`Max of 15 and 12 is ${findMax(15, 12)}`);
