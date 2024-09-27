// clone using Object.assign

const obj1 = {
  key1: "val",
  key2: "val2",
};

// const obj2 = {...obj1};
const obj2 = Object.assign({}, obj1);
obj1.key3 = "val3";
console.log(obj1);
console.log(obj2);
