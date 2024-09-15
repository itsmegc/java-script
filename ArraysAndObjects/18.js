// destructuring in objects

const band = { bandName: "Linkin park", famousSong: "Numb", year: 1995 };

// const {bandName,famousSong}=band;
const { bandName: var1, ...restVal } = band;

// console.log(famousSong)

console.log(var1);
console.log(restVal);
