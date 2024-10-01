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


// Examples

// Example 1: Delete elements from an array
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// Deleting two items starting from index 1
const removedFruits = fruits.splice(1, 2);

// Logs ['Banana', 'Cherry'], which are the removed items
console.log("Removed Fruits:", removedFruits);
// Logs ['Apple', 'Date', 'Elderberry'], the updated array
console.log("Updated Fruits:", fruits);

// Example 2: Insert elements into an array
const colors = ["Red", "Green", "Blue"];

// Inserting two new colors at index 1
colors.splice(1, 0, "Yellow", "Purple");

// Logs ['Red', 'Yellow', 'Purple', 'Green', 'Blue']
console.log("Updated Colors:", colors);

// Example 3: Replace elements in an array
const cars = ["BMW", "Tesla", "Mercedes", "Audi"];

// Replacing two items starting at index 2
const replacedCars = cars.splice(2, 2, "Porsche", "Ferrari");

// Logs ['Mercedes', 'Audi'], the replaced items
console.log("Replaced Cars:", replacedCars);
// Logs ['BMW', 'Tesla', 'Porsche', 'Ferrari'], the updated array
console.log("Updated Cars:", cars);

// Example 4: Delete all items from an index to the end
const numbers = [1, 2, 3, 4, 5, 6];

// Deleting all items starting from index 3
const deletedNumbers = numbers.splice(3);

// Logs [4, 5, 6], the deleted numbers
console.log("Deleted Numbers:", deletedNumbers);
// Logs [1, 2, 3], the remaining array
console.log("Remaining Numbers:", numbers);

// Example 5: Insert elements at the end of the array
const animals = ["Dog", "Cat", "Horse"];

// Inserting two animals at the end of the array
animals.splice(animals.length, 0, "Elephant", "Giraffe");

// Logs ['Dog', 'Cat', 'Horse', 'Elephant', 'Giraffe'], the updated array
console.log("Updated Animals:", animals);
