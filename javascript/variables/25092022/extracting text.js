//------------------------Example 1:-------------------------
const message = "JavaScript is fun.";

// get the substring starting from index 0 to 10
let result = message.substring(0, 10);
console.log(result);


//-----------------------Example 2: Using substring----------
let string1 = "Programiz JavaScript Tutorials. We are learning strings module in Javascript.";

// first character
substr1 = string1.substring(0, 1);
console.log(substr1); // P

// if start > end, they are swapped
substr2 = string1.substring(1, 0);
console.log(substr2); // P

// From 11th to last character
substr3 = string1.substring(10);
console.log(substr3); // JavaScript Tutorials

// the extreme values are 0 and str.length

// same as string.substring(0)
substr4 = string1.substring(-44, 90);
console.log(substr4); // Programiz JavaScript Tutorials

// indexEnd is exclusive
substr5 = string1.substring(0, string1.length - 1);
console.log(substr5); // Programiz JavaScript Tutorial



//---------------Example 3: Replacing a substring within a string----------
// Replaces old characters with new characters in a string
function replaceString(oldChars, newChars, string) {
  for (let i = 0; i < string.length; ++i) {
    if (string.substring(i, i + oldChars.length) == oldChars) {
      string = string.substring(0, i) + newChars + string.substring(i + oldChars.length, string.length);
    }
  }
  return string;
}

const string = "Java Tutorials";
let newString = replaceString("Java", "JavaScript", string);
console.log(newString);