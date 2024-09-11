// primitive vs reference data types

// *************************** Primitive Data Types ***************************

let num1 = 6;
let num2 = num1;
console.log(`value of num 1 is ${num1}`); // value of num 1 is 6
console.log(`value of num 2 is ${num2}`); // value of num 2 is 6
num1++;

console.log("after incrementing num 1");
console.log(`value of num 1 is ${num1}`); // value of num 1 is 7
console.log(`value of num 2 is ${num2}`); // value of num 2 is 6

// *************************** Reference Data Types ***************************

// array

let array1 = ["item1", "item2"];
let array2 = array1;
console.log(`value of array 1 is ${array1}`); // value of array 1 is item1,item2
console.log(`value of array 2 is ${array2}`); // value of array 2 is item1,item2
array1.push("item3");
console.log("after push item 3");
console.log(`value of array 1 is ${array1}`); // value of array 1 is item1,item2,item3
console.log(`value of array 2 is ${array2}`); // value of array 2 is item1,item2,item3
