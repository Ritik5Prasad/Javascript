// Operators are used to performing specific mathematical and logical computations on operands.
// Operands are basically the quantity on which an operation is to be done

let x = 2;
let y = 3;

let z = x + y;

// x and y is operands
// = is a assignment operator assign a value
// + is a addition operator

// Types of Operators in javascript

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators

// 1. Arithmetic Operators
// that performs arithmetic operation
// + - * % / ** ++ --

// +
let sum = 4 + 2;
console.log("Sum:", sum);

// -
let subtract = 4 - 2;
console.log("subtract:", subtract);

// *
let Multiply = 4 * 2;
console.log("Multiply:", Multiply);

// Dividend ÷ Divisor = Quotient + Remainder.
// %
let Remainder = 5 % 2; //return Remainder
console.log("Remainder:", Remainder);

// /
let Divide = 4 / 2; //return Quotient
console.log("Divide:", Divide);

// ++
let increment = 2;
console.log("increment:", increment++);
console.log("increment: Postfix", increment);
// --
let decrement = 2;
console.log("decrement:", decrement--);
console.log("decrement: Postfix", decrement);

// ++
let preincrement = 2;
console.log("preincrement:", ++preincrement);
console.log("preincrement: Prefix", preincrement);
// --
let predecrement = 2;
console.log("predecrement:", --predecrement);
console.log("predecrement: Prefix", predecrement);

//** Exponentiation Operator
let Exponentiation = 2 ** 3; // 2 power 3 // Math.pow(x,y)
console.log("Exponentiation:", Exponentiation);

//Precedence Order
// The order in which operation to be performed with multiple operators

let prcedenceOrder = 2 + 2 * 4;
console.log("Precendence Order:", prcedenceOrder);
// Here we are getting 10 coz in PL * and / has highest
// precedence order in language's compiler or interpreter

let prcedenceOrderUsingBracket = (2 + 2) * 4;
console.log("prcedence Order Using Bracket :", prcedenceOrderUsingBracket);
// Here we are getting 16 coz in ( )  has highest
// precedence order in language's compiler or interpreter

// Assignment Operators
// Assign  values to  variables

let assign = 4 + 5;

console.log("assigned:", assign);
assign += 3; // assign=assign +3;

console.log("assigned_to_itself:", assign);

// Comparison Operators

// == equal to value only
let comparisonVariable=4;

if(comparisonVariable==4){
    console.log("Equal")
}
// == equal to value and type
if(comparisonVariable==="4"){ //it only gonna work when type is same
    console.log("Equal Type")
}

// !=
if(comparisonVariable!=3){
    console.log("Not Equal")
}

// !== notequal to value and type
if(comparisonVariable!=="4"){ //it only gonna work when type is same
    console.log("Not Equal Type")
}

// < less than

if(comparisonVariable<5){ 
    console.log("Less than")
}

// > greater than

if(comparisonVariable>3){ 
    console.log("Greater than")
}

// > greater than  or equal to

if(comparisonVariable>=5){ 
    console.log("Greater than or equal to")
}

// < less than or equal to

if(comparisonVariable<=3){ 
    console.log("Less than orequal to")
}

// Condtional or Ternary operator
comparisonVariable == 4 ? console.log("Ternary Equal"):console.log("Ternary Equal False")

// Logical Operators
//Logical operators are used in programming to perform logical operations on boolean values (true or false).

// && 
if(true && true){
    console.log("&&")
}
// || 
if(false || true){
    console.log("||")
}
// !
if(!false){
    console.log("!")
}

//Nullish Coalescing Operator ??
console.log("Nullish:" ,2 ?? 3) //first value null then second value as default

//Optional Chaining Operator ?.
//The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
// let obj={name:"Ritik",age:21}
let obj={name:null,age:21}
console.log("Optional Chaining Operator ?.:" ,obj?.name ) //If value null then nothing will print

//String Operators:
let stringOperators = "5"+2; //not 7 it will be 52
console.log("stringOperators",stringOperators)

//Template Literal
console.log(`This is template literal line no. ${stringOperators}`)


//Type Operators:
//Check type of variable
console.log(typeof stringOperators)
console.log(typeof obj)

//Check onject is instance of a class or not 
class Animal {}
class Dog extends Animal {}

