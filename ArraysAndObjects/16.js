"use strict";

// computed properties

const key1 = "object1";
const key2 = "object2";

const value1 = "myValue1";
const value2 = "myValue2";

// let obj={
//     key1: value1,
//     key2:value2
// }

// let obj={
//     [key1]: value1,   // correct way
//     [key2]:value2
// }

let obj = {};
obj[key1] = value1;
obj[key2] = value2;

console.log(obj);
