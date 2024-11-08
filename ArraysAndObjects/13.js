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

// Example 6: Destructuring Array of Cities
const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
const [city1, city2, ...otherCities] = cities;
console.log(`City 1: ${city1}`); // New York
console.log(`City 2: ${city2}`); // Los Angeles
console.log(`Other cities: ${otherCities}`); // ["Chicago", "Houston", "Phoenix"]

// Example 7: Destructuring Array of Courses
const courses = ["Math", "Science", "History", "Art", "Physical Education"];
const [course1, course2, ...remainingCourses] = courses;
console.log(`Course 1: ${course1}`); // Math
console.log(`Course 2: ${course2}`); // Science
console.log(`Remaining courses: ${remainingCourses}`); // ["History", "Art", "Physical Education"]

// Example 8: Destructuring Array of Languages
const languages = ["English", "Spanish", "French", "German", "Japanese"];
const [lang1, lang2, ...otherLanguages] = languages;
console.log(`Language 1: ${lang1}`); // English
console.log(`Language 2: ${lang2}`); // Spanish
console.log(`Other languages: ${otherLanguages}`); // ["French", "German", "Japanese"]

// Example 9: Destructuring Array of Animals
const animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra"];
const [animal1, animal2, ...remainingAnimals] = animals;
console.log(`Animal 1: ${animal1}`); // Lion
console.log(`Animal 2: ${animal2}`); // Tiger
console.log(`Remaining animals: ${remainingAnimals}`); // ["Elephant", "Giraffe", "Zebra"]

// Example 10: Destructuring Array of Devices
const devices = ["Laptop", "Tablet", "Smartphone", "Smartwatch", "Camera"];
const [device1, device2, ...otherDevices] = devices;
console.log(`Device 1: ${device1}`); // Laptop
console.log(`Device 2: ${device2}`); // Tablet
console.log(`Other devices: ${otherDevices}`); // ["Smartphone", "Smartwatch", "Camera"]
