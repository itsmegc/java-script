// const numbers = [1, 2, 3, 4, 5];

// array have prototype why explain this cause

// array by default create array like this using new keyword


const numbers = new Array(1, 2, 3, 4, 5)
const numbers2 = [1, 2, 3, 4, 5];

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(numbers.__proto__); // Logs the Array prototype
console.log(numbers.__proto__ === Array.prototype); // true

console.log(numbers2)
