const net = require('net');
var server = net.createServer();

let clients = {}
let count =0;

server.on('connection',(socket) =>{
    let cname;
    console.log('The client is connected');
    socket.write('Please enter your name')
    
    socket.on('data', (data)=>{
        console.log('received data from client');
        if(!cname)   // first time client is getting connected
        {
            cname = data.toString(); //.replace('\n','');
            count++;
            clients[cname] = socket;
            socket.write(`Welcome ${cname} to this chat room. There are ${count} active users`)
            sendMessage( `${cname} joined the chat room`, socket);
        }
        else{
            sendMessage(`> ${cname} : ${data}`)   // client is sedning messages which is already part of the chatroom
        }
    });

socket.on('close',()=>{
    count--;
    delete clients[cname];
    sendMessage(`${cname} left the room`);
})

    socket.on('end',()=>{
        console.log('client disconnected')
        //process.exit();
    });
});

function sendMessage(message, connection){  // client connected + cleint leaving + client sending messages
    for(let client in clients)
    {
        if(clients[client] !== connection)
        {
            clients[client].write(message);
        }
    }
}

server.on('error',(err)=>{
    console.log(err)
})

server.listen(8000,()=>{
    console.log('server listening');
})