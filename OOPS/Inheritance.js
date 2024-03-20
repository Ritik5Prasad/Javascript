// Class Syntax (ES6+): With the introduction of classes in ECMAScript 2015 (ES6), you can use class syntax to define constructors and subclasses more easily. However, under the hood, JavaScript still uses prototype-based inheritance.

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Some generic sound");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the superclass constructor
        this.breed = breed;
    }

    bark() {
        console.log("Woof!");
    }
}

let dog = new Dog("Max", "Labrador");
dog.makeSound(); // Output: Some generic sound
dog.bark(); // Output: Woof!
