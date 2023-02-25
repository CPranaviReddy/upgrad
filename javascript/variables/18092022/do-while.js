//-----------Example 1: Display Numbers from 1 to 5--------------
// program to display numbers from 1 to 5
// initialize the variable
let i = 1, n = 5;

// while loop from i = 1 to 5
while (i <= n) {
    console.log(i);
    i += 1;
}


//-----------Example 2: Sum of Positive Numbers Only------------------
// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum
/*
let sum = 0;

// take input from the user
let number = 5;

while(number >= 0) {

    // add all positive numbers
    sum += number;

    // take input again if the number is positive
    number = 6;
}

// display the sum
console.log(`The sum is ${sum}.`);



//----------Example 3: Display Numbers from 1 to 5---------------
// program to display numbers
let i1 = 1;
const n1 = 5;

// do...while loop from 1 to 5
do {
    console.log(i1);
    i1++;
} while(i1 <= n1)

*/
let positive= 90;

do{
    console.log(positive);
} while(positive<0)

while(positive<0)
{
    console.log(positive);
}