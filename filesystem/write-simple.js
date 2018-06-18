'use strict';

const fs = require('fs');

fs.writeFile("target.txt", "Ade is a good boy", (err)=>{
    if (err) throw err;

    console.log("Content Saved in File...");
})


//appending to a file
fs.appendFile("target.txt", "\nThen I added this to it.", (err)=>{
    if (err) throw err;

    console.log("Content Saved in File...");
})