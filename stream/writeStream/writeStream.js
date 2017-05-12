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