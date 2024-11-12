// destructuring in objects

const band = { bandName: "Linkin park", famousSong: "Numb", year: 1995 };

// const {bandName,famousSong}=band;
const { bandName: var1, ...restVal } = band;

// console.log(famousSong)

console.log(var1);
console.log(restVal);

// ** Example 1: Destructuring in Nested Objects **

const user = {
    name: "Alice",
    address: {
      street: "123 Main St",
      city: "Wonderland",
    },
    age: 25,
  };
  
  // Destructuring with nested objects
  const { name, address: { city }, age } = user;
  
  console.log(name); // Output: Alice
  console.log(city); // Output: Wonderland
  console.log(age);  // Output: 25
  
  // ** Example 2: Destructuring with Default Values **
  
  const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
  };
  
  // Destructuring with default value for `genre`
  const { title, author, genre = "Fiction" } = book;
  
  console.log(title);  // Output: The Great Gatsby
  console.log(genre);  // Output: Fiction (default value)
  
  // ** Example 3: Destructuring Arrays **
  
  const colors = ["red", "green", "blue", "yellow"];
  
  // Destructuring the first two colors from the array
  const [firstColor, secondColor] = colors;
  
  console.log(firstColor);  // Output: red
  console.log(secondColor); // Output: green
  
  // ** Example 4: Swapping Variables with Destructuring **
  
  let a = 5;
  let b = 10;
  
  // Swapping values using destructuring
  [a, b] = [b, a];
  
  console.log(a); // Output: 10
  console.log(b); // Output: 5
  
  // ** Example 5: Destructuring with Renaming Variables **
  
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
  
  // Renaming properties during destructuring
  const { firstName: fName, lastName: lName, age1 } = person;
  
  console.log(fName);  // Output: John
  console.log(lName);  // Output: Doe
  console.log(age1);    // Output: 30
  
  const calculateArea = ({ length, width }) => {
    return length * width;
  };
  
  const rectangle = { length: 10, width: 5 };
  
  console.log(calculateArea(rectangle));  // Output: 50

  const greetUser = ({ name, greeting = "Hello" }) => {
    return `${greeting}, ${name}!`;
  };
  
  const user1 = { name: "Alice" };
  
  console.log(greetUser(user1));  // Output: Hello, Alice!
  
  const coordinates = [[1, 2], [3, 4], [5, 6]];

// Destructuring nested arrays
const [[x1, y1], [x2, y2], [x3, y3]] = coordinates;

console.log(x1, y1);  // Output: 1 2
console.log(x2, y2);  // Output: 3 4
console.log(x3, y3);  // Output: 5 6

const car = {
  model: "Mustang",
  year: 1969,
};

// Using default values and renaming
const { model: carModel, color = "red" } = car;

console.log(carModel);  // Output: Mustang
console.log(color);     // Output: red (default value)

const fruits = ["apple", "banana", "cherry", "date"];

// Skipping the first and third elements
const [, secondFruit, , fourthFruit] = fruits;

console.log(secondFruit);  // Output: banana
console.log(fourthFruit);  // Output: date
