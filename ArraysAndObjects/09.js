// Intro to array
// Reference type

// Ordered collection of items (Original Code)
let fruits = ["apple", "mango", "grapes"];
let obj = {};

// Checking types and if they are arrays
console.log(typeof fruits); // object (arrays are of type 'object' in JS)
console.log(typeof obj);    // object
console.log(Array.isArray(fruits)); // true, fruits is an array
console.log(Array.isArray(obj));    // false, obj is an object

// Accessing and modifying array elements
fruits[1] = "banana";  // Changing "mango" to "banana"
console.log(fruits);   // ["apple", "banana", "grapes"]

// Example 1: Array of Numbers
let numbers = [10, 20, 30, 40];
console.log(typeof numbers);         // object
console.log(Array.isArray(numbers)); // true
numbers[2] = 50;                     // Changing value at index 2
console.log(numbers);                // [10, 20, 50, 40]

// Example 2: Array of Mixed Data Types
let mixedArray = [1, "hello", true, { key: "value" }];
console.log(Array.isArray(mixedArray));  // true
console.log(typeof mixedArray);          // object
mixedArray[3] = [5, 6, 7];               // Changing the object to an array
console.log(mixedArray);                 // [1, "hello", true, [5, 6, 7]]

// Example 3: Empty Array and Adding Elements
let emptyArray = [];
console.log(Array.isArray(emptyArray)); // true
console.log(emptyArray.length);         // 0 (initially empty)
emptyArray[0] = "First Element";
emptyArray.push("Second Element");
console.log(emptyArray);                // ["First Element", "Second Element"]

// Example 4: Nested Arrays
let nestedArray = [[1, 2], ["a", "b"], [true, false]];
console.log(Array.isArray(nestedArray)); // true
console.log(nestedArray[1][1]);          // "b" (accessing a nested element)
nestedArray[0][1] = 3;                   // Modifying a nested element
console.log(nestedArray);                // [[1, 3], ["a", "b"], [true, false]]

// Example 5: Array Methods - Push, Pop, Shift, Unshift
let cities = ["New York", "Los Angeles", "Chicago"];
console.log(cities); // ["New York", "Los Angeles", "Chicago"]
cities.push("Houston");  // Adding "Houston" at the end
console.log(cities);     // ["New York", "Los Angeles", "Chicago", "Houston"]
cities.pop();            // Removing last element ("Houston")
console.log(cities);     // ["New York", "Los Angeles", "Chicago"]
cities.unshift("Miami"); // Adding "Miami" at the start
console.log(cities);     // ["Miami", "New York", "Los Angeles", "Chicago"]
cities.shift();          // Removing the first element ("Miami")
console.log(cities);     // ["New York", "Los Angeles", "Chicago"]

// Example 6: Using Array.indexOf and Array.includes
let animals = ["lion", "tiger", "elephant", "giraffe"];
console.log(animals.indexOf("tiger"));     // 1 (returns the index of "tiger")
console.log(animals.includes("elephant")); // true (checks if "elephant" exists in array)
console.log(animals.includes("bear"));     // false
