//------exec()----------------Example 1: ---------------------
const text = 'Whether its color or colour, it is all the same.The human eye can see a wide gamut of colours, which makes us unique as a species.';

const pattern = /colou?rs?/g;

console.log(pattern.exec(text)[0]);
console.log(pattern.exec(text)[0]);
console.log(pattern.exec(text)[0]);

let results;
while ((results = pattern.exec(text)) !== null)
{
 console.log(results[0]);
}


//-----search()---------------Example 2: Using search()-----------------------
const string1 = "I love to write JavaScript programs";

let re21 = /[a-z]/;
let index = string1.search(re21);
console.log(index); // 2 -> matches 'l'

let re11 = /J[a-z]*/i;
let index1 = string1.search(re11);
console.log(index1); // 16 -> matches 'JavaScript'

let re2 = /[0-9]/;
let index2 = string1.search(re2);
console.log(index2); // -1 -> No digit match



//-----match()---------------Example 3:-------------------------------------
const message = "JavaScript is a fun programming language. We are enoying this programming";

// regular expression that checks if message contains 'programming'
const exp = /programming/g;

// check if exp is present in message
let result1 = message.match(exp);
console.log(result1);



//-----match()---------------Example 4: Matching sections in string--------
const string2 = "My name is Albert. YOUR NAME is Soyuj. My name tarun";

// expression matches case-insensitive "name is"+ any alphabets till period (.)
const ree = /name\sis\s[a-zA-Z]+\./gi;

let result = string2.match(ree);
console.log(result); // [ 'name is Albert.', 'NAME is Soyuj.' ]

// using named capturing groups
const re13 = /name\sis\s(?<name>[a-zA-Z]+)\./i;
let found1 = string2.match(re13);

console.log(found1.groups); // {name: "Albert"}



//-----matchAll()-----------Example 5: Using matchAll()-----------------------
const string4 = "I am learning JavaScript not Java.";
const re4 = /Java[a-z]*/gi;

let result2 = string4.matchAll(re4);

for (match of result2) {
  console.log(match);
}



//-----matchAll()------------Example 6: Using matchAll to capture groups------
const string = "My name is Albert. YOUR NAME is Soyuj.";

// expression matches case-insensitive "name is"+ any alphabets till period (.)
// using named capturing groups
const re = /name\sis\s(?<name>[a-zA-Z]+)\./gi;
let found = string.matchAll(re);

for (const match of found){
    console.log(`Found "${match[0]}" at index ${match.index}. Captured name = ${match.groups['name']}`)
}