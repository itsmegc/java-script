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

const dailyActivities = ["eat", "work", "sleep"];
const dailyActivities2 = [];

for (let dailyActivity in dailyActivities) {
  console.log(dailyActivity);
  dailyActivities2.push(dailyActivities[dailyActivity].toUpperCase());
}
console.log(dailyActivities2);
