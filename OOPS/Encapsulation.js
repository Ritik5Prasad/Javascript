// Encapsulation: Encapsulation is a fundamental concept in achieving abstraction. It involves bundling data (properties) and functions (methods) that operate on the data into a single unit, usually an object. This helps in hiding the internal state of an object and exposing only the necessary functionalities.


class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    drive() {
        console.log(`Driving ${this.make} ${this.model}`);
    }
}

let myCar = new Car("Toyota", "Camry");
myCar.drive(); // Output: Driving Toyota Camry
// In this example, the Car class encapsulates the data (make and model) and the behavior (drive method) associated with a car.