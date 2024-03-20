// A pure function in JavaScript is a function
//  that always produces the same output for 
//  the same input and doesn't have any side 
//  effects, such as modifying global variables
//   or changing the state of an object outside
//    its scope. Pure functions are predictable
//     and easier to test and reason about. 


// Pure function to calculate the square of a number
function square(number) {
  return number * number;
}

// Example usage
const result = square(5); // Output: 25
console.log(result);
// In this example, the 
// square function takes a
//  number as input and returns
//   its square. It doesn't rely
//    on any external state or 
//    variables outside its scope,
//     and it always produces the 
//     same output for the same input
//      (e.g., square(5) will always return 25).