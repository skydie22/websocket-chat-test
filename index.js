var express = require('express');
var socket= require('socket.io');

//app setup
var app = express();
var server = app.listen(2004, function() {
    console.log('listening to request on port 2004')
});

//static files

app.use(express.static('public'));

//socket setup

var io = socket(server);

io.on('connection', function (socket) {
    console.log('make socket connection' , socket.id);

    socket.on('chat', function (data) {
         io.sockets.emit('chat', data)
    });
});
