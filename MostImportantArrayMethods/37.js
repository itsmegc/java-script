// splice method

// start delete, insert

const myArray = ["item1", "item2", "item3"];

// delete

// const deletedItem = myArray.splice(0,1)

// console.log(deletedItem)

// insert
// myArray.splice(0,1,'insert item')

// insert and delete

const deletedItems = myArray.splice(1, 2, "insert 1", "insert 2");

console.log("myArray", myArray);
console.log("deletedItems", deletedItems);
