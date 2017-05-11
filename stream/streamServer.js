var http = require('http')
var fs = require('fs')
var zlib = require('zlib')

// http.createServer(function(req, res) {
//     res.writeHead(200, {'content-encoding': 'gzip'});
//     fs.createReadStream(__dirname + '/index.html')
//         .pipe(zlib.createGzip())
//         .pipe(res)
// }).listen(8000);

// console.log('port: 8000 was started.')

var stream = fs.createReadStream('not-found');   
stream.on('error', function(err) {
    console.trace()
    console.error('Stack:', err.stack);
    console.error('The error is ' + err)
})



