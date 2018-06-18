'use strict';

const fs = require("fs");

const spawn = require("child_process").spawn;
const filename = process.argv[2];

if(!filename){
    throw Error("File to watch must be supplied.");
}

fs.watch(filename, () => {
    const ls = spawn("ls", ['-l', '-h', filename]);
    ls.stdout.pipe(process.stdout);
    console.log(`The content of this File ${filename} has changed.`);
}
);

console.log(`Watching ${filename} for changes.`);