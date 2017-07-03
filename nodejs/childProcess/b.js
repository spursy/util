const fs = require('fs');
const process = require('process');
const path = require('path');

var fpath = path.join(__dirname, './text.txt');  
console.log(`12`);
fs.open(fpath, 'w', function(err, fd) {
    console.log(fd);
    // while (true) {
        fs.write(fd, process.pid + '\n', function() {});
    // }
})