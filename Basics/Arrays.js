// Arrays in JavaScript are a fundamental data structure
// used to store and manipulate collections of elements.
// Arrays can hold any type of data, including numbers,
// strings, objects, and even other arrays.

// the key differences between objects and arrays in JavaScript are:

// Objects are collections of key-value pairs, while arrays are ordered lists of elements.
// Objects use keys to access values, while arrays use indexes.
// Objects are best suited for representing structured data with named properties, while arrays are ideal for working with ordered collections of elements.
// It's also common to use objects and arrays
//  together in JavaScript to represent more
//   complex data structures. For example, an
//    object may contain arrays as property values,
//    or an array may contain objects as elements.

const theArray = ["I", "am", "array"];
const theArray2 = ["I", "am", "array"];
const numArray = ["one", "two", "three", "four", "five"];
console.log('👉 "at same as theArray[num]"', theArray.at(1));
console.log("👉 last element -1", theArray.at(-1));
console.log("👉 concat", theArray.concat(theArray2));

console.log("👉 within", theArray.copyWithin(0, 1, 2));
// 🌟 Within updates the orginal array, start is 0 end array length default

//This method return array iterator object key value pair
let f = numArray.entries();
console.log("👉 entries", f);

for (let x of f) {
  console.log(x, x[1]);
}

console.log(
  "👉 every",
  theArray.every(function (x) {
    return x.length > 1;
  })
);

// Fill
// 🌟 Update original array

// @param start
// index to start filling the array at.
// If start is negative, it is treated as
// length+start where length is the length of the array.

// @param end
// index to stop filling the array at.
//  If end is negative, it is treated as length+end.
console.log("👉 fill", theArray.fill("Filled"));
console.log("👉 fill", theArray.fill("Second Filled", 0, 2));

// filter
const arrayOfObject = [
  {
    name: "Ritik",
    age: 21,
    skill: ["AI", "React Native", "Spring", "Javascript"],
  },
  {
    name: "Rohan",
    age: 18,
    skill: ["AI", "Javascript"],
  },
  {
    name: "Rohit",
    age: 25,
    skill: ["React Native", "Flask"],
  },
];
console.log(
  "👉 filter",
  arrayOfObject.filter((obj) => {
    return obj.age <= 24;
  })
);

console.log(
  "👉 filter",
  arrayOfObject.filter((obj) => {
    return obj.skill.includes("Flask");
  })
);

// find
// In JavaScript,
// the find() method is a built-in function available for arrays.
//  It is used to search through an array
//  and return the first element that satisfies a provided testing function.
//  If no such element is found, it returns undefined.

console.log(
  "👉 find",
  arrayOfObject.find((obj) => {
    return obj.age < 25;
  })
);

// findIndex
console.log(
  "👉 findIndex",
  arrayOfObject.findIndex((obj) => {
    return obj.age < 25;
  })
);

// findLast
console.log(
  "👉 findLast",
  arrayOfObject.findLast((obj) => {
    return obj.age < 25;
  })
);

// findLastIndex
console.log(
  "👉 findLastIndex",
  arrayOfObject.findLastIndex((obj) => {
    return obj.age < 25;
  })
);

// flat
// The flat() method is a built-in function in JavaScript
// that is used to flatten nested arrays.
//  It creates a new array that is a one-dimensional
//   version of the original array,
//    removing any nested arrays and concatenating
//     their elements into the new array.

const nestedArray = [1, 2, [3, 4], [5, [6, 7]]];
console.log("👉 flat", nestedArray.flat());
console.log("👉 flat Completely", nestedArray.flat(Infinity));

//The flatMap() method is a combination of the map() and flat() methods
//  in JavaScript. It first maps each element using a mapping function,
//   then flattens the result into a new array.
//   It allows you to both transform each element
//    and flatten the result in a single step.

const nestedArray2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattenedArray = nestedArray2.flatMap((innerArray) =>
  innerArray.map((num) => num * 2)
);
console.log("👉 flatMap", flattenedArray);

// The forEach() method is a built-in function
//  in JavaScript used to execute a provided
//  function once for each element in an array,
//   in ascending order. It does not return anything (i.e., it returns undefined).
//   It is primarily used for iterating over array elements
//   nd performing some action for each element.
const shoppingCart = [
  { id: 1, name: "Laptop", price: 999.99, quantity: 1 },
  { id: 2, name: "Mouse", price: 19.99, quantity: 2 },
  { id: 3, name: "Keyboard", price: 49.99, quantity: 1 },
];

let totalPrice = 0;

shoppingCart.forEach((item) => {
  totalPrice += item.price * item.quantity;
});

console.log(
  "👉 forEach",
  `"Total price of items in the shopping cart": $${totalPrice.toFixed(2)}`
);

