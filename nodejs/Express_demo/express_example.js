var express = require('express');  

var app = express();  

app.get('/', function (req, res) {  
   res.send('Welcome to First Example of Express !!!');  
})  

const server = app.listen(8000, function () {  
const host = server.address().address  
const port = server.address().port  
 console.log("Example app listening at http://%s:%s", host, port)  
})
