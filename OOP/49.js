// ************* proto,proto type, class **************

// const user = {
//   firstName: "Sam",
//   lastName: "Singh",
//   email: "sam.singh@yy.com",
//   age: 35,
//   address: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
//   about: function () {
//     return `${this.firstName + " " + this.lastName} age is ${
//       this.age
//     } email id is ${this.email} and address is ${this.address}`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

// console.log(user.about());
// console.log(user.is18());

// function (that function create object)
// add key value pair
// object ko return krega

function createUsers(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    return `${this.firstName + " " + this.lastName} age is ${
      this.age
    } email id is ${this.email} and address is ${this.address}`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };
  return user;
}

const user1 = createUsers(
  "Sam",
  "Singh",
  "sam.singh@yy.com",
  35,
  "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016"
);

console.log(user1);
console.log(user1.about());
console.log(user1.is18());