// Array.from() is a built-in static method in JavaScript that creates a new,
//  shallow-copied array instance from an array-like or iterable object.
//   It allows you to convert iterable objects
//    (like arrays-like objects or iterables) to actual arrays.

const str = "hello";
const chars = Array.from(str);

console.log("👉 from", chars);

const arrayLike = { length: 3, 0: 1, 1: 2, 2: 3 };
const newArray = Array.from(arrayLike, (x) => x * 2);

console.log("👉 from", newArray);

// The includes() method is a built-in function in JavaScript
//  used to check if an array or a string contains
//  a specified element or substring, respectively.
//   It returns true if the element or substring is found, and false otherwise.
const numbers = [1, 2, 3, 4, 5];

console.log("👉 includes", numbers.includes(3, 2));

// Sample todo list data
const todoList = [
  { id: 1, description: "Buy groceries" },
  { id: 2, description: "Finish homework" },
  { id: 3, description: "Walk the dog" },
  { id: 4, description: "Call mom" },
  { id: 5, description: "Clean the house" },
];

// Function to search tasks by description
function searchTasks(query) {
  query = query.toLowerCase();
  const matchingTasks = todoList.filter((task) =>
    task.description.toLowerCase().includes(query)
  );
  return matchingTasks;
}

// Example usage
const searchTerm = "groceries";
const matchingTasks = searchTasks(searchTerm);

console.log(`Tasks matching "${searchTerm}":`, matchingTasks);

// The indexOf() method is a built-in function
//  in JavaScript used to find the index of the
//   first occurrence of a specified value within an array or a string.
//   If the value is not found, it returns -1.
const indexArray = [1, 2, 3, 4, 5];

console.log("👉 indexOf", indexArray.indexOf(3, 2));

// Sample list of registered users
const registeredUsers = [
  "user1@example.com",
  "user2@example.com",
  "user3@example.com",
];

// Function to validate user email
function validateUserEmail(email) {
  // Check if the email exists in the list of registered users
  if (registeredUsers.indexOf(email) !== -1) {
    return true; // Email exists
  } else {
    return false; // Email does not exist
  }
}

// Example usage
const userEmail = "user2@example.com";
if (validateUserEmail(userEmail)) {
  console.log(`${userEmail} is a registered user.`);
} else {
  console.log(`${userEmail} is not a registered user.`);
}

// The Array.isArray() method is a
//  built-in function in JavaScript used to
//   determine whether the given value is an array.
//    It returns true if the value is an array, and false otherwise.
const arr = [1, 2, 3];
console.log(Array.isArray(arr)); // Output: true

const obj = { key: "value" };
console.log(Array.isArray(obj));

// The join() method is a built-in function
// in JavaScript used to join all elements of an array into a single string.
// It concatenates each element of the array using
// a specified separator and returns the resulting string.

const arrJoin = ["apple", "banana", "orange", "apple"];
const joinedString = arrJoin.join(", ");

console.log(joinedString);

// If you want to get the keys or indices of an array,
//  you can use the keys() method available on array instances,
//  which returns an iterator containing the keys (indices) of the array.
const fruits = ["apple", "banana", "orange"];

const keysIterator = fruits.keys();

let result = keysIterator.next();
while (!result.done) {
  const index = result.value;
  console.log(`Index ${index}: ${fruits[index]}`);
  result = keysIterator.next();
}

console.log("👉🏻 lastIndexOf", arrJoin.lastIndexOf("apple", -1));
console.log("👉🏻 length", arrJoin.length);

const addFunction = (i) => {
  return i + " Fruit";
};
let mapArray = fruits.map(addFunction);

console.log("👉🏻 map", mapArray);
const arrOf = Array.of(1, 2, 3, 4, 5);

console.log("👉🏻 Array Of", arrOf);

// The pop() method in JavaScript is used to remove the
// last element from an array and return that element.
//  This method changes the length of the array.
// Updates original Array
console.log("👉🏻 pop element", mapArray.pop());
console.log("👉🏻 popped array", mapArray);

// The push() method in JavaScript is used to
//  add one or more elements to the end of an
//  array and returns the new length of the array after the addition.
// Updates original Array

console.log("👉🏻 push element", mapArray.push("Ritik"));
console.log("👉🏻 pushed array", mapArray);

// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const numbersReducers = [1, 2, 3, 4, 5];
const sum = numbersReducers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  2
);
console.log("👉🏻 reducer ", sum);

const sales = [
  { amount: 100, currency: "USD" },
  { amount: 200, currency: "EUR" },
  { amount: 150, currency: "GBP" },
  { amount: 120, currency: "USD" },
  { amount: 300, currency: "JPY" },
];

