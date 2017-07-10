const fs= require('fs');
const path = require('path');
const fpath = path.join(__dirname, "./test1.txt");
function readFile(fpath) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fpath, function(error, result) {
            if (error) reject(error);
            else resolve(result);
        });
    });
}

async function getContent(fpath) {
    return await readFile(fpath); 
}

var result = getContent(fpath);
console.log(`${typeof result === 'object'}`);  // true
console.log(`${typeof result.then === 'function'}`);  // true