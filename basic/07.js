"use strict";

// ***************************** while loop *****************************

// 0 to 9
// let i = 0;

// while (i <= 9) {
//   console.log(i);
//   i++;
// }

let num = 10;

let total = 0;

let i = 0;

while (i <= num) {
  total = total + i;
  i++;
}
console.log(total);

// ***************************** for loop *****************************

// for (var j = 10; j <= 20; j++) {
//   console.log(j);
// }
// console.log('value of j is ' + j);

let totalF = 0;

for (let j = 1; j <= 10; j++) {
  totalF = totalF + j;
}
console.log(totalF);

// ***************************** do-while loop *****************************
let k = 29;

do {
  console.log(k);
  k++;
} while (k <= 30);


