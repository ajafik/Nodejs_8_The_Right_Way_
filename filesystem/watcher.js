'use strict';

const fs = require('fs');
const filename  = "target.txt";
let fileExist = fs.existsSync(filename);

if(fileExist){
    console.log(fileExist);
    fs.watch(filename, () => 
        {
            console.log("The content of this File has changed.");
            console.log("Watching target.txt for changes.");
        }
    );
} else{
    throw Error("File does not Exist");
}

