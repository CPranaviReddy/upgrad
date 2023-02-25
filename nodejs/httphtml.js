const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');


var  server = http.createServer((request,response) =>{
    var pathname = url.parse(request.url).pathname;
    console.log(pathname)

    if(pathname.substr(1) === 'main')
    {
      fs.readFile('main.html', (err,data)=>{
          if(err)
          {
              console.log(err)
              response.writeHead(404,{'Content-Type':'text/plain'})
          }
          else
          {
             response.writeHead(200,{'Content-Type':'text/html'})
             response.write(data.toString());
             response.end();
          }
      })
    }
});

server.listen(3001,()=>{
    console.log('server listening.....');
})


