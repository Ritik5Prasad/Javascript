// Abstract Classes and Methods: Although JavaScript doesn't have built-in support for abstract classes and methods, you can emulate them using conventions or third-party libraries. Abstract classes define methods without providing implementations, leaving it to their subclasses to implement those methods. This allows for consistent interfaces while allowing for different implementations.
// javascript

// Example using convention
class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    calculateArea() {
        throw new Error("Method 'calculateArea()' must be implemented.");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

let circle = new Circle(5);
console.log(circle.calculateArea()); // Output: 78.53981633974483