const useMethod = {
  about() {
    return `${this.firstName} ${this.lastName} age is ${this.age}, email id is ${this.email}, and address is ${this.address}`;
  },
  is18() {
    return this.age >= 18;
  },
  sing() {
    return "Kitni dafa";
  },
  updateEmail(newEmail) {
    this.email = newEmail;
    return `Email updated to ${this.email}`;
  },
  updateAddress(newAddress) {
    this.address = newAddress;
    return `Address updated to ${this.address}`;
  },
};

function createUser(firstName, lastName, email, age, address) {
  return {
    firstName,
    lastName,
    email,
    age,
    address,
    ...useMethod,
  };
}

const userManager = {
  users: [],
  
  addUser(firstName, lastName, email, age, address) {
    const newUser = createUser(firstName, lastName, email, age, address);
    this.users.push(newUser);
    return newUser;
  },
  
  findUserByEmail(email) {
    return this.users.find(user => user.email === email);
  },
  
  removeUserByEmail(email) {
    const index = this.users.findIndex(user => user.email === email);
    if (index !== -1) {
      const removedUser = this.users.splice(index, 1);
      return `User ${removedUser[0].firstName} removed successfully.`;
    }
    return 'User not found.';
  },
  
  listAllUsers() {
    return this.users.map(user => user.about()).join('\n');
  },
  
  countAdults() {
    return this.users.filter(user => user.is18()).length;
  },
  
  getUserNames() {
    return this.users.map(user => `${user.firstName} ${user.lastName}`);
  },
  
  updateUserEmail(oldEmail, newEmail) {
    const user = this.findUserByEmail(oldEmail);
    if (user) {
      return user.updateEmail(newEmail);
    }
    return 'User not found.';
  },
  
  updateUserAddress(email, newAddress) {
    const user = this.findUserByEmail(email);
    if (user) {
      return user.updateAddress(newAddress);
    }
    return 'User not found.';
  },
};

// Add Users
userManager.addUser("Sam", "Singh", "sam.singh@yy.com", 17, "Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar, Bangalore-560016");
userManager.addUser("John", "Doe", "john.doe@xy.com", 28, "MG Road 2nd Block, Indiranagar, Bangalore-560038");
userManager.addUser("Ravi", "Kumar", "ravi.kumar@zz.com", 42, "Jayanagar 3rd Block, JP Nagar, Bangalore-560041");
userManager.addUser("Alice", "Smith", "alice.smith@xyz.com", 25, "1st Avenue, New York, NY");
userManager.addUser("Bob", "Johnson", "bob.johnson@abc.com", 19, "2nd Street, Los Angeles, CA");
userManager.addUser("Charlie", "Brown", "charlie.brown@def.com", 22, "3rd Boulevard, Chicago, IL");
userManager.addUser("Daisy", "Williams", "daisy.williams@ghi.com", 30, "4th Lane, Houston, TX");
userManager.addUser("Eve", "Davis", "eve.davis@jkl.com", 27, "5th Road, Phoenix, AZ");
userManager.addUser("Frank", "Miller", "frank.miller@mno.com", 31, "6th Drive, Philadelphia, PA");
userManager.addUser("Grace", "Garcia", "grace.garcia@pqr.com", 18, "7th Place, San Antonio, TX");

// Outputs
console.log("All Users:");
console.log(userManager.listAllUsers());

console.log("\nCounting Adults:");
console.log(`Number of adults: ${userManager.countAdults()}`);

console.log("\nUpdating User Email:");
console.log(userManager.updateUserEmail("john.doe@xy.com", "john.new@xy.com"));
console.log(userManager.findUserByEmail("john.new@xy.com").about());

console.log("\nUpdating User Address:");
console.log(userManager.updateUserAddress("alice.smith@xyz.com", "5th Avenue, New York, NY"));
console.log(userManager.findUserByEmail("alice.smith@xyz.com").about());

console.log("\nRemoving User:");
console.log(userManager.removeUserByEmail("frank.miller@mno.com"));
console.log("Updated User List:");
console.log(userManager.listAllUsers());

console.log("\nGetting User Names:");
console.log(userManager.getUserNames().join(", "));

console.log("\nChecking if users are 18:");
userManager.users.forEach(user => {
  console.log(`${user.firstName} is 18 or older: ${user.is18()}`);
});

console.log("\nSinging:");
userManager.users.forEach(user => {
  if (user.is18()) {
    console.log(user.sing());
  }
});
