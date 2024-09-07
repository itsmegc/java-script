// array push and pop
// array shift unshift

let fruits = ["apple", "mango", "grapes"];
console.log("og", fruits); // og (3) ['apple', 'mango', 'grapes']

// push

fruits.push("banana"); //add value in last
console.log("push", fruits); // push (4) ['apple', 'mango', 'grapes', 'banana']

// pop

let poppedFruit = fruits.pop(); // remove from last and give return
console.log("pop", fruits); //  pop (3) ['apple', 'mango', 'grapes']
console.log("pop up fruit is ", poppedFruit); // pop up fruit is  banana

// unshift

fruits.unshift("orange"); //add value in start
console.log("unshift fruit is ", fruits); // unshift fruit is  (4) ['orange', 'apple', 'mango', 'grapes']

// shift

let shiftFruit = fruits.shift(); // pop up from start and give return
console.log("shift fruit is ", fruits); // shift fruit is  (3) ['apple', 'mango', 'grapes']
console.log("shiftFruit fruit is ", shiftFruit); // shiftFruit fruit is  orange
