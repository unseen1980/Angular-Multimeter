'use strict';

let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
const SerialPort = require('serialport');
const port = new SerialPort('/dev/ttyACM0');

io.on('connection', (socket) => {
    console.log('client connected');

    socket.on('disconnect', function() {
        console.log('client disconnected');
    });

    port.on('open', () => {
        console.log('Port Opened');
    });

    port.write('main screen turn on', (err) => {
        if (err) { return console.log('Error: ', err.message) }
        console.log('message written');
    });

    port.on('data', (data) => {
        /* get a buffer of data from the serial port */
        io.emit('serial-read', { val: data.toString() });
    });

    //socket.on('add-message', (message) => {
    //io.emit('message', {type:'new-message', text: message});    
    //});

    // for (var i = 0; i < 10; i++) {
    //     io.emit('message', { type: 'new-message', text: 'message' + i });
    // }

});

http.listen(5000, () => {
    console.log('started on port 5000');
});