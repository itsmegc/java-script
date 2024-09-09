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


//Example 1

let dailyActivities = [ "eat", "work", "sleep"];

// change the second element
// use array index 1
dailyActivities[1] = "exercise";

console.log(dailyActivities);

// Output: [ 'eat', 'exercise', 'sleep' ]

var emp=["Sonoo","Vimal","Ratan"];  
for (i=0;i<emp.length;i++){  
console.log(emp[i] + "<br/>");  
}  

//Example 2

let arr = [{
    id: 1,
    name: 'John'
},
{
    id: 2,
    name: 'Jane'
},
{
    id: 3,
    name: 'Bob'
},
{
    id: 4,
    name: 'Alice'
}
];

arr = arr.filter(item => item.id !== 2);

console.log(arr);

//Example 3

let arr = [{
    id: 1,
    name: 'John'
},
{
    id: 2,
    name: 'Jane'
},
{
    id: 3,
    name: 'Bob'
},
{
    id: 4,
    name: 'Alice'
}
];

arr.forEach((item, index) => {
    if (item.id === 2) {
        arr.splice(index, 1);
    }
});

console.log(arr);


//Example 3

let arr3 = [{
    id: 1,
    name: 'John'
},
{
    id: 2,
    name: 'Jane'
},
{
    id: 3,
    name: 'Bob'
},
{
    id: 4,
    name: 'Alice'
}
];

arr3.forEach((item, index) => {
    if (item.id === 2) {
        arr3.splice(index, 1);
    }
});

console.log(arr3);
