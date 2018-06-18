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
        //connection.write(`Watching "${filename}" for changess.....`);
        connection.write(JSON.stringify({type:'watching', file:filename})+'\n');

        //File Watcher
        const watcher = fs.watch(filename, ()=> {
            connection.write(JSON.stringify({type:'changed', timestamp:Date.now() })+'\n');
        });

        //Cleaning up
        connection.on('close', ()=>{
            console.log("Subscriber DISCONNECTED.");
            watcher.close();
        });

    });

server.listen(3400, () => {
    console.log("Listening for Subscribers to connect");
});