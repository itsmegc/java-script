// Original Code: Array push and pop, shift and unshift

let fruits = ["apple", "mango", "grapes"];
console.log("og", fruits); // og (3) ['apple', 'mango', 'grapes']

// push
fruits.push("banana"); // Add value to the end
console.log("push", fruits); // push (4) ['apple', 'mango', 'grapes', 'banana']

// pop
let poppedFruit = fruits.pop(); // Remove from last and return the removed element
console.log("pop", fruits); // pop (3) ['apple', 'mango', 'grapes']
console.log("pop up fruit is ", poppedFruit); // pop up fruit is banana

// unshift
fruits.unshift("orange"); // Add value to the beginning
console.log("unshift fruit is ", fruits); // unshift fruit is (4) ['orange', 'apple', 'mango', 'grapes']

// shift
let shiftFruit = fruits.shift(); // Remove from start and return the removed element
console.log("shift fruit is ", fruits); // shift fruit is (3) ['apple', 'mango', 'grapes']
console.log("shiftFruit fruit is ", shiftFruit); // shiftFruit fruit is orange

// Example 1: Manipulating an array of numbers
let numbers = [10, 20, 30, 40];
console.log("Original numbers:", numbers); // [10, 20, 30, 40]

// push
numbers.push(50);
console.log("After push:", numbers); // [10, 20, 30, 40, 50]

// pop
let lastNumber = numbers.pop();
console.log("After pop:", numbers); // [10, 20, 30, 40]
console.log("Popped number:", lastNumber); // 50

// unshift
numbers.unshift(5);
console.log("After unshift:", numbers); // [5, 10, 20, 30, 40]

// shift
let firstNumber = numbers.shift();
console.log("After shift:", numbers); // [10, 20, 30, 40]
console.log("Shifted number:", firstNumber); // 5

// Example 2: Array of strings
let cities = ["New York", "Los Angeles", "Chicago"];
console.log("Original cities:", cities); // ['New York', 'Los Angeles', 'Chicago']

// push
cities.push("Houston");
console.log("After push:", cities); // ['New York', 'Los Angeles', 'Chicago', 'Houston']

// pop
let lastCity = cities.pop();
console.log("After pop:", cities); // ['New York', 'Los Angeles', 'Chicago']
console.log("Popped city:", lastCity); // Houston

// unshift
cities.unshift("Miami");
console.log("After unshift:", cities); // ['Miami', 'New York', 'Los Angeles', 'Chicago']

// shift
let firstCity = cities.shift();
console.log("After shift:", cities); // ['New York', 'Los Angeles', 'Chicago']
console.log("Shifted city:", firstCity); // Miami

// Example 3: Array of boolean values
let flags = [true, false, true];
console.log("Original flags:", flags); // [true, false, true]

// push
flags.push(false);
console.log("After push:", flags); // [true, false, true, false]

// pop
let lastFlag = flags.pop();
console.log("After pop:", flags); // [true, false, true]
console.log("Popped flag:", lastFlag); // false

// unshift
flags.unshift(false);
console.log("After unshift:", flags); // [false, true, false, true]

// shift
let firstFlag = flags.shift();
console.log("After shift:", flags); // [true, false, true]
console.log("Shifted flag:", firstFlag); // false

// Example 4: Array of objects
let users = [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}];
console.log("Original users:", users);

// push
users.push({name: "Dave"});
console.log("After push:", users); // [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}, {name: 'Dave'}]

// pop
let lastUser = users.pop();
console.log("After pop:", users); // [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}]
console.log("Popped user:", lastUser); // {name: "Dave"}

// unshift
users.unshift({name: "Eve"});
console.log("After unshift:", users); // [{name: 'Eve'}, {name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}]

// shift
let firstUser = users.shift();
console.log("After shift:", users); // [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}]
console.log("Shifted user:", firstUser); // {name: "Eve"}

// Example 5: Array of mixed data types
let mixedArray = [42, "hello", true, {key: "value"}];
console.log("Original mixed array:", mixedArray);

// push
mixedArray.push([1, 2, 3]);
console.log("After push:", mixedArray); // [42, 'hello', true, {key: 'value'}, [1, 2, 3]]

// pop
let lastElement = mixedArray.pop();
console.log("After pop:", mixedArray); // [42, 'hello', true, {key: 'value'}]
console.log("Popped element:", lastElement); // [1, 2, 3]

// unshift
mixedArray.unshift(null);
console.log("After unshift:", mixedArray); // [null, 42, 'hello', true, {key: 'value'}]

// shift
let firstElement = mixedArray.shift();
console.log("After shift:", mixedArray); // [42, 'hello', true, {key: 'value'}]
console.log("Shifted element:", firstElement); // null
