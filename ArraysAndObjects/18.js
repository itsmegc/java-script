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
  const { firstName: fName, lastName: lName, age } = person;
  
  console.log(fName);  // Output: John
  console.log(lName);  // Output: Doe
  console.log(age);    // Output: 30
  