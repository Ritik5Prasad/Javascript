// JavaScript has only one type of number.
// Numbers can be written with, or without, decimals:
// Extra large or extra small
// numbers can be written with scientific (exponent) notation:

let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123

// Number.EPSILON 
// In JavaScript, Number.EPSILON represents the difference 
// between 1 and the smallest floating point number
//  greater than 1 that can be represented in JavaScript.
//   It is a very small positive number, approximately 2.220446049250313e-16.
console.log(Number.EPSILON)
// Define two numbers with potential floating-point imprecision
const a = 0.1 + 0.2; // 0.30000000000000004
const b = 0.3;
console.log(a.toFixed(35))
console.log(b.toFixed(35))
// Direct equality comparison may not work due to floating-point imprecision
console.log(a === b); // false

// Instead, use Number.EPSILON to check if they are approximately equal
if (Math.abs(a - b) < Number.EPSILON) {
    console.log("a and b are approximately equal.");
} else {
    console.log("a and b are not equal.");
}

console.log('👉 isFinite',isFinite(NaN))
console.log('👉 isNaN',isNaN(2))
// A safe integer is an integer that can be exactly represented as
//  an IEEE-754 double precision number: all integers from (2^53 - 1) to -(2^53 - 1).
console.log('👉 isSafeInteger',Number.isSafeInteger(23))

// Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript.
// Number.MAX_SAFE_INTEGER is (2^53 - 1).
console.log('👉 MAX_SAFE_INTEGER',Number.MAX_SAFE_INTEGER)

// Number.MIN_SAFE_INTEGER represents the maximum safe integer in JavaScript.
// Number.MIN_SAFE_INTEGER is -(2^53 -1).
console.log('👉 MIN_SAFE_INTEGER',Number.MIN_SAFE_INTEGER)
console.log('👉 MAX_VALUE',Number.MAX_VALUE)
console.log('👉 MIN_VALUE',Number.MIN_VALUE)
console.log('👉 NaN',Number.NaN)
console.log('👉 NEGATIVE_INFINITY',Number.NEGATIVE_INFINITY)
// Infinity
// -Infinity
console.log('👉 POSITIVE_INFINITY',Number.POSITIVE_INFINITY)
console.log('👉 parseFloat',parseFloat(2304.23))
console.log('👉 parseInt',parseInt(231.1323))
let number= 23.1313
console.log('👉 toExponential',number.toExponential())
console.log('👉 toFixed',number.toFixed(1))
console.log('👉 toLocaleString',number.toLocaleString("en-US", {style:"currency", currency:"INR"}))
console.log('👉 toPrecision',number.toPrecision(10))
console.log('👉 toString',number.toString())
console.log('👉 valueOf',number.valueOf())

  /*         MATH             */

// The Math object allows you to perform mathematical tasks.

console.log('👉 Math.abs',Math.abs(-23.12))
console.log('👉 Math.acos',Math.acos(0))
console.log('👉 Math.acosh',Math.acosh(1))
console.log('👉 Math.acosh',Math.acosh(1))
console.log('👉 Math.asin',Math.asin(1))
console.log('👉 Math.asinh',Math.asinh(1))
console.log('👉 Math.atan',Math.atan(1))
console.log('👉 Math.atanh',Math.atanh(1))
console.log('👉 Math.atan2',Math.atan2(8,4))
console.log('👉 Cubic Root of number',Math.cbrt(64))
//The Math.ceil() method rounds a number rounded UP to the nearest integer.
console.log('👉 Ceil',Math.ceil(1.3))

//The Math.floor() method rounds a number rounded DOWN to the nearest integer.
console.log('👉 floor',Math.floor(1.3))
//The Math.clz32() method returns the number of leading zeros in a 32-bit binary number.
console.log('👉 clz32',Math.clz32(2))
//The Math.fround() method returns the nearest 32-bit single precision float representation of a number.
console.log('👉 fround',Math.fround(2.123))

//Math.sin(), Math.cos(), and Math.tan() are related to the Pythagorean theorem:
console.log('👉 cos',Math.cos(2 * Math.PI / 180));
//the hyperbolic cosine value 
console.log('👉 cosh',Math.cosh(2));
console.log('👉 euler no',Math.E);
console.log('👉 exp() E^x',Math.exp(2));
console.log('👉 LN2',Math.LN2);
console.log('👉 LN10',Math.LN10);
console.log('👉 log',Math.log(1));
//The Math.log10() method returns the base-10 logarithm of a number.
console.log('👉 log10',Math.log10(1));
//The Math.log1p() method returns the natural logarithm (base E) of 1 + a number.
console.log('👉 log1p',Math.log1p(1));
//The Mat.log2() method returns the base-2 logarithm of a number
console.log('👉 log2',Math.log2(1));
console.log('👉 log2e',Math.LOG2E);
console.log('👉 log10e',Math.LOG10E);
console.log('👉 max',Math.max(2,31,1));
console.log('👉 min',Math.min(231,1));
console.log('👉 PI',Math.PI);
console.log('👉 Power',Math.pow(2,4));
let z=Math.random();
console.log(z)
console.log('👉 Random',Math.floor(z*100 +1));
console.log('👉 round',Math.round(1.6));
console.log('👉 sign',Math.sign(-2));
console.log('👉 sqrt',Math.sqrt(4));
console.log('👉 SQRT1_2',Math.SQRT1_2); // Square root of 1/2
console.log('👉 SQRT2',Math.SQRT2);// Square root of 2
console.log('👉 trunc',Math.trunc(1.2313));

// This JavaScript function always returns a 
// random number between min and max (both included):
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// This JavaScript function always returns a 
// random number between min and max (both included):
function getRndIntegerExcludingMinMax(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

console.log(getRndIntegerExcludingMinMax(0,100))