// How to iterate obj

const person = {
  name: "Clark kent",
  age: 25,
  "person hobbies": ["Guitar", "MMA"], // unusual field
};

// for in loop

for (let key in person) {
  //console.log(`${key} : ${person[key]}`);
}

// object.keys

// console.log(Object.keys(person)) // this give us array ['name', 'age', 'person hobbies']

for (let key of Object.keys(person)) {
  console.log(`${key} : ${person[key]}`);
}
