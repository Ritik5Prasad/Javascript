// 🔶 A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).
// A function can have multiple parameters or no parameters and it also either a return a value or no value

// 🔶 Why Functions?
// With functions you can reuse code
// You can write code that can be used many times.
// You can use the same code with different arguments, to produce different results.

function sum(a, b) {
  return a + b;
}

console.log("👉 ", sum(2, 3));

(function selfInvoking() {
  console.log("👉 ", "Self Invoked");
})();

// 🔶 Anonymous Function

//  an anonymous function is a function that is declared without any named identifier.
//  Instead, it's defined using the function keyword followed
//  by parentheses containing the function parameters,
//  and then the function body enclosed within curly braces.

let anonymousFunction = function (x, y) {
  return x + y;
};
console.log("👉 ", "anonymousFunction: ", anonymousFunction(3, 4));

// 🔶 Function Constructor

// In JavaScript,
// the Function constructor is a built-in function that
// can be used to create new functions dynamically at runtime.
// It takes a variable number of arguments,
// where the last argument is the function body as a string,
//  and the preceding arguments are the names of parameters for the function.

let functionConstructor = new Function("a", "b", "return a+b");
console.log("👉 ", "functionConstructor: ", functionConstructor(2, 2));

// 🔶 Function hoisting
// Function hoisting is a JavaScript mechanism that allows you to call a function
// before it has been declared.

functionHoisting();

function functionHoisting() {
  console.log("👉 ", "functionHoisting");
}

// 🔶Function as Object

// JavaScript, functions are a special type of object.
// This means that in addition to being callable,
// they can have properties and methods just like any other object.

function functionAsObject() {
  console.log("👉 ", "functionAsObject!");
}

// 🔶Functions can have properties
functionAsObject.language = "English";
console.log("👉  functionAsObject", functionAsObject.language); // Output: "English"

// 🔶Functions can have methods
functionAsObject.sayHello = function () {
  console.log("👉  functionAsObject", "Hello from the sayHello method!");
};

functionAsObject.sayHello();

// 🔶 Arrow Functions
// Arrow functions, introduced in ECMAScript 6 (ES6),
// are a concise way to write anonymous functions in JavaScript.
//  They provide a more compact syntax compared to traditional function expressions,
//  particularly for simple functions.
//   Arrow functions are denoted by the use of the arrow operator =>.

// let greet = function() {
//   console.log("Hello!");
// };

let arrowFunction = () => {
  console.log("👉 ", "arrowFunction");
};
arrowFunction();

// Arrow Functions do not follow hoisting
// Arrow functions does not have this, super
// Arrow functions can not be named

// 🔶 Functions Parameter

// If a function is called with missing arguments (less than declared),
// the missing values are set to undefined.

// Default Parameter

const defaultParameter = (a, b = 3) => {
  return a + b;
};

console.log("👉  defaultParameter", defaultParameter(2));
console.log("👉  defaultParameter", defaultParameter(2, 4));

// 🔶 Function Rest Parameter
// The rest parameter syntax in JavaScript allows a function
// to accept an indefinite number of arguments as an array,
// providing a convenient way to work with
// functions that can accept a variable number of
// parameters. This feature was introduced in ECMAScript 6 (ES6).

function sumAsRestParameter(d, c, ...numbers) {
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum - d - c;
}

console.log(
  "👉  sumAsRestParameter ",
  sumAsRestParameter(1, 2, 3, 4, 5, 3, 32, 2)
);

// 🔶 Arguements Object
// JavaScript functions have a built-in object called the arguments object.
// The argument object contains an array of the arguments used when the function was called (invoked).

function arguementsObject(d, c, ...numbers) {
  return arguments.length;
}

console.log("👉  arguementsObject ", arguementsObject(1, 2, 3, 4, 5, 6, 7, 8));

// Key points about the arguments object:

// Array-like Object: Although it resembles an array, the arguments object is not an array;
//  it's an array-like object. It has a length property and elements indexed by numbers,
//  but it doesn't have array methods like map, forEach, etc.

