// primitive vs reference data types

// *************************** Primitive Data Types ***************************

// Example 1: Number
let num1 = 6;
let num2 = num1;
console.log(`value of num 1 is ${num1}`); // value of num 1 is 6
console.log(`value of num 2 is ${num2}`); // value of num 2 is 6
num1++;
console.log("after incrementing num 1");
console.log(`value of num 1 is ${num1}`); // value of num 1 is 7
console.log(`value of num 2 is ${num2}`); // value of num 2 is 6

// Example 2: String
let str1 = "Hello";
let str2 = str1;
console.log(`value of str 1 is ${str1}`); // value of str 1 is Hello
console.log(`value of str 2 is ${str2}`); // value of str 2 is Hello
str1 += " World";
console.log("after concatenating ' World'");
console.log(`value of str 1 is ${str1}`); // value of str 1 is Hello World
console.log(`value of str 2 is ${str2}`); // value of str 2 is Hello

// Example 3: Boolean
let bool1 = true;
let bool2 = bool1;
console.log(`value of bool 1 is ${bool1}`); // value of bool 1 is true
console.log(`value of bool 2 is ${bool2}`); // value of bool 2 is true
bool1 = false;
console.log("after setting bool 1 to false");
console.log(`value of bool 1 is ${bool1}`); // value of bool 1 is false
console.log(`value of bool 2 is ${bool2}`); // value of bool 2 is true

// Example 4: Null
let null1 = null;
let null2 = null1;
console.log(`value of null 1 is ${null1}`); // value of null 1 is null
console.log(`value of null 2 is ${null2}`); // value of null 2 is null
null1 = "Not null anymore";
console.log("after changing null 1 to a string");
console.log(`value of null 1 is ${null1}`); // value of null 1 is Not null anymore
console.log(`value of null 2 is ${null2}`); // value of null 2 is null

// Example 5: Undefined
let undef1;
let undef2 = undef1;
console.log(`value of undef 1 is ${undef1}`); // value of undef 1 is undefined
console.log(`value of undef 2 is ${undef2}`); // value of undef 2 is undefined
undef1 = "Now defined";
console.log("after assigning a value to undef 1");
console.log(`value of undef 1 is ${undef1}`); // value of undef 1 is Now defined
console.log(`value of undef 2 is ${undef2}`); // value of undef 2 is undefined

// *************************** Reference Data Types ***************************

// Example 6: Array
let array1 = ["item1", "item2"];
let array2 = array1;
console.log(`value of array 1 is ${array1}`); // value of array 1 is item1,item2
console.log(`value of array 2 is ${array2}`); // value of array 2 is item1,item2
array1.push("item3");
console.log("after push item 3");
console.log(`value of array 1 is ${array1}`); // value of array 1 is item1,item2,item3
console.log(`value of array 2 is ${array2}`); // value of array 2 is item1,item2,item3

// Example 7: Object
let obj1 = { key: "value1" };
let obj2 = obj1;
console.log(`value of obj 1 is ${JSON.stringify(obj1)}`); // value of obj 1 is {"key":"value1"}
console.log(`value of obj 2 is ${JSON.stringify(obj2)}`); // value of obj 2 is {"key":"value1"}
obj1.key = "value2";
console.log("after changing obj 1 key to value2");
console.log(`value of obj 1 is ${JSON.stringify(obj1)}`); // value of obj 1 is {"key":"value2"}
console.log(`value of obj 2 is ${JSON.stringify(obj2)}`); // value of obj 2 is {"key":"value2"}

// Example 8: Function
function greet() {
    return "Hello!";
}
let greetFunc1 = greet;
let greetFunc2 = greetFunc1;
console.log(`value of greetFunc1 is ${greetFunc1()}`); // value of greetFunc1 is Hello!
console.log(`value of greetFunc2 is ${greetFunc2()}`); // value of greetFunc2 is Hello!
greetFunc1 = function() {
    return "Hi!";
};
console.log("after changing greetFunc1");
console.log(`value of greetFunc1 is ${greetFunc1()}`); // value of greetFunc1 is Hi!
console.log(`value of greetFunc2 is ${greetFunc2()}`); // value of greetFunc2 is Hello!

// Example 9: Date Object
let date1 = new Date();
let date2 = date1;
console.log(`value of date 1 is ${date1}`); // value of date 1 is current date
console.log(`value of date 2 is ${date2}`); // value of date 2 is current date
date1.setFullYear(2025);
console.log("after changing date 1 year to 2025");
console.log(`value of date 1 is ${date1}`); // value of date 1 is date in 2025
console.log(`value of date 2 is ${date2}`); // value of date 2 is date in 2025

// Example 10: Regular Expression
let regex1 = /abc/;
let regex2 = regex1;
console.log(`value of regex 1 is ${regex1}`); // value of regex 1 is /abc/
console.log(`value of regex 2 is ${regex2}`); // value of regex 2 is /abc/
regex1 = /xyz/;
console.log("after changing regex 1 to /xyz/");
console.log(`value of regex 1 is ${regex1}`); // value of regex 1 is /xyz/
console.log(`value of regex 2 is ${regex2}`); // value of regex 2 is /abc/
