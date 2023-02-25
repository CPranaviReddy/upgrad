const http = require('http');
const fs = require('fs');
var url = require('url');  
var path = require('path');

var server = http.createServer((request, response)=>{
     var filepath = url.parse(request.url).pathname;
     var extname = path.extname(filepath);
     var contenttype = 'text/html';

     console.log(extname);
     switch(extname){
         case '.css':
             filepath = filepath.substr(1);
             contenttype = 'text/css';
             readContent();
             break;

         case '.js':
             filepath = filepath.substr(1);
             contenttype = 'text/javascript';
             readContent();
             break;
    }

     if(filepath=='/')
    {
         filepath = 'home.html';
         readContent();
    }

     else if(filepath=='/about')
    {
         filepath='about.html';
         readContent();
    }

    else  if(filepath=='/index')
    {
         filepath='index.html';
         readContent();
    }

     else if(filepath=='/contact')
    {
         var query = url.parse(request.url, true).query;
         console.log(query.name);
         filepath='contact.html';
         readContent();
    }

     else if(filepath=='/details' & request.method=='POST')
    {
         var body = '';
         request.on('data',(load)=>{
             body+=load;
         });

         request.on('end',()=>{
             console.log(body);
             response.write(body);
             response.end();
         })
    }

     function readContent()
    {
         fs.readFile(filepath,(err, data)=>{
             if(err) console.log(err);
             response.writeHead(200,{'Content-Type':contenttype});
             response.write(data.toString());
             response.end();
         })
    }
});

 
server.listen(process.env.PORT || 3001,()=>{
     console.log('server listening');
})