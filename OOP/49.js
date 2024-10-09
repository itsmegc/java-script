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

const userX = createUsers(
  "Sam",
  "Singh",
  "sam.singh@yy.com",
  35,
  "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016"
);

console.log(userX);
console.log(userX.about());
console.log(userX.is18());

// Example

const user1 = createUsers(
  "Sam",
  "Singh",
  "sam.singh@yy.com",
  35,
  "Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar, Bangalore-560016"
);

const user2 = createUsers(
  "Emily",
  "Johnson",
  "emily.johnson@example.com",
  22,
  "123 Main St, Springfield, IL"
);

const user3 = createUsers(
  "Michael",
  "Smith",
  "michael.smith@webmail.com",
  17,
  "456 Elm St, New York, NY"
);

const user4 = createUsers(
  "Jessica",
  "Brown",
  "jessica.brown@mail.com",
  28,
  "789 Oak St, Los Angeles, CA"
);

const user5 = createUsers(
  "David",
  "Williams",
  "david.williams@hotmail.com",
  45,
  "321 Maple St, Miami, FL"
);

const user6 = createUsers(
  "Sophia",
  "Davis",
  "sophia.davis@xyz.com",
  30,
  "654 Pine St, Seattle, WA"
);

const user7 = createUsers(
  "Daniel",
  "Garcia",
  "daniel.garcia@gmail.com",
  16,
  "987 Cedar St, Austin, TX"
);

const user8 = createUsers(
  "Olivia",
  "Martinez",
  "olivia.martinez@yahoo.com",
  29,
  "234 Birch St, Denver, CO"
);

const user9 = createUsers(
  "James",
  "Hernandez",
  "james.hernandez@outlook.com",
  52,
  "456 Walnut St, Boston, MA"
);

const user10 = createUsers(
  "Ava",
  "Lopez",
  "ava.lopez@site.com",
  19,
  "789 Spruce St, San Francisco, CA"
);

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);
console.log(user6);
console.log(user7);
console.log(user8);
console.log(user9);
console.log(user10);
console.log(user1.about());
console.log(user1.is18());
console.log(user2.about());
console.log(user2.is18());
console.log(user3.about());
console.log(user3.is18());
console.log(user4.about());
console.log(user4.is18());
console.log(user5.about());
console.log(user5.is18());
console.log(user6.about());
console.log(user6.is18());
console.log(user7.about());
console.log(user7.is18());
console.log(user8.about());
console.log(user8.is18());
console.log(user9.about());
console.log(user9.is18());
console.log(user10.about());
console.log(user10.is18());
