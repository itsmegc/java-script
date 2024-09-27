// iterables
// In JavaScript, iterables are objects that allow you to traverse or iterate over their elements one by one. They implement the Symbol.iterator method, which returns an iterator object. This iterator can be used to retrieve values from the iterable, typically in a loop or via built-in methods that expect iterables (like for...of loops).

// Common JavaScript Iterables:
// Arrays:
// Example: const arr = [1, 2, 3];
// Strings:
// Example: const str = "hello";
// Maps:
// Example: const map = new Map([["key1", "value1"], ["key2", "value2"]]);
// Sets:
// Example: const set = new Set([1, 2, 3]);
// Typed Arrays:
// Example: const typedArray = new Uint8Array([0, 255, 127]);
// Arguments object:
// Example: function example() { console.log(arguments); }
// Custom objects (if you implement Symbol.iterator).


// Key Points:
// for...of loop: Can iterate over any iterable object.


const arr = [1, 2, 3];
for (const item of arr) {
  console.log(item);  // Outputs: 1, 2, 3
}


// Spread Operator (...): Works with iterables.

const arr1 = [1, 2, 3];
const copy = [...arr1];  // [1, 2, 3]
console.log(copy)

// Array.from(): Converts an iterable into an array.

const str = "hello";
const arr2 = Array.from(str);  // ["h", "e", "l", "l", "o"]
console.log(arr2)

// How Iterators Work:
// An iterator has a next() method that returns the next value in the sequence. Each next() call returns an object with two properties:

// value: The next value in the iteration.
// done: A boolean indicating whether the iteration is complete.
// Example of manually using an iterator:


const arr3 = [1, 2, 3];
const iterator = arr3[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }



// Custom Iterable Example:
// You can make an object iterable by implementing the Symbol.iterator method:


const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (const value of myIterable) {
  console.log(value);  // Outputs: 1, 2, 3
}
// In summary, iterables provide a consistent way to access items in a collection, making them fundamental for looping and working with various data structures in JavaScript.









