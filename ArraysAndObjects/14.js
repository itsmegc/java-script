// Objects
// how to create object

//const person = { name: "Bruce wayne", age: 31, hobbies: ["Guitar", "MMA"] };
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);

// person.gender = "male";

// console.log(person);
// how to access data from objects
//console.log(person["name"]);

// Difference b/w dot and bracket notation
let key = "email";
const person = {
  name: "Clark kent",
  age: 25,
  "person hobbies": ["Guitar", "MMA"], // unusual field
};

// console.log(person.person hobbies)   this can't be done

console.log(person["person hobbies"]);

person[key] = "gcknight@gmail.com";

console.log(person);

// Example

// Example 1: Create and Access Object Properties
const car = {
  brand: "Tesla",
  model: "Model S",
  year: 2022,
  features: ["Autopilot", "Electric"]
};

// Accessing properties using dot notation
console.log(car.brand); // Output: Tesla
console.log(car.model); // Output: Model S
console.log(car.features); // Output: ["Autopilot", "Electric"]

// Example 2: Add New Properties to an Object
const laptop = {
  brand: "Apple",
  model: "MacBook Pro",
  year: 2021
};

// Adding a new property
laptop.processor = "M1 Chip";

// Checking the updated object
console.log(laptop);
// Output: { brand: "Apple", model: "MacBook Pro", year: 2021, processor: "M1 Chip" }

// Example 3: Accessing Properties with Bracket Notation
const house = {
  "number of rooms": 5,
  location: "New York",
  type: "Apartment"
};

// Accessing a property with spaces using bracket notation
console.log(house["number of rooms"]); // Output: 5

// Example 4: Using Variables to Access Properties Dynamically
let propertyKey = "owner";
const anotherCar = {
  brand: "BMW",
  model: "X5"
};

// Assigning value to the dynamic key
anotherCar[propertyKey] = "John Doe";

console.log(anotherCar);
// Output: { brand: "BMW", model: "X5", owner: "John Doe" }

// Example 5: Difference Between Dot Notation and Bracket Notation
const person = {
  name: "Peter Parker",
  age: 18,
  "favorite sports": ["Basketball", "Soccer"]
};

// Using dot notation (works with usual field names)
console.log(person.name); // Output: Peter Parker

// Trying to access a property with spaces using dot notation (incorrect)
// console.log(person.favorite sports); // Syntax Error

// Correct way to access a property with spaces using bracket notation
console.log(person["favorite sports"]); // Output: ["Basketball", "Soccer"]
