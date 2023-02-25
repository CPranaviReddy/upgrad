
//------startsWith/endsWith-----------------Example 1: Check String Using Built-in Methods------------------
// program to check if a string starts with 'S' and ends with 'G'

function checkString(str) {

    // check if the string starts with S and ends with G
    if(str.startsWith('S') && str.endsWith('G')) {
        console.log('The string starts with S and ends with G');
    }
    else if(str.startsWith('S')) {
        console.log('The string starts with S but does not end with G');
    }
     else if(str.endsWith('G')) {
        console.log('The string starts does not with S but end with G');
    }
    else {
        console.log('The string does not start with S and does not end with G');
    }
}


// take input
let string = 'Singer is very Good and he is from Singapore'
checkString(string);


//------test()------------------Example 2: Check The String Using Regex---------------------
// program to check if a string starts with 'S' and ends with 'G'

function checkString(str) {

    // check if the string starts with S and ends with G
    if( /^S/i.test(str) && /G$/i.test(str)) {
        console.log('The string starts with S and ends with G');
    }
    else if(/^S/i.test(str)) {
        console.log('The string starts with S but does not ends with G');
    }
     else if(/G$/i.test(str)) {
        console.log('The string starts does not with S but ends with G');
    }
    else {
        console.log('The string does not start with S and does not end with G');
    }
}

// for loop to show different scenario
for (let i = 0; i < 3; i++) {

    // take input
    const string = 'Singer is very Good and he is from Singapore'

    checkString(string);
}


let y = ["We are doing well in javascript class", "You are about to end the module of javascript"];

function compare(str)
{
    if((str[0].startsWith('W') && str[0].endsWith('s')) && (str[1].startsWith('Y') && str[1].endsWith('t'))) {
        console.log('The string is matching');
    }
    else
    {
        console.log('not found');
    }
}

compare(y);