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


