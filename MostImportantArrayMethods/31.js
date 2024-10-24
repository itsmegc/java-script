// reduce method

// aim : sum of all number
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,

  0 // initial value otherwise it take 0 index value
);

console.log(sum);

const userCart = [
  {
    productId: 1,
    productName: "Laptop",
    price: 2000,
  },
  {
    productId: 2,
    productName: "Smartphone",
    price: 800,
  },
  {
    productId: 3,
    productName: "Headphones",
    price: 150,
  },
  {
    productId: 4,
    productName: "Smartwatch",
    price: 250,
  },
  {
    productId: 5,
    productName: "Tablet",
    price: 500,
  },
];

const userTotalPrice = userCart.reduce(
  (totalPrice, currentProduct) => totalPrice + currentProduct.price,
  0
);

console.log(userTotalPrice);


const numbers1 = [5, 9, 12, 7, 3, 25, 4];

const maxNumber = numbers1.reduce((max, currentValue) => {
  return currentValue > max ? currentValue : max;
}, numbers[0]); // Initial value is the first element

console.log(maxNumber); // Output: 25

const strings = ["JavaScript", "is", "a", "powerful", "language"];

const concatenatedString = strings.reduce((sentence, word) => sentence + " " + word);

console.log(concatenatedString); // Output: "JavaScript is a powerful language"

const fruits = ["apple", "banana", "orange", "apple", "banana", "apple"];

const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(fruitCount); 
// Output: { apple: 3, banana: 2, orange: 1 }

const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flatArray = nestedArray.reduce((acc, currentValue) => acc.concat(currentValue), []);

console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]

const words = ["reduce", "method", "is", "very", "useful"];

const totalLength = words.reduce((total, word) => total + word.length, 0);

console.log(totalLength); // Output: 25



