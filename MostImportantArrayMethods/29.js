// Map

const users = [
  {
    name: "Alice",
    age: 28,
    hobbies: ["Reading", "Hiking", "Cooking"],
  },
  {
    name: "Bob",
    age: 32,
    hobbies: ["Photography", "Traveling", "Gaming"],
  },
  {
    name: "Charlie",
    age: 25,
    hobbies: ["Music", "Running", "Painting"],
  },
  {
    name: "Diana",
    age: 30,
    hobbies: ["Yoga", "Gardening", "Dancing"],
  },
  {
    name: "Ethan",
    age: 27,
    hobbies: ["Writing", "Cycling", "Movies"],
  },
];

const square = (num) => num * num;
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const squareNumber = numbers.map(square);

console.log(squareNumber);

const userName = users.map((user, index) => {
  return user?.name;
});

console.log(userName);


const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 400 },
  { name: "Headphones", price: 150 },
  { name: "Camera", price: 600 },
];

const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);

console.log(productNames); // ["Laptop", "Phone", "Tablet", "Headphones", "Camera"]
console.log(productPrices); // [1200, 800, 400, 150, 600]

const numbers1 = [1, 3, 5, 7, 9];
const squaredNumbers = numbers1.map(num => num * num);

console.log(squaredNumbers); // [1, 9, 25, 49, 81]

const employees = [
  { name: "John", department: "HR" },
  { name: "Emma", department: "Finance" },
  { name: "Mark", department: "IT" },
  { name: "Sophia", department: "Marketing" },
];

const employeeNames = employees.map(employee => employee.name);
const employeeDepartments = employees.map(employee => employee.department);

console.log(employeeNames); // ["John", "Emma", "Mark", "Sophia"]
console.log(employeeDepartments); // ["HR", "Finance", "IT", "Marketing"]

const radii = [3, 5, 7, 9];
const circleAreas = radii.map(radius => Math.PI * Math.pow(radius, 2));

console.log(circleAreas); // Areas of circles with radii [3, 5, 7, 9]


const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "1984", author: "George Orwell" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "Moby Dick", author: "Herman Melville" },
];

const bookTitles = books.map(book => book.title);

console.log(bookTitles); // ["The Great Gatsby", "1984", "To Kill a Mockingbird", "Moby Dick"]
