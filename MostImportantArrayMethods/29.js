// Map

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

const square = (num) => num * num;
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const squareNumber = numbers.map(square);

console.log(squareNumber);

const userName = users.map((user, index) => {
  return user?.name;
});

console.log(userName);
