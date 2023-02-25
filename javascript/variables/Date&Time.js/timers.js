//----------------- Example 1: Display a Text Once After 3 Second-----------
// program to display a text using setTimeout method
function greet() {
    console.log('Hello world');
}

setTimeout(greet, 3000); // 3 secs
console.log('This message is shown first');
console.log('This message is shown second');


/////---------------- Example 2: Display Time Every 3 Second-----------------
// program to display time every 3 seconds
/*function showTime() {

    // return new date and time
    let dateTime= new Date();

    // returns the current local time
    let time = dateTime.toLocaleTimeString();

    console.log(time)

    // display the time after 3 seconds
     setTimeout(showTime, 3000);
}

// calling the function
showTime();
*/


//---------------- Example 3: Use clearTimeout() Method--------------
//JavaScript clearTimeout()
//As you have seen in the above example, the program executes a block of code after the specified time interval. If you want to stop this function call, you can use the clearTimeout() method.
// program to stop the setTimeout() method
/*
let count1 = 0;

// function creation
function increaseCount(){

    // increasing the count by 1
    count1 += 1;
    console.log(count1)
}

let id = setTimeout(increaseCount, 1000);
//console.log('id ' + id);
// clearTimeout
clearTimeout(9000); 
console.log('setTimeout is stopped.');

*/
//----------------- Example 4: setInterval() Display a Text Once Every 1 Second --------------
// program to display a text using setInterval method
function greet() {
    console.log('Hello world');
}

setInterval(greet, 1000);


//---------------- Example 5: Display Time Every 5 Seconds ---------------------------
//program to display time every 5 seconds
function showTime() {

    // return new date and time
    let dateTime= new Date();

    // return the time
    let time = dateTime.toLocaleTimeString();

    console.log(time)
}

let display = setInterval(showTime, 5000);



//--------------- Example 6: Use clearInterval() Method ------------------------
//the program executes a block of code at every specified time interval. If you want to stop this function call, then you can use the clearInterval() method.
// program to stop the setInterval() method after five times

let count = 0;

// function creation
let interval = setInterval(function(){

    // increasing the count by 1
    count += 1;

    // when count equals to 5, stop the function
    if(count === 5){
        clearInterval(interval);
    }

    // display the current time
    let dateTime= new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);

}, 2000);

