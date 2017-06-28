var http = require('http');

var req = http.request({port: 8000}, function(res) {
     console.log("HTTP headers: " + res.headers);
     res.on('data', function(data) {
         console.log('Body::' + data.toString());
         assert.equal('Hello word.\r\n', data.toString());
         assert.equal(200, res.statusCode);
         server.unref();
     });
 });