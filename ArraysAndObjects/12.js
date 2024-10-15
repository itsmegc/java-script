"use strict";

// Loop in array

// ***************************** for loop *****************************
// let dailyActivities = ["eat", "work", "sleep"];

// for (let i = 0; i < dailyActivities.length; i++) {
//   console.log(dailyActivities[i].toUpperCase());
// }

// use const for creating array

// const dailyActivities = ["eat", "work", "sleep"];
// dailyActivities.push("repeat")
// console.log(dailyActivities)

// ***************************** while loop *****************************

// let dailyActivities = ["eat", "work", "sleep"];

// let i = 0;
// while (i < dailyActivities.length) {
//   console.log(dailyActivities[i].toUpperCase());
//   i++;
// }

// ***************************** for of loop *****************************
// const dailyActivities = ["eat", "work", "sleep"];
// const dailyActivities2=[];

// for(let dailyActivity of dailyActivities ){
//     dailyActivities2.push(dailyActivity.toUpperCase());
// }
// console.log(dailyActivities2)

// ***************************** for in loop *****************************

// Example 1: Daily Activities
const dailyActivities = ["eat", "work", "sleep"];
const dailyActivities2 = [];

for (let dailyActivity in dailyActivities) {
  console.log(dailyActivity);
  dailyActivities2.push(dailyActivities[dailyActivity].toUpperCase());
}
console.log(dailyActivities2);

// Example 2: Filtering even numbers and squaring them
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);
const squaredNumbers = evenNumbers.map(number => number ** 2);

console.log(evenNumbers); // Output: [2, 4, 6]
console.log(squaredNumbers); // Output: [4, 16, 36]

// Example 3: Conditional initialization and array mapping
const tasks = initialData ? ["code", "review", "test"] : [];
const tasksUppercase = tasks.map(task => task.toUpperCase());

console.log(tasksUppercase); // If initialData is true, output: ["CODE", "REVIEW", "TEST"]

// Example 4: Array of objects and conditional modification
const users = [
  { name: "John", age: 28 },
  { name: "Jane", age: 25 },
  { name: "Doe", age: 30 }
];

const userNames = users.map(user => {
  return user.age > 27 ? user.name.toUpperCase() : user.name;
});

console.log(userNames); // Output: ["JOHN", "Jane", "DOE"]

// Example 5: Using for...in with conditional logic inside a loop
const groceries = ["apple", "banana", "orange"];
const updatedGroceries = [];

for (let i in groceries) {
  if (groceries[i].length > 5) {
    updatedGroceries.push(groceries[i].toUpperCase());
  }
}

console.log(updatedGroceries); // Output: ["BANANA", "ORANGE"]

// Example 6: Array reduction and manipulation
const expenses = [100, 50, 150, 200];
const totalExpenses = expenses.reduce((total, expense) => total + expense, 0);
const expenseCategories = expenses.map(expense => (expense > 100 ? "High" : "Low"));

console.log(totalExpenses); // Output: 500
console.log(expenseCategories); // Output: ["Low", "Low", "High", "High"]