const animal = new Dog();

if (animal instanceof Dog) {
    console.log("The animal is a Dog.");
} else {
    console.log("The animal is not a Dog.");
}

// Type Conversion

// Into Number

let numberString= '5.232';  //get Nan when "John"
let convertedIntoNumber = Number(numberString)
let convertedIntoNumber2 = parseFloat(numberString)
let convertedIntoNumber3 = parseInt(numberString)
console.log("convertedIntoNumber: ",convertedIntoNumber,typeof convertedIntoNumber)
console.log("convertedIntoNumber Float: ",convertedIntoNumber2,typeof convertedIntoNumber2)
console.log("convertedIntoNumber Integer: ",convertedIntoNumber3,typeof convertedIntoNumber3)

// Into String


let number= 231;
let convertedIntString = String(numberString)
let convertedIntString2 = numberString.toString()

console.log("convertedIntString: ",convertedIntString,typeof convertedIntString)
console.log("convertedIntString : ",convertedIntString2,typeof convertedIntString2)


// Bitwise Operator
// Bitwise operators are operators that directly manipulate individual bits of data
// Bitwise operators work at the binary level

// & AND Operator
// if both bits 1 --> 1

let AndOperator = 1 & 2;   // result will be 0 coz 1-> 1 , 2-> 10 --> 00
console.log("AndOperator : ",AndOperator)

// | OR Operator
// if one of the bits 1 or 0 --> 1 and // if both bits 1 --> 1
let OrOperator = 1 | 2;   // result will be 3 coz 1-> 01 , 2-> 10 --> 11 ( 3 )
console.log("OrOperator : ",OrOperator)

// ^ XOR Operator
// if both of the bits are diffrent --> 1 otherwise 0 
let XorOperator = 1 ^ 2;   // result will be 3 coz 1-> 01 , 2-> 10 --> 11 ( 3 )
console.log("XorOperator : ",XorOperator)

// ~ NOT Operator
// reverse the bits --> 1 to 0  and 0 to
console.log("NotOperator : ",~XorOperator)

// The leftmost bit (the most significant bit) in the two's complement representation is the sign bit. It determines whether the number is positive or negative. In this case, the leftmost bit is 1, indicating a negative number.
// To convert from two's complement to decimal:
// Flip all the bits.
// Add 1.
// So, flipping all the bits of 11111100 gives 00000011. Adding 1 to this gives 4.
// Since the leftmost bit is 1 (indicating a negative number), the result is -4.

// Therefore, ~3 results in -4 rather than 0 because of the way negative numbers are represented in two's complement notation.

// One's Complement:
// One's complement is a binary representation system where negative numbers are represented by inverting (flipping) all the bits of their positive counterparts.
// So, in one's complement:

// +3 = 00000011
// -3 = 11111100

// However, one's complement has a problem known as the "negative zero" issue, where both positive zero (00000000) and negative zero (11111111) represent zero. This redundancy can complicate arithmetic operations.

// Two's Complement:
// Two's complement is another binary representation system for signed integers. It is more commonly used in modern computer systems because it simplifies arithmetic operations and eliminates the issue of negative zero.
// So, in two's complement:

// +3 = 00000011
// -3 = 11111101


// Bitwise Left Shift <<
let bitwiseLeftShift = 1 << 2;   // result will be 4 coz 1-> 01 , 
// 2 denotes here the number of places to be shifted from left 
// 01 -> 100 2place shifted left --> 4
console.log("bitwiseLeftShift : ",bitwiseLeftShift)

// Signed Bitwise Right Shift >>
let bitwiseRightShift = 8 >> 2;   // result will be 2 coz 8-> 1000 , 
// 2 denotes here the number of places to be shifted from Right 
// 1000 ->0010 2place shifted Right --> 2
// It preserves the sign bit (leftmost bit) when shifting.
console.log("bitwiseRightShift : ",bitwiseRightShift)


// Unsigned Bitwise Right Shift >>
let unsignedRightShift = -8;
let result = unsignedRightShift >>> 1; // result is 2147483644

// In this example, x is represented in binary as 11111111111111111111111111111000. 
// After right-shifting by 1 position using >>>, it becomes 01111111111111111111111111111100,
//  which represents 2147483644 when interpreted as an unsigned integer.