// Not Affected by Arrow Functions: Unlike arrow functions,
// regular functions in JavaScript have their own arguments object.
//  Arrow functions do not have an arguments object,
//   and they inherit it from the surrounding lexical scope if needed.

// Not Available in Arrow Functions:
//  Arrow functions do not have their own arguments object.
//  If you need access to arguments in an arrow function,
//   you can use the rest parameter syntax ...args instead.

// Function Scope:
// The arguments object is scoped to the function it's used in.
//  Each function invocation has its own arguments object.

// Arguments are Passed by Value
// The parameters, in a function call, are the function's arguments.
// JavaScript arguments are passed by value: The function only gets to know the values,
// not the argument's locations.
// If a function changes an argument's value, it does not change the parameter's original value.
// Changes to arguments are not visible (reflected) outside the function.
function changeValue(x) {
  x = 10; // Changing the value of the parameter x
  console.log("Inside function:", x); // Output: 10
}

let value = 5;
changeValue(value);
console.log("Outside function:", value); // Output: 5

// Objects are Passed by Reference
// In JavaScript, object references are values.
// Because of this, objects will behave like they are passed by reference:
// If a function changes an object property, it changes the original value.
// Changes to object properties are visible (reflected) outside the function.
function changeProperty(obj) {
  obj.prop = "bar"; // Changing the property of the object
  console.log("Inside function:", obj); // Output: { prop: "bar" }
}

let myObject = { prop: "foo" };
changeProperty(myObject);
console.log("Outside function:", myObject); // Output: { prop: "bar" }

// 🔶 Function Call

//   the call() method is used to invoke a function
//   with a specified this value and optional arguments.
//   Essentially, it allows you to borrow a method from one object and call it on another.

const obj1 = {
  greet: function () {
    console.log("Function Call Hello ", this.name);
  },
};
const obj2 = {
  name: "Ritik",
};

obj1.greet.call(obj2);

const obj3 = {
  greet: function (city, country) {
    console.log("Function Call Hello ", this.name, country, city);
  },
};
const obj4 = {
  name: "Ritik",
};

obj3.greet.call(obj4, "Kashmir", "India");

// 🔶 Function Apply
// apply() is a method in JavaScript that allows you to call a function
// and specify what the this keyword will refer to within that function.
//  It also lets you pass arguments to the function as an array.

const person = {
  name: "Alice",
  greet: function (...greeting) {
    console.log(`${greeting}, I'm ${this.name}`);
  },
};
const args = ["Hello", "there"];
person.greet.apply(person, args);

// apply() is particularly useful when you have an array of arguments
//  or when you want to dynamically pass arguments to a function.
//   It's similar to call(), but it accepts arguments as an array instead of listing them individually.

// Function Bind

// bind() creates a new function with a
// specified context (this) that, when called,
//  will execute the original function with that context.

const person2 = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, I'm ${this.name}`);
  },
};

const greetPerson = person2.greet.bind(person2);

greetPerson();


// Function Closures

// Closures are a fundamental concept in JavaScript that allow functions
//  to retain access to variables from their lexical scope even 
//  after the parent function has finished executing. In simpler
//   terms, a closure is created whenever a function
//    is defined within another function, and the inner
//     function retains access to the outer function's
//      variables, even after the outer function has finished executing.

function outerFunction() {
  const outerVariable = 'I am from outer function';

  function innerFunction() {
      console.log(outerVariable); // Accessing outerVariable from the outer scope
  }

  return innerFunction; // Returning innerFunction
}

const closureExample = outerFunction(); // Assigning the returned innerFunction to closureExample

closureExample(); // Executing closureExample, which still has access to outerVariable


function createCounter() {
  let count = 0;

  function increment() {
      count++;
      console.log('Count:', count);
  }

  function decrement() {
      count--;
      console.log('Count:', count);
  }

  return {
      increment,
      decrement
  };
}

const counter = createCounter();

counter.increment(); // Output: Count: 1
counter.increment(); // Output: Count: 2
counter.decrement(); // Output: Count: 1
