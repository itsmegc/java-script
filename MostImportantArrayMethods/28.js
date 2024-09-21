// important array method

// map
// filter
// reduce

const numbers = [12, 3, 4, 5];

// function multipleByTwo(number, index) {
//   console.log("index is", index);
//   console.log(`${number} x 2 = ${number * 2}`);
// }

// multipleByTwo(numbers[0], 0);

// for (let i = 0; i < numbers.length; i++) {
//   //   console.log("index is", i);
//   multipleByTwo(numbers[i], i);
// }

// numbers.forEach(multipleByTwo);

// forEach

// numbers.forEach(function (number, index) {
//   console.log("index is", index);
//   console.log(`${number} x 2 = ${number * 2}`);
// });

// numbers.forEach(function (number) {
//   console.log(number * 2);
// });


///  forEach

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

// users.forEach((user) => {
//   console.log(user?.name);
// });

// for of

for (let user of users) {
  console.log(user?.name);
}
