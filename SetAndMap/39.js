// Array-like objects in JavaScript are objects that resemble arrays but do not have all the methods and properties of real arrays. They have the following characteristics:

// Indexed elements: The elements are stored with numeric keys (just like an array).
// Length property: They have a length property that indicates the number of elements in the object.
// However, they lack the array methods such as push(), pop(), forEach(), etc.

// Common Examples of Array-like Objects:
// arguments object (inside functions)

// When a function is called, the arguments object contains all the arguments passed to the function, indexed by numbers, but it lacks array methods.

function example() {
  console.log(arguments); // Array-like object
}
example(1, 2, 3);
// DOM NodeList or HTMLCollection

// These are collections of DOM elements, returned by methods like document.querySelectorAll() or document.getElementsByClassName(). They behave like arrays but don't have array methods.

const nodes = document.querySelectorAll("div"); // NodeList
console.log(nodes.length); // Array-like: has length property

// String (although strings are iterable, they are technically array-like)
// A string has indexed characters and a length property, but it doesn't have array methods like push() or forEach().

const str = "hello";
console.log(str[0]); // 'h'
console.log(str.length); // 5

// Converting Array-like Objects to Arrays:
// Since array-like objects don't have array methods, they often need to be converted to real arrays. Here are a few ways to do that:

// Using Array.from():

const nodes1 = document.querySelectorAll("div");
const arrayNodes = Array.from(nodes1);

// Using the Spread Operator (...):

function example() {
  const argsArray = [...arguments];
  console.log(argsArray); // Now it's a real array
}
example(1, 2, 3);

// Using Array.prototype.slice.call(): This is a classic way to convert array-like objects into arrays, especially before the introduction of Array.from() and the spread operator.

function example() {
  const argsArray = Array.prototype.slice.call(arguments);
  console.log(argsArray); // Now it's a real array
}
example(1, 2, 3);

// Key Differences Between Arrays and Array-like Objects:
// Arrays have methods like push(), pop(), map(), filter(), reduce(), etc.
// Array-like objects don't have these methods, even though they have indexed elements and a length property.
// Example of an Array-like Object:
// You can create an array-like object manually by using indexed properties and a length property.

const arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

console.log(arrayLike[0]); // 'a'
console.log(arrayLike.length); // 3

// However, you can't call array methods on arrayLike:
arrayLike.push("d"); // Error: push is not a function

// In summary, array-like objects share some properties with arrays (like indexed elements and a length property) but don't have all the built-in array methods. Converting them to true arrays allows you to use array-specific methods.
