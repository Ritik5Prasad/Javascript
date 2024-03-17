// Loops can execute a block of code a number of times.

// for Loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let j = 0;
for (; j < 10; ) {
  console.log("Omitted ", j);
  j++;
}

//The For In Loop
//The JavaScript for in statement loops through the properties of an Object:
// for in Objects
const person = {
  name: "Ritik",
  age: 21,
  occupation: "SDE",
};
for (let x in person) {
  console.log("Key:", x, "value:", person[x]);
}
const arr = [1, 2, 3, 4];
for (let x in arr) {
  console.log("Key:", x, "value:", arr[x]);
}
//or
arr.forEach((x, index) => {
  console.log("value:", x, "Index", index);
});

//The JavaScript for of statement loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

const forOfArr = ["India", "America", "China", "Japan"];
for (let x of forOfArr) {
  console.log(x);

  for (let y of x) {
    console.log(y);
  }
}

// while loop
// The while loop loops through a block of code as long as a specified condition is true.

let iterator = 4;
while (iterator >= 0) {
  console.log(iterator);
  iterator--;
}

// do while
let doiterator = 4;
do {
  console.log("Do while", doiterator);
} while (doiterator > 4);

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    console.log("Encountered 3, breaking loop");
    break;
  }
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log("Encountered 2, skipping this iteration");
    continue;
  }
  console.log(i);
}
