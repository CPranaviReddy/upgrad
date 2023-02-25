const net = require('net'); //Step 1: to load the net module

var server = net.createServer((socket) =>{   //Step 2: to make the client server connected
    console.log('The client is connected');
    console.log(socket.remoteAddress+ " : " + socket.remotePort);  // to get  the info from which client the request is coming
    
    socket.write('Welcome' + socket.remoteAddress + ' you are connected !!!') //Step 3: to send data using thei msethod write
    socket.setEncoding('utf8')

    socket.on('data', (data)=>{
        console.log('received data from client');
        console.log(data);
    });
    
    socket.on('end',()=>{
        console.log('client disconnected')
        process.exit();
    })
});

server.on('error',(err)=>{
    console.log(err)
})

server.listen(8000,()=>{
    console.log('server listening');
})