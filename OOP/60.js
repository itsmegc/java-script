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


// Example 1: Bird class
class Bird extends Animals {
  fly() {
    return `${this.name} is flying`;
  }
}

const sparrow = new Bird("Sparrow", 1);
console.log(sparrow.eat()); // Output: "Sparrow is eating"
console.log(sparrow.fly()); // Output: "Sparrow is flying"
console.log(sparrow.isSuperCute());

// Example 2: Fish class
class Fish extends Animals {
  swim() {
    return `${this.name} is swimming`;
  }
}

const nemo = new Fish("Nemo", 2);
console.log(nemo.eat()); // Output: "Nemo is eating"
console.log(nemo.swim()); // Output: "Nemo is swimming"

// Example 3: Rabbit class
class Rabbit extends Animals {
  hop() {
    return `${this.name} is hopping`;
  }
}

const thumper = new Rabbit("Thumper", 1);
console.log(thumper.eat()); // Output: "Thumper is eating"
console.log(thumper.hop()); // Output: "Thumper is hopping"

// Example 4: Elephant class
class Elephant extends Animals {
  trumpet() {
    return `${this.name} is trumpeting`;
  }
}

const dumbo = new Elephant("Dumbo", 5);
console.log(dumbo.eat()); // Output: "Dumbo is eating"
console.log(dumbo.trumpet()); // Output: "Dumbo is trumpeting"

// Example 5: Horse class
class Horse extends Animals {
  gallop() {
    return `${this.name} is galloping`;
  }
}

const spirit = new Horse("Spirit", 3);
console.log(spirit.eat()); // Output: "Spirit is eating"
console.log(spirit.gallop()); // Output: "Spirit is galloping"

// Example 6: Lion class
class Lion extends Animals {
  roar() {
    return `${this.name} is roaring`;
  }
}

const simba = new Lion("Simba", 4);
console.log(simba.eat()); // Output: "Simba is eating"
console.log(simba.roar()); // Output: "Simba is roaring"

// Example 7: Penguin class
class Penguin extends Bird {
  slide() {
    return `${this.name} is sliding on the ice`;
  }
}

const pingu = new Penguin("Pingu", 2);
console.log(pingu.eat()); // Output: "Pingu is eating"
console.log(pingu.fly()); // Output: "Pingu is flying"
console.log(pingu.slide()); // Output: "Pingu is sliding on the ice"

// Example 8: Kangaroo class
class Kangaroo extends Animals {
  jump() {
    return `${this.name} is jumping`;
  }
}

const roo = new Kangaroo("Roo", 3);
console.log(roo.eat()); // Output: "Roo is eating"
console.log(roo.jump()); // Output: "Roo is jumping"

// Example 9: Parrot class
class Parrot extends Bird {
  speak() {
    return `${this.name} is speaking`;
  }
}

const polly = new Parrot("Polly", 1);
console.log(polly.eat()); // Output: "Polly is eating"
console.log(polly.fly()); // Output: "Polly is flying"
console.log(polly.speak()); // Output: "Polly is speaking"

// Example 10: Whale class
class Whale extends Fish {
  sing() {
    return `${this.name} is singing in the ocean`;
  }
}

const willy = new Whale("Willy", 8);
console.log(willy.eat()); // Output: "Willy is eating"
console.log(willy.swim()); // Output: "Willy is swimming"
console.log(willy.sing()); // Output: "Willy is singing in the ocean"

