//-------------------Example 1:-----------------------
const message = "   JAVASCRIPT IS FUN    ";

// remove leading and trailing whitespaces
console.log('old string length' + message.length);
const newMessage = message.trim();
console.log(newMessage);
console.log(' new string length' + newMessage.length);  


//------------------Example 2: ----------------------
let str = "   foo  ";
console.log(str.trim()); // 'foo'

// trim() removes whitespace only from the edges
let str1 = "  A B C D  ";
console.log(str1.trim());