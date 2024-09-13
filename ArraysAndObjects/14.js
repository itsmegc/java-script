// Objects
// how to create object

//const person = { name: "Bruce wayne", age: 31, hobbies: ["Guitar", "MMA"] };
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);

// person.gender = "male";

// console.log(person);
// how to access data from objects
//console.log(person["name"]);

// Difference b/w dot and bracket notation
let key = "email";
const person = {
  name: "Clark kent",
  age: 25,
  "person hobbies": ["Guitar", "MMA"], // unusual field
};

// console.log(person.person hobbies)   this can't be done

console.log(person["person hobbies"]);

person[key] = "gcknight@gmail.com";

console.log(person);
