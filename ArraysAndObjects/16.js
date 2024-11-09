"use strict";

// computed properties

const key1 = "object1";
const key2 = "object2";

const value1 = "myValue1";
const value2 = "myValue2";

// let obj={
//     key1: value1,
//     key2:value2
// }

// let obj={
//     [key1]: value1,   // correct way
//     [key2]:value2
// }

let obj = {};
obj[key1] = value1;
obj[key2] = value2;

console.log(obj);

// examples

// ** Example 1: Computed Properties with Functions **

const key1 = "getName"; // Key for name retrieval
const key2 = "getAge";  // Key for age retrieval

const person = {
  firstName: "John",   // First name of the person
  lastName: "Doe",     // Last name of the person
  age: 30,             // Age of the person
  [key1]() {           // Method to get full name
    return `${this.firstName} ${this.lastName}`;
  },
  [key2]() {           // Method to get age
    return this.age;
  },
};

console.log(person[key1]()); // Output: John Doe
console.log(person[key2]()); // Output: 30

// ** Example 2: Destructuring Assignment **

const user = {
  id: 1,
  username: "johndoe",
  email: "john@example.com",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
};

// Destructuring the user object
const { username, email, address: { city } } = user;

console.log(username); // Output: johndoe
console.log(email);    // Output: john@example.com
console.log(city);     // Output: Anytown

// ** Example 3: Default Parameters in Functions **

function greet(name = "Guest") { // Default parameter
  return `Hello, ${name}!`;
}

console.log(greet());          // Output: Hello, Guest!
console.log(greet("Alice"));   // Output: Hello, Alice!

// ** Example 4: Async/Await with Fetch API **

async function fetchData(url) {
  try {
    const response = await fetch(url); // Fetching data
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json(); // Parsing JSON
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// Example URL (make sure this URL returns a valid JSON response)
const url = "https://jsonplaceholder.typicode.com/posts/1";

fetchData(url).then(data => {
  console.log(data); // Output: the post data from the URL
});

// ** Example 5: Classes and Inheritance **

class Animal { // Base class
  constructor(name) {
    this.name = name; // Name property
  }

  speak() { // Base method
    return `${this.name} makes a noise.`;
  }
}

class Dog extends Animal { // Derived class
  speak() { // Overriding method
    return `${this.name} barks.`;
  }
}

const dog = new Dog("Buddy");
console.log(dog.speak()); // Output: Buddy barks.

// ** Example 6: Template Literals **

const name = "John";
const age = 25;

// Using template literals for string interpolation
const greeting = `My name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: My name is John and I am 25 years old.

// ** Example 7: Array Methods (Map, Filter, Reduce) **

const numbers = [1, 2, 3, 4, 5];

// Using map to create an array of squares
const squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16, 25]

// Using filter to get even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]

// Using reduce to sum the numbers
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 15

// ** Example 8: Error Handling with Try/Catch **

function divide(a, b) {
  try {
    if (b === 0) throw new Error("Cannot divide by zero."); // Throw error for division by zero
    return a / b;
  } catch (error) {
    console.error(error.message); // Catch and log error message
  }
}

console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: Cannot divide by zero.

// ** Example 9: Set and Map Data Structures **

// Set example
const uniqueNumbers = new Set([1, 2, 3, 1, 2]);
uniqueNumbers.add(4); // Adding a unique number
console.log(uniqueNumbers); // Output: Set { 1, 2, 3, 4 }

// Map example
const userMap = new Map();
userMap.set("name", "Alice"); // Setting name
userMap.set("age", 30);       // Setting age

console.log(userMap.get("name")); // Output: Alice
console.log(userMap.has("age"));   // Output: true

// ** Example 10: Promise and Chaining **

const promise = new Promise((resolve, reject) => {
  const success = true; // Change to false to see error handling

  if (success) {
    resolve("Operation was successful!"); // Resolve promise
  } else {
    reject("Operation failed!");           // Reject promise
  }
});

// Handling promise resolution and rejection
promise
  .then(result => console.log(result))  // Output: Operation was successful!
  .catch(error => console.error(error)); // If it fails, this will execute

  // ** Example 11: Using Spread Operator to Merge Objects **

const user1 = { name: "Alice", age: 25 };
const user2 = { name: "Bob", location: "New York" };

const mergedUser = { ...user1, ...user2 }; // Merging objects with spread operator
console.log(mergedUser); // Output: { name: "Bob", age: 25, location: "New York" }

// ** Example 12: Rest Parameters in Function Arguments **

function sumAll(...numbers) { // Rest parameter to capture all arguments
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10
console.log(sumAll(5, 10, 15));  // Output: 30

// ** Example 13: Optional Chaining in Object Access **

const userProfile = {
  name: "John",
  address: { city: "San Francisco", zip: "94101" }
};

console.log(userProfile.address?.city);  // Output: San Francisco
console.log(userProfile.contact?.phone); // Output: undefined (without error)

// ** Example 14: Logical OR and AND Assignment Operators **

let message = "";
message ||= "Default message"; // Assigns if falsy
console.log(message); // Output: "Default message"

let user10 = { name: "Alice", age: 25 };
user10.age &&= 30; // Updates age only if it exists
console.log(user10.age); // Output: 30

// ** Example 15: Nullish Coalescing Operator (??)**

let username10 = null;
let defaultName = "Guest";

let displayName = username10 ?? defaultName; // Assigns default if null or undefined
console.log(displayName); // Output: Guest
