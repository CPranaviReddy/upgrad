const http = require('http');
const fs = require('fs');

var  server = http.createServer((request,response) =>{
    if(request.url === '/users')
    {
      fs.readFile('users.json', (err,data)=>{
          if(err)
          {
              console.log(err)
              response.writeHead(404,{'Content-Type':'text/plain'})
          }
          else
          {
             response.writeHead(200,{'Content-Type':'application/json'})
             response.write(data.toString());
             response.end();
          }
      })
    }
});

server.listen(3001,()=>{
    console.log('server listening.....');
})


