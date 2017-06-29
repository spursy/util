const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

var server = http.createServer((req, res) => {
    res.statusCode = '200';
    res.setHeader('Content-Type', "text/plain");
    res.end("Hello Word\n");
});

server.listen(port, hostname, () => {
    console.log(`Server is running at ${hostname} : ${port}`);
});

server.on('error', function(e) {
    console.log(`error message is ${e.message}`);
})