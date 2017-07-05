// var http = require('http');

// function compute() {
//     console.log(JSON.stringify(process.memoryUsage()));
//     console.log('\n');
//     process.nextTick(compute);
// }

// http.createServer(function(req, res) {
//      res.writeHead(200, {'Content-Type': 'text/plain'});
//     //  res.end(`${JSON.stringify(process.memoryUsage())}` );
//      res.end('Hello World');
// }).listen(5000, '127.0.0.1');
// // compute();


var http = require('http');
var wait = function (mils) {
    var now = new Date;
    while (new Date - now <= mils);
};
function compute() {
    // performs complicated calculations continuously
    console.log('start computing');
    wait(1000);
    const dateDemo = new Date;
    console.log('working for 1s, nexttick' + dateDemo.getMilliseconds());
    process.nextTick(compute);
}
http.createServer(function (req, res) {
    console.log('new request');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World123');
}).listen(5000, '127.0.0.1');
// compute();


var http = require('http');
function compute() {
console.log("computing....");
process.nextTick(compute);
}

http.createServer(function (request, response) {
console.log("new request...");
response.writeHead(200, {'Content-Type': 'text/plain'});
response.end('hello world');
}).listen(5000, '127.0.0.1');

compute();