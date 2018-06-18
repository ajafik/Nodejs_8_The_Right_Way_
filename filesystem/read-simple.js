'use strict';

const fs = require('fs');
fs.readFile('target.txt', (err, data) => {

    if (err) {
        throw err;
    }
    console.log(data.toString());
});


//Read File Synchronously
// const data  = fs.readFileSync('target.txt');
// process.stdout.write(data.toString());


//Delete/Unlink a file
// fs.unlink("target.txt", (err) => {
//     if (err) throw err;
//     console.log("File UNLINKED successfully");
// }
// );