const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = {
  key3: "value2",
};

<<<<<<< HEAD
console.log(obj2);
=======

const users = [
  createUser("Sam", "Singh", "sam.singh@yy.com", 17, "Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar, Bangalore-560016"),
  createUser("John", "Doe", "john.doe@xy.com", 28, "MG Road 2nd Block, Indiranagar, Bangalore-560038"),
  createUser("Ravi", "Kumar", "ravi.kumar@zz.com", 42, "Jayanagar 3rd Block, JP Nagar, Bangalore-560041"),
];

// Output
users.forEach(user => {
  console.log(user.about());
  console.log(`Is ${user.firstName} 18 or older? ${user.is18()}`);
  if (user.is18()) {
    console.log(user.sing());
  }
});
>>>>>>> 0358815 (git)
