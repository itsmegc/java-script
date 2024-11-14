// arrow functions

const singHappyBirthday = () => {
  console.log("happy birthday to you.....");
};

singHappyBirthday();

const isEven = (num) => num % 2 == 0;

console.log(isEven(4));

// 1. Arrow function to add two numbers
const addNumbers = (a, b) => a + b;

console.log(addNumbers(5, 10)); // Output: 15

// 2. Arrow function to greet a user
const greetUser = (name) => `Hello, ${name}!`;

console.log(greetUser("Alice")); // Output: Hello, Alice!

// 3. Arrow function to find the square of a number
const square = (num) => num * num;

console.log(square(6)); // Output: 36

// 4. Arrow function to check if a number is positive
const isPositive = (num) => num > 0;

console.log(isPositive(-3)); // Output: false

// 5. Arrow function to return an array of even numbers from an input array
const getEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
