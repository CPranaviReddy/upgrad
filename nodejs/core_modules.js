var url = require('url');
var q= url.parse('http://www.facebook.com/login.html',true);
console.log(q.host);
console.log(q.pathname);
console.log(q.href);
console.log(q.hostname);
console.log(q.port);
console.log(q.protocol);

/*const path = require('path');
const y =  path.basename('E:\upgrad\javascript\variables\nodejs');
console.log(y);
console.log(path.isAbsolute('E:\upgrad\javascript\variables\nodejs')
console.log(path.extname('hello.js'))
const path = require('path');  //system file path
const y = path.basename('C:\\Users\\Virendra\\Desktop\\Knowledge Hut\\Node JS\\Express');
console.log(y);
console.log(path.isAbsolute('C:\\Users\\Virendra\\Desktop\\Knowledge Hut\\Node JS\\Express'))
console.log(path.extname('hello.js'))

const util = require('util');
async function fn(){
    return 'hello world';

}
const callbackFunction= util.callbackify(fn);
callbackFunction((err,ret)=>{
    if(err)throw err;
console.log(ret);
});

var fs = require("fs");
fs.readFile('input.txt',function (err,data){
if(err){
    return console.error(err);

}
console.log("Asynchronous read: "+ data.toString());
});*/
