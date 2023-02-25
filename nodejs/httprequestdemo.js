const http = require('http');
var server = http.createServer((request,response) =>{
    console.log('Request received');
    console.log('url ' + request.url);
    console.log('headers ' + request.headers);
    console.log('headers host' + request.headers['host'])
    console.log('method => '+ request.method);
    console.log('http version => '+request.httpVersion);
    console.log('http monitor => '+request.httpVersionMinor);
     if(request.url === '/index')  // business logic code
    {
       response.write('Hello You are invoking index url')
       response.end();
    }
    else{
       response.write('Default page')
       response.end();
    }
});
server.listen(3004,()=>{
    console.log('server listening');
})