// every method

const numbers = [2, 4, 6, 8, 10];

const isEven = numbers.every((number) => number % 2 == 0);

console.log(isEven);

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

const myCart = userCart.every((cartItem) => cartItem.price < 25000);

console.log(myCart);
