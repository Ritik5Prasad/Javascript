
// A JavaScript class is not an object.
// It is a template for JavaScript objects.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person1 = new Person("John", 30);
// Constructor Method: The constructor method is a special method for creating and initializing objects created with a class. It's called automatically when a new instance of the class is created.
// Class Methods: You can define methods inside the class just like regular functions. These methods are shared among all instances of the class.

// Class Inheritance: You can create a subclass that inherits from a superclass using the extends keyword.

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); 
      
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying.`);
    }
}

// Static Methods: Static methods are methods that are called on the class itself, rather than on instances of the class.
class MathUtil {
    static add(x, y) {
        return x + y;
    }
}

console.log(MathUtil.add(2, 3)); 