'use strict';

const filename  = process.argv[2];

if(!filename){
    throw Error('Error: No file specified');
}

const net = require('net'),
    fs = require('fs'),
    server = net.createServer(connection => {

        //Display
        console.log("Subscriber connected");
        connection.write(`Watching "${filename}" for changess.....`);

        //File Watcher
        const watcher = fs.watch(filename, ()=> {
            connection.write(`File changed: ${new Date()} \n`);
        });

        //Cleaning up
        connection.on('close', ()=>{
            console.log("Subscriber DISCONNECTED.");
            watcher.close();
        });

    });

server.listen('/tmp/watcher.sock', () => {
    console.log("Listening for Subscribers to connect");
});