
//Make Connection
var socket = io.connect('http://localhost:2004');

//Query DOM
var message = document.getElementById('message');
    handle  = document.getElementById('handle');
    btn     = document.getElementById('send');
    output  = document.getElementById('output');

//Emit Event
btn.addEventListener('click', function () {
    socket.emit('chat', {
        message:message.value,
        handle: handle.value,   
    });
});

//Listen Event
socket.on('chat', function(data){
    output.innerHTML  += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>'
});