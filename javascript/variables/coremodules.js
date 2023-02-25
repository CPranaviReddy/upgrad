var url = require('url');
var q = url.parse('http://www.facebook.com/login.html', true);
console.log(q.host);
console.log(q.pathname);


const path = require('path');
const y = path.basename('C:\\temp\\myfile.html');
console.log(y);
console.log(process.env.PATH);


const util = require('util');
async function fn() {
  return 'hello world';
}
const callbackFunction = util.callbackify(fn);
callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});


var fs = require("fs");
// Asynchronous read
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");


/*var http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('Welcome to this page!');
res.end();
}).listen(3000);*/