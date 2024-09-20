// important array method

// map
// filter
// reduce

const numbers = [12, 3, 4, 5];

// function multipleByTwo(number, index) {
//   console.log("index is", index);
//   console.log(`${number} x 2 = ${number * 2}`);
// }

// multipleByTwo(numbers[0], 0);

// for (let i = 0; i < numbers.length; i++) {
//   //   console.log("index is", i);
//   multipleByTwo(numbers[i], i);
// }

// numbers.forEach(multipleByTwo);

// forEach

numbers.forEach(function (number, index) {
  console.log("index is", index);
  console.log(`${number} x 2 = ${number * 2}`);
});

numbers.forEach(function (number) {
  console.log(number * 2);
});
