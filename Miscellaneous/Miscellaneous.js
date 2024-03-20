// For AJAX applications, JSON is faster and easier than XML:

// Using XML

// Fetch an XML document
// Use the XML DOM to loop through the document
// Extract values and store in variables
// Using JSON

// Fetch a JSON string
// JSON.Parse the JSON string

// JSON Example

// {"employees":[
//   { "firstName":"John", "lastName":"Doe" },
//   { "firstName":"Anna", "lastName":"Smith" },
//   { "firstName":"Peter", "lastName":"Jones" }
// ]}

// XML Example
// <employees>
//   <employee>
//     <firstName>John</firstName> <lastName>Doe</lastName>
//   </employee>
//   <employee>
//     <firstName>Anna</firstName> <lastName>Smith</lastName>
//   </employee>
//   <employee>
//     <firstName>Peter</firstName> <lastName>Jones</lastName>
//   </employee>
// </employees>

// A common use of JSON is to exchange data to/from a web server.

// When receiving data from a web server, the data is always a string.

// Parse the data with JSON.parse(), and the data becomes a JavaScript object.

// A common use of JSON is to exchange data to/from a web server.

// When sending data to a web server, the data has to be a string.

// Convert a JavaScript object into a string with JSON.stringify().


// Sending Data
// If you have data stored in a JavaScript object, you can convert the object into JSON, and send it to a server:

// Example
// const myObj = {name: "John", age: 31, city: "New York"};
// const myJSON = JSON.stringify(myObj);
// window.location = "demo_json.php?x=" + myJSON;
// Receiving Data
// If you receive data in JSON format, you can easily convert it into a JavaScript object:

// Example
// const myJSON = '{"name":"John", "age":31, "city":"New York"}';
// const myObj = JSON.parse(myJSON);
// document.getElementById("demo").innerHTML = myObj.name;