var http = require('http');

function compute() {
    console.log(JSON.stringify(process.memoryUsage()));
    console.log('\n');
    process.nextTick(compute);
}

http.createServer(function(req, res) {
     res.writeHead(200, {'Content-Type': 'text/plain'});
    //  res.end(`${JSON.stringify(process.memoryUsage())}` );
     res.end('Hello World');
}).listen(5000, '127.0.0.1');
// compute();
