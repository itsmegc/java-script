// filter method

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const isEven = (num) => num % 2 === 0;
const isOdd = (num) => num % 2 !== 0;
const evenNumber = numbers.filter(isEven);
console.log(evenNumber);

const oddNumber = numbers.filter(isOdd);
console.log(oddNumber);
