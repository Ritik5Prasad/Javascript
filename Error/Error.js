// In JavaScript, try...catch is a mechanism for handling errors that might occur during the execution of a block of code. Here's how it works:

// Try Block (try): The try block is where you place the code that you want to execute. You wrap the code that might throw an error inside this block.
// Catch Block (catch): If an error occurs within the try block, JavaScript will jump to the catch block. This block contains code to handle the error gracefully. It specifies what to do if a particular type of error occurs. You can catch specific types of errors by specifying the error type within parentheses after the catch keyword.

try {
  // Code that might throw an error
  let result = 10 / 0; // Division by zero
  console.log(result);
} catch (error) {
  // Code to handle the error
  console.error("An error occurred:", error.message);
} finally {
  // Code that always executes, whether an error occurred or not
  console.log("Cleanup tasks can go here.");
}

//   Throwing Errors: Additionally, you can manually throw errors using the throw statement.
//  This allows you to create custom error messages and handle them using try...catch.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

try {
  // Code that might throw an error
  rl.question("Enter a number: ", function (userInput) {
    if (isNaN(userInput)) {
      throw new Error("Invalid input: Not a number");
    }
    console.log("User input:", userInput);
    rl.close();
  });
} catch (error) {
  // Code to handle the error
  console.error("An error occurred:", error.message);
}

// In this example, if the user enters something
//  other than a number, the throw statement
//  is used to create a custom error message.
//  The catch block will then handle this error.

{
  /* 
            class myCustomError extends Error{
                // constructor function



                constructor(team, course = "JavaScript"){
                    super(team, course);
                    // assigning values to the myCustomError object
                    this.name = "myCustomError";
                    this.team = team;
                    this.course = course;
                }
            }
            try{ // try block
                throw new myCustomError("DataFlair"); // custom error thrown
            }catch(e){ // catch block

            }
      */
}
