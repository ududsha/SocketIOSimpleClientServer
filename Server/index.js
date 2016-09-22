"use strict";

/*Create and configure express server*/
var app = require('express')(); //App is a function handler

const server = app.listen(4000, () => {
    console.log('listening on *:' + 4000);
});

var io = require('socket.io')(server);

let firstName = 'Udaya';
let secondName = 'Shamendra';
let lastName = 'Sirisena';

var handleClient = function(socket) {
    console.log('user connected'); //Console log when Client connected with Server

    socket.on('disconnect', () => {
        console.log('user disconnected'); //Console log when Client disconnected from Server
    });

	//Emit the 'name' object
    io.emit('name', { 
        firstName,
        secondName,
        lastName
    });
	
	
    socket.on('event', function(msg) {

        io.emit('name', {
            firstName,
            secondName,
            lastName
        });
    });
};

io.on('connection', handleClient); //When Client connected handleClient function will be executed

