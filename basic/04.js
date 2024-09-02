"use strict";

// String Indexing

let firstName = "Batman";

console.log(firstName[3]); // Index start from 0

console.log(firstName?.length);

console.log(firstName[firstName?.length - 1]); // Last string

// trim()

let secondName = "  Joker  ";

console.log(secondName?.length);

console.log(secondName?.trim()?.length);

// toUpperCase()

let thirdName = "cat women";

console.log(thirdName?.toUpperCase());

// toLowerCase()

let fourthName = "NIGHT WING";

console.log(fourthName?.toLowerCase());

// slice()

let fifthName = "I am vengeance and you";

console.log(fifthName);

fifthName=fifthName?.slice(0,14);

console.log(fifthName);

console.log(fifthName.slice(5)); // single pass it start from 5 till the end 
