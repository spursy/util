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
