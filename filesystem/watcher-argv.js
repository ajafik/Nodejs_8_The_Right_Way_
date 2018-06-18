'use strict';

const fs = require('fs');
const filename = process.argv[2];

if(!filename){
    throw Error("File to watch must be supplied.");
}

fs.watch(filename, () => {
    console.log(`The content of this File ${filename} has changed.`);
    console.log(`Watching ${filename} for changes.`);
}
);