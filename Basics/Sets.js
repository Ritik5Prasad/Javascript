// In JavaScript, a set is a built-in data structure
//  that allows you to store unique values of any type, 
//  whether primitive values or object references. 
//  Sets are particularly useful when you need to maintain 
//  a collection of distinct values and perform operations
//   like adding, removing, or checking for the presence of values efficiently.

//creating a set
const mySet= new Set([1,2,3,4])
console.log(mySet,typeof mySet)
//or
const newSet=new Set()
newSet.add('3')
newSet.add(3)
console.log(newSet,typeof newSet)

// add
// add values in a set
newSet.add(3)

//foreach
newSet.forEach((t)=>{
    console.log("elements",t)
})

// delete
newSet.delete(3)
console.log("deleted",newSet)

// has
console.log("has",newSet.has("3"))

// size
console.log("size",newSet.size)

//clear
newSet.clear()
console.log("clear",newSet)

let set1 = new Set([1, 2, 3]);
let set2 = new Set([3, 4, 5]);

// Union
let unionSet = new Set([...set1, ...set2]);
console.log("unionSet",unionSet)
// Intersection
let intersectionSet = new Set([...set1].filter(x => set2.has(x)));
console.log("intersectionSet",intersectionSet)
// Difference
let differenceSet = new Set([...set1].filter(x => !set2.has(x)));
console.log("differenceSet",differenceSet)


//In JavaScript, a Map is a built-in data
//  structure that allows you to store key-value pairs, 
//  where each key is unique. Unlike objects,
//   which allow only string or Symbol keys
//   , Map keys can be of any data type, 
//   including objects and functions. 
//   Maps provide efficient methods for adding,
//    removing, and retrieving elements based on keys.

// Creating an empty map
let myMaps = new Map();

// Initializing a map with key-value pairs
let myMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
]);

console.log("Map",myMap)

// add map
myMap.set('key4', 'value4');
console.log('add ',myMap)

myMaps.set('apple','fruit')
console.log(myMaps)

// delete map
myMap.delete('key4', 'value4');
console.log('add ',myMap)

//get
console.log(myMap.get('key2')); 

//has
console.log(myMap.has('key3'))

//iterate
myMap.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
});

for (let [key, value] of myMap) {
    console.log(`Key: ${key}, Value: ${value}`);
}

//entries
for (let x of myMap.entries()){
    console.log('entries ',x)
    console.log('key ',x[0],'value ',x[1])
}


//clear
console.log(myMap.clear())

//size
console.log(myMap.size);

