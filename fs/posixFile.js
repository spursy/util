var fs = require('fs');
var assert = require('assert');

var fd = fs.openSync('./file.txt', 'w+');
var writeBuf = new Buffer('some data to write');
fs.writeSync(fd, writeBuf, 0, writeBuf.length, 0);

console.log("writeBuf:::" + writeBuf);
var readBuf = new Buffer(writeBuf.length);
fs.readSync(fd, readBuf, 0, readBuf.length, 0);
console.log("readBuf:::" + readBuf);

assert.equal(writeBuf.toString(), readBuf.toString());

fs.closeSync(fd);