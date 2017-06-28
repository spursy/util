var fs = require('fs')

fs.readFile('./test.txt', function(err, buf) {
    var isValid = Buffer.isBuffer(buf);
    console.log(isValid);

    console.log("buf:::" + buf)

    var transformBuf = buf.toString();

    console.log("transorm buf:::" + transformBuf)
})