// Exchange rates for conversion
const exchangeRates = {
  USD: 1,
  EUR: 0.82,
  GBP: 0.73,
  JPY: 109.45,
};

// Currency to convert to
const targetCurrency = "USD";

// Calculate total revenue in the target currency
const totalRevenue = sales.reduce((accumulator, transaction) => {
  const amountInUSD = transaction.amount * exchangeRates[transaction.currency];
  console.log(accumulator, transaction, amountInUSD);
  return (
    accumulator +
    (transaction.currency === targetCurrency ? transaction.amount : amountInUSD)
  );
}, 0);

console.log(`Total revenue in ${targetCurrency}: $${totalRevenue.toFixed(2)}`);

// The reduceRight() method in JavaScript is similar to the reduce() method,
//  but it processes the array from right to left (i.e.,
//    from the last element to the first element).
//    It's used to reduce an array to a single value
//     by applying a specified function to each element
//      of the array from right to left.

const expression = "- 5 + 3 5"; /// 5+3-5= 3
const tokens = expression.split(" "); // Split the expression into tokens

const results = tokens.reduceRight((accumulator, currentValue) => {
  if (!isNaN(currentValue)) {
    // Check if the token is a number
    accumulator.push(currentValue); // Push numbers onto the stack
  } else {
    // If the token is an operator
    const operand2 = accumulator.pop(); // Pop the top operand from the stack
    const operand1 = accumulator.pop(); // Pop the next operand from the stack
    accumulator.push(eval(`${operand1} ${currentValue} ${operand2}`)); // Perform the operation and push the result onto the stack
  }
  return accumulator; // Return the updated stack
}, []);

console.log(results); // Output: 7 (result of 3 + 4)

// The reverse() method reverses the order of the elements in an array.
// The reverse() method overwrites the original array.

const revArray = [1, 2, 3, 4, 5];
revArray.reverse();
console.log("👉🏻 reverse", revArray);

// The shift() method removes the first item of an array.
// The shift() method changes the original array.
// The shift() method returns the shifted element.

const shiftArray = [1, 2, 3, 4, 5];
shiftArray.shift();
console.log("👉🏻 shift", shiftArray);

// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array

const sliceArray = [1, 2, 3, 4, 5];
console.log("👉🏻 slice", sliceArray.slice(2, 4));

// The some() method checks if any array elements pass a test (provided as a callback function).
// The some() method executes the callback function once for each array element.
// The some() method returns true (and stops) if the function returns true for one of the array elements.
// The some() method returns false if the function returns false for all of the array elements.
// The some() method does not execute the function for empty array elements.
// The some() method does not change the original array.

const someArray = [1, 2, 3, 4, 5];
console.log(
  "👉🏻 some",
  someArray.some((i) => i == 7)
);

// The sort() sorts the elements of an array
// The sort() overwrites the original array.
// The sort() sorts the elements as strings in alphabetical and ascending order.
const sortArray = [1, 2, 3, 4, 5];
console.log("👉🏻 sort", sortArray.sort());

const posts = [
  { title: "Post 1", date: "2025-01-15" },
  { title: "Post 2", date: "2025-12-25" },
  { title: "Post 3", date: "2025-02-10" },
  { title: "Post 4", date: "2025-11-20" },
];

// Sorting the posts by date in ascending order
posts.sort((a, b) => new Date(a.date) - new Date(b.date));

console.log(posts);

// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
const array = [1, 2, 3, 4, 5];

// Remove elements starting from index 2
let removedElements = array.splice(2);
// array is now [1, 2]
// removedElements is [3, 4, 5]
console.log(array,removedElements);
// Remove 2 elements starting from index 1 and insert 'a', 'b', 'c'
 removedElements = array.splice(1, 2, 'a', 'b', 'c');
// array is now [1, 'a', 'b', 'c']
// removedElements is [2, 3]
console.log(array,removedElements);
// Remove 0 elements starting from index 2 and insert 'x', 'y', 'z'
 removedElements = array.splice(2, 0, 'x', 'y', 'z');
// array is now [1, 'a', 'x', 'y', 'z', 'b', 'c']
// removedElements is []
console.log(array,removedElements);
// Remove 1 element starting from the end
 removedElements = array.splice(-1, 1);
// array is now [1, 'a', 'x', 'y', 'z', 'b']
// removedElements is ['c']
console.log(array,removedElements);

// The unshift() method adds new elements to the beginning of an array.
// The unshift() method overwrites the original array.

const unShift = ["Banana", "Orange", "Apple", "Mango"];
unShift.unshift("Lemon","Pineapple");
console.log(unShift)

//The with() method updates a specified array element.
// The with() method returns a new array.
// The with() method does not change the original array.
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths, months)
