// Iterables
// Iterables are where we can apply for of loop

const firstName = "Gaurav";

for (let char of firstName) {
  console.log(char);
}

const arr = [1, 2, 3];
for (const item of arr) {
  console.log(item); // Outputs: 1, 2, 3
}

// array like objects
// which have length property
// which we can access from index

const secondName = "Chand";

console.log('array like objects length',secondName?.length)
console.log(secondName[3])