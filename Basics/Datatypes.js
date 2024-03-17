// Declaring variable
num = 5;
// num --> name of variable
// = assignment
// ; end of statement

// Variable is container that stores data value.

// There are Two datatypes in javascript

//1. Primitive
// 2NSB U
// a) Number
var a = 5;
var dec = 5.0;

// b)String
var string = "Javascript";
var string1 = "Javascript";

// c) Boolean
var bool = true;
var bool1 = false;

// d) BigInt;
var BigNumber = 12314124241414;

// e) Undefined
var Undefined = undefined;
var null_value = null;

// f) Symbol

var symbol = Symbol("HARD_CODED_VALUE"); // used for creating apis
console.log(symbol);
// Rules for declaring a variable
// Reserved Keyword can not be used var true= true;
// Hyphens are not allowed in javascript var point-value = 2;

// Pascal Case
var NameOfVariable = "Javascript";
// Camel Case
var nameOfVariable = "Javascript";
// snake case
var name_of_variable = "Javascript";

// literals vs variable;
var literals = 6;
// literals is a value that can not be changes
// Variable is a value that we can change
literals = 10;

// Types of Variables in Javascript
// 1. Global Variable 2. Local Variable

a = 5;
b = 4;

function sum() {
  let c = a + b;
  console.log("Total Sum->", c);
}
sum();

//Scope determines the accessibility (visibility) of variables.
function foo() {
  if (true) {
    var character1 = "Robin"; //function scope
    let character2 = "Ted"; //block scope
    const character3 = "Barney"; //block scope
    character2 = "Pokemon";
    // character3 = 'Chinni'  // can not be reassigned
    console.log(character3);
  }
  console.log(character1); //Robin
  // console.log(character2)  //not defined
  // console.log(character3). //not defined
  character1 = "Tony Stark";
}
foo();

//Non Primitive Data Types

//Array
let array = ["Hey", "Im", "Array"];
//Object
let object = { name: "Ritik", age: "21", hobby: "Gaming" };
