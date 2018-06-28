'use strict';

const zmq = require('zeromq');
const filename = process.argv[2];


//Create Requester endpoint 
const requester = zmq.socket('req');

//Handles reploes from the responder.
requester.on('message', data => {
    const response = JSON.parse(data);
    console.log(`Received response `, response);
});

requester.connect('tcp://localhost:60401');

for (let index = 1; index <= 5; index++) {
    //Send a request for content
    console.log(`Sending request ${index} for ${filename}`);
    requester.send(JSON.stringify({ path: filename }));
}