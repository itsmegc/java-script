// Object inside array

const users = [
  { id: 1, name: "gaurav" },
  { id: 2, name: "rohit" },
  { id: 3, name: "rahul" },
];

// console.log(users);

// for (let user of users) {
//   console.log(user);
// }


// nested destructuring 

// const[user1,user2,user3]=users

// console.log(user1);
// console.log(user2);
// console.log(user3);


const [{name:firstName}, , {id}] = users;

console.log(firstName);
console.log(id);

// example

const Teachers = [
  {
      name: 'saritha',
      subject: 'Maths'
  },
  {
      name: 'ahim',
      subject: 'science'
  },
  {
      name: 'sneha',
      subject: 'Social'
  }]

Teachers.forEach(teacher => {
  for (let value in teacher) {
      console.log(`${teacher[value]}`)
  }
})
