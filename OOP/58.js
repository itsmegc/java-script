// Creating arrays using the new keyword
const numbers = new Array(1, 2, 3, 4, 5);
const numbers2 = [1, 2, 3, 4, 5];

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(numbers.__proto__); // Logs the Array prototype
console.log(numbers.__proto__ === Array.prototype); // true

console.log(numbers2); // [1, 2, 3, 4, 5]

// Additional array examples
const fruits = new Array('Apple', 'Banana', 'Cherry');
const colors = ['Red', 'Green', 'Blue', 'Yellow'];
const mixedArray = new Array(1, 'Two', { three: 3 }, [4]);
const emptyArray = new Array(); // Creates an empty array
const numbers3 = [10, 20, 30, 40, 50]; // Another example

// Logging additional arrays
console.log(fruits); // ['Apple', 'Banana', 'Cherry']
console.log(colors); // ['Red', 'Green', 'Blue', 'Yellow']
console.log(mixedArray); // [1, 'Two', { three: 3 }, [4]]
console.log(emptyArray); // []
console.log(numbers3); // [10, 20, 30, 40, 50]

// Checking prototypes
console.log(fruits.__proto__ === Array.prototype); // true
console.log(colors.__proto__ === Array.prototype); // true
console.log(mixedArray.__proto__ === Array.prototype); // true
console.log(emptyArray.__proto__ === Array.prototype); // true
console.log(numbers3.__proto__ === Array.prototype); // true
