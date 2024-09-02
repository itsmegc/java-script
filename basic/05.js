"use strict";

// *********** Template string ***********

let myName = "Bruce Wane";
let myAge = 32;

let myTemplate = `My name is ${myName} and my age is ${myAge}.`;

console.log(myTemplate);

// *********** undefine ***********

var var_undefine;

console.log(var_undefine);

let let_undefine;

console.log(let_undefine);

// const const_undefine; //  const need to be define can't be undefine

// *********** null ***********
let null_variable = null;
console.log(null_variable);
console.log(typeof null_variable); // *** bug null show always object 

// *********** BigInt ***********

let myNumber=1234567899999999999999999999;

console.log(myNumber) // 1.2345679e+39

console.log(Number.MAX_SAFE_INTEGER)  // 9007199254740991

let bigNumber= BigInt(1234567899999999999999999999)
let anotherWayBig= 1234567899999999999999999999n

console.log(bigNumber) // 1234567899999999954333466624n
console.log(anotherWayBig) // 1234567899999999999999999999n

// important BigInt cant be calculate with simple number only do operation with BigInt

