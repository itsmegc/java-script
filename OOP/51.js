const useMethod = {
  about: function () {
    return `${this.firstName + " " + this.lastName} age is ${
      this.age
    }, email id is ${this.email}, and address is ${this.address}`;
  },
  is18: function () {
    return this.age >= 18;
  },
  sing: function () {
    return "Kitni dafa";
  },
};

function createUsers(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = useMethod.about;
  user.is18 = useMethod.is18;
  user.sing = useMethod.sing;
  return user;
}

// Example 1
const user1 = createUsers(
  "Sam",
  "Singh",
  "sam.singh@yy.com",
  17,
  "Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar, Bangalore-560016"
);
console.log(user1.about()); // "Sam Singh age is 17, email id is sam.singh@yy.com, and address is Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar, Bangalore-560016"
console.log(user1.is18()); // false
console.log(user1.sing()); // "Kitni dafa"

// Example 2
const user2 = createUsers(
  "John",
  "Doe",
  "john.doe@xy.com",
  28,
  "MG Road 2nd Block, Indiranagar, Bangalore-560038"
);
console.log(user2.about()); // "John Doe age is 28, email id is john.doe@xy.com, and address is MG Road 2nd Block, Indiranagar, Bangalore-560038"
console.log(user2.is18()); // true
console.log(user2.sing()); // "Kitni dafa"

// Example 3
const user3 = createUsers(
  "Ravi",
  "Kumar",
  "ravi.kumar@zz.com",
  42,
  "Jayanagar 3rd Block, JP Nagar, Bangalore-560041"
);
console.log(user3.about()); // "Ravi Kumar age is 42, email id is ravi.kumar@zz.com, and address is Jayanagar 3rd Block, JP Nagar, Bangalore-560041"
console.log(user3.is18()); // true
console.log(user3.sing()); // "Kitni dafa"

// Example 4: Teen User
const user4 = createUsers(
  "Lily",
  "Brown",
  "lily.brown@abc.com",
  16,
  "Richmond Circle, Bangalore-560001"
);
console.log(user4.about()); // "Lily Brown age is 16, email id is lily.brown@abc.com, and address is Richmond Circle, Bangalore-560001"
console.log(user4.is18()); // false
console.log(user4.sing()); // "Kitni dafa"

// Example 5: User with Short Address
const user5 = createUsers(
  "Mike",
  "Adams",
  "mike.adams@efg.com",
  35,
  "Koramangala, Bangalore"
);
console.log(user5.about()); // "Mike Adams age is 35, email id is mike.adams@efg.com, and address is Koramangala, Bangalore"
console.log(user5.is18()); // true
console.log(user5.sing()); // "Kitni dafa"

// Example 6: User with International Address
const user6 = createUsers(
  "Emma",
  "Watson",
  "emma.watson@xyz.co.uk",
  30,
  "Oxford Street, London, UK"
);
console.log(user6.about()); // "Emma Watson age is 30, email id is emma.watson@xyz.co.uk, and address is Oxford Street, London, UK"
console.log(user6.is18()); // true
console.log(user6.sing()); // "Kitni dafa"

// Example 7: User with Long Name
const user7 = createUsers(
  "Alexander",
  "Maximilian",
  "alex.max@hijk.com",
  22,
  "Broadway, New York, NY 10012"
);
console.log(user7.about()); // "Alexander Maximilian age is 22, email id is alex.max@hijk.com, and address is Broadway, New York, NY 10012"
console.log(user7.is18()); // true
console.log(user7.sing()); // "Kitni dafa"

// Example 8: User with Numeric Age as String
const user8 = createUsers(
  "Bruce",
  "Wayne",
  "bruce.wayne@gotham.com",
  "45",
  "Wayne Manor, Gotham City"
);
console.log(user8.about()); // "Bruce Wayne age is 45, email id is bruce.wayne@gotham.com, and address is Wayne Manor, Gotham City"
console.log(user8.is18()); // true (because "45" == 45 in non-strict comparison)
console.log(user8.sing()); // "Kitni dafa"

// Example 9: User with Missing Address
const user9 = createUsers(
  "Clark",
  "Kent",
  "clark.kent@dailyplanet.com",
  35,
  null
);
console.log(user9.about()); // "Clark Kent age is 35, email id is clark.kent@dailyplanet.com, and address is null"
console.log(user9.is18()); // true
console.log(user9.sing()); // "Kitni dafa"

// Example 10: Young User
const user10 = createUsers(
  "Tim",
  "Drake",
  "tim.drake@robin.com",
  15,
  "Blüdhaven"
);
console.log(user10.about()); // "Tim Drake age is 15, email id is tim.drake@robin.com, and address is Blüdhaven"
console.log(user10.is18()); // false
console.log(user10.sing()); // "Kitni dafa"
