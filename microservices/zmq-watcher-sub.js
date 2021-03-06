'use strict';

const zmq = require('zeromq');

//Create Subscriber Endpoint
const subscriber = zmq.socket('sub');

//Subscribe to all messages
subscriber.subscribe('');

subscriber.on('message', data =>{
    const message = JSON.parse(data);
    const date = new Date(message.timestamp);
    console.log(`File "${message.file}" changed at ${date}`);
});

subscriber.connect("tcp://localhost:60400");

