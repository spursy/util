const fs = require('fs');
const path = require('path');
const fpath = path.join(__dirname, 'a.txt');

var Thunk = function(fileName) {
    return function(callBack) {
        return fs.readFile(fileName, callBack);
    }
}

var readFileThunk = Thunk(fpath);
readFileThunk(function(err, data) {
    if (err) console.log(`${err}`);
    else console.log(`${data}`);
})