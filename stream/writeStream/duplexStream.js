var util = require('util');
var stream = require('stream');

function DuplexStream (options) {
    stream.Duplex.call(this, options);
    this.waiting = false;
}
util.inherits(DuplexStream, stream.Duplex); 

DuplexStream.prototype._write = function(chunk, encoding, callback) {
    this.waiting = false;
    this.push("<<" + chunk + ">>>");
    callback();
}

DuplexStream.prototype._read = function() {
    if (!this.waiting) {
        this.push('Please input data:::');
        this.waiting = true;
    }
}

var duplexStream = new DuplexStream();
process.stdin.pipe(duplexStream).pipe(process.stdout);