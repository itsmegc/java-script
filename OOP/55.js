// New KeyWord

function createUsers(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}
createUsers.prototype.about = function () {
  console.log(this.firstName, this.age);
};
const user1 = new createUsers("Gaurav", 44);
console.log(user1);
user1.about()

// New keyword
// 1. create empty object this={}
// 2. return this
// 3.  Object.create(createUsers.prototype) 
