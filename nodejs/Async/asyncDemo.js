const fs = require('fs');
const path = require('path');
const fpath1 = path.join(__dirname, './test1.txt');
const fpath2 = path.join(__dirname, './test2.txt');

function readFile(fPath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fPath, function(err, data) {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

function writeFile(fPath, content) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(fPath, content, function(err, data) {
            if (err) reject(err);
            else resolve("Successed");
        });
    });
}

/**
 * async/await non-block
 */
async function manipulateFile() {
    var content1 = await readFile(fpath1);
    var content2 = await writeFile(fpath2, content1);
    console.log(`${content2}`);
}

manipulateFile();