//-----------------Example 1:---------------------
const numbers4 = [1, 2, [3, 4, 5]];
const flatNumbers4 = numbers4.flat();

console.log(flatNumbers4);
console.log(flatNumbers4.length);

//-----------Example 2: flats an array with one level depth----------
const numbers3 = [1, 2, [3, 4, 5, [6, 7]]];
const flatNumbers3 = numbers3.flat(1);

console.log(flatNumbers3);

//---------------Example 3: Infinity depth level---------------------
//When you don’t know the depth level, you can pass the Infinity into the flat() method to recursively concatenate all elements of the sub-arrays into the new array:

const numbers1 = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]];
const flatNumbers1 = numbers1.flat(Infinity);
console.log(flatNumbers1);

//---------------Example 4:Empty holes in array------------------
//If an array has empty slots, you can use the flat() method to remove the holes, like this:

const numbers2 = [1, 2, , 4, , 5];
console.log(numbers2.length);
const sequence2 = numbers2.flat();
console.log(numbers2.length);
console.log(sequence2);

