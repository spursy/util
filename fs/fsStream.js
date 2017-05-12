var fs = require('fs');

var readStream = fs.createReadStream('./file.txt');
var writeStream = fs.createWriteStream('./copy.txt');

readStream.pipe(writeStream);