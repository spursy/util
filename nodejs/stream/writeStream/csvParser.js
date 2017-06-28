var stream = require('stream');
var fs = require('fs');
var util = require('util');

function CSVParser(options) {
    stream.Transform.call(this, options);

    this.value = '';
    this.headers = [];
    this.values = [];
    this.line = 0;
}

util.inherits(CSVParser, stream.Transform);

CSVParser.prototype._transform = function(chunk, encoding, callback) {
    var c;
    var i;

    chunk = chunk.toString();

    for (i = 0; i < chunk.length; i ++) {
        c = chunk.charAt(i);

        if(c === ',') {
            this.addValue();
        } else if(c === '\n') {
            this.addValue();
            if (this.line > 0) {
                this.push(JSON.stringify(this.toObject()));
            }
            this.values = [];
            this.line++;
        } else {
            this.value += c;
        }
    }

    callback();
}

CSVParser.prototype.toObject = function() {
    var i;
    var obj = {};
    for (i = 0; i < this.headers.length; i++) {
        obj[this.headers[i]] = this.values[i];        
    }
    // console.log("obj:::" + obj)
    return obj;
}

CSVParser.prototype.addValue = function() {
    if (this.line === 0) {
        this.headers.push(this.value);        
    } else {
        this.values.push(this.value);
    }

    this.value = '';
}

var csvParser = new CSVParser();
fs.createReadStream(__dirname + '/sample.csv')
    .pipe(csvParser)
    .pipe(process.stdout)

// fs.createReadStream(__dirname + '/sample.csv')
//     .pipe(csvParser)
//     .pipe(fs.createWriteStream(__dirname + '/copySample.csv'))

