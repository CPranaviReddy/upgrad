//----------------------Example 1: Using from() method---------------------
// Array from String
let arr1 = Array.from("abc");
console.log(arr1); // [ 'a', 'b', 'c' ]

let arr6 = Array.from("Hello World");
console.log(arr6); 

// Array from Map
let mapper = new Map([
  ["1", "a"],
  ["2", "b"],
  ["3", "g"],
  ["4", "k"]
]);

let arr2 = Array.from(mapper);
console.log(arr2); // [ [ '1', 'a' ], [ '2', 'b' ] ]

let arr3 = Array.from(mapper.keys());
console.log(arr3); 

let arr6 = Array.from(mapper.values());
console.log(arr6); 

let arr7 = Array.from(mapper.size());
console.log(arr7); 

// Array from Set
let set = new Set(["JavaScript", "Python", "Go"]);
let arr4 = Array.from(set);
console.log(arr4); // [ 'JavaScript', 'Python', 'Go' ]



//------------------Example 2: Using from() method with mapFunc---------
function createArr(arraylike, mapFunc) {
  return Array.from(arraylike, mapFunc);
}

// using arrow function for mapFunc
let arr5 = createArr("123456", (x) => 2 * x);
console.log(arr5); // [ 2, 4, 6, 8, 10, 12 ]