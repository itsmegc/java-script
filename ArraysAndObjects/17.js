 // spread operator

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// // const newArray = [...array1,...array2,8969];
// const newArray = [..."abc"];
// console.log(newArray);


// spread operator in objects

const obj1={
    key1:"value1",// this will over ride to key1 from obj 2 if it call 2nd
    key2:"value2",
    // key1:"value54",  // this will over ride to key1

}

const obj2={
    key1:"ccc",// this will over ride to key1 from obj 1 if it call 2nd

    key3:"value3",
    key4:"value4",

}

// const newObj={...obj1,...obj2}
const newObj={...obj2,...obj1}
console.log(newObj);


const obj10 = { ..."abc" };
console.log(obj10);


// example 

// Example 1: Spread Operator with Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Merging two arrays and adding an extra element
const newArray1 = [...array1, ...array2, 8969];
console.log("Example 1 - Merged Arrays:", newArray1); 
// Output: [1, 2, 3, 4, 5, 6, 8969]

// Example 2: Spread Operator in Arrays (String to Array)
const newArray2 = [..."abc"];
console.log("Example 2 - Spread String to Array:", newArray2); 
// Output: ['a', 'b', 'c']

// Example 3: Spread Operator with Objects (Merging)
const obj1 = {
    key1: "value1",
    key2: "value2"
};

const obj2 = {
    key3: "value3",
    key4: "value4"
};

// Merging two objects using the spread operator
const newObj1 = { ...obj1, ...obj2 };
console.log("Example 3 - Merged Objects:", newObj1); 
// Output: { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' }

// Example 4: Spread Operator with Objects (Overriding Values)
const obj3 = {
    key1: "value1",
    key2: "value2"
};

const obj4 = {
    key1: "overrideValue", // This will override key1 from obj3
    key3: "value3"
};

// obj4 overwrites obj3's key1 when merged
const newObj2 = { ...obj3, ...obj4 };
console.log("Example 4 - Object with Overridden Value:", newObj2); 
// Output: { key1: 'overrideValue', key2: 'value2', key3: 'value3' }

// Example 5: Spread Operator on String (Object Creation)
const obj5 = { ..."abc" };
console.log("Example 5 - Spread String into Object:", obj5); 
// Output: { 0: 'a', 1: 'b', 2: 'c' }
