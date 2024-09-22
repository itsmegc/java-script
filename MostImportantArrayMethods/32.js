// Sort method

const numbers = [5, 15, 2, 13, 18, 10];

// Sort based on numerical value, in ascending order
numbers.sort((a, b) => a - b);

// Explanation (Ascending):
// If a - b is greater than 0 (positive), b comes after a.
// If a - b is less than 0 (negative), a comes before b.

console.log("Ascending order:", numbers);

// Sort based on numerical value, in descending order
numbers.sort((a, b) => b - a);

// Explanation (Descending):
// If b - a is greater than 0 (positive), a comes after b.
// If b - a is less than 0 (negative), b comes before a.

console.log("Descending order:", numbers);

/// price low to high  and high to low

const products = [
  {
    productId: 1,
    productName: "Laptop",
    price: "2000",
  },
  {
    productId: 2,
    productName: "Smartphone",
    price: "800",
  },
  {
    productId: 3,
    productName: "Headphones",
    price: "150",
  },
  {
    productId: 4,
    productName: "Smartwatch",
    price: "250",
  },
  {
    productId: 5,
    productName: "Tablet",
    price: "500",
  },
];

// low to high

// products.sort((a, b) => {
//   return a.price - b.price;
// });

const lowToHigh = products.slice(0).sort((a, b) => {
  return a.price - b.price;
});

console.log("low to high", lowToHigh);

//  high to low

const highToLow = products.slice(0).sort((a, b) => {
  return b.price - a.price;
});

console.log("high to low", highToLow);

console.log("products", products);
