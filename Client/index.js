
var io = require('socket.io-client');
var serverUrl = 'http://localhost:4000'; //Put your server URL here with the port number
var conn = io.connect(serverUrl); //Connect to the server using the URL

conn.on("connect", function() {
    console.log("Connected"); //Console log when Client connected with Server
});

conn.on("disconnect", function() {
    console.log("Disconnected"); //Console log when Client disconnected from Server
});

conn.on("name", function(msg) {
    console.log("Received message:" + msg.firstName); //Simple message passing example through SocketIO
});


//conn.emit('event'); //Uncomment ot trigger the 'event' at server again
