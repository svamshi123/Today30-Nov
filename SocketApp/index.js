const express = require('express');
const app = express();
const io = require('socket.io');

const server = app.listen(3000,()=>{
    console.log('started........');
});
const socket = io(server);

socket.on('connection',(client) =>{
    console.log('connected>>!' + client);

    client.on('data',(msg)=>{
        socket.sockets.emit('resp',msg);
    });
});

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.send('<h1>Chat Room</h1>')
});