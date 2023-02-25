//You can create a date object using the new Date() constructor. For example,

const timeNow = new Date();
console.log(timeNow); // shows current date and time

//============================================================================
//You can create a date object by passing ISO date formats. For example,

// ISO Date(International Standard)
const date = new Date("2020-07-01");

// the result date will be according to UTC
console.log(date);

const date1 = new Date("2020-07");
console.log(date1); // Wed Jul 01 2020 05:45:00 GMT+0545

const date2 = new Date("2020");
console.log(date2); // Wed Jan 01 2020 05:45:00 GMT+0545

//============================================================================
//In JavaScript, months are counted from 0 to 11. January is 0 and December is 11.

//new Date(year, month, day, hours, minutes, seconds, milliseconds)
//new Date(year, month,...) //creates a new date object by passing specific date and time. For example,

//If four numbers are passed, it represents year, month, day and hours. For example,

const time1 = new Date(2020, 1, 20, 4);
console.log(time1); // Thu Feb 20 2020 04:00:00
//Similarly, if two arguments are passed, it represents year and month. For example,

const time2 = new Date(2020, 1);
console.log(time2); // Sat Feb 01 2020 00:00:00

const time3 = new Date(2020, 1, 20, 4, 12, 11, 0);
console.log(time3); // Thu Feb 20 2020 04:12:11