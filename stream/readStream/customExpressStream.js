var util = require('util');
var stream = require('stream');
var express = require('express');
var app = express();
var fs = require('fs')
var zlib = require('zlib')

function StatStream(limit) {
    stream.Readable.call(this);
    this.limit = limit;
}
util.inherits(StatStream, stream.Readable);

StatStream.prototype._read = function(size) {
    console.log(this.limit);
    
    if (this.limit === 0) {
        // Done;
        this.push();
    } else {
        // this.push(util.inspect(process.memoryUsage()));
        this.push('<html><body><h1>My First Heading</h1></body> </html>')
        this.limit--;
    }
};

app.get('/', function (req, res) {
    var statStream = new StatStream(10);
    statStream.pipe(res);
    console.log("come in please.")
})

app.listen(8000);

console.log('port: 8000 was started.')
