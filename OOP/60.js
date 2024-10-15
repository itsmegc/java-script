class Animals {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
  isSuperCute() {
    return this.age < 2;
  }
  isCute() {
    return true;
  }
}

// const animal1 = new Animals("Leo", 1); // pass name and age
// console.log(animal1.eat()); // Output: "Leo is eating"
// console.log(animal1.isSuperCute());
// console.log(animal1.isCute());

// dog class  rework

// class Dog {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     return `${this.name} is eating`;
//   }
//   isSuperCute() {
//     return this.age < 2;
//   }
//   isCute() {
//     return true;
//   }
// }

// const tommy = new Dog("tommy", 3);
// console.log(tommy.eat()); // Output: "Leo is eating"
// console.log(tommy.isSuperCute());
// console.log(tommy.isCute());


class Dog extends Animals {
}


const tommy = new Dog("tommy", 3);
console.log(tommy.eat()); // Output: "Leo is eating"
console.log(tommy.isSuperCute());
console.log(tommy.isCute());

// class Cat extends Dog {
// }

// const karuna = new Cat("karu", 3);
// console.log(karuna.eat()); // Output: "Leo is eating"
// console.log(karuna.isSuperCute());
// console.log(karuna.isCute());
