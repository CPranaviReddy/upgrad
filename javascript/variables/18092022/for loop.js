//------------Example 1: Display a Text Five Times----------------
// program to display text 5 times
const n1 = 5;

// looping from i = 1 to 5
for (let i = 1; i <= n1; i++) {
    console.log(`I love JavaScript.`);
}

//----------Example 2: Display Numbers from 1 to 5---------------
// program to display numbers from 1 to 5
const n = 5;

// looping from i = 1 to 5
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    console.log(i);     // printing the value of i
}

//----------Example 3: Display Sum of n Natural Numbers---------
// program to display the sum of natural numbers
let sum = 0;
const nn = 20;

// looping from i = 1 to n
// in each iteration, i is increased by 1
for (let i = 1; i <= nn; i++) {
    sum += i;       // sum = sum + i
}

console.log('sum:'+ sum);
