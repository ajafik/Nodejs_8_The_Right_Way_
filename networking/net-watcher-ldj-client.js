'use strict';
const net = require('net');
const netClient = net.connect({port:3400});

const ldjClient = require('../lib/ldj-client').connect(netClient);

ldjClient.on('data', data=>{
    const message = JSON.parse(data);

    if(message.type == 'watching'){
        console.log(`Now watching: ${message.file}`)
    } else if(message.type = "changed"){
        const date = new Date(message.timestamp);
        console.log(`File changed: ${date}`);
    } else{
        console.log(`Unrecognised message type ${message.type}`);
    }
})