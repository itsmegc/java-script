// find method

const myArray = ["Hello", "cat", "dog", "lion"];

function isLength3(string) {
  return string.length === 3;
}

// const ans=isLength3("Hello")

const ans = myArray.find(isLength3);

console.log(ans);

const users = [
  {
    userId: 1,
    name: "Alice",
    age: 28,
  },
  {
    userId: 2,
    name: "Bob",
    age: 32,
  },
  {
    userId: 3,
    name: "Charlie",
    age: 25,
  },
  {
    userId: 4,
    name: "Diana",
    age: 30,
  },
  {
    userId: 5,
    name: "Ethan",
    age: 27,
  },
];

const myUser = users.find((user) => user.userId === 3);

console.log(myUser);
