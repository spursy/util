<<<<<<< HEAD
var stream = require('stream');
var util = require('util');

function GreenStream(options) {
    stream.Writable.call(this, options);
}

util.inherits(GreenStream, stream.Writable)

GreenStream.prototype._write = function (chunk, encoding, callback) {
    process.stdout.write('u001b[32m' + chunk + 'u001b[39m');
    callback();
};

process.stdin.pipe(new GreenStream());
=======
var util = require('util');
var stream = require('stream');

function WriteStream(options) {
    stream.Writable.call(this, options);
}
util.inherits(WriteStream, stream.Writable); 

WriteStream.prototype._write = function (chunk, encoding, callback) {
    process.stdout.write("<<" + chunk + ">>" );
    callback;
}
process.stdin.pipe(new WriteStream());
>>>>>>> 3754f7308384def2d704eccd4654bc71c0b39593
