// Sort method

const numbers = [5, 15, 2, 13, 18, 10];

// Sort based on numerical value, in ascending order
numbers.sort((a, b) => a - b);
Q
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


const fruits = ["Banana", "Apple", "Mango", "Cherry", "Orange"];

// Alphabetical order (A-Z)
fruits.sort((a, b) => a.localeCompare(b));
console.log("Alphabetical order:", fruits);

// Reverse alphabetical order (Z-A)
fruits.sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order:", fruits);


const people = [
  { name: "John", age: 25 },
  { name: "Anna", age: 18 },
  { name: "Paul", age: 32 },
  { name: "Sara", age: 22 }
];

// Ascending order by age
people.sort((a, b) => a.age - b.age);
console.log("Ascending by age:", people);

// Descending order by age
people.sort((a, b) => b.age - a.age);
console.log("Descending by age:", people);

const cities = ["New York", "Tokyo", "Delhi", "London", "Paris"];

// Sort by length of the city names (shortest to longest)
cities.sort((a, b) => a.length - b.length);
console.log("Shortest to longest:", cities);

// Sort by length of the city names (longest to shortest)
cities.sort((a, b) => b.length - a.length);
console.log("Longest to shortest:", cities);


const movies = [
  { title: "Inception", rating: 8.8 },
  { title: "The Dark Knight", rating: 9.0 },
  { title: "Interstellar", rating: 8.6 },
  { title: "Dunkirk", rating: 7.9 }
];

// Ascending by rating
movies.sort((a, b) => a.rating - b.rating);
console.log("Ascending by rating:", movies);

// Descending by rating
movies.sort((a, b) => b.rating - a.rating);
console.log("Descending by rating:", movies);

const events = [
  { event: "Conference", date: new Date("2023-08-15") },
  { event: "Meetup", date: new Date("2024-01-20") },
  { event: "Workshop", date: new Date("2022-11-12") },
  { event: "Seminar", date: new Date("2023-05-05") }
];

// Ascending by date
events.sort((a, b) => a.date - b.date);
console.log("Ascending by date:", events);

// Descending by date
events.sort((a, b) => b.date - a.date);
console.log("Descending by date:", events);
