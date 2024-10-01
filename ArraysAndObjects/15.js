// Define an object with various properties
const person = {
  name: "Clark Kent",
  age: 25,
  "person hobbies": ["Guitar", "MMA"], // unusual field
};

// for in loop

for (let key in person) {
  //console.log(`${key} : ${person[key]}`);
}

// object.keys

// console.log(Object.keys(person)) // this give us array ['name', 'age', 'person hobbies']

// 1. Using for...in loop
console.log("Using for...in loop:");
for (let key in person) {
  console.log(`${key} : ${person[key]}`);
}

// 2. Using Object.keys() with forEach
console.log("\nUsing Object.keys() with forEach:");
Object.keys(person).forEach((key) => {
  console.log(`${key} : ${person[key]}`);
});

// 3. Using Object.entries()
console.log("\nUsing Object.entries():");
for (let [key, value] of Object.entries(person)) {
  console.log(`${key} : ${value}`);
}

// 4. Using Object.values()
console.log("\nUsing Object.values():");
Object.values(person).forEach((value) => {
  console.log(value);
});

// 5. Using for...of with Object.keys()
console.log("\nUsing for...of with Object.keys():");
for (let key of Object.keys(person)) {
  console.log(`${key} : ${person[key]}`);
}

// 6. Combining for...in with a conditional check
console.log("\nUsing for...in with a conditional check (only strings):");
for (let key in person) {
  if (typeof person[key] === 'string') {
    console.log(`${key} : ${person[key]}`);
  }
}

// 7. Using forEach() with Object.keys()
console.log("\nUsing forEach() with Object.keys():");
Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});


// example

const Teachers = [
  {
      name: 'saritha',
      subject: 'Maths'
  },
  {
      name: 'ahim',
      subject: 'science'
  },
  {
      name: 'sneha',
      subject: 'Social'
  }]

Teachers.forEach(teacher => {
  for (let value in teacher) {
      console.log(`${teacher[value]}`)
  }
})

// Examples
// Example 1: Using for...in loop to access object properties
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  "fuel type": "Hybrid",
};

console.log("Using for...in loop:");
for (let property in car) {
  console.log(`${property}: ${car[property]}`);
}

// Example 2: Using Object.keys() to get all property names and loop through them
const laptop = {
  brand: "Dell",
  model: "XPS 13",
  price: 1200,
};

console.log("\nUsing Object.keys() with forEach:");
Object.keys(laptop).forEach((key) => {
  console.log(`${key}: ${laptop[key]}`);
});

// Example 3: Using Object.entries() to get key-value pairs and loop through them
const smartphone = {
  brand: "Apple",
  model: "iPhone 12",
  price: 999,
};

console.log("\nUsing Object.entries():");
for (let [key, value] of Object.entries(smartphone)) {
  console.log(`${key}: ${value}`);
}

// Example 4: Using Object.values() to access all values in an object
const book = {
  title: "1984",
  author: "George Orwell",
  pages: 328,
};

console.log("\nUsing Object.values():");
Object.values(book).forEach((value) => {
  console.log(value);
});

// Example 5: Using for...of with Object.keys() to loop over keys and access corresponding values
const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
};

console.log("\nUsing for...of with Object.keys():");
for (let key of Object.keys(movie)) {
  console.log(`${key}: ${movie[key]}`);
}
