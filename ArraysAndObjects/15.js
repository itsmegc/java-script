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