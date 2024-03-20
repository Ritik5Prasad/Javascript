// Polymorphism in JavaScript refers to the ability of objects
//  to exhibit different behaviors or have different
//   forms based on their context. This concept is
//    closely tied to inheritance and method overriding, 
//    allowing different objects to respond to the same
//     method call in different ways.

// Ad-hoc Polymorphism: 
// Ad-hoc polymorphism is achieved through 
// function overloading or method overloading. 
// In JavaScript, you can achieve ad-hoc polymorphism 
// by defining multiple functions with 
// the same name but different parameters.

function add(x, y) {
    return x + y;
}

function add(x, y, z) {
    return x + y + z;
}

console.log(add(2, 3)); // Output: NaN (because the second function definition overrides the first one)
console.log(add(2, 3, 4)); // Output: 9

// Subtype Polymorphism (or Inheritance Polymorphism): 
// Subtype polymorphism is achieved through method overriding,
//  where a subclass provides a specific implementation
//   of a method that is already defined in its superclass.

class Animal {
    makeSound() {
        console.log("Some generic sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow!");
    }
}

let dog = new Dog();
let cat = new Cat();

dog.makeSound(); // Output: Woof!
cat.makeSound(); // Output: Meow!

// DUck typing
class Car {
    drive() {
        console.log("Driving a car");
    }
}

class Boat {
    drive() {
        console.log("Sailing a boat");
    }
}

function travel(vehicle) {
    vehicle.drive();
}

let myCar = new Car();
let myBoat = new Boat();

travel(myCar); // Output: Driving a car
travel(myBoat); // Output: Sailing a boat

// they are fundamental concepts in object-oriented programming. Let's delve into each one:

// Compile-Time Polymorphism (Static Polymorphism):
// Compile-time polymorphism occurs when the decision about which method to call is made at compile time. This is also known as static polymorphism because the binding of method calls to method definitions happens during compile time.
// Method Overloading: Method overloading is a form of compile-time polymorphism where you can define multiple methods with the same name in a class, but with different parameters.
// java

// class Calculator {
//     int add(int a, int b) {
//         return a + b;
//     }

//     double add(double a, double b) {
//         return a + b;
//     }
// }
// Operator Overloading: Some programming languages, like C++, allow you to redefine the behavior of operators for user-defined types. This is another form of compile-time polymorphism.
// cpp

// class Vector {
//     int x, y;

// public:
//     Vector(int a, int b) : x(a), y(b) {}

//     Vector operator+(const Vector& other) {
//         return Vector(x + other.x, y + other.y);
//     }
// };
// Runtime Polymorphism (Dynamic Polymorphism):
// Runtime polymorphism occurs when the decision about which method to call is made at runtime. This is also known as dynamic polymorphism because the binding of method calls to method definitions happens during runtime.
// Method Overriding: Method overriding is a form of runtime polymorphism where a subclass provides a specific implementation of a method that is already defined in its superclass. This allows for the same method to exhibit different behaviors in different classes, based on the object type.
// java

// class Animal {
//     void makeSound() {
//         System.out.println("Some generic sound");
//     }
// }

// class Dog extends Animal {
//     void makeSound() {
//         System.out.println("Woof!");
//     }
// }

// class Cat extends Animal {
//     void makeSound() {
//         System.out.println("Meow!");
//     }
// }
// Virtual Functions (C++): In C++, you can achieve runtime polymorphism using virtual functions and pointers or references to base class objects.
// cpp

// class Animal {
// public:
//     virtual void makeSound() {
//         cout << "Some generic sound" << endl;
//     }
// };

// class Dog : public Animal {
// public:
//     void makeSound() override {
//         cout << "Woof!" << endl;
//     }
// };

// class Cat : public Animal {
// public:
//     void makeSound() override {
//         cout << "Meow!" << endl;
//     }
// };
// Both compile-time and runtime polymorphism are important concepts in object-oriented programming, and understanding their differences and use cases is essential for writing effective and maintainable code.

// In JavaScript, the concept of compile-time polymorphism, as seen in statically typed languages like Java or C++, does not exist in the same form. JavaScript is a dynamically typed language, meaning variable types are determined at runtime rather than compile time. Therefore, the decision about which function or method to call cannot be made at compile time.

// However, JavaScript does support runtime polymorphism, where the behavior of objects can vary dynamically based on their specific types or classes. This is achieved through method overriding, prototype-based inheritance, and the dynamic nature of JavaScript objects.