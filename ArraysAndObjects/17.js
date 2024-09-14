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
