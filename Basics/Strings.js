//    A string in JavaScript is a sequence of characters,
//    typically used to represent text.
//    Strings are immutable, meaning once they are created,
//    their values cannot be changed. Strings can be created
//    using single quotes (') or double quotes (")
//    , and they can contain any Unicode characters,
//    including letters, numbers, symbols, and whitespace.

const string = "Hey Im a string";
console.log(string);

const stringEscapes = "Hey I'm a string";
console.log(stringEscapes);

const stringEscapes2 = 'Hey Im a "Javascript"';
console.log(stringEscapes2);

const stringEscapes3 = "Hey Im \\ backslash";
console.log(stringEscapes3);

const stringEscapes4 =
  "Hey Im\b backspace Im\f Formfeed Im\n newline Im\r Carriage return Im\t Tabultor Im\v Vertical";
console.log(stringEscapes4);

// String Template

const stringTemplate = `Hey I'm a template`;
console.log(stringTemplate);

// Strings are zero indexes based
// String Methods
// All string methods return a new value.
// They do not change the original variable.

// Normally, strings like "John Doe",
// cannot have methods or properties because they are not objects.

// But with JavaScript,
//  methods and properties are also available to strings,
//   because JavaScript treats strings as objects when executing methods and properties.

const stringMethods = "I am a string string methods";
console.log("👉 charAt, ", stringMethods.charAt(2));
console.log("👉 charCodeAt, ", stringMethods.charCodeAt(2));
console.log("👉 codePointAt, ", stringMethods.codePointAt(2));
console.log("👉 concat, ", stringMethods.concat(" Concated"));
console.log("👉 constructor, ", stringMethods.constructor);
console.log("👉 endsWith, ", stringMethods.endsWith("methods"));
console.log("👉 startsWith, ", stringMethods.startsWith("I am"))
console.log("👉 fromCharCode, ", String.fromCharCode(65));
console.log("👉 includes, ", stringMethods.includes("methods"));
console.log("👉 indexOf, ", stringMethods.indexOf("methods"));
console.log("👉 lastIndexOf, ", stringMethods.lastIndexOf("string"));
console.log("👉 length, ", stringMethods.length);
console.log("👉 indexOf, ", stringMethods.localeCompare("methods"));
console.log("👉 repeat, ", stringMethods.repeat(2));
console.log("👉 replace, ", stringMethods.replace('string','replaced'));
console.log("👉 replaceAll, ", stringMethods.replaceAll('string','replaced'));
console.log("👉 slice, ", stringMethods.slice(2,4))
console.log("👉 split, ", stringMethods.split(" ",3))
console.log("👉 substr, ", stringMethods.substr(3,3))
console.log("👉 subString, ", stringMethods.substring(1,4))
console.log("👉 toLocaleLowerCase, ", stringMethods.toLocaleLowerCase())
console.log("👉 toLocaleUpperCase, ", stringMethods.toLocaleUpperCase())
console.log("👉 toLowerCase, ", stringMethods.toLowerCase())
console.log("👉 toUpperCase, ", stringMethods.toUpperCase())
let num=13312
let whiteSpaceString="   Javascript   "
console.log("👉 toString, ", num.toString())
console.log("👉 trim, ", whiteSpaceString.trim())
console.log("👉 trimStart, ", whiteSpaceString.trimStart())
console.log("👉 trimEnd, ", whiteSpaceString.trimEnd())
console.log("👉 valueOf, ", whiteSpaceString.valueOf())

// The valueOf() method returns the primitive value of a string.
// The valueOf() method does not change the original string.
// The valueOf() method can be used to convert a string object into a string.




const str1 = "apple";
const str2 = "banana";

console.log("👉 localeCompare, ", str1.localeCompare(str2)); // Output: -1 (because 'apple' comes before 'banana' in dictionary order)
console.log("👉 localeCompare, ", str2.localeCompare(str1)); // Output: 1 (because 'banana' comes after 'apple' in dictionary order)
console.log("👉 localeCompare, ", str1.localeCompare("apple")); // Output: 0 (because both strings are equal)

const str = "The quick brown fox jumps over the lazy dog";
const match1 = str.match(/quick/);
console.log("👉 match, ", match1); // Output: ["quick"]

const match2 = str.match(/o/g);
console.log("👉 match", match2); // Output: ["o", "o", "o", "o", "o"]

const str3 = "hello";
console.log("👉 padEnd", str1.padEnd(10)); // Output: 'hello     '
console.log("👉 padStart", str1.padStart(10, "123")); // Output: 'hello12312'

function employee(name, jobtitle, born) {
  this.name = name;
  this.jobtitle = jobtitle;
  this.born = born;
}
employee.prototype.salary = 2000;

const fred = new employee("Fred Flintstone", "Caveman", 1970);

console.log(fred); // Output: { name: 'Fred Flintstone', jobtitle: 'Caveman', born: 1970 }
console.log(fred.salary); // Output: 2000
console.log(fred.hasOwnProperty("salary")); // Output: false (because 'salary' is not directly owned by 'fred')


// search
// The search() cannot take a start position argument.
// The indexOf() method cannot search against a regular expression.

// The search() method returns the position of the first match.
// The match() method returns an array of matches.

console.log("👉 search, ", stringMethods.search("string"))