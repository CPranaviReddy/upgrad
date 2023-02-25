const string="Java Is open source language and Javascript Is scriptinng language.Java Is very user friendly and easy to use"
const result=string.replace(/Java/,'Python');
console.log (result);
//performs a global match
const result1=string.replace(/Java/g,'Python');
console.log(result1);

const result2=string.replace(/Java/g,'Hello');
console.log(result2);
//case insensitivity
const result3=string.replace(/is/gi,'are');
console.log(result3);


