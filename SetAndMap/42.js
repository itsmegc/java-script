// object literals

// key is always in strings and symbol

// const person = {
//   name: "gaurav",
//   age: 32,
//   1: "one",
// };

// // console.log(person?.name);
// // console.log(person["name"]);
// console.log(person[1]);
// for (let key in person) {
//   console.log(typeof key);
// }

// Map

// key value pair

const persons = new Map();
persons.set("firstName", "Gaurav");
persons.set("age", 7);
persons.set(1, "one");
persons.set([1, 2, 3], "array");
persons.set({ name: 1 }, "object");
// console.log(persons);

// console.log(persons.get("firstName"));
// console.log(persons.keys());

for (let key of persons.keys()) {
  console.log(typeof key);
}

for (let [key,value] of persons) {
  console.log(key);
  console.log(value);
}
