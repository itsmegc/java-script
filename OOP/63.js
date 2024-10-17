class Animals {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating.`;
  }
  isSuperCute() {
    return this.age < 2;
  }
  isCute() {
    return true;
  }
}

// Dog class
class Dog extends Animals {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }
  eat() {
    return `Modified Eat: ${this.name} is eating.`;
  }
  run() {
    return `${this.name} is running at ${this.speed} km/h.`;
  }
}

// Cat class
class Cat extends Animals {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  purr() {
    return `${this.name}, the ${this.breed}, is purring.`;
  }
  jump() {
    return `${this.name} is jumping gracefully.`;
  }
}

// Bird class
class Bird extends Animals {
  constructor(name, age, wingspan) {
    super(name, age);
    this.wingspan = wingspan;
  }
  fly() {
    return `${this.name} is flying with a wingspan of ${this.wingspan} cm.`;
  }
  chirp() {
    return `${this.name} is chirping happily.`;
  }
}

// Fish class
class Fish extends Animals {
  constructor(name, age, waterType) {
    super(name, age);
    this.waterType = waterType;
  }
  swim() {
    return `${this.name} is swimming in ${this.waterType} water.`;
  }
  bubbles() {
    return `${this.name} is blowing bubbles.`;
  }
}

// Horse class
class Horse extends Animals {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }
  gallop() {
    return `${this.name} is galloping at ${this.speed} km/h.`;
  }
  neigh() {
    return `${this.name} is neighing loudly.`;
  }
}

// Instances of each class
const tommy = new Dog("Tommy", 3, 45);
const whiskers = new Cat("Whiskers", 2, "Siamese");
const tweety = new Bird("Tweety", 1, 25);
const goldie = new Fish("Goldie", 1, "fresh");
const spirit = new Horse("Spirit", 4, 60);

console.log(tommy.run());
console.log(whiskers.purr());
console.log(tweety.fly());
console.log(goldie.swim());
console.log(spirit.gallop());
