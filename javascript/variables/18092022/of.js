//----------------------Example 1: Using of() method-----------------
let numbers = Array.of(3);
console.log(numbers.length); // 1
console.log(numbers); // [ 3 ]

let numbers1 = Array(3);
console.log(numbers1.length); // 3
console.log(numbers1); // [ <3 empty items> ]

let chars = Array.of("A", "B", "C");
console.log(chars.length); // 3
console.log(chars); // [ 'A', 'B', 'C' ]