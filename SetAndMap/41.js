// Sets

// const numbers = new Set();

// store data

// const numbers = new Set([1, 2, 3, 1]); // can not store duplicate item
// console.log(numbers); // Set(3) {1, 2, 3}

// no index base access

// console.log(numbers[2]); // undefine

// Iteration order is not guaranteed
const items = [1, 2, 3];
const char = new Set("abc");
console.log(char); // Set(3) {'a', 'b', 'c'}

const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(items);
// numbers.add([1,2,3]);  // these can add
// numbers.add([1,2,3]);
console.log(numbers); // Set(4) {1, 2, 3, Array(3)}

// if (numbers.has(1)) {
//   console.log("Is present");
// } else {
//   console.log("Not present");
// }

for (let number of numbers) {
  console.log(number);
}

// Example real use

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 2, 2, 3, 3, 5, 8, 9, 9];

const uniqueIds = new Set(ids);

// console.log(uniqueIds);
// console.log(uniqueIds?.length); // can not use length

let length = 0;

for (let uniqueId of uniqueIds) {
  length++;
}

console.log(length);
