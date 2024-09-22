// some methods

const numbers = [2, 4, 6, 8, 10];

console.log(numbers.some((number) => number % 2 != 0));

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
    price: 200000,
  },
];

const myCart = userCart.some((cartItem) => cartItem.price > 100000);

console.log(myCart);
