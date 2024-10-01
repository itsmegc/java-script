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

// Examples

// Example 1: Check if all numbers in an array are positive
const nums = [3, 6, 9, 12, 15];

const allPositive = nums.every((num) => num > 0);

// Logs true because all numbers in the array are positive
console.log(allPositive);

// Example 2: Check if all students passed the exam
const students = [
  { name: "John", grade: 85 },
  { name: "Jane", grade: 78 },
  { name: "Alice", grade: 92 },
  { name: "Bob", grade: 65 },
];

const allPassed = students.every((student) => student.grade >= 60);

// Logs true because all students have grades 60 or higher
console.log(allPassed);

// Example 3: Check if all books have more than 200 pages
const books = [
  { title: "Book A", pages: 350 },
  { title: "Book B", pages: 250 },
  { title: "Book C", pages: 450 },
];

const thickBooks = books.every((book) => book.pages > 200);

// Logs true because all books have more than 200 pages
console.log(thickBooks);

// Example 4: Check if all employees are full-time
const employees = [
  { name: "Emily", fullTime: true },
  { name: "Sam", fullTime: true },
  { name: "Lily", fullTime: true },
];

const areAllFullTime = employees.every((employee) => employee.fullTime);

// Logs true because all employees are full-time
console.log(areAllFullTime);

// Example 5: Check if all fruits in the basket are ripe
const fruits = [
  { name: "Apple", isRipe: true },
  { name: "Banana", isRipe: true },
  { name: "Mango", isRipe: true },
  { name: "Orange", isRipe: true },
];

const allRipe = fruits.every((fruit) => fruit.isRipe);

// Logs true because all fruits in the basket are ripe
console.log(allRipe);
