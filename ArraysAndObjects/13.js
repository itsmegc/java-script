"use strict";

// array destructuring

const myArray = ["value1", "value2","value3","value4"];

// let myValue1 = myArray[0];
// let myValue2 = myArray[1];
// console.log(`value of my value 1 ${myValue1}`);
// console.log(`value of my value 2 ${myValue2}`);

const [myValue1, myValue2,...myNewArray] = myArray; // use spread operator to set remaining array
console.log(`value of my value 1 ${myValue1}`);
console.log(`value of my value 2 ${myValue2}`);
console.log(`value of my  array ${myNewArray}`);



// Example 1: Basic Array Destructuring with Spread Operator
const fruits = ["Apple", "Banana", "Mango", "Grapes"];
const [fruit1, fruit2, ...remainingFruits] = fruits;
console.log(`First fruit: ${fruit1}`); // Apple
console.log(`Second fruit: ${fruit2}`); // Banana
console.log(`Remaining fruits: ${remainingFruits}`); // ["Mango", "Grapes"]

// Example 2: Destructuring Colors Array
const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
const [primary1, primary2, ...otherColors] = colors;
console.log(`Primary color 1: ${primary1}`); // Red
console.log(`Primary color 2: ${primary2}`); // Blue
console.log(`Other colors: ${otherColors}`); // ["Green", "Yellow", "Purple"]

// Example 3: Extracting Favorite Movies
const movies = ["Inception", "The Matrix", "Interstellar", "Avatar"];
const [favMovie1, favMovie2, ...otherMovies] = movies;
console.log(`Favorite movie 1: ${favMovie1}`); // Inception
console.log(`Favorite movie 2: ${favMovie2}`); // The Matrix
console.log(`Other movies: ${otherMovies}`); // ["Interstellar", "Avatar"]

// Example 4: Destructuring Names Array
const names = ["Alice", "Bob", "Charlie", "David", "Emma"];
const [name1, name2, ...remainingNames] = names;
console.log(`Name 1: ${name1}`); // Alice
console.log(`Name 2: ${name2}`); // Bob
console.log(`Remaining names: ${remainingNames}`); // ["Charlie", "David", "Emma"]

// Example 5: Extracting Tasks with Spread Operator
const tasks = ["Task1", "Task2", "Task3", "Task4", "Task5"];
const [task1, task2, ...otherTasks] = tasks;
console.log(`Task 1: ${task1}`); // Task1
console.log(`Task 2: ${task2}`); // Task2
console.log(`Other tasks: ${otherTasks}`); // ["Task3", "Task4", "Task5"]
