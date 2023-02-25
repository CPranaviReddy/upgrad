const net = require('net');

var client = net.connect({port:8000},()=>{ // we are making connection with server using the port no: 8000
    console.log('connected to server')
});

client.setEncoding('utf8')

client.on('data',(data) =>{
    console.log('received from server');
    console.log(data)
});

client.write('Hello server');

client.on('end',()=>{
    console.log('disconnected from server');
    process.exit();
})