// Globals in javascript that doesnt required any imports
// encodeUri
const originalURI = "https://example.com/search?q=hello world";
const encodedURI = encodeURI(originalURI);
console.log(encodedURI); // "https://example.com/search?q=hello%20world"
//decoderURi
const decodedURI = decodeURI(encodedURI);
console.log(decodedURI); // "https://example.com/search?q=hello world"

// HTML events are "things" that happen to HTML elements.

// When JavaScript is used in HTML pages, JavaScript can "react" on these events.
// onclick, onload, onchange, onmouseover, onkeydown, onmouseout

// JSON.stringify() and JSON.parse() are 
// two important methods provided by JavaScript 
// for working with JSON data. Here's how they are typically used:

// JSON.stringify(): This method is used to convert a JavaScrip
// t object into a JSON string. It takes an object as an argument
//  and returns its JSON representation.
// // JSON.parse(): This method is used to parse a 
// JSON string and convert it back into a JavaScript object. 
// It takes a JSON string as an argument and returns the corresponding 

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Convert JavaScript object to JSON string
  const jsonString = JSON.stringify(person);
  console.log(jsonString); // Output: {"name":"John","age":30,"city":"New York"}
  
  // Parse JSON string back to JavaScript object
  const parsedObject = JSON.parse(jsonString);
  console.log(parsedObject); // Output

  // Precendence

//   Precedence describes the order in which operations are performed in an arithmetic expression.
// As in traditional mathematics, multiplication is done first:

// let x = 100 + 50 * 3;
// When using parentheses, operations inside the parentheses are computed first:

// let x = (100 + 50) * 3;
// When operators have the same precedence (like + and -), they are computed from left to right:

// let x = 100 / 50 * 3;