// rest parameter

function myFunc(a, b, ...c) {
  console.log(`value of a is ${a}`);
  console.log(`value of b is ${b}`);
  console.log(c);
}

myFunc(1, 5, 9, 6, 10, 12);

// param destructing

// object
// react

const person = {
  name: "gaurav",
  age: "31",
};

// function printDetail(obj) {
//   console.log(obj.name);
//   console.log(obj.age);
// }

function printDetail({name,age}) {
    console.log(name);
    console.log(age);
  }

printDetail(person);

function calculateSum(x, y, ...numbers) {
  console.log(`First number: ${x}`);
  console.log(`Second number: ${y}`);
  console.log(`Additional numbers: ${numbers}`);
  const sum = numbers.reduce((total, num) => total + num, 0);
  console.log(`Sum of additional numbers: ${sum}`);
}

calculateSum(2, 4, 5, 10, 15, 20);

function multiplyNumbers(a, b, ...rest) {
  console.log(`Base number a: ${a}`);
  console.log(`Base number b: ${b}`);
  console.log(`Multipliers: ${rest}`);
  const product = rest.map(num => a * b * num);
  console.log(`Products of multipliers: ${product}`);
}

multiplyNumbers(3, 2, 4, 5, 6);

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925
};

function displayBook({ title, author, year }) {
  console.log(`Title: ${title}`);
  console.log(`Author: ${author}`);
  console.log(`Published Year: ${year}`);
}

displayBook(book);


const car = {
  make: "Tesla",
  model: "Model 3",
  year: 2021
};

function showCarDetails({ make, model, year }) {
  console.log(`Make: ${make}`);
  console.log(`Model: ${model}`);
  console.log(`Year: ${year}`);
}

showCarDetails(car);

function listPeople(firstPerson, secondPerson, ...restPeople) {
  console.log(`Primary Person: ${firstPerson}`);
  console.log(`Secondary Person: ${secondPerson}`);
  console.log(`Others in the group: ${restPeople}`);
}

const group = ["Alice", "Bob", "Charlie", "David", "Eve"];
listPeople(...group);

