// A JavaScript object is a collection of named values
// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// The named values, in JavaScript objects, are called properties.
// Methods are actions that can be performed on objects.
// Object properties can be both primitive values, other objects, and functions.
// An object method is an object property containing a function definition.
// JavaScript objects are containers for named values, called properties and methods.

// In JavaScript, objects are one of the fundamental data types,
// allowing you to store collections of key-value pairs.
//  They are used extensively in JavaScript for organizing
//  and manipulating data. Here's a brief overview of objects in JavaScript:

// Syntax: Objects in JavaScript are defined using curly braces {}.
// Inside these braces, you define key-value pairs, separated by colons
// :. Keys are strings, and values can be any data type,
// including other objects, arrays, functions, etc.

let person = {
  name: "John",
  age: 30,
  isStudent: false,
  address: {
    city: "New York",
    country: "USA",
  },
  sayHello: function () {
    console.log("Hello!");
  },
};
// Accessing Values: You can access the values of an object
//  using dot notation (objectName.propertyName) or
//  bracket notation (objectName["propertyName"]).

console.log(person.name); // Output: John
console.log(person["age"]); // Output: 30
// Adding and Modifying Properties:
// You can add new properties or modify existing
// ones of an object simply by assignment.

person.job = "Developer";
person.age = 31;
// Nested Objects: Objects can contain other objects as properties.

console.log(person.address.city); // Output: New York
// Methods: Objects can contain functions, which are called methods.

person.sayHello(); // Output: Hello!
// Iteration: You can loop over the properties of an object using for...in loop.

for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Deleting Properties: You can delete properties from an object using the delete operator.
// javascript

delete person.age;
console.log("Age removed", person);
// Objects are a powerful feature in JavaScript,
// enabling developers to structure and organize data effectively.
//  They play a crucial role in many JavaScript applications,
//   including web development, server-side programming, and more.

// object.values
const person2 = {
  name: "John",
  age: 30,
  city: "New York",
};

const myArray = Object.values(person2);
console.log("array of values: ", myArray);

// Using JSON.stringify()
// Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():

console.log("JSON stringfy: ", JSON.stringify(person2));

// In JavaScript, you can create objects using object constructors.
// Object constructors are functions that are used as
// templates for creating objects. They allow you
//  to create multiple objects with similar properties and methods.

// Define the constructor function
function Person2(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + " years old."
    );
  };
}

// Create new instances of Person
let person1 = new Person2("John", 30);
let person3 = new Person2("Alice", 25);

// Access properties and methods
console.log(person3.name); // Output: John
console.log(person1.age); // Output: 25

person3.greet(); // Output: Hello, my name is John and I am 30 years old.
person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.

let obj = {};

Object.defineProperty(obj, "name", {
  value: "John",
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(obj.name); // Output: John

let obj1 = { name: "John" };
let obj2 = { age: 30 };

let newObj = Object.assign({}, obj1, obj2);
console.log(newObj); // Output: { name: "John", age: 30 }

let obj = { name: "John", age: 30 };

console.log(obj.hasOwnProperty("name")); // Output: true
console.log(obj.hasOwnProperty("toString")); // Output: false (inherited method)
console.log("name" in obj); // Output: true
console.log("toString" in obj); // Output: true (inherited method)
console.log(Object.keys(obj)); // Output: ["name", "age"]
console.log(Object.getOwnPropertyNames(obj));

// object.freeze(): This method freezes an object, making
//  it immutable. Once an object is frozen, you cannot
//  add, remove, or modify its properties or change
//  their attributes (e.g., configurable, writable).
const obj4 = {
  name: "John",
  age: 30,
};

Object.freeze(obj4);

obj4.name = "Alice"; // Throws error in strict mode or silently fails in non-strict mode

// object.seal(): This method seals an object,
//  preventing new properties from being added
//  to it and marking all existing properties
//   as non-configurable. However, it allows you
//    to change the values of existing properties if they are writable.
const obj5 = {
  name: "John",
  age: 30,
};

Object.seal(obj5);

obj5.name = "Alice"; // Allowed
obj5.address = "New York"; // Throws error in strict mode or silently fails in non-strict mode
// object.preventExtensions(): This method prevents
//  new properties from being added to an object
//  , but it allows existing properties to be modified or deleted.

const obj7 = {
  name: "John",
  age: 30,
};

Object.preventExtensions(obj7);

obj7.name = "Alice"; // Allowed
obj7.address = "New York"; // Throws error in strict mode or silently fails in non-strict mode
