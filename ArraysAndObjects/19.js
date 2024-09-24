// Array of objects containing user information
const users = [
  { id: 1, name: "gaurav" },
  { id: 2, name: "rohit" },
  { id: 3, name: "rahul" },
];

// Example: Loop through users and print each object
// Uncomment the following lines to use the loop
// for (let user of users) {
//   console.log(user);  // Outputs each user object
// }

// Example: Nested destructuring
// Destructure the first and third elements from the users array
const [{ name: firstName }, , { id }] = users;

// Output the first user's name and the third user's ID
console.log(firstName);  // Outputs: gaurav
console.log(id);         // Outputs: 3

// Different Types of Loops and Array Methods

// 1. For Each Loop
// Used to iterate over each element of an array without returning a new array.
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log(num);  // Outputs each number in the array
});

// 2. For Of Loop
// Used to iterate over values of an iterable object (like arrays).
const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) {
  console.log(fruit);  // Outputs each fruit
}

// 3. For In Loop
// Used to iterate over the properties (keys) of an object.
const user = { name: 'Gaurav', age: 30, city: 'Delhi' };
for (const key in user) {
  console.log(`${key}: ${user[key]}`);  // Outputs key-value pairs
}

// 4. Map
// Used to create a new array by transforming each element of the original array.
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);  // [1, 4, 9, 16, 25]

// 5. Filter
// Used to create a new array with elements that satisfy a condition.
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  // [2, 4]

// 6. Find
// Used to return the first element that satisfies a condition.
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);  // 2

// 7. Reduce
// Used to reduce the array to a single value by applying a function to each element.
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);  // 15

// 8. Normal For Loop
// A basic loop for iterating a set number of times.
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);  // Outputs each number
}
