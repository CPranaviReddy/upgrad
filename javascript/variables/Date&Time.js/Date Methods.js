/*Method		Description

now()		Returns numeric value corresponding to current time(number of milliseconds elapsed since January 1, 1970 00:00:00 UTC)
getFullYear()	Gets the year according to local time
getMonth()	Gets the month, from 0 to 11 according to local time
getDate()	Gets the day of the month (1–31) according to local time
getDay()	Gets the day of the week (0-6) according to local time
getHours()	Gets the hour from 0 to 23 according to local time
getMinutes	Gets the minute from 0 to 59 according to local time
getUTCDate()	Gets the day of the month (1–31) according to universal time
setFullYear()	Sets the full year according to local time
setMonth()	Sets the month according to local time
setDate()	Sets the day of the month according to local time
setUTCDate()	Sets the day of the month according to universal time*/

const timeInMilliseconds = Date.now();
console.log(timeInMilliseconds); 

const time = new Date;

// get day of the month
const date = time.getDate();
console.log(date); // 30

// get day of the week
const year = time.getFullYear();
console.log(year); // 2020

const utcDate = time.getUTCDate();
console.log(utcDate); // 30

const event = new Date('April 19, 2022 23:15:30');
// set the date
event.setDate(15);
console.log("date after setting it" +event.getDate()); // 15

// Only 28 days in February!
event.setDate(35);

console.log(event.getDate()); // 7

//===================================================================
/*Formatting a Date
Unlike other programming languages, JavaScript does not provide a built-in function for formatting a date.
However, you can extract individual bits and use it like this.*/

const currentDate = new Date();
const date1 = currentDate.getDate();
const month = currentDate.getMonth();
const year1 = currentDate.getFullYear();

// show in specific format
let monthDateYear = (month+1) + '/' + date1 + '/' + year1;

console.log(monthDateYear); 

//===================================================================
/*AutoCorrection in Date Object
When you assign out of range values in the Date object, it auto-corrects itself. For example,*/

const date2 = new Date(2008, 0, 33);
// Jan does not have 33 days

console.log(date2);

//====================================================================

const now = new Date();

now.setDate(8);
now.setHours(12);
now.setMinutes(30);

console.log(now.getDate());
console.log(now.getDay());
console.log(now.getMonth()+1);
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTimezoneOffset() / 60);
console.log(now.toTimeString());

//showTime method accepts a date object and returns back a formatted time string 
//use of default parameters with the Date constructor, without the new Keyword returns fully //formatted String representing the current date. 

const showTime = (date = Date()) => {

//date is parsed by the Date constructor
const dObj = new Date(date);
return `${dObj.getHours()}:${dObj.getMinutes()}:${dObj.getSeconds()}`;
};

console.log(showTime(new Date('12 August, 2022 10:08')));