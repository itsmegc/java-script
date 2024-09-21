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
